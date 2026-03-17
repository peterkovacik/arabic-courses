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
        <NuxtLink to="/blog"      @click="close">Journal</NuxtLink>
        <!--<NuxtLink to="/resources" @click="close">Resources</NuxtLink> -->
        <NuxtLink to="/courses"   @click="close">Courses</NuxtLink>
        <!--<NuxtLink to="/about"     @click="close">About</NuxtLink> -->
        <NuxtLink to="/contact"   @click="close">Contact</NuxtLink>
        <UserButton v-if="isSignedIn" />
        <a v-else href="https://concrete-lion-78.accounts.dev/sign-in" class="sign-in-link">Sign In</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const menuOpen = ref(false)
const close = () => { menuOpen.value = false }

// Close menu on route change
const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })

const { isSignedIn } = useAuth()

</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--charcoal);
  border-bottom: 2px solid var(--gold);
}
.nav-inner {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  flex-wrap: wrap;
}
.nav-logo-wrap {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.nav-logo-img {
  height: 56px;
  width: auto;
  filter: none;
  opacity: 1;
}

/* Hamburger */
.nav-toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav-toggle span {
  display: block;
  width: 24px;
  height: 1.5px;
  background: var(--fog);
  transition: all 0.3s;
  transform-origin: center;
}
.nav-toggle span.rotate1 { transform: translateY(6.5px) rotate(45deg); }
.nav-toggle span.hide    { opacity: 0; }
.nav-toggle span.rotate2 { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile menu */
.nav-menu {
  display: none;
  flex-direction: column;
  width: 100%;
  background: var(--slate);
  border-top: 1px solid rgba(88,112,74,0.3);
  padding: 0.5rem 0 1rem;
}
.nav-menu.open { display: flex; }
.nav-menu a {
  font-family: 'Cinzel', serif;
  color: var(--fog);
  text-decoration: none;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  padding: 0.7rem 1.5rem;
  border-bottom: 1px solid rgba(88,112,74,0.15);
  transition: color 0.2s;
}
.nav-menu a:hover,
.nav-menu a.router-link-active { color: var(--gold-light); }

.nav-enroll {
  display: block;
  margin: 0.75rem 1.25rem 0 !important;
  text-align: center;
}

@media (min-width: 640px) {
  .nav-toggle { display: none; }
  .nav-menu {
    display: flex !important;
    flex-direction: row;
    align-items: center;
    background: none;
    border: none;
    padding: 0;
    width: auto;
  }
  .nav-menu a {
    font-size: 0.68rem;
    padding: 0 0.85rem;
    border: none;
    height: 72px;
    display: flex;
    align-items: center;
  }
  .nav-enroll {
    display: inline-flex !important;
    align-items: center;
    margin: 0 0 0 0.5rem !important;
    height: auto;
    padding: 0.5rem 1.1rem;
  }
}
</style>
