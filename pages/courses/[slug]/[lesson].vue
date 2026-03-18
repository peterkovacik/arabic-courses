<template>
  <main>

    <!-- ══ PAGE HERO ══ -->
    <section class="page-hero">
      <div class="page-hero-content">
        <p class="lesson-number">Lesson {{ lesson.order }}</p>
        <h1>{{ lesson.title }}</h1>
        <div class="hero-divider"></div>
        <p class="page-hero-sub">{{ lesson.excerpt }}</p>
      </div>
    </section>

    <!-- ══ VIDEO ══ -->
    <section class="lesson-video" v-if="lesson.video">
      <div class="section-inner">
        <div class="video-wrap">
          <iframe
            :src="lesson.video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </section>

    <!-- ══ LESSON CONTENT ══ -->
    <section class="lesson-content" v-if="lesson.body">
      <div class="section-inner">
        <ContentRenderer :value="lesson" />
      </div>
    </section>

    <!-- ══ DOWNLOADS ══ -->
    <section class="downloads" v-if="lesson.resources && lesson.resources.length">
      <div class="section-inner">
        <h2>Downloads</h2>
        <ul class="resource-list">
          <li v-for="resource in lesson.resources" :key="resource.url">
            <a :href="resource.url" target="_blank" class="resource-link">
              ↓ {{ resource.title }}
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- ══ NAVIGATION ══ -->
    <section class="lesson-nav">
      <div class="section-inner lesson-nav-inner">
        <NuxtLink :to="`/courses/${slug}`" class="course-link">← Back to Course</NuxtLink>
      </div>
    </section>

  </main>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug
const lessonSlug = route.params.lesson

const { data: lesson } = await useAsyncData(`lesson-${slug}-${lessonSlug}`, () =>
  queryContent('courses', slug, lessonSlug).findOne()
)

useSeoMeta({
  title: `${lesson.value?.title} | Classical Arabic with Omar`,
  description: lesson.value?.excerpt,
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
.lesson-number {
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

.lesson-video { background: var(--charcoal); padding: 3rem 1.25rem; }
.video-wrap {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
}
.video-wrap iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

.lesson-content {
  background: var(--white);
  padding: 3rem 1.25rem;
  border-top: 1px solid var(--rule);
}
.lesson-content :deep(h2) {
  font-family: 'IM Fell English', serif;
  font-size: clamp(1.2rem, 3vw, 1.6rem);
  font-weight: 400;
  color: var(--charcoal);
  margin-bottom: 0.75rem;
  margin-top: 2rem;
}
.lesson-content :deep(h2:first-child) { margin-top: 0; }
.lesson-content :deep(p) {
  font-size: 0.95rem;
  color: var(--steel);
  line-height: 1.75;
  margin-bottom: 1rem;
}
.lesson-content :deep(strong) { color: var(--charcoal); }
.lesson-content :deep(em) { color: var(--steel); }
.lesson-content :deep(ul), .lesson-content :deep(ol) {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: var(--steel);
  font-size: 0.95rem;
  line-height: 1.75;
}

.downloads { background: var(--fog); padding: 3rem 1.25rem; border-top: 1px solid var(--rule); }
.downloads h2 { font-family: 'IM Fell English', serif; font-size: 1.5rem; font-weight: 400; color: var(--charcoal); margin-bottom: 1.25rem; }
.resource-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
.resource-link {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: var(--teal);
  text-decoration: none;
  border: 1px solid var(--rule);
  padding: 0.75rem 1.25rem;
  display: inline-block;
  background: var(--pure);
  transition: all 0.2s;
}
.resource-link:hover { border-color: var(--teal); background: var(--teal); color: var(--pure); }

.lesson-nav { background: var(--white); padding: 2rem 1.25rem; border-top: 1px solid var(--rule); }
.lesson-nav-inner { display: flex; justify-content: space-between; align-items: center; }
.course-link { font-family: 'Cinzel', serif; font-size: 0.65rem; letter-spacing: 0.15em; color: var(--teal); text-decoration: none; }
.course-link:hover { color: var(--gold); }

@media (min-width: 640px) {
  .page-hero { padding: 3rem 2rem 2.5rem; }
  .lesson-video { padding: 4rem 2rem; }
  .lesson-content { padding: 3.5rem 2rem; }
  .downloads { padding: 3.5rem 2rem; }
}
@media (min-width: 1024px) {
  .page-hero { padding: 4rem 2rem 3rem; }
  .lesson-video { padding: 5rem 2rem; }
  .lesson-content { padding: 4rem 2rem; }
  .downloads { padding: 4rem 2rem; }
}
</style>