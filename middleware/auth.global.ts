export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return

  if (!to.path.startsWith('/courses')) return

  // Skip auth check during Clerk's handshake redirect
  if (to.query.__clerk_handshake) return

  const { userId, isLoaded } = useAuth()

  if (isLoaded.value && !userId.value) {
    return navigateTo('https://accounts.arabicwithomar.com/sign-in', { external: true })
  }

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