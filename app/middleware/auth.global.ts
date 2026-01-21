// middleware/auth.global.ts
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { loggedIn, fetch } = useUserSession()

  // Forcer la récupération de la session si elle n'est pas encore là
  if (!loggedIn.value) {
    await fetch()
  }

  if (!loggedIn.value && to.path !== '/login') {
    return navigateTo('/login')
  }
})