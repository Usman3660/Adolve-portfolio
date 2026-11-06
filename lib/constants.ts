export interface FloatingReel {
  id: string;
  title: string;
  brand: string;
  timecode: string;
  videoUrl: string;
  aspect: string;
  thumbnail: string;
}

export const HERO_FLOATING_REELS: FloatingReel[] = [
  {
    id: "reel-01",
    title: "Quantum Biometrics",
    brand: "Zero Lifestyle",
    timecode: "00:00:08:12",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-futuristic-man-wearing-high-tech-glasses-41617-large.mp4",
    aspect: "aspect-[9/16]",
    thumbnail:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "reel-02",
    title: "Clinical Texture Viscosity",
    brand: "PheraLab Skincare",
    timecode: "00:00:14:04",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-pipette-dropping-serum-into-a-bottle-43180-large.mp4",
    aspect: "aspect-[9/16]",
    thumbnail:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "reel-03",
    title: "Midnight Fryer ASMR",
    brand: "Broastiano",
    timecode: "00:00:22:18",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-frying-chicken-drumsticks-in-boiling-oil-42861-large.mp4",
    aspect: "aspect-[9/16]",
    thumbnail:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "reel-04",
    title: "Sartorial 35mm Wool",
    brand: "Jacob & Isaac",
    timecode: "00:00:31:00",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-tailor-working-with-measuring-tape-in-his-workshop-43033-large.mp4",
    aspect: "aspect-[9/16]",
    thumbnail:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80",
  },
];

export interface ServiceItem {
  number: string;
  name: string;
  category: "01 PRODUCTION" | "02 MARKETING & GROWTH";
  deliverables: string;
  leadTime: string;
  tag: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  // 01 Production
  {
    number: "01",
    name: "Commercial Video Ads (4K Cinema)",
    category: "01 PRODUCTION",
    deliverables: "High-octane commercial cuts, 16:9 hero & 9:16 vertical ads",
    leadTime: "6 – 8 Days",
    tag: "Cinema Glass",
  },
  {
    number: "02",
    name: "Tactile Macro & Fluid Dynamics",
    category: "01 PRODUCTION",
    deliverables: "Liquid splash tables, pipette drips, high-speed 120fps rigs",
    leadTime: "4 – 6 Days",
    tag: "Probe Lens",
  },
  {
    number: "03",
    name: "Sensory Food & ASMR Frying Shoots",
    category: "01 PRODUCTION",
    deliverables: "Hyper-crisp audio foley, slow-mo sizzles, sauce cascades",
    leadTime: "5 – 7 Days",
    tag: "ASMR Audio",
  },
  {
    number: "04",
    name: "Editorial Fashion Lookbook Films",
    category: "01 PRODUCTION",
    deliverables: "Model styling, streetwear cinematic movement, 35mm grain",
    leadTime: "7 – 9 Days",
    tag: "Editorial",
  },
  {
    number: "05",
    name: "DaVinci Resolve Studio Color Grading",
    category: "01 PRODUCTION",
    deliverables: "Kodak 2383 film emulation, calibrated Rec.709 & ACES grade",
    leadTime: "48 Hours",
    tag: "Color Lab",
  },

  // 02 Marketing & Growth
  {
    number: "06",
    name: "Meta & TikTok Scroll-Stopping Hooks",
    category: "02 MARKETING & GROWTH",
    deliverables: "0.6-second hook variants to eliminate ad fatigue",
    leadTime: "3 – 5 Days",
    tag: "Performance",
  },
  {
    number: "07",
    name: "Amazon A+ Brand Content & Modules",
    category: "02 MARKETING & GROWTH",
    deliverables: "Conversion-optimized storefront banners & comparison charts",
    leadTime: "4 – 6 Days",
    tag: "Amazon A+",
  },
  {
    number: "08",
    name: "Shopify PDP High-Key Packshots",
    category: "02 MARKETING & GROWTH",
    deliverables: "Clean-edge retouched e-commerce product catalog stills",
    leadTime: "3 – 4 Days",
    tag: "E-Commerce",
  },
  {
    number: "09",
    name: "Creative Direct-Response Testing Engine",
    category: "02 MARKETING & GROWTH",
    deliverables: "A/B creative iteration sprints tied directly to ROAS velocity",
    leadTime: "Weekly Sprints",
    tag: "ROAS Scaling",
  },
];

