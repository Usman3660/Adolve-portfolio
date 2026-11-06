# Filma Studio: Exact Clone Specification & Requirements Document

## 1. System Overview
Create an exact, pixel-perfect clone of `filmastudio.com`. The site is an editorial creative production studio platform prioritizing cinematic motion design, interactive card states, full-screen red curtain page wipes, and an interactive pricing configurator.

---

## 2. Technical Stack
- **Framework:** Next.js (App Router, React 19, TypeScript)
- **Styling:** Tailwind CSS with custom color tokens
- **Animations:** Framer Motion (staggered typography, curtain reveals, physics springs)
- **Smooth Scroll:** Lenis (`@studio-freight/lenis` or `lenis/react`)
- **Icons:** Lucide React
- **Typography:**
  - Headers & Display: High-contrast Grotesk Sans (`Inter` / `Cabinet Grotesk`)
  - Metadata & System Timecodes: Monospace (`Geist Mono` / `JetBrains Mono`)

---

## 3. Detailed Component & Motion Specifications

### A. Red Curtain Page Transitions (`components/CurtainTransition.tsx`)
- On route change / link navigation, an overlay curtain with background color `#b91c1c` (Crimson Red) sweeps up from `translateY(100%)` to `0%`.
- In the center of the curtain, the destination page name appears in large, bold uppercase lettering (`ABOUT`, `CONTACT`, `WORK`, `PRICING`).
- Once route data hydrates, the curtain continues sliding upward to `translateY(-100%)`, revealing the new page.

### B. Interactive Hero Floating Reels (`components/HeroReels.tsx`)
- Moving the mouse across the hero title ("WE MAKE BRANDS IMPOSSIBLE TO SCROLL PAST.") dynamically spawns or tracks vertical 9:16 preview clips.
- Each preview card includes:
  - An autoplaying, looping video preview.
  - A running SMPTE timecode (`00:00:06:12`).
  - An attached red pill cursor badge reading `CLICK TO PLAY REEL`.
- Clicking opens the global video modal player.

### C. Red Card Hover Inversions (`components/ServicesTable.tsx`)
- Service rows (`VIDEO ADS`, `PRODUCT PHOTOGRAPHY`, `RESTAURANT SHOOTS`, `AMAZON CONTENT`):
  - Default: Pure black background, white text, subtle bottom border `#1f1f1f`.
  - Hover: Instant or smooth background fill with `#b91c1c` (Crimson Red), changing typography to pure white/black with an arrow indicator.

### D. Multi-Step Pricing Engine (`components/PricingCalculator.tsx`)
- 4-Step Interactive Matrix:
  - `01 Need`: Video Ads, Photography, Graphic Design (multi-select).
  - `02 Brand Type`: E-commerce, Skincare, Makeup, Perfume, Fashion, Footwear, Food, Tech, etc.
  - `03 Model`: "With model" / "Without model".
  - `04 Frequency`: "One-off" / "Every month" (applies extra 10% discount).
- Dynamically recalculates three tiers:
  - **Starter:** Rs 50,000 (shows strike-through savings).
  - **Growth:** Rs 110,500 (tagged "Most Popular").
  - **Scale:** Rs 242,000.
- Dynamic WhatsApp Direct Link:
  - `https://wa.me/923190443003?text=[ENCODED_STRING]` pre-filling the selected package, brand type, and total calculated price.

### E. Studio Metadata & PKT Live Timecode
- Live Pakistan Standard Time (PKT, UTC+5) clock: `Bahria Orchard, Lahore`.
- Shows hours: `Mon to Sat, 10:00 to 19:00 PKT` with an active/closed indicator.