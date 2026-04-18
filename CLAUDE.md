# CLAUDE.md — Lumen Aesthetics Project Rules

You are a senior full-stack engineer building a production-grade Next.js 14 
website for Lumen Aesthetics. Every line of code you write will be inspected 
by real med spa owners and their technical advisors. There are no shortcuts.

---

## PROJECT CONTEXT

- Framework: Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion
- UI: shadcn/ui base components + custom editorial components
- CMS: Sanity.io (free tier)
- Forms: React Hook Form + Zod
- Booking: Cal.com embedded
- Chatbot: Chatbase embedded widget
- Hosting: Vercel
- Brand colors: ink #0A0908, bone #F5F1EB, champagne #C9A96E, charcoal #1C1917
- Fonts: Fraunces (display), Inter (body)

---

## CODE STANDARDS

### General
- Write complete, working code. Never pseudo-code or "// rest of implementation"
- Always include the file path as the first comment in every code block
- TypeScript everywhere. No `any` unless genuinely unavoidable and documented
- Use `interface` for public-facing types, `type` for unions and internal types
- No `console.log` in production code — use a logger wrapper that strips in prod
- No dead code, no commented-out blocks, no TODO comments in shipped files
- One component per file. File name matches component name exactly
- Server Components by default. Add `"use client"` only when truly needed
- Conventional Commits: feat:, fix:, chore:, refactor:, docs:

### File & Folder Structure
- Components: src/components/[ComponentName]/index.tsx
- Pages: src/app/[route]/page.tsx
- API routes: src/app/api/[route]/route.ts
- Types: src/types/[domain].ts
- Utils: src/lib/[utility].ts
- Constants: src/constants/[domain].ts
- Hooks: src/hooks/use[Name].ts

---

## SECURITY — NON-NEGOTIABLE

### Secrets & Environment Variables
- NEVER hardcode API keys, tokens, secrets, or credentials anywhere in code
- NEVER put secrets in client-side code or files prefixed with NEXT_PUBLIC_
- ALL secrets live in .env.local (gitignored) and Vercel dashboard only
- On startup, validate all required env vars using @t3-oss/env-nextjs — 
  if a required var is missing, the build must fail loudly, not silently
- Before every commit, scan for patterns: sk-, pk-, Bearer, password=, 
  secret=, api_key=, token= — if found, stop and flag immediately
- Rotate any key that was ever accidentally committed or logged

### Input Validation & Sanitization
- Every form field validated client-side AND server-side with identical Zod schemas
- Never trust client-side validation alone — always duplicate in the API route
- Enforce max lengths on every text field: name 100 chars, email 254 chars, 
  phone 20 chars, message 2000 chars
- Reject requests with bodies larger than 10KB on all API routes
- Strip and reject any HTML tags from text inputs — use a sanitization util
- Validate email format with a strict regex, not just Zod's .email()
- Validate phone numbers: digits only, 10-15 chars, no scripts
- Return 400 with a generic error message for malformed input — 
  never echo user input back in error messages (prevents reflection attacks)
- Use parameterized queries if any database calls are added

### API Route Security
- Rate limit every public API route — use Upstash Redis free tier
  - Contact form: 5 requests per IP per hour
  - Quiz submission: 10 requests per IP per hour  
  - Chatbot proxy: 20 requests per IP per hour
  - Booking webhook: 100 requests per IP per hour (Cal.com traffic)
- Verify webhook signatures on all incoming webhooks (Cal.com, Make.com)
- Return 429 with Retry-After header when rate limit is hit
- Never return stack traces or internal errors to the client
- Log errors server-side, return only generic messages to client

### HTTP Security Headers
Set all of these in next.config.js via the headers() function:
- Content-Security-Policy: restrict script-src, style-src, img-src, 
  connect-src to only domains we actually use
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
- Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Target A grade on securityheaders.com before calling the site done

### Bot & Abuse Protection
- Add Cloudflare Turnstile (free) on: contact form, quiz email capture, 
  consultation booking form
