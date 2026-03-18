<template>
  <nav class="nav">
    <div class="nav-inner">
      <NuxtLink to="/" class="nav-logo-wrap">
        <img src="/images/logo-white-dark-bg.png" alt="Classical Arabic with Omar" class="nav-logo-img" />
      </NuxtLink>

      <button class="nav-toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span :class="{ rotate1: menuOpen }"></span>
        <span :class="{ hide: menuOpen }"></span>
        <span :class="{ rotate2: menuOpen }"></span>
      </button>

      <div class="nav-menu" :class="{ open: menuOpen }">
        <NuxtLink to="/" @click="close">Home</NuxtLink>
        <NuxtLink to="/courses" @click="close">Student Portal</NuxtLink>
        <NuxtLink to="/about" @click="close">About</NuxtLink>
        <NuxtLink to="/contact" @click="close">Contact</NuxtLink>
        <UserButton v-if="isSignedIn" />
        <NuxtLink v-else to="/sign-in" class="nav-signin">Sign In</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const menuOpen = ref(false)
const close = () => { menuOpen.value = false }

const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })

const { isSignedIn } = useAuth()
</script>

<style scoped>
.nav {
  position: sticky; top: 0; z-index: 100;
  background: var(--charcoal);
  border-bottom: 2px solid var(--gold);
}
.nav-inner {
  max-width: 1140px; margin: 0 auto; padding: 0 1.25rem;
  display: flex; align-items: center; justify-content: space-between;
  height: 72px; flex-wrap: wrap;
}
.nav-logo-wrap { display: flex; align-items: center; text-decoration: none; }
.nav-logo-img { height: 56px; width: auto; }

/* Hamburger */
.nav-toggle {
  display: flex; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.nav-toggle span {
  display: block; width: 24px; height: 1.5px;
  background: var(--fog); transition: all 0.3s; transform-origin: center;
}
.nav-toggle span.rotate1 { transform: translateY(6.5px) rotate(45deg); }
.nav-toggle span.hide    { opacity: 0; }
.nav-toggle span.rotate2 { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile menu */
.nav-menu {
  display: none; flex-direction: column; width: 100%;
  background: var(--slate); border-top: 1px solid rgba(88,112,74,0.3);
  padding: 0.5rem 0 1rem;
}
.nav-menu.open { display: flex; }
.nav-menu a {
  font-family: 'Cinzel', serif; color: var(--fog);
  text-decoration: none; font-size: 0.75rem; letter-spacing: 0.12em;
  padding: 0.7rem 1.5rem; border-bottom: 1px solid rgba(88,112,74,0.15);
  transition: color 0.2s;
}
.nav-menu a:hover,
.nav-menu a.router-link-active { color: var(--gold-light); }

/* Sign in styled distinctly */
.nav-signin {
  font-family: 'Cinzel', serif; color: var(--gold) !important;
  border-bottom-color: rgba(184,149,42,0.2) !important;
}
.nav-signin:hover { color: var(--gold-light) !important; }

@media (min-width: 640px) {
  .nav-toggle { display: none; }
  .nav-menu {
    display: flex !important; flex-direction: row; align-items: center;
    background: none; border: none; padding: 0; width: auto;
  }
  .nav-menu a {
    font-size: 0.68rem; padding: 0 0.85rem; border: none;
    height: 72px; display: flex; align-items: center;
  }
  .nav-signin {
    margin-left: 0.5rem;
    border: 1px solid var(--gold) !important;
    padding: 0.45rem 1.1rem !important;
    height: auto !important;
  }
  .nav-signin:hover { background: rgba(184,149,42,0.12) !important; }
}
</style>
