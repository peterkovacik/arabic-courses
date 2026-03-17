# Classical Arabic with Omar — Nuxt Website

Built with **Nuxt 3** + **@nuxt/content** + **Decap CMS**.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server only (http://localhost:3000)
npm run dev

# Run Nuxt + Decap CMS proxy together (recommended)
npm run dev:cms
```

Once running with `dev:cms`, the Decap CMS editor is available at:
**http://localhost:3000/admin** — no login required in local mode.

> **Before deploying to production:** remove or comment out `local_backend: true`
> in `public/admin/config.yml`, otherwise the live site will show a warning.

---

## Project Structure

```
├── app.vue                     # Root shell
├── nuxt.config.ts              # Nuxt configuration
├── netlify.toml                # Netlify deployment config
│
├── layouts/
│   └── default.vue             # Wraps every page (navbar + footer)
│
├── pages/
│   ├── index.vue               # Home page
│   ├── courses.vue             # Courses page
│   ├── contact.vue             # Contact page
│   └── blog/
│       ├── index.vue           # Blog listing
│       └── [slug].vue          # Individual post
│
├── components/
│   ├── TheNavbar.vue
│   └── TheFooter.vue
│
├── assets/
│   └── css/
│       └── globals.css         # Design tokens + shared styles
│
├── public/
│   ├── images/                 # Logo files + uploaded images
│   └── admin/
│       ├── index.html          # Decap CMS editor UI
│       └── config.yml          # Decap CMS configuration
│
└── content/
    └── blog/                   # Blog posts as Markdown files
        ├── why-grammar-is-the-gateway.md
        ├── three-levels-of-arabic.md
        └── maintaining-progress-between-classes.md
```

---

## Writing Blog Posts

### As a Developer
Create a new `.md` file in `content/blog/`:

```md
---
title: "Your Post Title"
date: 2025-03-01
tag: "Grammar"
excerpt: "A short description shown on the blog listing."
---

Your article body here, written in Markdown.
```

The filename becomes the URL slug:
`content/blog/your-post-title.md` → `arabicwithomar.com/blog/your-post-title`

### Available Tags
- `Grammar`
- `Learning`
- `Qur'an`
- `Culture`
- `Announcement`

---

## Setting Up Decap CMS (for Omar)

Decap CMS gives Omar a friendly editor at `/admin` — no code required.

### Step 1 — Deploy to Netlify
1. Push this project to a GitHub repository
2. Connect the repo to [Netlify](https://netlify.com) (free tier is fine)
3. Netlify will auto-detect the `netlify.toml` build settings

### Step 2 — Enable Netlify Identity
1. In your Netlify dashboard → **Site configuration → Identity**
2. Click **Enable Identity**
3. Under **Registration** → set to **Invite only** (recommended)
4. Under **Services → Git Gateway** → click **Enable Git Gateway**

### Step 3 — Invite Omar
1. In Identity → **Invite users**
2. Enter Omar's email address
3. Omar receives an invite email, sets a password, and can then log in at:
   `https://arabicwithomar.com/admin`

### Step 4 — Writing a Post (Omar's workflow)
1. Go to `arabicwithomar.com/admin`
2. Log in with email and password
3. Click **Blog Posts → New Blog Post**
4. Fill in Title, Date, Tag, Excerpt, and Body
5. Click **Save** (saves as draft) or **Publish**
6. Netlify automatically rebuilds the site within ~2 minutes

---

## Customisation

### Colours
All design tokens are in `assets/css/globals.css` in the `:root` block.

### Logo files
- `public/images/logo-black-light-bg.png` — used on light backgrounds (hero)
- `public/images/logo-white-dark-bg.png` — used on dark backgrounds (nav, footer)

### Adding a new blog tag
1. Add the tag to the `options` list in `public/admin/config.yml`
2. The tag filter on the blog listing page updates automatically

---

## Deployment

The site is configured for **Netlify** static deployment out of the box.
`npm run generate` produces a fully static site in `.output/public/`.

For other hosts (Vercel, Cloudflare Pages), change `netlify.toml` accordingly
and update the Decap CMS backend in `public/admin/config.yml` if needed.
# arabic-with-omar-blog
