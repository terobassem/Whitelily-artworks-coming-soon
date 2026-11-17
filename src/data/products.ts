import { ArtworkProduct } from "@/types";

export const PRODUCTS: ArtworkProduct[] = [
  {
    id: "wl-001",
    slug: "solace-in-terracotta-and-gold",
    name: "Solace in Terracotta & Gold",
    category: "Textured Canvas",
    price: 480,
    originalPrice: 550,
    description: "An expressive mixed-media relief canvas balancing organic mineral plaster, hand-gilded 24k gold leaf accents, and warm terracotta washes.",
    story: "Created during Lydia's residency along the Mediterranean coast, this piece captures the warmth of sundrenched cliffs and ancient clay pottery. The relief plaster is sculpted layer by layer with palette knives over three weeks.",
    dimensions: "80 x 100 cm (31.5 x 39.4 in)",
    medium: "Mineral textured plaster, crushed sandstone, pure acrylics, and genuine gold leaf on premium European linen canvas",
    year: 2026,
    isOneOfAKind: true,
    isFeatured: true,
    isNewArrival: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop"
    ],
    palette: ["#B87862", "#D6B75D", "#F6F0E5", "#244C43"],
    tags: ["Textured Plaster", "Gilded Gold", "Warm Modern", "One of a Kind"]
  },
  {
    id: "wl-002",
    slug: "oceanic-depths-emerald-teal",
    name: "Oceanic Depths: Emerald & Deep Teal",
    category: "Resin & Mixed Media",
    price: 620,
    description: "Deep crystalline epoxy resin poured in multi-dimensional liquid strata with powdered mica, deep teal pigments, and subtle coral veins.",
    story: "Lydia explored light refraction through deep marine depths. The mirror-like resin surface refracts natural ambient sunlight throughout the day, shifting from dark midnight teal to shimmering jade.",
    dimensions: "90 x 90 cm (35.4 x 35.4 in)",
    medium: "Multi-layered art-grade resin, pulverized malachite, liquid gold dust, acrylic pigments on braced birch wood panel",
    year: 2026,
    isOneOfAKind: true,
    isFeatured: true,
    isNewArrival: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop"
    ],
    palette: ["#244C43", "#A9B99D", "#D6B75D", "#E6A18D"],
    tags: ["Resin Art", "Deep Teal", "Statement Wall", "High Gloss"]
  },
  {
    id: "wl-003",
    slug: "coral-dawn-abstract-diptych",
    name: "Coral Dawn: Ethereal Diptych",
    category: "Fluid Art",
    price: 740,
    originalPrice: 820,
    description: "A two-piece panoramic abstract study featuring blossoming warm coral, sage green mists, and delicate gold veining across two matching canvases.",
    story: "Inspired by the quiet dawn stillness before morning begins. Designed to be hung side-by-side or separated across a transitional hallway for artistic continuity.",
    dimensions: "Two panels, each 60 x 90 cm (Total width 125 cm with spacing)",
    medium: "High-flow artist acrylics, botanical pigment extracts, satin polymer finish on gallery-wrapped cotton",
    year: 2026,
    isOneOfAKind: true,
    isFeatured: true,
    isNewArrival: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582561141315-9a842f10b7a8?q=80&w=1200&auto=format&fit=crop"
    ],
    palette: ["#E6A18D", "#F6F0E5", "#A9B99D", "#D6B75D"],
    tags: ["Diptych", "Fluid Abstract", "Warm Coral", "Bespoke"]
  },
  {
    id: "wl-004",
    slug: "whispering-flora-botanical-relief",
    name: "Whispering Flora: Sculpted Botanical Panel",
    category: "Botanical Wall Art",
    price: 530,
    description: "Hand-molded botanical relief featuring stylized lily silhouettes, textured seed pods, and gilded pistils rising from warm ivory plaster.",
    story: "A signature WHITELILY homage: the lily represents purity, rebirth, and resilience. Lydia hand-sculpts every petal and leaf using archival modeling paste before sealing with organic matte wax.",
    dimensions: "70 x 100 cm (27.5 x 39.4 in)",
    medium: "Sculpted cellulose paste, calcium marble powder, gold gilding, beeswax sealant on custom cedar backing",
    year: 2026,
    isOneOfAKind: true,
    isFeatured: true,
    isNewArrival: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1582561141315-9a842f10b7a8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop"
    ],
    palette: ["#F6F0E5", "#A9B99D", "#D6B75D", "#244C43"],
    tags: ["Botanical", "White Lily", "Wall Sculpture", "Tactile"]
  },
  {
    id: "wl-005",
    slug: "terracotta-amphora-sculptural-vessel",
    name: "Aura Vessel: Hand-Coiled Terracotta & Teal",
    category: "Sculptural Vessels",
    price: 390,
    description: "An asymmetric sculptural vessel crafted using ancient hand-coiling techniques, finished with raw terracotta texture and a glazed deep teal lip.",
    story: "Balancing earthy raw terracotta with jewel-toned gloss glaze. Designed as a standalone artistic centerpiece or to hold dried palm fronds and sculptural pampas.",
    dimensions: "32 cm height x 24 cm diameter (12.6 x 9.4 in)",
    medium: "Egyptian red earthenware clay, hand-burnished slip, high-fire teal glaze, brass leaf inlays",
    year: 2026,
    isOneOfAKind: true,
    isFeatured: false,
    isNewArrival: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop"
    ],
    palette: ["#B87862", "#244C43", "#D6B75D"],
    tags: ["Ceramic", "Sculptural", "Handmade Pottery", "Warm Earth"]
  },
  {
    id: "wl-006",
    slug: "sage-serenity-minimalist-folds",
    name: "Sage Serenity: Minimalist Linen Folds",
    category: "Textured Canvas",
    price: 460,
    description: "Sculptural draped fabric infused with mineral plaster, frozen into wave-like architectural folds across a sage green and warm ivory ground.",
    story: "Inspired by the fluid drapes of classical renaissance sculpture, reimagined in contemporary minimalist serenity. The interplay of shadows changes dramatically with morning and evening light.",
    dimensions: "75 x 95 cm (29.5 x 37.4 in)",
    medium: "Raw unbleached linen, polymer plaster, powdered sage pigments, protective UV-resistant matte varnish",
    year: 2026,
    isOneOfAKind: true,
    isFeatured: false,
    isNewArrival: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop"
    ],
    palette: ["#A9B99D", "#F6F0E5", "#244C43"],
    tags: ["Minimalist", "Fabric Folds", "Sage Green", "Zen Luxury"]
  },
  {
    id: "wl-007",
    slug: "celestial-tide-gold-leaf-resin",
    name: "Celestial Tide: Gold Leaf & Deep Sea",
    category: "Resin & Mixed Media",
    price: 680,
    originalPrice: 760,
    description: "Swirling midnight teal and iridescent sage pigments suspended in crystal glass resin with suspended specks of 24k gold leaf foil.",
    story: "Each layer requires 48 hours to cure before subsequent pours, creating an astonishing sense of three-dimensional suspended motion.",
    dimensions: "100 x 100 cm (39.4 x 39.4 in)",
    medium: "Cured optical resin, genuine gold leaf, marine pigments, kiln-dried birch cradle",
    year: 2026,
    isOneOfAKind: true,
    isFeatured: true,
    isNewArrival: true,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop"
    ],
    palette: ["#244C43", "#D6B75D", "#F6F0E5"],
    tags: ["Resin Art", "Gold Leaf", "Deep Teal", "Masterpiece"]
  },
  {
    id: "wl-008",
    slug: "dune-at-twilight-warm-coral-canvas",
    name: "Dune at Twilight: Coral & Terracotta",
    category: "Fluid Art",
    price: 490,
    description: "Flowing horizontal strata in warm coral, dusty terracotta, and soft gold shimmer evoking desert sand dunes under setting suns.",
    story: "Lydia's love for warm Mediterranean sunsets translated into organic horizontal flows that ground a room with peaceful warmth and earthy elegance.",
    dimensions: "80 x 120 cm (31.5 x 47.2 in)",
    medium: "Acrylic emulsion, micro-mica powder, natural ochres on double-primed stretched cotton",
    year: 2026,
    isOneOfAKind: true,
    isFeatured: false,
    isNewArrival: false,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop"
    ],
    palette: ["#E6A18D", "#B87862", "#D6B75D", "#F6F0E5"],
    tags: ["Desert Tones", "Warm Coral", "Landscape Abstract", "Panoramic"]
  }
];

