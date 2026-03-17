<template>
  <main>
    <article v-if="post">

      <!-- ══ POST HERO ══ -->
      <section class="post-hero">
        <div class="post-hero-inner">
          <p class="blog-tag">{{ post.tag }}</p>
          <h1 class="post-title">{{ post.title }}</h1>
          <div class="post-meta">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span class="post-author">by Peter Omar Kovacik</span>
          </div>
          <div class="section-rule"></div>
        </div>
      </section>

      <!-- ══ POST BODY ══ -->
      <section class="post-body">
        <div class="post-inner">
          <ContentRenderer :value="post" class="prose" />
        </div>
      </section>

      <!-- ══ POST FOOTER ══ -->
      <section class="post-foot">
        <div class="post-foot-inner">
          <span class="ornament">✦ ✦ ✦</span>
          <NuxtLink to="/blog" class="btn">← Back to Journal</NuxtLink>
        </div>
      </section>

    </article>

    <!-- 404 state -->
    <div v-else class="not-found">
      <h1>Article not found</h1>
      <NuxtLink to="/blog" class="btn">← Back to Journal</NuxtLink>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(`post-${route.params.slug}`, () =>
  queryContent('blog', route.params.slug).findOne()
)

if (post.value) {
  useSeoMeta({
    title: `${post.value.title} | Classical Arabic with Omar`,
    description: post.value.excerpt || post.value.title,
  })
}

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}
</script>

<style scoped>
.post-hero {
  background: var(--pure);
  border-bottom: 3px solid var(--gold);
  padding: 4rem 1.25rem 3rem;
  text-align: center;
}
.post-hero-inner { max-width: 760px; margin: 0 auto; }
.blog-tag {
  font-family: 'Cinzel', serif;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  color: var(--charcoal);
  background: var(--gold);
  display: inline-block;
  padding: 0.2rem 0.7rem;
  margin-bottom: 1rem;
}
.post-title {
  font-family: 'IM Fell English', serif;
  font-size: clamp(1.8rem, 5vw, 3rem);
  font-weight: 400;
  color: var(--charcoal);
  line-height: 1.2;
  margin-bottom: 1rem;
}
.post-meta {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  font-family: 'Cinzel', serif;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--steel);
  margin-bottom: 1.5rem;
}
.post-date { color: var(--gold); }

/* ── PROSE BODY ── */
.post-body { background: var(--white); padding: 3.5rem 1.25rem; }
.post-inner { max-width: 720px; margin: 0 auto; }

/* Style the rendered Markdown */
.prose :deep(h2) {
  font-family: 'IM Fell English', serif;
  font-size: 1.7rem;
  font-weight: 400;
  color: var(--charcoal);
  margin: 2.5rem 0 0.75rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--rule);
}
.prose :deep(h3) {
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  letter-spacing: 0.08em;
  color: var(--teal);
  margin: 2rem 0 0.5rem;
}
.prose :deep(p) {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--charcoal);
  margin-bottom: 1.4rem;
}
.prose :deep(blockquote) {
  border-left: 3px solid var(--gold);
  margin: 2rem 0;
  padding: 0.75rem 1.5rem;
  background: var(--fog);
  font-style: italic;
  color: var(--steel);
}
.prose :deep(ul), .prose :deep(ol) {
  padding-left: 1.5rem;
  margin-bottom: 1.4rem;
}
.prose :deep(li) {
  margin-bottom: 0.4rem;
  color: var(--charcoal);
  line-height: 1.7;
}
.prose :deep(a) {
  color: var(--teal);
  border-bottom: 1px solid var(--teal);
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;
}
.prose :deep(a:hover) { color: var(--gold); border-color: var(--gold); }
.prose :deep(strong) { color: var(--charcoal); font-weight: 600; }
.prose :deep(em) { color: var(--steel); }
.prose :deep(hr) {
  border: none;
  border-top: 1px solid var(--rule);
  margin: 2.5rem 0;
}

/* ── IMAGES ── */
.prose :deep(img) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 2rem auto;
  border: 1px solid var(--rule);
}
/* Image with a caption (Decap wraps these in a figure) */
.prose :deep(figure) {
  margin: 2.5rem 0;
  text-align: center;
}
.prose :deep(figure img) {
  margin: 0 auto 0.75rem;
}
.prose :deep(figcaption) {
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  color: var(--steel);
  font-style: normal;
}
/* Full-width image (add class="full" in Decap markdown) */
.prose :deep(img.full) {
  max-width: 100%;
  width: 100%;
  border: none;
}
/* Float left/right for inline images */
.prose :deep(img.left) {
  float: left;
  margin: 0.5rem 1.75rem 1rem 0;
  max-width: 45%;
}
.prose :deep(img.right) {
  float: right;
  margin: 0.5rem 0 1rem 1.75rem;
  max-width: 45%;
}
.prose :deep(.clearfix)::after {
  content: '';
  display: table;
  clear: both;
}

/* ── POST FOOTER ── */
.post-foot {
  background: var(--fog);
  border-top: 1px solid var(--rule);
  padding: 2.5rem 1.25rem;
  text-align: center;
}
.post-foot-inner { display: flex; flex-direction: column; align-items: center; gap: 1.25rem; }

.not-found {
  text-align: center;
  padding: 6rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.not-found h1 {
  font-family: 'IM Fell English', serif;
  font-weight: 400;
  color: var(--charcoal);
}

@media (min-width: 640px) {
  .post-hero { padding: 5rem 2rem 4rem; }
  .post-body { padding: 4.5rem 2rem; }
}
@media (min-width: 1024px) {
  .post-hero { padding: 7rem 2rem 5rem; }
  .post-body { padding: 6rem 2rem; }
}
</style>
