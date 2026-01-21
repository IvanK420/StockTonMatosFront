// server/api/login.post.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // 1. Appeler votre backend réel (Python/Laravel) via le proxy interne ou $fetch
  const response: any = await $fetch('http://127.0.0.1:8000/auth', {
    method: 'POST',
    body
  })

  // 2. Si le token existe, on enregistre la session CÔTÉ SERVEUR
  if (response.token) {
    await setUserSession(event, {
      user: response.user || { email: body.email },
      // On peut stocker le token ici pour les futurs appels API
      token: response.token 
    })
  }

  return response
})