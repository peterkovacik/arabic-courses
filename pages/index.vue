<template>
  <div class="home">

    <!-- ═══════════════════════════════════════
         HERO
    ═══════════════════════════════════════ -->
    <section class="hero">
      <div class="hero__bg-pattern" aria-hidden="true"></div>
      <div class="hero__inner">
        <div class="hero__logo-wrap">
          <img
            src="/images/logo-black-light-bg.png"
            alt="Classical Arabic with Peter Omar Kovacik"
            class="hero__logo"
          />
        </div>
        <p class="hero__tagline">
          Learn the language of the Qur'ān and the Islamic scholarly tradition
        </p>
        <div class="hero__ornament" aria-hidden="true">✦ &nbsp; ✦ &nbsp; ✦</div>
      </div>
      <div class="hero__scroll-hint" aria-hidden="true">
        <span class="hero__scroll-line"></span>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         COURSES
    ═══════════════════════════════════════ -->
    <section class="courses-preview">
      <div class="section-inner">
        <p class="section-label">Curriculum</p>
        <h2 class="section-title">Current Courses</h2>
        <div class="section-rule"></div>
        <div class="courses__grid">
          <div class="courses__card" v-for="course in courses" :key="course._path">
            <div class="courses__card-header">
              <span class="courses__card-level">{{ course.level }}</span>
            </div>
            <h3 class="courses__card-title">{{ course.title }}</h3>
            <p class="courses__card-excerpt">{{ course.excerpt }}</p>
            <NuxtLink :to="course._path" class="course-link">View Course →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Classical Arabic with Peter Omar Kovacik',
  description: 'A step-by-step programme in Classical Arabic — the language of the Qur\'ān and the Islamic scholarly tradition — with Peter Omar Kovacik.',
})

const { data: courses } = await useAsyncData('home-courses', () =>
  queryContent('courses')
    .where({ _file: { $regex: /^courses\/[^/]+\/index\.md$/ } })
    .sort({ order: 1 })
    .find()
)
</script>

<style scoped>
/* ── HERO ───────────────────────────────── */
.hero {
  position: relative;
  background: var(--pure);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 5rem 2rem;
}
.hero__bg-pattern {
  position: absolute; inset: 0;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(88,112,74,0.05) 60px),
    repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(88,112,74,0.05) 60px);
  pointer-events: none;
}
.hero::after {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(88,112,74,0.06) 0%, transparent 70%);
  pointer-events: none;
}
.hero__inner {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  align-items: center; text-align: center;
  max-width: 820px;
}
.hero__logo-wrap { margin-bottom: 2.5rem; }
.hero__logo {
  width: min(290px, 45vw); height: auto;
  filter: drop-shadow(0 4px 24px rgba(0,0,0,0.1));
  animation: heroFadeUp 1.1s cubic-bezier(0.22,1,0.36,1) both;
}
.hero__tagline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(1.05rem, 2.5vw, 1.35rem);
  font-style: italic; color: var(--slate);
  letter-spacing: 0.04em; margin-bottom: 1.6rem;
  animation: heroFadeUp 1.1s 0.15s cubic-bezier(0.22,1,0.36,1) both;
}
.hero__ornament {
  color: var(--gold); font-size: 0.85rem;
  letter-spacing: 0.5em; opacity: 0.7;
  animation: heroFadeUp 1.1s 0.25s cubic-bezier(0.22,1,0.36,1) both;
}
.hero__scroll-hint {
  position: absolute; bottom: 2.2rem; left: 50%; transform: translateX(-50%); z-index: 1;
}
.hero__scroll-line {
  display: block; width: 1px; height: 48px;
  background: linear-gradient(to bottom, transparent, var(--gold));
  margin: 0 auto; animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.7); transform-origin: top; }
  50%       { opacity: 0.9; transform: scaleY(1);   transform-origin: top; }
}

/* ── COURSES PREVIEW ────────────────────── */
.courses-preview { padding: 6rem 2rem; background: var(--fog); }
.courses__grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5px; margin-top: 3rem; border: 1.5px solid var(--rule);
}
.courses__card {
  background: var(--pure); padding: 2.5rem 2rem 2rem;
  border: 1.5px solid var(--rule); display: flex; flex-direction: column;
  gap: 0.8rem; transition: box-shadow 0.25s, transform 0.25s;
}
.courses__card:hover { box-shadow: 0 8px 32px var(--shadow); transform: translateY(-3px); }
.courses__card-header { display: flex; justify-content: space-between; align-items: baseline; }
.courses__card-level { font-family: 'Cinzel', serif; font-size: 0.6rem; letter-spacing: 0.2em; color: var(--teal); text-transform: uppercase; }
.courses__card-title { font-family: 'IM Fell English', serif; font-size: 1.35rem; font-weight: 400; color: var(--charcoal); line-height: 1.25; }
.courses__card-excerpt { font-size: 0.95rem; line-height: 1.7; color: var(--slate); flex: 1; }

/* ── RESPONSIVE ─────────────────────────── */
@media (max-width: 560px) {
  .courses__grid { grid-template-columns: 1fr; }
}
</style>