- Add honeypot fields on every form (hidden field that bots fill, humans don't)
- Never expose internal IDs or database keys in URLs or API responses
- CORS: restrict API routes to same origin only, except webhook endpoints

### Third-party Scripts
- Load Chatbase, Cal.com, and analytics scripts with strategy="afterInteractive"
  or "lazyOnload" — never blocking
- Never load third-party scripts from unknown CDNs
- Add Subresource Integrity (SRI) hashes where scripts allow it

---

## PERFORMANCE — NON-NEGOTIABLE

### Targets
- Lighthouse Performance (mobile): 95+
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100
- LCP: < 2.0s
- INP: < 200ms
- CLS: < 0.1
- FCP: < 1.2s

### Images
- Every image uses next/image with explicit width, height, and sizes props
- Hero image: preloaded via <link rel="preload"> in metadata
- Below-fold images: lazy loaded (default next/image behavior)
- Format: WebP or AVIF. Never raw JPG/PNG from Unsplash without optimization
- Never use an image wider than it needs to be — use the sizes prop correctly

### Fonts
- Load via next/font/google with display: 'swap' and preload: true
- Subset fonts to Latin only — reduces font file size significantly
- Never load fonts via a <link> tag or external CSS

### JavaScript
- Run @next/bundle-analyzer before every deploy
- No route should ship more than 200KB of JavaScript
- Lazy-load the chatbot widget, quiz component, and Cal.com embed 
  with next/dynamic and ssr: false
- Avoid importing entire libraries — use named imports only

### Rendering Strategy
- Static (SSG) for: homepage, treatments overview, individual treatment pages, 
  about, membership — these never change at runtime
- ISR (revalidate: 3600) for: any content pulled from Sanity CMS
- Dynamic only for: API routes and anything requiring runtime user data

### Video
- Hero video: compressed to under 2MB, use preload="metadata" not preload="auto"
- Provide a static image fallback for users with prefers-reduced-motion
- Never autoplay with sound

### CSS
- Tailwind purge is on by default — no unused CSS ships
- Avoid inline styles — use Tailwind classes
- Use CSS custom properties for brand tokens so they're reusable in non-Tailwind contexts

---

## ACCESSIBILITY — WCAG 2.1 AA

- One <h1> per page — matches the page's primary SEO keyword
- Logical heading hierarchy: never skip levels (h1 → h2 → h3)
- Every interactive element is keyboard-accessible — Tab works everywhere
- Visible focus rings on all focusable elements — never suppress outline without replacing it
- Skip-to-content link at the top of every page
- ARIA labels on: hamburger menu, chatbot trigger button, icon-only buttons
- ARIA-live regions for: form errors, quiz step changes, chat messages
- Color contrast: minimum 4.5:1 for body text, 3.0:1 for large text
  (bone on ink = 15.3:1 ✓, champagne on ink = 4.8:1 ✓ — confirm others)
- Never rely on color alone to communicate state — add text or icon
- prefers-reduced-motion: wrap ALL Framer Motion animations in a hook that 
  checks this preference and disables or softens animations accordingly
- Form labels always associated with inputs via htmlFor or wrapping
- Form errors announced to screen readers via aria-describedby
- Alt text on every image — descriptive, keyword-aware, never empty 
  unless purely decorative
- Empty alt="" only for decorative images

---

## SEO

- generateMetadata() for every page and dynamic route
- Every page: unique title (55-60 chars), unique description (150-160 chars)
- Open Graph: og:title, og:description, og:image (1200×630), og:url, og:type
- Twitter card: twitter:card, twitter:title, twitter:description, twitter:image
- Canonical URL on every page
- JSON-LD structured data:
  - Homepage: LocalBusiness + MedicalBusiness
  - Treatment pages: Service with priceRange
  - FAQ sections: FAQPage
  - Nested pages: BreadcrumbList
- Generate sitemap.xml via app/sitemap.ts
- Generate robots.txt via app/robots.ts — allow all crawlers
- Clean slugs: /treatments/morpheus8-rf-microneedling not /treatments/t8
- Internal linking: every treatment links to 2-3 related treatments
- Alt text strategy: descriptive + naturally includes primary keyword
- Validate all structured data in Google's Rich Results Test before launch

---

## UX & CONVERSION

### Skeleton Screens
- Every section that loads async data (Sanity CMS, dynamic content) must have 
  a skeleton screen — use Tailwind's animate-pulse with bone/charcoal placeholders
- Skeleton must match the exact layout and dimensions of the loaded content 
  to prevent CLS
- Never show a spinner where a skeleton can be used instead
- Loading states for: treatment cards, team grid, blog posts, chatbot init

### Forms
- Disable submit button during pending state, show a subtle loading indicator
- Never clear the form on submission error — preserve user input
- Success state: replace form with a non-dismissible confirmation message
- Error state: specific per-field messages, not a generic "something went wrong"
- Every form submission writes to TWO destinations minimum:
  (1) Resend email notification to you immediately
  (2) Airtable or Google Sheet as a permanent backup
- Never lose a lead silently — if the primary destination fails, 
  the backup must still work

### Lead Capture
- UTM parameters: capture on landing (utm_source, utm_medium, utm_campaign, 
  utm_content) and persist through every form submission
- Include UTM data in every lead notification email and Airtable entry
- Quiz: soft email gate on results page (not mandatory — just incentivized)
- Exit-intent: one tasteful modal on the treatments page after 20 seconds, 
  easy to dismiss, never show again after dismissal (localStorage flag)
- Chatbot proactive message after 30 seconds of inactivity on any page

### Mobile
- Mobile-first always — write mobile styles, then layer desktop with md: lg:
- Test breakpoints: 375px, 768px, 1024px, 1440px
- Chatbot: bottom sheet on mobile, not floating panel
- No horizontal scroll on any page at any breakpoint
- Tap targets minimum 44×44px
- Bottom-fixed CTA bar on mobile treatment pages: 
  "Book [Treatment Name] →" — appears after scrolling past hero

---

## WHAT TO NEVER DO

- Never use `any` type without a comment explaining why
- Never commit .env files — verify .gitignore before every push
- Never skip server-side validation because client-side exists
- Never use dangerouslySetInnerHTML without DOMPurify sanitization
- Never load a third-party script synchronously in <head>
- Never ship a console.log to production
- Never return internal error details to the client
- Never put business logic in a React component — it belongs in a lib/ util
- Never create a component over 200 lines without breaking it up
- Never use a <div> where a semantic HTML element works
- Never skip alt text on an image
- Never suppress a TypeScript error with @ts-ignore without a comment
- Never deploy without running npm run build locally first
- Never deploy without checking Lighthouse scores on the production URL