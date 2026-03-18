export default defineNuxtRouteMiddleware((to) => {
  const { userId } = useAuth()

  if (to.path.startsWith('/courses') && !userId.value) {
    return navigateTo('/sign-in')
  }
})