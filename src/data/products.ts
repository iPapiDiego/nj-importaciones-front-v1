export interface Product {
  id: string;
  name: string;
  category: 'labios' | 'unas' | 'rostro' | 'skincare' | 'ojos';
  categoryName: string;
  price: number;
  originalPrice: number;
  discount: string;
  stock: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  isFlashOffer?: boolean;
  shades?: { name: string; hex: string }[];
  description: string;
  benefits: string[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
  quantity: number;
}

export const PRODUCTS: Product[] = [
  {
    id: "nj-01",
    name: "Labial Líquido Velvet Matte 24H",
    category: "labios",
    categoryName: "Labiales & Gloss",
    price: 32.90,
    originalPrice: 48.00,
    discount: "-31%",
    stock: 6,
    rating: 4.9,
    reviewsCount: 142,
    image: "/products/lipstick-matte.jpg",
    badge: "MÁS VENDIDO",
    isFlashOffer: true,
    shades: [
      { name: "01 Rose Nude", hex: "#d87d88" },
      { name: "02 Red Wine", hex: "#871f30" },
      { name: "03 Mauve Chic", hex: "#b4657a" },
      { name: "04 Coral Sunset", hex: "#e06c64" }
    ],
    description: "Labial mate de alta pigmentación con fórmula ultra ligera que no reseca los labios. Enriquecido con aceite de jojoba y vitamina E para una duración impecable todo el día.",
    benefits: ["Hasta 24 horas sin transferir", "No cuartea ni reseca", "Acabado terciopelo premium"]
  },
  {
    id: "nj-02",
    name: "Lip Gloss Cristal Voluminizador Hidratante",
    category: "labios",
    categoryName: "Labiales & Gloss",
    price: 26.50,
    originalPrice: 38.00,
    discount: "-30%",
    stock: 9,
    rating: 4.8,
    reviewsCount: 89,
    image: "/products/lip-gloss.jpg",
    badge: "TENDENCIA",
    isFlashOffer: false,
    shades: [
      { name: "Crystal Glow", hex: "#fce7f3" },
      { name: "Rose Gold Shimmer", hex: "#fbcfe8" },
      { name: "Glaze Peach", hex: "#fed7aa" }
    ],
    description: "Brillo labial de efecto vidrio espejado con microesferas de ácido hialurónico que aportan volumen instantáneo e hidratación profunda.",
    benefits: ["Efecto voluminizador no pegajoso", "Hidratación 12 horas", "Aroma suave a vainilla"]
  },
  {
    id: "nj-03",
    name: "Set Esmaltes Gel Polish UV Secado Rápido (Pack 4)",
    category: "unas",
    categoryName: "Esmaltes & Uñas",
    price: 49.90,
    originalPrice: 75.00,
    discount: "-33%",
    stock: 4,
    rating: 4.9,
    reviewsCount: 112,
    image: "/products/nail-polish-set.jpg",
    badge: "OFERTA FLASH",
    isFlashOffer: true,
    shades: [
      { name: "Gama Pastel Chic", hex: "#f472b6" },
      { name: "Gama Nude Elegance", hex: "#e7c2a7" }
    ],
    description: "Kit de 4 esmaltes con fórmula gel de larga duración sin necesidad de lámpara UV profesional. Acabado brillante tipo salón que resiste golpes y astilladuras.",
    benefits: ["Duración de hasta 21 días", "Secado express en 60 segundos", "Fórmula 7-Free no tóxica"]
  },
  {
    id: "nj-04",
    name: "Esmalte Efecto Gel Diamond Shine 15ml",
    category: "unas",
    categoryName: "Esmaltes & Uñas",
    price: 18.00,
    originalPrice: 26.00,
    discount: "-30%",
    stock: 15,
    rating: 4.7,
    reviewsCount: 64,
    image: "/products/nail-polish-pink.jpg",
    badge: "FAVORITO",
    isFlashOffer: false,
    shades: [
      { name: "Pink Blossom", hex: "#f472b6" },
      { name: "Ruby Glam", hex: "#be123c" },
      { name: "Lavender Dream", hex: "#c084fc" }
    ],
    description: "Pintauñas de alta cobertura con brocha ancha ergonómica para aplicación uniforme en una sola pasada. Brillo espejo duradero.",
    benefits: ["Fácil aplicación con pincel plano", "Brillo espejo permanente", "Fórmula fortalecedora"]
  },
  {
    id: "nj-05",
    name: "Serum Facial Concentrado Vitamina C + Ácido Hialurónico",
    category: "skincare",
    categoryName: "Cuidado Facial & Skincare",
    price: 54.90,
    originalPrice: 85.00,
    discount: "-35%",
    stock: 5,
    rating: 5.0,
    reviewsCount: 203,
    image: "/products/serum-face.jpg",
    badge: "TOP VENTAS",
    isFlashOffer: true,
    description: "Poderoso suero iluminador y antioxidante que combate manchas, unifica el tono y estimula el colágeno natural de la piel. Resultados visibles en 14 días.",
    benefits: ["Aclara manchas y unifica el tono", "Hidratación en capas profundas", "Apto para todo tipo de piel"]
  },
  {
    id: "nj-06",
    name: "Crema Hidratante Facial Reafirmante Colágeno & Ceramidas",
    category: "skincare",
    categoryName: "Cuidado Facial & Skincare",
    price: 48.00,
    originalPrice: 69.00,
    discount: "-30%",
    stock: 8,
    rating: 4.8,
    reviewsCount: 97,
    image: "/products/face-cream.jpg",
    badge: "DESTACADO",
    isFlashOffer: false,
    description: "Crema de textura sedosa no grasa que repara la barrera cutánea, retiene la humedad por 48 horas y previene líneas de expresión prematuras.",
    benefits: ["Textura gel-crema ligera", "Barrera protectora con ceramidas", "No comedogénico"]
  },
  {
    id: "nj-07",
    name: "Protector Solar Facial Invisible FPS 50+ Velvet Touch",
    category: "skincare",
    categoryName: "Cuidado Facial & Skincare",
    price: 52.00,
    originalPrice: 72.00,
    discount: "-28%",
    stock: 7,
    rating: 4.9,
    reviewsCount: 165,
    image: "/products/sunscreen.jpg",
    badge: "IMPRESCINDIBLE",
    isFlashOffer: false,
    description: "Protector solar de amplio espectro contra rayos UVA/UVB y luz azul. Cero residuos blancos, absorción inmediata y acabado mate suave.",
    benefits: ["Sin rastro blanco ni sensación grasosa", "Ideal como primer antes del maquillaje", "Resistente al agua y sudor"]
  },
  {
    id: "nj-08",
    name: "Rubor Líquido Soft Glow Rosa Radiante",
    category: "rostro",
    categoryName: "Maquillaje Rostro",
    price: 34.00,
    originalPrice: 48.00,
    discount: "-29%",
    stock: 8,
    rating: 4.9,
    reviewsCount: 118,
    image: "/products/blush-liquid.jpg",
    badge: "VIRAL TIKTOK",
    isFlashOffer: true,
    shades: [
      { name: "Sweet Pink", hex: "#f472b6" },
      { name: "Peach Bloom", hex: "#fb923c" },
      { name: "Berry Flush", hex: "#9d174d" }
    ],
    description: "Rubor líquido ultra pigmentado con aplicador de esponja suave. Se funde perfectamente sobre la piel dejando unas mejillas saludables y luminosas.",
    benefits: ["Difuminado ultra fácil con dedos o esponja", "Duración de 16 horas intacto", "Sensación liviana segunda piel"]
  },
  {
    id: "nj-09",
    name: "Paleta de Sombras 'Rose Luxe' 18 Tonos",
    category: "ojos",
    categoryName: "Sombras & Ojos",
    price: 59.90,
    originalPrice: 89.00,
    discount: "-33%",
    stock: 3,
    rating: 5.0,
    reviewsCount: 184,
    image: "/products/eyeshadow-palette.jpg",
    badge: "ÚLTIMAS UNIDADES",
    isFlashOffer: true,
    description: "18 sombras de alta pigmentación que combinan tonos mates suaves, metálicos satinados y glitter prensado para looks tanto de día como de fiesta.",
    benefits: ["Cero caída de polvo", "Pigmentación intensa con una sola pasada", "Espejo panorámico incluido"]
  },
  {
    id: "nj-10",
    name: "Máscara de Pestañas Volume & Length Waterproof",
    category: "ojos",
    categoryName: "Sombras & Ojos",
    price: 31.00,
    originalPrice: 44.00,
    discount: "-30%",
    stock: 12,
    rating: 4.8,
    reviewsCount: 129,
    image: "/products/mascara.jpg",
    badge: "MÁS VENDIDO",
    isFlashOffer: false,
    description: "Cepillo de cerdas cónicas de precisión que alarga y engrosa cada pestaña desde la raíz hasta la punta sin dejar grumos. Resistente al agua y lágrimas.",
    benefits: ["Volumen dramático x5", "Fórmula a prueba de agua y sudor", "No deja grumos ni se corre"]
  },
  {
    id: "nj-11",
    name: "Set Profesional 12 Brochas Rose Gold + Neceser",
    category: "rostro",
    categoryName: "Maquillaje Rostro",
    price: 65.00,
    originalPrice: 99.00,
    discount: "-34%",
    stock: 5,
    rating: 4.9,
    reviewsCount: 91,
    image: "/products/brushes-set.jpg",
    badge: "EDICIÓN ESPECIAL",
    isFlashOffer: false,
    description: "Kit completo de brochas con pelo sintético ultra suave de calidad profesional, mango ergonómico color rose gold y estuche cilíndrico de viaje.",
    benefits: ["Cerdas hipoalergénicas y cruelty free", "Incluye brochas para rostro y ojos", "Neceser rígido protector de regalo"]
  },
  {
    id: "nj-12",
    name: "Mascarilla Nocturna Facial Reparadora de Rosas",
    category: "skincare",
    categoryName: "Cuidado Facial & Skincare",
    price: 39.90,
    originalPrice: 58.00,
    discount: "-31%",
    stock: 6,
    rating: 4.8,
    reviewsCount: 76,
    image: "/products/skincare-mask.jpg",
    badge: "NUEVO",
    isFlashOffer: false,
    description: "Tratamiento intensivo para la noche enriquecido con agua de rosas de Damasco y extractos botánicos. Despierta con la piel descansada, luminosa y visiblemente rejuvenecida.",
    benefits: ["Regenera la piel mientras duermes", "Calma rojeces e irritaciones", "Aroma relajante a rosas frescas"]
  }
];

export const CATEGORIES = [
  { id: "todos", name: "Todos los Productos", icon: "✨", count: PRODUCTS.length },
  { id: "labios", name: "Labiales & Gloss", icon: "💄", count: PRODUCTS.filter(p => p.category === 'labios').length },
  { id: "unas", name: "Esmaltes & Pintauñas", icon: "💅", count: PRODUCTS.filter(p => p.category === 'unas').length },
  { id: "skincare", name: "Cremas & Skincare", icon: "🌸", count: PRODUCTS.filter(p => p.category === 'skincare').length },
  { id: "rostro", name: "Maquillaje Rostro", icon: "✨", count: PRODUCTS.filter(p => p.category === 'rostro').length },
  { id: "ojos", name: "Sombras & Ojos", icon: "👁️", count: PRODUCTS.filter(p => p.category === 'ojos').length },
];
