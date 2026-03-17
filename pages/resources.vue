<template>
  <main>

    <!-- ══ HERO ══ -->
    <section class="page-hero">
      <div class="page-hero-content">
        <p class="section-label">Further Study</p>
        <h1 class="section-title">Resources</h1>
        <div class="section-rule"></div>
        <p class="page-hero-sub">A curated selection of texts, tools, and references for the serious student of Classical Arabic.</p>
      </div>
    </section>

    <!-- ══ RESOURCES ══ -->
    <section class="resources-body">
      <div class="section-inner">

        <div class="resource-group" v-for="group in resources" :key="group.category">
          <h2 class="resource-category">{{ group.category }}</h2>
          <div class="resource-list">
            <div class="resource-card" v-for="item in group.items" :key="item.title">
              <div class="resource-text">
                <h3 class="resource-title">{{ item.title }}</h3>
                <p class="resource-author" v-if="item.author">{{ item.author }}</p>
                <p class="resource-desc">{{ item.desc }}</p>
              </div>
              <a v-if="item.url" :href="item.url" target="_blank" class="course-link resource-link">Visit →</a>
            </div>
          </div>
        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Resources | Classical Arabic with Omar',
  description: 'A curated selection of texts, tools, and references for the serious student of Classical Arabic.',
})

const resources = [
  {
    category: 'Foundational Grammars',
    items: [
      {
        title: 'Ajurrumiyyah',
        author: 'Ibn Ajurrum (d. 1323)',
        desc: 'The foundational primer in Arabic grammar studied across the Islamic world for seven centuries. Essential first reading for any student of Classical Arabic.',
        url: null,
      },
      {
        title: 'Alfiyyah Ibn Malik',
        author: 'Ibn Malik (d. 1274)',
        desc: 'One thousand verses of poetry encoding the complete rules of Arabic grammar. The most comprehensive and widely-taught grammar text in the classical tradition.',
        url: null,
      },
      {
        title: 'Qatrun Nada',
        author: 'Ibn Hisham (d. 1360)',
        desc: 'An intermediate grammar by one of the greatest Arabic grammarians. Clear, systematic, and indispensable for students moving beyond the beginner level.',
        url: null,
      },
    ],
  },
  {
    category: 'Dictionaries and Lexicons',
    items: [
      {
        title: 'Hans Wehr Dictionary of Modern Written Arabic',
        author: 'Hans Wehr',
        desc: 'The standard Arabic-English dictionary for students of Modern Standard and Classical Arabic. An essential reference for any serious student.',
        url: 'https://archive.org/details/hansWehrDictionary',
      },
      {
        title: 'Lisan al-Arab',
        author: 'Ibn Manzur (d. 1311)',
        desc: 'The most comprehensive classical Arabic lexicon ever compiled, covering etymology, usage, and citation from classical poetry and hadith. Available online in Arabic.',
        url: 'https://www.lisanarabs.com',
      },
      {
        title: 'Lane\'s Arabic-English Lexicon',
        author: 'Edward William Lane',
        desc: 'An exhaustive Arabic-English lexicon drawn from classical sources. Invaluable for reading classical texts with precision.',
        url: 'https://www.tyndalearchive.com/tabs/lane/',
      },
    ],
  },
  {
    category: 'Online Tools',
    items: [
      {
        title: 'Quranic Arabic Corpus',
        author: null,
        desc: 'A linguistic resource providing morphological annotation, syntax trees, and grammatical analysis for every word in the Quran.',
        url: 'https://corpus.quran.com',
      },
      {
        title: 'Al-Mawrid Arabic-English Dictionary',
        author: null,
        desc: 'A reliable online dictionary for quick reference, covering both classical and modern usage.',
        url: 'https://www.almaany.com/en/dict/ar-en/',
      },
      {
        title: 'Sarf Trainer',
        author: null,
        desc: 'An online tool for drilling Arabic morphology (sarf), covering verb conjugations and noun declensions systematically.',
        url: 'https://www.sarftrainer.com',
      },
    ],
  },
  {
    category: 'Classical Texts for Reading Practice',
    items: [
      {
        title: 'The Quran',
        author: null,
        desc: 'The primary source of Classical Arabic. Regular reading of the Quranic text, with attention to its grammatical structure, is irreplaceable for any serious student.',
        url: null,
      },
      {
        title: 'Forty Hadith of Imam al-Nawawi',
        author: 'Imam al-Nawawi (d. 1277)',
        desc: 'A short and accessible collection of prophetic traditions in clear, classical Arabic prose. Excellent for early reading practice.',
        url: null,
      },
      {
        title: 'Muqaddimah',
        author: 'Ibn Khaldun (d. 1406)',
        desc: 'The celebrated introduction to Ibn Khaldun\'s universal history. Advanced reading, but a landmark of classical Arabic prose.',
        url: 'https://archive.org/details/muqaddimah',
      },
    ],
  },
]
</script>

<style scoped>
.page-hero {
  background: var(--pure);
  border-bottom: 3px solid var(--gold);
  padding: 3rem 1.25rem 2.5rem;
  text-align: center;
}
.page-hero-content { max-width: 640px; margin: 0 auto; }
.page-hero-sub { font-style: italic; color: var(--steel); font-size: clamp(1rem, 2.5vw, 1.15rem); margin-top: 0.75rem; }

.resources-body { background: var(--white); padding: 3.5rem 1.25rem; }

.resource-group { margin-bottom: 3.5rem; }
.resource-category {
  font-family: 'Cinzel', serif;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--teal);
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--rule);
}

.resource-list { display: flex; flex-direction: column; gap: 1rem; }
.resource-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  background: var(--fog);
  border: 1px solid var(--rule);
  border-left: 3px solid var(--gold);
  padding: 1.5rem;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.resource-card:hover { box-shadow: 0 4px 16px var(--shadow); }
.resource-text { flex: 1; }
.resource-title {
  font-family: 'IM Fell English', serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--charcoal);
  margin-bottom: 0.2rem;
}
.resource-author {
  font-family: 'Cinzel', serif;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: var(--gold);
  margin-bottom: 0.5rem;
}
.resource-desc { font-size: 0.93rem; color: var(--steel); line-height: 1.65; }
.resource-link { white-space: nowrap; align-self: center; flex-shrink: 0; }

@media (min-width: 640px) {
  .page-hero { padding: 3.5rem 2rem 3rem; }
  .resources-body { padding: 4.5rem 2rem; }
}
@media (min-width: 1024px) {
  .page-hero { padding: 4rem 2rem 3.5rem; }
  .resources-body { padding: 6rem 2rem; }
}
</style>
