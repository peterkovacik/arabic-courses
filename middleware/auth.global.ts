export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return

  if (!to.path.startsWith('/courses')) return

  const { userId, isLoaded } = useAuth()

  // If already loaded and no user, redirect immediately
  if (isLoaded.value && !userId.value) {
    return navigateTo('https://accounts.arabicwithomar.com/sign-in', { external: true })
  }

  // If not yet loaded, watch and only redirect if still no user after loading
  if (!isLoaded.value) {
    const unwatch = watch(isLoaded, (loaded) => {
      if (loaded) {
        unwatch()
        if (!userId.value) {
          navigateTo('https://accounts.arabicwithomar.com/sign-in', { external: true })
        }
      }
    })
  }
})