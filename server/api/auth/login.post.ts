// server/api/login.post.ts
export default defineEventHandler(async (event) => {
  // ... check credentials ...
  
  // This helper (from the module) stores the data in the encrypted cookie
  // That data is exactly what /api/_auth/session will return from now on
  await setUserSession(event, {
    user: {
      id: 1,
      name: 'John Doe'
    },
    loggedInAt: new Date()
  })
  
  return { success: true }
})