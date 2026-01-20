// server/api/auth.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    // 1. Appel au backend externe (remplacez par votre URL)
    const externalResponse = await $fetch('api/login', {
      method: 'POST',
      body: {
        email: body.email,
        password: body.password
      }
    })

    const { token } = externalResponse as any

    // 2. Création de la session Nuxt avec les données du backend
    await setUserSession(event, {
      token: token,           // On stocke le JWT ici pour les futurs appels API
      loggedIn: true ,
        user: {
          email: body.email
        }
    })

    return { success: true }

  } catch (error: any) {
    // Relayer l'erreur du backend externe
    throw createError({
      statusCode: error.response?.status || 500,
      message: 'Erreur backend externe : ' + (error.data?.message || 'Identifiants invalides')
    })
  }
})