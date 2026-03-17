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
            src="/images/logo-white-dark-bg.png"
            alt="Classical Arabic with Peter Omar Kovacik"
            class="hero__logo"
          />
        </div>
        <p class="hero__tagline">
          Learn the language of the Qur'ān and the Islamic scholarly tradition
        </p>
        <div class="hero__ornament" aria-hidden="true">✦ &nbsp; ✦ &nbsp; ✦</div>
        <div class="hero__actions">
          <NuxtLink to="/courses" class="btn btn-filled btn--hero">Explore Courses</NuxtLink>
          <NuxtLink to="/contact" class="btn btn--hero-outline">Get in Touch</NuxtLink>
        </div>
      </div>
      <div class="hero__scroll-hint" aria-hidden="true">
        <span class="hero__scroll-line"></span>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         ABOUT / MISSION
    ═══════════════════════════════════════ -->
    <section class="about">
      <div class="section-inner about__inner">
        <div class="about__text-col">
          <p class="section-label">About This Programme</p>
          <h2 class="section-title about__title">A Living Tradition,<br><em>Carefully Transmitted</em></h2>
          <div class="section-rule"></div>
          <p class="about__body">
            Classical Arabic — <span class="arabic-inline" lang="ar">فصحى التراث</span> — is
            the language of the Qur'ān, the hadith, and fourteen centuries of
            Islamic scholarship. It is not merely a historical artefact; it is a
            living key to an unbroken intellectual tradition.
          </p>
          <p class="about__body">
            Peter Omar Kovacik has designed this programme for students who wish
            to read primary sources with confidence — from the first letters of
            the alphabet to the syntax of classical prose. Each course builds
            methodically, grounded in the traditional sciences of grammar
            (<span class="arabic-inline" lang="ar">نحو</span>)
            and morphology
            (<span class="arabic-inline" lang="ar">صرف</span>).
          </p>
          <NuxtLink to="/contact" class="course-link about__link">Get in Touch →</NuxtLink>
        </div>
        <div class="about__deco-col" aria-hidden="true">
          <div class="about__deco-box">
            <span class="about__deco-arabic" lang="ar">العربيّة</span>
            <span class="about__deco-rule"></span>
            <span class="about__deco-sub" lang="ar">فصحى التراث</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         FEATURES
    ═══════════════════════════════════════ -->
    <section class="features">
      <div class="section-inner">
        <p class="section-label on-dark">Why This Programme</p>
        <h2 class="section-title on-dark">Built for Serious Students</h2>
        <div class="section-rule on-dark"></div>
        <div class="features__grid">
          <div class="features__card" v-for="feature in features" :key="feature.title">
            <div class="features__card-icon" aria-hidden="true">٭</div>
            <h3 class="features__card-title">{{ feature.title }}</h3>
            <p class="features__card-body">{{ feature.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         COURSES PREVIEW
    ═══════════════════════════════════════ -->
    <section class="courses-preview">
      <div class="section-inner">
        <p class="section-label">Curriculum</p>
        <h2 class="section-title">Current Courses</h2>
        <div class="section-rule"></div>
        <div class="courses__grid">
          <div class="courses__card" v-for="course in courses" :key="course.slug">
            <div class="courses__card-header">
              <span class="courses__card-level">{{ course.level }}</span>
              <span class="courses__card-arabic" lang="ar">{{ course.arabic }}</span>
            </div>
            <h3 class="courses__card-title">{{ course.title }}</h3>
            <p class="courses__card-desc">{{ course.description }}</p>
            <NuxtLink :to="`/courses/${course.slug}`" class="course-link">View Course →</NuxtLink>
          </div>
        </div>
        <div class="section-cta">
          <NuxtLink to="/courses" class="btn btn-filled">View All Courses</NuxtLink>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════
         CTA BANNER
    ═══════════════════════════════════════ -->
    <section class="cta-banner">
      <div class="cta-banner__inner">
        <img
          src="/images/logo-black-light-bg.png"
          alt="Classical Arabic with Peter Omar Kovacik"
          class="cta-banner__logo"
        />
        <p class="cta-banner__text">Begin your journey into the classical language today.</p>
        <NuxtLink to="/courses" class="btn btn-filled cta-banner__btn">Start Learning</NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Classical Arabic with Peter Omar Kovacik',
  description: 'A step-by-step programme in Classical Arabic — the language of the Qur\'ān and the Islamic scholarly tradition — with Peter Omar Kovacik.',
})

const features = [
  {
    title: 'Traditional Methodology',
    body: 'Rooted in the classical sciences of naḥw and ṣarf, as taught in the Islamic scholarly tradition for centuries.'
  },
  {
    title: 'Structured Progression',
    body: 'Courses build systematically from foundational literacy to reading classical texts with full grammatical understanding.'
  },
  {
    title: 'Primary Source Focus',
    body: 'The ultimate goal is independent engagement with the Qur\'ān, hadith literature, and classical scholarship in the original Arabic.'
  },
  {
    title: 'Expert Instruction',
    body: 'Peter Omar Kovacik brings years of study in the Islamic sciences to craft a programme that is both rigorous and accessible.'
  },
]

const courses = [
  {
    slug: 'step-one',
    level: 'Foundations',
    arabic: 'المبادئ',
    title: 'Step One',
    description: 'Master the Arabic alphabet, vowelling system, and the sounds of Classical Arabic from the very beginning.'
  },
]
</script>

