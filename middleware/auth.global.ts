export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) return
})