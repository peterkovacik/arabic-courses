<template>
  <main>
    <section class="page-hero">
      <div class="page-hero-content">
        <h1 class="section-title">Get in Touch</h1>
        <div class="section-rule"></div>
        <p class="page-hero-sub">For enquiries or correspondence</p>
      </div>
    </section>

    <section class="contact-body">
      <div class="section-inner contact-layout">

        <!-- FORM -->
        <div class="contact-form-wrap">
          <h2 class="form-title">Send a Message</h2>

          <div v-if="submitted" class="success-msg">
            <p class="success-icon">✦</p>
            <h3>Message Received</h3>
            <p>Thank you, {{ sentName }}. Omar will be in touch with you shortly.</p>
            <button class="btn" @click="resetForm">Send Another Message</button>
          </div>

          <div v-else class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label>Your Name <span class="req">*</span></label>
                <input type="text" v-model="form.name" placeholder="e.g. Ahmad al-Rashid" :class="{ error: errors.name }" />
                <p class="error-msg" v-if="errors.name">Please enter your name.</p>
              </div>
              <div class="form-group">
                <label>Email Address <span class="req">*</span></label>
                <input type="email" v-model="form.email" placeholder="you@example.com" :class="{ error: errors.email }" />
                <p class="error-msg" v-if="errors.email">Please enter a valid email address.</p>
              </div>
            </div>
            <div class="form-group">
              <label>Message <span class="req">*</span></label>
              <textarea v-model="form.message" placeholder="Write your message here…" :class="{ error: errors.message }"></textarea>
              <p class="error-msg" v-if="errors.message">Please write a brief message.</p>
            </div>
            <div class="form-submit">
              <button
                class="btn btn-filled"
                @click.prevent="submitForm"
                :disabled="submitting">
                {{ submitting ? 'Sending…' : 'Send Message' }}
              </button>
              <p class="submit-error" v-if="submitError">{{ submitError }}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
useSeoMeta({
  title: 'Contact | Classical Arabic with Omar',
  description: 'Get in touch with Peter Omar Kovacik about courses, schedules, or any questions about learning Classical Arabic.',
})

// ── FORMSPREE ENDPOINT ──────────────────────────────────────
// Replace the placeholder below with your own endpoint URL.
// Get one free at https://formspree.io → New Form → copy the URL.
// It will look like: https://formspree.io/f/xyzabcde
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xreyzdww'
// ────────────────────────────────────────────────────────────

const submitted = ref(false)
const submitting = ref(false)
const submitError = ref('')
const sentName = ref('')

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: false, email: false, message: false })

const submitForm = async () => {
  errors.name = false; errors.email = false; errors.message = false
  submitError.value = ''
  let valid = true
  if (!form.name.trim())                               { errors.name = true;    valid = false }
  if (!form.email.trim() || !form.email.includes('@')) { errors.email = true;   valid = false }
  if (!form.message.trim())                            { errors.message = true; valid = false }
  if (!valid) return

  submitting.value = true
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: JSON.stringify({
        name:    form.name,
        email:   form.email,
        message: form.message,
      })
    })
    if (res.ok) {
      sentName.value = form.name
      submitted.value = true
    } else {
      const data = await res.json()
      submitError.value = data?.errors?.map(e => e.message).join(', ')
        || 'Something went wrong. Please try again or email Omar directly.'
    }
  } catch {
    submitError.value = 'Could not send your message. Please check your connection and try again.'
  } finally {
    submitting.value = false
  }
}

const resetForm = () => {
  submitted.value = false
  submitError.value = ''
  Object.assign(form, { name: '', email: '', message: '' })
}
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

.contact-body { background: var(--white); padding: 3.5rem 1.25rem; }
.contact-layout { display: flex; flex-direction: column; gap: 2.5rem; }
.contact-form-wrap { flex: 1; min-width: 0; }
.form-title { font-family: 'IM Fell English', serif; font-size: 1.8rem; font-weight: 400; color: var(--charcoal); margin-bottom: 1.5rem; }
.contact-form { display: flex; flex-direction: column; gap: 1.1rem; }
.form-row { display: flex; flex-direction: column; gap: 1.1rem; }
.form-group label { display: block; font-family: 'Cinzel', serif; font-size: 0.62rem; letter-spacing: 0.18em; color: var(--steel); margin-bottom: 0.35rem; }
.req { color: var(--gold); }
.form-group input, .form-group textarea, .form-group select {
  width: 100%; background: var(--fog); border: 1px solid var(--rule);
  padding: 0.75rem 1rem; font-family: 'Cormorant Garamond', serif; font-size: 1rem;
  color: var(--charcoal); outline: none; transition: border-color 0.2s;
  border-radius: 0; -webkit-appearance: none; appearance: none;
}
.form-group input:focus, .form-group textarea:focus, .form-group select:focus { border-color: var(--teal); }
.form-group input.error, .form-group textarea.error { border-color: #c0392b; }
.form-group textarea { height: 150px; resize: vertical; }
.error-msg { font-size: 0.78rem; color: #c0392b; margin-top: 0.3rem; font-style: italic; }
.submit-error { font-size: 0.88rem; color: #c0392b; margin-top: 0.75rem; font-style: italic; }
.btn:disabled { opacity: 0.6; cursor: not-allowed; }

.success-msg { text-align: center; padding: 3rem 1.5rem; background: var(--teal-pale); border: 1px solid var(--teal); }
.success-icon { font-size: 2rem; color: var(--gold); margin-bottom: 0.75rem; }
.success-msg h3 { font-family: 'IM Fell English', serif; font-size: 1.6rem; font-weight: 400; color: var(--charcoal); margin-bottom: 0.5rem; }
.success-msg p { color: var(--steel); margin-bottom: 1.5rem; }

@media (min-width: 640px) {
  .page-hero { padding: 3.5rem 2rem 3rem; }
  .contact-body { padding: 4.5rem 2rem; }
  .form-row { flex-direction: row; }
  .form-row .form-group { flex: 1; }
}
@media (min-width: 1024px) {
  .page-hero { padding: 4rem 2rem 3.5rem; }
  .contact-body { padding: 6rem 2rem; }
}
</style>
