<template>
  <main>

    <!-- ══ PAGE HERO ══ -->
    <section class="page-hero">
      <div class="page-hero-content">
        <div class="hero-logo">
          <img src="/images/logo-black-light-bg.png" alt="Classical Arabic with Omar" />
        </div>
        <div class="hero-divider"></div>
        <p class="page-hero-sub">
          Structured courses in Classical Arabic and Islamic Studies.
        </p>
      </div>
    </section>

    <!-- ══ COURSES GRID ══ -->
    <section class="courses">
      <div class="section-inner">
        <div class="courses-grid" v-if="courses && courses.length">
          <article class="course-card" v-for="course in courses" :key="course._path">
            <p class="course-level">{{ course.level }}</p>
            <h2>{{ course.title }}</h2>
            <p class="course-excerpt">{{ course.excerpt }}</p>
            <NuxtLink :to="course._path" class="course-link">View Course →</NuxtLink>
          </article>
        </div>
        <p v-else class="empty-state">No courses available yet, check back soon.</p>
      </div>
    </section>

  </main>
</template>

<script setup>
import { until } from '@vueuse/core'

useSeoMeta({
  title: 'Courses | Classical Arabic with Omar',
  description: 'Structured courses in Classical Arabic and Islamic Studies.',
})

const { data: courses } = await useAsyncData('courses', () =>
  queryContent('courses')
    .where({ _file: { $regex: /^courses\/[^/]+\/index\.md$/ } })
    .sort({ order: 1 })
    .find()
)

onMounted(async () => {
  const { userId, isLoaded } = useAuth()
  await until(isLoaded).toBe(true)
  if (!userId.value) {
    window.location.href = 'https://accounts.arabicwithomar.com/sign-in'
  }
})
</script>

<style scoped>
.page-hero {
  background: var(--pure);
  border-bottom: 3px solid var(--gold);
  padding: 1.75rem 1.25rem 1.5rem;
  text-align: center;
}
.page-hero-content {
  max-width: 640px;
  margin: 0 auto;
}
.hero-logo {
  margin: 0 auto 0;
  max-width: 205px;
  opacity: 0;
  animation: fadeUp 0.9s ease forwards 0.1s;
}
.hero-logo img { width: 100%; height: auto; display: block; }
.hero-divider {
  width: 80px;
  height: 2px;
  background: var(--gold);
  margin: 1rem auto 1rem;
  opacity: 0;
  animation: fadeUp 0.9s ease forwards 0.3s;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.page-hero-sub { font-style: italic; color: var(--steel); font-size: clamp(1rem, 2.5vw, 1.2rem); margin-top: 0; margin-bottom: 0.25rem; }

.courses { background: var(--white); padding: 3.5rem 1.25rem; }
.courses-grid { display: grid; grid-template-columns: 1fr; gap: 1.75rem; }
.course-card {
  background: var(--fog);
  border: 1px solid var(--rule);
  padding: 2rem;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.course-card:hover { box-shadow: 0 4px 16px var(--shadow); border-color: var(--teal); }
.course-level {
  font-family: 'Cinzel', serif;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  color: var(--charcoal);
  background: var(--gold);
  display: inline-block;
  padding: 0.2rem 0.6rem;
  margin-bottom: 0.6rem;
}
.course-card h2 { font-family: 'IM Fell English', serif; font-size: clamp(1.2rem, 3vw, 1.5rem); font-weight: 400; margin-bottom: 0.75rem; line-height: 1.3; color: var(--charcoal); }
.course-excerpt { font-size: 0.93rem; color: var(--steel); margin-bottom: 1.25rem; line-height: 1.65; }
.course-link { font-family: 'Cinzel', serif; font-size: 0.65rem; letter-spacing: 0.15em; color: var(--teal); text-decoration: none; }
.course-link:hover { color: var(--gold); }
.empty-state { text-align: center; font-style: italic; color: var(--silver); padding: 3rem 0; }

@media (min-width: 640px) {
  .page-hero { padding: 2.5rem 2rem 2rem; }
  .courses { padding: 4.5rem 2rem; }
  .courses-grid { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1024px) {
  .page-hero { padding: 3rem 2rem 2.5rem; }
  .courses { padding: 6rem 2rem; }
  .courses-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>