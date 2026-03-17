<template>
  <main>

    <!-- ══ HERO ══ -->
    <section class="page-hero">
      <div class="page-hero-content">
        <p class="section-label">The Author</p>
        <h1 class="section-title">About Omar</h1>
        <div class="section-rule"></div>
      </div>
    </section>

    <!-- ══ BIO BODY ══ -->
    <section class="about-body">
      <div class="section-inner about-layout">

        <div class="about-text">

          <div class="bio-block">
            <p class="bio-opening">
              Peter Omar Kovacik is a scholar and teacher of Classical Arabic, with a focus on Arabic Linguistics, Islamic Studies, and the transmission of the classical scholarly tradition.
            </p>
          </div>

          <div class="bio-block">
            <h2 class="bio-heading">Background</h2>
            <p>
              <!-- Add your biographical background here -->
              Lorem ipsum — replace this paragraph with your own background: where you studied, with whom, and what drew you to Classical Arabic and Islamic scholarship.
            </p>
          </div>

          <div class="bio-block">
            <h2 class="bio-heading">Scholarly Interests</h2>
            <p>
              <!-- Add your scholarly interests here -->
              His scholarly interests include Arabic morphology and syntax, Quranic linguistics, the history of the Arabic grammatical tradition, and the methodology of classical Islamic scholarship.
            </p>
          </div>

          <div class="bio-block">
            <h2 class="bio-heading">This Journal</h2>
            <p>
              This journal is a space for extended reflection on topics in Arabic linguistics, Islamic studies, and the craft of teaching Classical Arabic. It is written for students, researchers, and anyone with a serious interest in the Arabic language and its intellectual tradition.
            </p>
          </div>

          <div class="bio-contact">
            <span class="ornament">✦</span>
            <p>For correspondence, visit the <NuxtLink to="/contact">Contact</NuxtLink> page.</p>
          </div>

        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
useSeoMeta({
  title: 'About | Classical Arabic with Omar',
  description: 'Peter Omar Kovacik is a scholar and teacher of Classical Arabic, with a focus on Arabic Linguistics, Islamic Studies, and the classical scholarly tradition.',
})
</script>

<style scoped>
.page-hero {
  background: var(--pure);
  border-bottom: 3px solid var(--gold);
  padding: 3rem 1.25rem 2.5rem;
  text-align: center;
}
.page-hero-content { max-width: 640px; margin: 0 auto; }

.about-body { background: var(--white); padding: 3.5rem 1.25rem; }
.about-layout { max-width: 760px; margin: 0 auto; }

.bio-opening {
  font-family: 'IM Fell English', serif;
  font-size: clamp(1.15rem, 2.5vw, 1.35rem);
  font-style: italic;
  color: var(--charcoal);
  line-height: 1.7;
  margin-bottom: 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--rule);
}

.bio-block { margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid var(--rule); }
.bio-block:last-of-type { border-bottom: none; }
.bio-heading {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--teal);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}
.bio-block p {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--charcoal);
}

.bio-contact {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
  font-style: italic;
  color: var(--steel);
  font-size: 1rem;
}
.bio-contact .ornament { color: var(--gold); font-size: 0.9rem; }
.bio-contact a { color: var(--teal); border-bottom: 1px solid var(--teal); text-decoration: none; transition: color 0.2s; }
.bio-contact a:hover { color: var(--gold); border-color: var(--gold); }

@media (min-width: 640px) {
  .page-hero { padding: 3.5rem 2rem 3rem; }
  .about-body { padding: 4.5rem 2rem; }
}
@media (min-width: 1024px) {
  .page-hero { padding: 4rem 2rem 3.5rem; }
  .about-body { padding: 6rem 2rem; }
}
</style>
