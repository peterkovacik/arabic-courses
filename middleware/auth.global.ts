export default defineNuxtRouteMiddleware((to) => {
  // Only run on client side — avoids SSG/prerender issues
  if (import.meta.server) return

  const { userId, isLoaded } = useAuth()

  if (!isLoaded.value) return

  if (to.path.startsWith('/courses') && !userId.value) {
    return navigateTo('https://accounts.arabicwithomar.com/sign-in', { external: true })
  }
})