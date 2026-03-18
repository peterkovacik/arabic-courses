export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server) return

  const { userId, isLoaded } = useAuth()

  // Wait for Clerk to finish loading
  if (!isLoaded.value) {
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  // Double check after waiting
  if (to.path.startsWith('/courses') && !userId.value && isLoaded.value) {
    return navigateTo('https://accounts.arabicwithomar.com/sign-in', { external: true })
  }
})