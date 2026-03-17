export default defineNuxtRouteMiddleware((to) => {
  const { userId } = useAuth()

  if (to.path.startsWith('/courses') && !userId.value) {
    return navigateTo('https://concrete-lion-78.accounts.dev/sign-in', { external: true })
  }
})
