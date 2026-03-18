export default defineNuxtRouteMiddleware((to) => {
  const { userId } = useAuth()

  if (to.path.startsWith('/courses') && !userId.value) {
    return navigateTo('https://accounts.arabicwithomar.com/sign-in', { external: true })
  }
})