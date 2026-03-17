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
          Reflections on Arabic Linguistics, Islamic Studies, and teaching Classical Arabic.
        </p>
      </div>
    </section>

    <!-- ══ FILTER TAGS ══ -->
    <section class="filter-bar">
      <div class="section-inner filter-inner">
        <button
          v-for="tag in allTags"
          :key="tag"
          class="tag-btn"
          :class="{ active: activeTag === tag }"
          @click="activeTag = tag">
          {{ tag }}
        </button>
      </div>
    </section>

    <!-- ══ POSTS GRID ══ -->
    <section class="blog">
      <div class="section-inner">
        <div class="blog-grid" v-if="filteredPosts.length">
          <article class="blog-card" v-for="post in filteredPosts" :key="post._path">
            <p class="blog-tag">{{ post.tag }}</p>
            <p class="blog-date">{{ formatDate(post.date) }}</p>
            <h2>{{ post.title }}</h2>
            <p class="blog-excerpt">{{ post.excerpt }}</p>
            <NuxtLink :to="post._path" class="course-link">Read Article →</NuxtLink>
          </article>
        </div>
        <p v-else class="empty-state">No articles in this category yet, check back soon.</p>
      </div>
    </section>


  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Blog | Classical Arabic with Omar',
  description: 'Writings on Classical Arabic, the Qur\'anic tradition, and the art of learning the language of scholarship.',
})

// Fetch all blog posts from content/blog/
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('blog')
    .sort({ date: -1 })
    .find()
)

// Build tag list dynamically from posts
const allTags = computed(() => {
  const tags = new Set(['All'])
  posts.value?.forEach(p => { if (p.tag) tags.add(p.tag) })
  return [...tags]
})

const activeTag = ref('All')

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (activeTag.value === 'All') return posts.value
  return posts.value.filter(p => p.tag === activeTag.value)
})

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}
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

.filter-bar { background: var(--fog); padding: 1.25rem; border-bottom: 1px solid var(--rule); }
.filter-inner { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
.tag-btn {
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  padding: 0.4rem 1rem;
  border: 1px solid var(--rule);
  background: var(--pure);
  color: var(--steel);
  cursor: pointer;
  transition: all 0.2s;
}
.tag-btn:hover { border-color: var(--teal); color: var(--teal); }
.tag-btn.active { background: var(--gold); border-color: var(--gold); color: var(--charcoal); }

.blog { background: var(--white); padding: 3.5rem 1.25rem; }
.blog-grid { display: grid; grid-template-columns: 1fr; gap: 1.75rem; }
.blog-card {
  background: var(--fog);
  border: 1px solid var(--rule);
  padding: 2rem;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.blog-card:hover { box-shadow: 0 4px 16px var(--shadow); border-color: var(--teal); }
.blog-tag {
  font-family: 'Cinzel', serif;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  color: var(--charcoal);
  background: var(--gold);
  display: inline-block;
  padding: 0.2rem 0.6rem;
  margin-bottom: 0.6rem;
}
.blog-date { font-family: 'Cinzel', serif; font-size: 0.6rem; letter-spacing: 0.18em; color: var(--gold); margin-bottom: 0.5rem; }
.blog-card h2 { font-family: 'IM Fell English', serif; font-size: clamp(1.2rem, 3vw, 1.5rem); font-weight: 400; margin-bottom: 0.75rem; line-height: 1.3; color: var(--charcoal); }
.blog-excerpt { font-size: 0.93rem; color: var(--steel); margin-bottom: 1.25rem; line-height: 1.65; }
.empty-state { text-align: center; font-style: italic; color: var(--silver); padding: 3rem 0; }

@media (min-width: 640px) {
  .page-hero { padding: 2.5rem 2rem 2rem; }
  .filter-bar { padding: 1.25rem 2rem; }
  .blog { padding: 4.5rem 2rem; }
  .blog-grid { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1024px) {
  .page-hero { padding: 3rem 2rem 2.5rem; }
  .blog { padding: 6rem 2rem; }
  .blog-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
