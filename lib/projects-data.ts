export interface CampaignTab {
  id: string;
  name: string;
  headline: string;
  description: string;
  videoUrl: string;
  imageUrl: string;
  duration: string;
  metrics?: { label: string; value: string }[];
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: "Video Ads" | "Product Shoots" | "E-commerce" | "Commercial";
  tagline: string;
  overview: string;
  heroImage: string;
  videoUrl: string;
  timecode: string;
  challenge: string;
  solution: string;
  impact: string;
  stats: { label: string; value: string }[];
  deliverables: string[];
  credits: { role: string; name: string }[];
  quote?: { text: string; author: string; title: string };
  campaigns: CampaignTab[];
  gallery: string[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "zero-lifestyle",
    title: "Zero Lifestyle",
    client: "Zero Lifestyle Technologies",
    year: "2024",
    category: "Video Ads",
    tagline: "Futuristic wearable tech campaign built for aggressive scroll-stopping CTR.",
    overview:
      "A high-octane visual identity overhaul and commercial launch for Pakistan's leading smart-wearable brand. Crafted to rival international tech giants with tactile macro shots, cybernetic lighting, and kinetic sound design.",
    heroImage:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1920&q=85",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-futuristic-man-wearing-high-tech-glasses-41617-large.mp4",
    timecode: "TC 00:01:14:18",
    challenge:
      "Zero Lifestyle was facing ad fatigue across Meta and TikTok. The generic product renders and standard unboxing formats were drowning in a saturated direct-to-consumer gadget feed with sub-1% click-through rates.",
    solution:
      "We conceived an editorial-grade cybernetic aesthetic shot on cinema glass with anamorphic flare, tactile macro water-resistance physics, and heavy sub-bass rhythmic cuts that hook viewers within the first 0.6 seconds.",
    impact:
      "Delivered a 3.4x spike in ROAS within the initial 14 days of flighting, generating over 4.8 million organic and paid impressions nationwide.",
    stats: [
      { label: "ROAS Increase", value: "+340%" },
      { label: "3s Hook Retention", value: "68.4%" },
      { label: "Total Reach", value: "4.8M+" },
      { label: "CPA Reduction", value: "-42%" },
    ],
    deliverables: [
      "4x 4K Master Hero Commercials (16:9)",
      "12x High-Velocity Social Cuts (9:16)",
      "24x Retouched Color-Graded Product Stills",
      "Custom Foley & Sound Mix Deliverables",
    ],
    credits: [
      { role: "Director", name: "Harmas Talha" },
      { role: "Director of Photography", name: "Saad Mir" },
      { role: "Executive Producer", name: "Muhammad Affan Mavia" },
      { role: "Colorist", name: "Filma Color Studio (DaVinci)" },
      { role: "Sound Designer", name: "Ayan Rauf" },
    ],
    quote: {
      text: "Filma elevated our product tier overnight. People assumed this was an Apple or Nothing Tech global commercial. The conversions spoke for themselves.",
      author: "Danyal S.",
      title: "Head of Growth, Zero Lifestyle",
    },
    campaigns: [
      {
        id: "c01",
        name: "Campaign 01",
        headline: "Quantum Pulse · The Flagship Hero",
        description:
          "Explosive introduction emphasizing biometric precision and waterproof tactile dynamics in pitch-black low light environments.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-futuristic-man-wearing-high-tech-glasses-41617-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:30:00",
        metrics: [
          { label: "Completion Rate", value: "48%" },
          { label: "Conversions", value: "12,400+" },
        ],
      },
      {
        id: "c02",
        name: "Campaign 02",
        headline: "Midnight Drift · Lifestyle in Motion",
        description:
          "Urban nighttime sequence tracing athletes navigating Lahore's neon streets under monsoon rain, testing the rugged water seals.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-athlete-training-on-a-rooftop-at-night-42436-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1510519138161-58474ebf8993?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:20:12",
        metrics: [
          { label: "CTR", value: "3.8%" },
          { label: "Engagement", value: "94k Likes" },
        ],
      },
      {
        id: "c03",
        name: "Campaign 03",
        headline: "Micro-Mechanics · Anamorphic Macro",
        description:
          "Zero-gravity rotating product explode view capturing precision titanium chassis and OLED display depth.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31912-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:15:00",
        metrics: [
          { label: "Sales Lift", value: "+185%" },
          { label: "Saved Ads", value: "18.2k" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1510519138161-58474ebf8993?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: true,
  },
  {
    slug: "pheralab",
    title: "PheraLab",
    client: "PheraLab Skin Science",
    year: "2024",
    category: "Product Shoots",
    tagline: "Minimalist clinical skincare aesthetic captured in high-key monochrome elegance.",
    overview:
      "A clinical yet luxury product showcase for an organic dermatological formulation brand. Highlighting texture viscosity, glass refraction, and pure botanical integrity.",
    heroImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1920&q=85",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-pipette-dropping-serum-into-a-bottle-43180-large.mp4",
    timecode: "TC 00:00:48:12",
    challenge:
      "Skin brands frequently look synthetic or cluttered. PheraLab needed to communicate molecular efficacy while maintaining warm, touchable organic purity on Shopify and Amazon A+ displays.",
    solution:
      "Architected a custom studio lighting setup with directional prism lenses, water ripple caustics, and super-slow motion pipette drips on an optical fluid table.",
    impact:
      "Amazon listing conversion rate increased from 11.2% to 26.8% with zero other changes to copy or pricing.",
    stats: [
      { label: "Amazon CVR Lift", value: "2.4x" },
      { label: "Listing Bounce Rate", value: "-35%" },
      { label: "Assets Delivered", value: "48+" },
      { label: "Turnaround Time", value: "6 Days" },
    ],
    deliverables: [
      "16x Amazon A+ Enhanced Brand Content Assets",
      "6x Texture Viscosity Reels (9:16)",
      "32x Master Retouched E-Commerce Packshots",
      "Website Hero Background Loop (16:9 4K)",
    ],
    credits: [
      { role: "Creative Director", name: "Harmas Talha" },
      { role: "Product Stylist", name: "Zainab Raza" },
      { role: "Lighting Director", name: "Bilal Cheema" },
      { role: "Post Production", name: "Filma Studio" },
    ],
    quote: {
      text: "Our Amazon storefront looks like Le Labo or Aesop. Filma transformed simple bottles into objects of obsession.",
      author: "Mariam K.",
      title: "Founder, PheraLab",
    },
    campaigns: [
      {
        id: "c01",
        name: "Campaign 01",
        headline: "Viscosity & Light · Clinical Extraction",
        description:
          "Macro capture of raw organic formulation descending into frosted glass, illuminated by golden hour prism caustics.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-pipette-dropping-serum-into-a-bottle-43180-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:24:00",
        metrics: [
          { label: "Add to Cart Rate", value: "19.4%" },
          { label: "Time on Page", value: "+1m 45s" },
        ],
      },
      {
        id: "c02",
        name: "Campaign 02",
        headline: "Skin Barrier · Dermal Emulsion",
        description:
          "Close-up tactile application demonstrating rapid absorption and non-comedogenic silk finish.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-applying-moisturizer-to-face-skin-43182-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:18:14",
        metrics: [
          { label: "Video Views", value: "1.2M" },
          { label: "Saves", value: "43k" },
        ],
      },
      {
        id: "c03",
        name: "Campaign 03",
        headline: "Monochrome Grid · Minimal Packshots",
        description:
          "Editorial e-commerce imagery engineered for high-density Shopify grid layouts and banner carousels.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-pipette-dropping-serum-into-a-bottle-43180-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1608248597359-00918090535e?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:15:00",
        metrics: [
          { label: "Units Sold", value: "8,500+" },
          { label: "Wholesale Enquiries", value: "+300%" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608248597359-00918090535e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: true,
  },
  {
    slug: "jacob-and-isaac",
    title: "Jacob & Isaac",
    client: "Jacob & Isaac Bespoke Tailoring",
    year: "2024",
    category: "Commercial",
    tagline: "Timeless artisanal sartorial craftsmanship filmed on 35mm grain aesthetics.",
    overview:
      "A cinematic legacy profile of Lahore's premier heritage bespoke tailor. Celebrating the tactile heritage of handmade woolen suiting, horn buttons, and master cutter shears.",
    heroImage:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1920&q=85",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-tailor-working-with-measuring-tape-in-his-workshop-43033-large.mp4",
    timecode: "TC 00:02:05:08",
    challenge:
      "Modern fast fashion made younger professionals forget the luxury of bespoke craftsmanship. Jacob & Isaac wanted to attract a new generation of high-net-worth clients without cheapening their 40-year legacy.",
    solution:
      "We produced an editorial documentary commercial featuring authentic wool chalking, steam pressing, and dramatic chiaroscuro workshop lighting reminiscent of Savile Row.",
    impact:
      "Generated a 6-month waitlist for wedding season suiting and expanded custom shirt orders by 220%.",
    stats: [
      { label: "Waitlist Duration", value: "6 Months" },
      { label: "Average Order Value", value: "Rs 140k" },
      { label: "Brand Recall", value: "92%" },
      { label: "In-store Walk-ins", value: "+78%" },
    ],
    deliverables: [
      "1x 2-Minute Brand Manifesto Film (Cinema 2.39:1)",
      "4x Bespoke Craftsmanship Vignettes",
      "18x Film-Emulated Editorial Stills",
      "Instagram Story Teaser Series",
    ],
    credits: [
      { role: "Director", name: "Harmas Talha" },
      { role: "Cinematographer", name: "Saad Mir" },
      { role: "Producer", name: "Muhammad Affan Mavia" },
      { role: "Original Score", name: "Lahore Sound Collective" },
    ],
    quote: {
      text: "The film touched our customers so deeply they walked in quoting lines from our manifesto. A masterpiece of editorial storytelling.",
      author: "Tariq Isaac",
      title: "Master Tailor & Founder",
    },
    campaigns: [
      {
        id: "c01",
        name: "Campaign 01",
        headline: "The First Stitch · Heritage Master",
        description:
          "Intimate cinematic profile on the chalking and shearing of English flannel wool.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-tailor-working-with-measuring-tape-in-his-workshop-43033-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
        duration: "00:01:10:00",
        metrics: [
          { label: "Shares", value: "12,000+" },
          { label: "Watch Time", value: "91%" },
        ],
      },
      {
        id: "c02",
        name: "Campaign 02",
        headline: "The Silhouette · Modern Fit",
        description:
          "Editorial sequence showing modern Pakistani executives draped in sharp double-breasted charcoal tailoring.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-man-fastening-the-buttons-of-his-suit-jacket-42642-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:30:16",
        metrics: [
          { label: "Direct Inquiries", value: "480+" },
          { label: "Engagement", value: "88%" },
        ],
      },
      {
        id: "c03",
        name: "Campaign 03",
        headline: "Details of Distinction",
        description:
          "Extreme macro cinematography tracking horn button attachment, hand-sewn lapel milanese buttonholes, and cupro silk lining.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-tailor-working-with-measuring-tape-in-his-workshop-43033-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:20:00",
        metrics: [
          { label: "Saves", value: "8,900" },
          { label: "Brand Equity", value: "Top Tier" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: true,
  },
  {
    slug: "broastiano",
    title: "Broastiano",
    client: "Broastiano Gourmet Fried Chicken",
    year: "2024",
    category: "Video Ads",
    tagline: "Sensory food cinematography that triggered viral midnight hunger cravings.",
    overview:
      "A fast-paced, saliva-inducing commercial launch campaign for Lahore's hottest new crisp-fried chicken concept. Built with synchronized ASMR sound design and ultra slow-motion oil sizzles.",
    heroImage:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1920&q=85",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-frying-chicken-drumsticks-in-boiling-oil-42861-large.mp4",
    timecode: "TC 00:00:36:12",
    challenge:
      "Food delivery competition in Gulberg and DHA is brutally saturated. Standard flat menu photography failed to transmit the signature golden crunch and secret spice oil glaze.",
    solution:
      "Filmed with high-speed 120fps Phantom-style rigs, dynamic push-in probes inside the fryer basket, honey drizzle cascades, and hyper-amplified bite crunch audio.",
    impact:
      "The viral launch reel hit 1.8M views in 5 days, causing the branch to sell out of chicken 4 hours before closing for 3 consecutive weeks.",
    stats: [
      { label: "Organic Views", value: "1.8M+" },
      { label: "Sell-out Days", value: "21 Days" },
      { label: "Delivery Orders", value: "+410%" },
      { label: "Foodpanda Rank", value: "#1 Top Rated" },
    ],
    deliverables: [
      "1x 45s Main Brand Launch Commercial",
      "8x Midnight Craving TikTok Hooks",
      "15x Menu Hero Food Photography Assets",
      "Master ASMR Audio Stems Library",
    ],
    credits: [
      { role: "Director & DP", name: "Harmas Talha" },
      { role: "Food Stylist", name: "Chef Farooq" },
      { role: "Audio Engineer", name: "Ayan Rauf" },
      { role: "Project Manager", name: "Muhammad Affan Mavia" },
    ],
    quote: {
      text: "We had lines wrapped around the street block on opening weekend purely because of that crunch sound effect and smoke shot. Unbelievable production.",
      author: "Shehroz A.",
      title: "Co-Founder, Broastiano",
    },
    campaigns: [
      {
        id: "c01",
        name: "Campaign 01",
        headline: "The Golden Fracture · ASMR Crunch",
        description:
          "Macro slow-motion cross-section pull apart revealing tender steam, flaky golden crust, and spicy dip plunge.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-frying-chicken-drumsticks-in-boiling-oil-42861-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:20:00",
        metrics: [
          { label: "Viral Reach", value: "1.4M" },
          { label: "Saves", value: "62,000" },
        ],
      },
      {
        id: "c02",
        name: "Campaign 02",
        headline: "Midnight Hunger · Red Alert",
        description:
          "Aggressive red-neon montage designed to trigger impulsive late-night food deliveries between 11 PM and 3 AM.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-chef-plating-a-delicious-meal-43093-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:15:00",
        metrics: [
          { label: "Late Night Orders", value: "+380%" },
          { label: "ROAS", value: "5.2x" },
        ],
      },
      {
        id: "c03",
        name: "Campaign 03",
        headline: "The Secret Glaze · Slow Drizzle",
        description:
          "Backlit amber syrup cascading over freshly drained spiced drumsticks in glorious high-definition clarity.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-frying-chicken-drumsticks-in-boiling-oil-42861-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:12:00",
        metrics: [
          { label: "Completion Rate", value: "74%" },
          { label: "Re-shares", value: "19.5k" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: true,
  },
  {
    slug: "lumina-botanicals",
    title: "Lumina Botanicals",
    client: "Lumina Organic Perfumery",
    year: "2023",
    category: "E-commerce",
    tagline: "Ethereal scent visualization through liquid mist and raw organic botanicals.",
    overview:
      "High-end fragrance launch exploring scent architecture through misty glass reflections, blooming damask roses, and heavy amber resins.",
    heroImage:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1920&q=85",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-spraying-perfume-in-slow-motion-42878-large.mp4",
    timecode: "TC 00:00:52:16",
    challenge:
      "You cannot smell a screen. How do you sell a PKR 18,000 artisanal perfume bottle purely through digital creative?",
    solution:
      "We engineered sensory synesthesia: macro atomized mist particles catching horizontal anamorphic light flares, tactile botanical crush physics, and intimate whispered vocal cues.",
    impact:
      "First batch of 2,000 bottles sold out online in 72 hours, expanding distributor orders across the UAE and UK.",
    stats: [
      { label: "Inventory Sellout", value: "72 Hours" },
      { label: "International CVR", value: "4.6%" },
      { label: "AOV", value: "PKR 18,500" },
      { label: "Organic Reach", value: "950K" },
    ],
    deliverables: [
      "2x 60s Poetic Brand Commercials",
      "6x Scent Family Vignettes (Woody, Floral, Amber)",
      "20x High-Key Refractive Product Packshots",
      "Shopify Interactive Lookbook Media Kit",
    ],
    credits: [
      { role: "Director", name: "Harmas Talha" },
      { role: "Lighting Tech", name: "Bilal Cheema" },
      { role: "Executive Producer", name: "Muhammad Affan Mavia" },
    ],
    quote: {
      text: "Filma made our perfumes visible to the soul. Customers told us they bought the fragrance because the film made them feel what it smells like.",
      author: "Hina Mansoor",
      title: "Master Nose & Co-founder",
    },
    campaigns: [
      {
        id: "c01",
        name: "Campaign 01",
        headline: "The Atomizer · Golden Mist",
        description:
          "Ultra slow-motion 240fps capture of fine scent atomization backlit by warm amber studio spotlights.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-spraying-perfume-in-slow-motion-42878-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:25:00",
        metrics: [
          { label: "Watch Completion", value: "82%" },
          { label: "Pre-orders", value: "1,200" },
        ],
      },
      {
        id: "c02",
        name: "Campaign 02",
        headline: "Oud Royale · Heavy Resin",
        description:
          "Chiaroscuro shadow play capturing aged Cambodian agarwood smoke and gold flaked flacons.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-pipette-dropping-serum-into-a-bottle-43180-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:20:00",
        metrics: [
          { label: "CTR", value: "4.2%" },
          { label: "Saves", value: "31k" },
        ],
      },
      {
        id: "c03",
        name: "Campaign 03",
        headline: "Flora Alba · Dewdrop Petals",
        description:
          "Fresh morning dewdrops cascading across crushed Bulgarian rose petals onto crystalline perfume caps.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-spraying-perfume-in-slow-motion-42878-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:18:00",
        metrics: [
          { label: "Reach", value: "620k" },
          { label: "Brand Mentions", value: "+450%" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: false,
  },
  {
    slug: "hi-street",
    title: "Hi Street",
    client: "Hi Street Footwear",
    year: "2024",
    category: "E-commerce",
    tagline: "A Black Friday campaign, premium reels and product creatives.",
    overview:
      "A high-converting Black Friday campaign, premium reels and tactile product creatives crafted for aggressive scroll-stopping footwear conversions.",
    heroImage:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1400&q=85",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-heels-walking-in-slow-motion-41865-large.mp4",
    timecode: "TC 00:00:36:12",
    challenge:
      "Hi Street needed a breakout creative campaign to capture high-intent Q4 shoppers without getting lost in the Black Friday discount noise.",
    solution:
      "We engineered high-definition macro shoe physics, kinetic camera fly-throughs, and dynamic speed ramps highlighting sole flex and breathable mesh textures.",
    impact:
      "Generated over 3.2M impressions and delivered a 4.1x blended ROAS during the holiday flighting period.",
    stats: [
      { label: "ROAS Spike", value: "+410%" },
      { label: "Total Views", value: "3.2M+" },
      { label: "Add-to-Cart Lift", value: "+54%" },
      { label: "Return on Ad Spend", value: "4.1x" },
    ],
    deliverables: [
      "2x 4K Master Commercials",
      "8x 9:16 Social Ads",
      "16x Retouched Product Stills",
      "Custom Foley Sound Mix",
    ],
    credits: [
      { role: "Director", name: "Harmas Talha" },
      { role: "Director of Photography", name: "Saad Mir" },
      { role: "Executive Producer", name: "Muhammad Affan Mavia" },
    ],
    campaigns: [
      {
        id: "c01",
        name: "Campaign 01",
        headline: "Gravity Defier · Black Friday Hero",
        description:
          "Weightless sneaker suspension and tactile macro sole dynamics in dark studio lighting.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-heels-walking-in-slow-motion-41865-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:20:00",
        metrics: [
          { label: "Completion Rate", value: "52%" },
          { label: "Direct Sales", value: "8,900+" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: true,
  },
  {
    slug: "bunzos",
    title: "Bunzos",
    client: "Bunzos Gourmet Burgers",
    year: "2024",
    category: "Commercial",
    tagline: "Creative images, a video for every menu item and a main brand film.",
    overview:
      "Creative images, a video for every menu item and a main brand film shot in mouthwatering, high-heat commercial food cinematography.",
    heroImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=85",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-with-fire-in-a-kitchen-42023-large.mp4",
    timecode: "TC 00:00:44:08",
    challenge:
      "Bunzos needed fresh, appetizing content to drive footfall to new flagship locations and aggressively expand food delivery orders across foodpanda.",
    solution:
      "We produced high-speed macro sizzle reels with caramelized burger patties, crisp salted fries, and cold soda condensation with binaural ASMR sound design.",
    impact:
      "Delivered a 28% increase in weekend footfall and drove delivery order surges across all operating branches.",
    stats: [
      { label: "Delivery Surge", value: "+38%" },
      { label: "Video Engagement", value: "82%" },
      { label: "Footfall Lift", value: "+28%" },
      { label: "Impressions", value: "2.4M" },
    ],
    deliverables: [
      "1x Master Brand Film",
      "10x Menu Item Spotlight Videos",
      "25x Commercial Food Photos",
      "Binaural Sizzle Sound Library",
    ],
    credits: [
      { role: "Director", name: "Saad Mir" },
      { role: "Lead Food Stylist", name: "Zainab Raza" },
      { role: "Executive Producer", name: "Muhammad Affan Mavia" },
    ],
    campaigns: [
      {
        id: "c01",
        name: "Campaign 01",
        headline: "The Sizzle Reel · Flagship Film",
        description:
          "High-speed flames, melting sharp cheddar, and golden fries in cinematic macro clarity.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-with-fire-in-a-kitchen-42023-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:25:00",
        metrics: [
          { label: "Retention Rate", value: "71%" },
          { label: "Viral Shares", value: "18k+" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: true,
  },
  {
    slug: "krave-streetwear",
    title: "Krave Streetwear",
    client: "Krave Heavyweight Apparel",
    year: "2024",
    category: "Video Ads",
    tagline: "Raw underground heavy-cotton streetwear lookbook set against Lahore's brutalist architecture.",
    overview:
      "A raw, 90s camcorder mixed with cinema-grade anamorphic visual campaign highlighting 480GSM loopback cotton hoodies and distressed denim in urban concrete spaces.",
    heroImage:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1920&q=85",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-young-man-wearing-streetwear-walking-under-an-overpass-42438-large.mp4",
    timecode: "TC 00:01:02:04",
    challenge:
      "Local streetwear brands were all relying on standard low-effort mirror selfies. Krave wanted to establish heavy editorial credibility and charge premium international-tier prices.",
    solution:
      "Created an intense, rapid-fire cinematic reel pairing industrial sound design with 16mm film emulation, tracking models through Lahore's architectural underpasses and brutalist concrete structures.",
    impact:
      "Entire capsule drop of 1,500 hoodies sold out in under 9 minutes on drop night.",
    stats: [
      { label: "Drop Sellout", value: "8m 42s" },
      { label: "Instagram Followers", value: "+28k" },
      { label: "TikTok Viral Sound", value: "4.2M Uses" },
      { label: "AOV Lift", value: "+65%" },
    ],
    deliverables: [
      "1x Streetwear Anthem Film (9:16)",
      "8x TikTok/Reels Dynamic Fit Checks",
      "30x Editorial Film-Grain Lookbook Images",
      "Custom Typography & Title Design Package",
    ],
    credits: [
      { role: "Director", name: "Harmas Talha" },
      { role: "Editor", name: "Filma Studio" },
      { role: "Stylist", name: "Daniyal Q." },
      { role: "Colorist", name: "Filma DaVinci Lab" },
    ],
    campaigns: [
      {
        id: "c01",
        name: "Campaign 01",
        headline: "Concrete & Thread · The Overpass",
        description:
          "Fast shutter speed, Dutch angle cinematography capturing heavyweight hoodie silhouettes under flickering streetlamps.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-young-man-wearing-streetwear-walking-under-an-overpass-42438-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:22:00",
        metrics: [
          { label: "TikTok Views", value: "2.1M" },
          { label: "Pre-registrations", value: "8,400" },
        ],
      },
      {
        id: "c02",
        name: "Campaign 02",
        headline: "Texture Heavy · 480 GSM",
        description:
          "Extreme macro detailing of double-needle stitching, raw distressed hem cuffs, and high-density puff print.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-athlete-training-on-a-rooftop-at-night-42436-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:14:18",
        metrics: [
          { label: "Saved Ads", value: "24k" },
          { label: "Shares", value: "11k" },
        ],
      },
      {
        id: "c03",
        name: "Campaign 03",
        headline: "Night Velocity · Flash Aesthetic",
        description:
          "Direct flash 35mm film stills woven into high-tempo rhythmic beats.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-young-man-wearing-streetwear-walking-under-an-overpass-42438-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:15:00",
        metrics: [
          { label: "ROAS", value: "6.1x" },
          { label: "Site Visitors", value: "140k" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: false,
  },
  {
    slug: "hi-street",
    title: "Hi Street",
    client: "Hi Street Footwear",
    year: "2024",
    category: "E-commerce",
    tagline: "A Black Friday campaign, premium reels and product creatives.",
    overview:
      "A high-converting Black Friday campaign, premium reels and tactile product creatives crafted for aggressive scroll-stopping footwear conversions.",
    heroImage:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1400&q=85",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-heels-walking-in-slow-motion-41865-large.mp4",
    timecode: "TC 00:00:36:12",
    challenge:
      "Hi Street needed a breakout creative campaign to capture high-intent Q4 shoppers without getting lost in the Black Friday discount noise.",
    solution:
      "We engineered high-definition macro shoe physics, kinetic camera fly-throughs, and dynamic speed ramps highlighting sole flex and breathable mesh textures.",
    impact:
      "Generated over 3.2M impressions and delivered a 4.1x blended ROAS during the holiday flighting period.",
    stats: [
      { label: "ROAS Spike", value: "+410%" },
      { label: "Total Views", value: "3.2M+" },
      { label: "Add-to-Cart Lift", value: "+54%" },
      { label: "Return on Ad Spend", value: "4.1x" },
    ],
    deliverables: [
      "2x 4K Master Commercials",
      "8x 9:16 Social Ads",
      "16x Retouched Product Stills",
      "Custom Foley Sound Mix",
    ],
    credits: [
      { role: "Director", name: "Harmas Talha" },
      { role: "Director of Photography", name: "Saad Mir" },
      { role: "Executive Producer", name: "Muhammad Affan Mavia" },
    ],
    campaigns: [
      {
        id: "c01",
        name: "Campaign 01",
        headline: "Gravity Defier · Black Friday Hero",
        description:
          "Weightless sneaker suspension and tactile macro sole dynamics in dark studio lighting.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-fashion-model-in-heels-walking-in-slow-motion-41865-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:20:00",
        metrics: [
          { label: "Completion Rate", value: "52%" },
          { label: "Direct Sales", value: "8,900+" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: true,
  },
  {
    slug: "bunzos",
    title: "Bunzos",
    client: "Bunzos Gourmet Burgers",
    year: "2024",
    category: "Commercial",
    tagline: "Creative images, a video for every menu item and a main brand film.",
    overview:
      "Creative images, a video for every menu item and a main brand film shot in mouthwatering, high-heat commercial food cinematography.",
    heroImage:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=85",
    videoUrl:
      "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-with-fire-in-a-kitchen-42023-large.mp4",
    timecode: "TC 00:00:44:08",
    challenge:
      "Bunzos needed fresh, appetizing content to drive footfall to new flagship locations and aggressively expand food delivery orders across foodpanda.",
    solution:
      "We produced high-speed macro sizzle reels with caramelized burger patties, crisp salted fries, and cold soda condensation with binaural ASMR sound design.",
    impact:
      "Delivered a 28% increase in weekend footfall and drove delivery order surges across all operating branches.",
    stats: [
      { label: "Delivery Surge", value: "+38%" },
      { label: "Video Engagement", value: "82%" },
      { label: "Footfall Lift", value: "+28%" },
      { label: "Impressions", value: "2.4M" },
    ],
    deliverables: [
      "1x Master Brand Film",
      "10x Menu Item Spotlight Videos",
      "25x Commercial Food Photos",
      "Binaural Sizzle Sound Library",
    ],
    credits: [
      { role: "Director", name: "Saad Mir" },
      { role: "Lead Food Stylist", name: "Zainab Raza" },
      { role: "Executive Producer", name: "Muhammad Affan Mavia" },
    ],
    campaigns: [
      {
        id: "c01",
        name: "Campaign 01",
        headline: "The Sizzle Reel · Flagship Film",
        description:
          "High-speed flames, melting sharp cheddar, and golden fries in cinematic macro clarity.",
        videoUrl:
          "https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-dish-with-fire-in-a-kitchen-42023-large.mp4",
        imageUrl:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
        duration: "00:00:25:00",
        metrics: [
          { label: "Retention Rate", value: "71%" },
          { label: "Viral Shares", value: "18k+" },
        ],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
    ],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getNextProject(currentSlug: string): Project {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % PROJECTS.length;
  return PROJECTS[nextIndex];
}