<style scoped>
/* ── HERO ───────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  background: var(--charcoal);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 6rem 2rem 4rem;
}
.hero__bg-pattern {
  position: absolute; inset: 0;
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(88,112,74,0.08) 60px),
    repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(88,112,74,0.08) 60px);
  pointer-events: none;
}
.hero::after {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(88,112,74,0.18) 0%, transparent 70%);
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
  width: min(580px, 90vw); height: auto;
  filter: drop-shadow(0 4px 32px rgba(0,0,0,0.45));
  animation: heroFadeUp 1.1s cubic-bezier(0.22,1,0.36,1) both;
}
.hero__tagline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(1.05rem, 2.5vw, 1.35rem);
  font-style: italic; color: var(--silver);
  letter-spacing: 0.04em; margin-bottom: 1.6rem;
  animation: heroFadeUp 1.1s 0.15s cubic-bezier(0.22,1,0.36,1) both;
}
.hero__ornament {
  color: var(--gold); font-size: 0.85rem;
  letter-spacing: 0.5em; opacity: 0.7; margin-bottom: 2.2rem;
  animation: heroFadeUp 1.1s 0.25s cubic-bezier(0.22,1,0.36,1) both;
}
.hero__actions {
  display: flex; gap: 1.2rem; flex-wrap: wrap; justify-content: center;
  animation: heroFadeUp 1.1s 0.35s cubic-bezier(0.22,1,0.36,1) both;
}
.btn--hero { padding: 0.95rem 2.4rem; font-size: 0.72rem; }
.btn--hero-outline {
  display: inline-block; font-family: 'Cinzel', serif;
  font-size: 0.72rem; letter-spacing: 0.15em; text-decoration: none;
  padding: 0.95rem 2.4rem; border: 1.5px solid rgba(168,185,154,0.45);
  color: var(--silver); background: transparent; cursor: pointer;
  transition: all 0.25s; white-space: nowrap;
}
.btn--hero-outline:hover { border-color: var(--gold-light); color: var(--gold-light); }
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

/* ── ABOUT ──────────────────────────────── */
.about { padding: 6rem 2rem; background: var(--pure); }
.about__inner { display: grid; grid-template-columns: 1fr 340px; gap: 5rem; align-items: center; }
.about__title { text-align: left; }
.section-rule { margin-left: 0; }
.about__body { font-size: 1.05rem; color: var(--charcoal); line-height: 1.8; margin-bottom: 1.2rem; opacity: 0.9; }
.arabic-inline { font-family: 'Cormorant Garamond', serif; font-size: 1.15em; color: var(--teal); font-style: normal; }
.about__link { display: inline-block; margin-top: 0.8rem; }
.about__deco-col { display: flex; align-items: center; justify-content: center; }
.about__deco-box {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  width: 280px; height: 320px; border: 1.5px solid var(--teal);
  position: relative; background: var(--white);
}
.about__deco-box::before, .about__deco-box::after {
  content: ''; position: absolute; width: 16px; height: 16px;
  border-color: var(--gold); border-style: solid;
}
.about__deco-box::before { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.about__deco-box::after  { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
.about__deco-arabic { font-family: 'Cormorant Garamond', serif; font-size: 4.5rem; color: var(--teal); line-height: 1; direction: rtl; }
.about__deco-rule { display: block; width: 40px; height: 1px; background: var(--gold); margin: 1rem 0; }
.about__deco-sub { font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-style: italic; color: var(--slate); direction: rtl; }

/* ── FEATURES ───────────────────────────── */
.features { padding: 6rem 2rem; background: var(--charcoal); }
.features__grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2px; margin-top: 3rem; border: 1px solid rgba(88,112,74,0.25);
}
.features__card { padding: 2.5rem 2rem; border: 1px solid rgba(88,112,74,0.2); transition: background 0.3s; }
.features__card:hover { background: rgba(88,112,74,0.1); }
.features__card-icon { font-size: 1.4rem; color: var(--gold); margin-bottom: 1rem; display: block; }
.features__card-title {
  font-family: 'Cinzel', serif; font-size: 0.78rem; letter-spacing: 0.12em;
  color: var(--fog); font-weight: 400; margin-bottom: 0.9rem; text-transform: uppercase;
}
.features__card-body { font-family: 'Cormorant Garamond', serif; font-size: 1rem; line-height: 1.75; color: var(--silver); }

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
.courses__card-arabic { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; color: var(--gold); direction: rtl; }
.courses__card-title { font-family: 'IM Fell English', serif; font-size: 1.35rem; font-weight: 400; color: var(--charcoal); line-height: 1.25; }
.courses__card-desc { font-size: 0.95rem; line-height: 1.7; color: var(--slate); flex: 1; }

/* ── CTA BANNER ─────────────────────────── */
.cta-banner { padding: 6rem 2rem; background: var(--pure); border-top: 1.5px solid var(--rule); text-align: center; }
.cta-banner__inner { max-width: 640px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 1.8rem; }
.cta-banner__logo { width: min(420px, 80vw); height: auto; opacity: 0.92; }
.cta-banner__text { font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; font-style: italic; color: var(--slate); }
.cta-banner__btn { padding: 0.95rem 2.8rem; }

/* ── RESPONSIVE ─────────────────────────── */
@media (max-width: 860px) {
  .about__inner { grid-template-columns: 1fr; gap: 3rem; }
  .about__deco-col { display: none; }
  .about__title { text-align: center; }
  .section-rule { margin-left: auto; }
}
@media (max-width: 560px) {
  .hero__actions { flex-direction: column; align-items: center; }
  .features__grid { grid-template-columns: 1fr; }
  .courses__grid  { grid-template-columns: 1fr; }
}
</style>
