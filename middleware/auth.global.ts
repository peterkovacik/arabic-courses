export default defineNuxtRouteMiddleware((to) => {
  const { userId, isLoaded } = useAuth()

  // Wait until Clerk has loaded before checking auth
  if (!isLoaded.value) return

  if (to.path.startsWith('/courses') && !userId.value) {
    return navigateTo('https://accounts.arabicwithomar.com/sign-in', { external: true })
  }
})