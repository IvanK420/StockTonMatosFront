// server/api/proxy/[...].ts
import { proxyRequest } from 'h3'

export default defineEventHandler(async (event) => {
  // 1. Récupérer la session actuelle
  const { user, token } = await getUserSession(event)

  // 2. Vérifier si l'utilisateur est bien connecté
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: No token found in session'
    })
  }

  // 3. Extraire le chemin après /api/proxy/
  // Exemple: /api/proxy/users -> /api/users
  const path = event.path.replace(/^\/api\/proxy/, '')
  const targetUrl = `http://127.0.0.1:8000/api${path}`

  // 4. Envoyer la requête au backend avec le token Bearer
  return proxyRequest(event, targetUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
})