<template>
  <footer class="footer">
    <img src="/images/logo-white-dark-bg.png" alt="Classical Arabic with Omar" class="footer-logo-img" />
    <span class="ornament">✦ ✦ ✦</span>
    <nav class="footer-links">
      <NuxtLink to="/blog">Journal</NuxtLink>
      <!--<NuxtLink to="/resources">Resources</NuxtLink> -->
      <!--<NuxtLink to="/about">About</NuxtLink> -->
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <p class="footer-copy">&copy; {{ year }} Peter Omar Kovacik, All rights reserved.</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--charcoal);
  border-top: 2px solid var(--gold);
  padding: 2.5rem 1.25rem;
  text-align: center;
}
.footer-logo-img {
  height: 64px;
  width: auto;
  filter: none;
  opacity: 0.95;
  margin-bottom: 0.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem 1.4rem;
  margin: 1rem 0;
}
.footer-links a {
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  color: var(--silver);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--gold-light); }
.footer-copy { font-size: 0.78rem; color: var(--steel); margin-top: 1rem; }
</style>
