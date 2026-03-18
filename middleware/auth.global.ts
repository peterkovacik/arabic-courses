export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return

  const { userId, isLoaded } = useAuth()

  // Wait for Clerk to finish loading
  if (!isLoaded.value) {
    await until(isLoaded).toBe(true)
  }

  if (to.path.startsWith('/courses') && !userId.value) {
    return navigateTo('https://accounts.arabicwithomar.com/sign-in', { external: true })
  }
})