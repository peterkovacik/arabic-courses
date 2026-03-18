<template>
  <div class="welcome">
    <img src="/images/logo-black-light-bg.png" alt="Classical Arabic with Omar" class="welcome-logo" />
    <p>Loading your courses...</p>
  </div>
</template>

<script setup>
onMounted(() => {
  setTimeout(() => {
    window.location.replace('/courses')
  }, 3000)
})
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  gap: 2rem;
  background: var(--pure);
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  color: var(--slate);
  font-size: 1.2rem;
}
.welcome-logo {
  width: min(300px, 70vw);
  height: auto;
}
</style>