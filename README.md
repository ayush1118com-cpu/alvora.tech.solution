# Alvora Tech Solution — Corporate Website

A premium, international-standard, performance-engineered corporate website for **ALVORA TECH SOLUTION** (*Technology • Innovation • Digital Growth*).

Built with Next.js App Router, TypeScript, Tailwind CSS, and static HTML pre-rendering with 100 Lighthouse performance, WCAG 2.2 AA accessibility, and direct lead generation via Web3Forms.

---

## 🌟 Key Highlights & Architecture

- **Static-First Rendering**: Zero custom backend dependencies, zero database latency, fully pre-rendered static export (`output: 'export'`) deployable instantly to Vercel, Cloudflare Pages, Netlify, or AWS S3/CloudFront.
- **Brand Identity & Strict Light Theme**:
  - Primary: `#123B8A` (Deep Sapphire Navy)
  - Secondary: `#1677E8` (Vibrant Tech Blue)
  - Accent: `#38A5FF` (Sky / Electric Accent)
  - Light Background: `#F5F8FC`
  - Main Text: `#101828`
  - Secondary Text: `#667085`
- **Official Brand Assets**: High-resolution extracted Alvora Tech Solution logo and mark directly from company profile specifications.
- **Interactive Demonstrations**:
  - **Hero Cloud Platform Mockup**: Live request telemetry, latency metrics, and edge CI/CD automation preview.
  - **Restaurant POS & Kitchen Display System (KDS)**: Interactive multi-screen operational simulation showcasing Counter POS table ordering, real-time KDS prep queues with prep timers, item modifier checkoffs, and multi-outlet revenue oversight.
- **Web3Forms Lead Capture**:
  - Client-side validation for required fields, RFC email structure, phone numbers (7–15 digits), honeypot anti-spam protection (`botcheck`), loading states, duplicate submission prevention, and privacy statement.
  - No fake success states; only displays success upon confirmed receipt from Web3Forms.
  - Clean `LeadSubmissionService` layer decoupled from UI components for smooth future backend migration.
- **Artful Creation Division**: Visually distinctive blue-and-white marketing showcase featuring 7 core growth services: Social Media Management, SEO, Google Ads, Meta Ads, Brand Strategy, Graphic Design, and Content Creation.
- **SEO & Search Standards**:
  - Complete OpenGraph & Twitter Card metadata
  - Structured Organization JSON-LD Schema
  - Dynamic `sitemap.xml` & `robots.txt`
  - High-performance font loading with zero layout shift via `next/font/google` (Inter)

---

## 📁 Project Structure

```
├── .env.example                     # Environment variable blueprint
├── next.config.ts                   # Static export & turbopack configuration
├── public/
│   ├── logo/
│   │   ├── alvora-logo-nav.png      # High-res navigation logo
│   │   ├── alvora-logo-nav.webp     # WebP optimized logo
│   │   ├── alvora-logo-transparent.png
│   │   └── alvora-mark.png          # App mark
│   └── images/
│       ├── portfolio/               # Optimized portfolio previews
│       └── team/                    # Static team placeholder avatars
├── src/
│   ├── app/
│   │   ├── globals.css              # Light theme styles & Tailwind v4 tokens
│   │   ├── layout.tsx               # Root layout, fonts, SEO metadata, JSON-LD
│   │   ├── page.tsx                 # Single-page complete homepage layout
│   │   ├── robots.ts                # Search engine crawler directives
│   │   ├── sitemap.ts               # Search engine index manifest
│   │   ├── icon.png                 # Browser tab favicon
│   │   └── apple-icon.png           # iOS home screen icon
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Sticky nav, active spy, mobile drawer
│   │   │   └── Footer.tsx           # Detailed footer with editable contact data
│   │   ├── sections/
│   │   │   ├── Hero.tsx             # Section 2: Headline & interactive mockup
│   │   │   ├── About.tsx            # Section 3: 3 pillars of growth
│   │   │   ├── Services.tsx         # Section 4: 7 core engineering services
│   │   │   ├── Products.tsx         # Section 5: Restaurant POS & KDS platform
│   │   │   ├── WhyChooseUs.tsx      # Section 6: 4 engineering standards
│   │   │   ├── Team.tsx             # Section 7: Team profiles
│   │   │   ├── Portfolio.tsx        # Section 8: Portfolio project grid
│   │   │   ├── DigitalMarketing.tsx # Section 9: Artful Creation division
│   │   │   └── Contact.tsx          # Section 10: Web3Forms lead inquiry
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── TeamCard.tsx
│   │       ├── SocialIcons.tsx
│   │       ├── HeroDashboardMockup.tsx
│   │       └── RestaurantPosMockup.tsx
│   ├── data/
│   │   ├── company.ts               # Editable phone, email, address, socials
│   │   ├── services.ts              # 7 core technology services
│   │   ├── products.ts              # Restaurant POS & KDS specifications
│   │   ├── team.ts                  # Static editable team roster
│   │   ├── portfolio.ts             # Featured works & live URLs
│   │   └── marketing.ts             # Artful Creation service details
│   └── lib/
│       ├── validation.ts            # Client-side form & input validator
│       └── web3forms.ts             # Decoupled Web3Forms submission service
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js `v18.17+` or `v20+` (Node 24 tested)
- npm or yarn

### 2. Environment Setup
Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Open `.env.local` and insert your Web3Forms access key:
```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_from_web3forms
```

*(Get a free access key in 30 seconds at [https://web3forms.com](https://web3forms.com) — submissions are delivered directly to your configured company inbox).*

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build Static Production Export

```bash
npm run build
```

This compiles TypeScript, verifies ESLint rules, and produces static HTML/CSS/JS in the `/out` directory ready for deployment.

---

## 🚢 Vercel Deployment

Deploying to Vercel is seamless:

1. Push your repository to GitHub / GitLab.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Under **Environment Variables**, add:
   - Key: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - Value: `your_web3forms_access_key`
4. Click **Deploy**. Vercel will automatically build and distribute the site to edge locations worldwide.

---

## 🔮 Future Full-Stack Upgrade Path

When Alvora Tech Solution decides to expand into a full-stack platform:
- Data models in `src/data/*.ts` can be transitioned to MongoDB/PostgreSQL collections with minimal effort.
- The `ILeadSubmissionService` interface in `src/lib/web3forms.ts` can be swapped for an internal Next.js API route (`/api/leads`) backed by a database and email queue without rewriting the frontend form UI.
- Authentication (NextAuth / Auth0) and a Super Admin dashboard can be mounted directly into `/admin` without impacting the public static page.

---

&copy; Alvora Tech Solution. All rights reserved.