export const CATEGORIES: { name: string; slug: string; description: string; image: string; count: number }[] = [
  {
    name: "Textured Canvas",
    slug: "Textured Canvas",
    description: "Sculpted mineral plasters, architectural relief, and organic tactile impasto on gallery linen.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop",
    count: 2
  },
  {
    name: "Resin & Mixed Media",
    slug: "Resin & Mixed Media",
    description: "Crystalline optical resin, pulverized minerals, and genuine gold leaf suspended in fluid strata.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
    count: 2
  },
  {
    name: "Sculptural Vessels",
    slug: "Sculptural Vessels",
    description: "Hand-coiled organic terracotta ceramics and functional sculptural vessels with jewel glazes.",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=800&auto=format&fit=crop",
    count: 1
  },
  {
    name: "Fluid Art",
    slug: "Fluid Art",
    description: "Expressive color harmonies in warm coral, sage green, and soft gold inspired by natural elements.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
    count: 2
  },
  {
    name: "Botanical Wall Art",
    slug: "Botanical Wall Art",
    description: "Delicate sculpted flora, lily silhouettes, and dimensional organic forms celebrating botanical beauty.",
    image: "https://images.unsplash.com/photo-1582561141315-9a842f10b7a8?q=80&w=800&auto=format&fit=crop",
    count: 1
  }
];
