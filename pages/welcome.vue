<template>
  <div class="welcome">
    <p>Loading your courses...</p>
  </div>
</template>

<script setup>
onMounted(() => {
  // Give Clerk 1.5 seconds to fully establish the session
  setTimeout(() => {
    window.location.href = '/courses'
  }, 1500)
})
</script>

<style scoped>
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  color: var(--slate);
  font-size: 1.2rem;
}
</style>