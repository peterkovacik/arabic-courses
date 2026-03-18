<template>
  <main>

    <!-- ══ PAGE HERO ══ -->
    <section class="page-hero">
      <div class="page-hero-content">
        <p class="course-level">{{ course.level }}</p>
        <h1>{{ course.title }}</h1>
        <div class="hero-divider"></div>
        <p class="page-hero-sub">{{ course.excerpt }}</p>
      </div>
    </section>

    <!-- ══ LESSONS LIST ══ -->
    <section class="lessons">
      <div class="section-inner">
        <div class="lessons-list" v-if="lessons && lessons.length">
          <article class="lesson-card" v-for="lesson in lessons" :key="lesson._path">
            <p class="lesson-number">Lesson {{ lesson.order }}</p>
            <h2>{{ lesson.title }}</h2>
            <p class="lesson-excerpt">{{ lesson.excerpt }}</p>
            <NuxtLink :to="lesson._path" class="course-link">View Lesson →</NuxtLink>
          </article>
        </div>
        <p v-else class="empty-state">No lessons available yet, check back soon.</p>
      </div>
    </section>

  </main>
</template>

<script setup>
import { until } from '@vueuse/core'

const route = useRoute()
const slug = route.params.slug

const { data: course } = await useAsyncData(`course-${slug}`, () =>
  queryContent('courses', slug)
    .where({ _file: { $eq: `courses/${slug}/index.md` } })
    .findOne()
)

const { data: lessons } = await useAsyncData(`lessons-${slug}`, () =>
  queryContent('courses', slug)
    .where({ _file: { $ne: `courses/${slug}/index.md` } })
    .sort({ order: 1 })
    .find()
)

useSeoMeta({
  title: `${course.value?.title} | Classical Arabic with Omar`,
  description: course.value?.excerpt,
})

onMounted(async () => {
  const { userId, isLoaded } = useAuth()

  // If Clerk is still completing its handshake, don't check yet
  const params = new URLSearchParams(window.location.search)
  if (params.has('__clerk_handshake') || params.has('__clerk_db_jwt')) return

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
  padding: 2.5rem 1.25rem 2rem;
  text-align: center;
}
.page-hero-content { max-width: 640px; margin: 0 auto; }
.course-level {
  font-family: 'Cinzel', serif;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  color: var(--charcoal);
  background: var(--gold);
  display: inline-block;
  padding: 0.2rem 0.6rem;
  margin-bottom: 0.75rem;
}
.page-hero h1 { font-family: 'IM Fell English', serif; font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 400; color: var(--charcoal); margin-bottom: 0.75rem; }
.hero-divider { width: 80px; height: 2px; background: var(--gold); margin: 1rem auto; }
.page-hero-sub { font-style: italic; color: var(--steel); font-size: clamp(1rem, 2.5vw, 1.2rem); margin: 0; }

.lessons { background: var(--white); padding: 3.5rem 1.25rem; }
.lessons-list { display: flex; flex-direction: column; gap: 1.25rem; }
.lesson-card {
  background: var(--fog);
  border: 1px solid var(--rule);
  padding: 2rem;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.lesson-card:hover { box-shadow: 0 4px 16px var(--shadow); border-color: var(--teal); }
.lesson-number {
  font-family: 'Cinzel', serif;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  color: var(--gold);
  margin-bottom: 0.5rem;
}
.lesson-card h2 { font-family: 'IM Fell English', serif; font-size: clamp(1.1rem, 3vw, 1.4rem); font-weight: 400; margin-bottom: 0.75rem; color: var(--charcoal); }
.lesson-excerpt { font-size: 0.93rem; color: var(--steel); margin-bottom: 1.25rem; line-height: 1.65; }
.course-link { font-family: 'Cinzel', serif; font-size: 0.65rem; letter-spacing: 0.15em; color: var(--teal); text-decoration: none; }
.course-link:hover { color: var(--gold); }
.empty-state { text-align: center; font-style: italic; color: var(--silver); padding: 3rem 0; }

@media (min-width: 640px) {
  .page-hero { padding: 3rem 2rem 2.5rem; }
  .lessons { padding: 4.5rem 2rem; }
}
@media (min-width: 1024px) {
  .page-hero { padding: 4rem 2rem 3rem; }
  .lessons { padding: 6rem 2rem; }
}
</style>