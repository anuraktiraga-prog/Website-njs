export type BlogSource = {
  title: string;
  href: string;
};

export type SareeTradition = {
  id: string;
  name: string;
  region: string;
  signature: string;
  character: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  primaryKeyword: string;
  hero: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  introduction: string[];
  traditions: SareeTradition[];
  sources: BlogSource[];
};

const typesOfSareesPost: BlogPost = {
  slug: "types-of-sarees-in-india",
  title: "Types of Sarees in India: 8 Regional Traditions",
  eyebrow: "The Saree Guide / 01",
  description:
    "Explore eight types of sarees in India, their regional origins, textile techniques and distinctive character in this introductory guide.",
  excerpt:
    "An introduction to eight regional saree traditions, from Banarasi brocade and Kanjeevaram silk to Bandhani resist dyeing and Patola double ikat.",
  publishedAt: "2026-08-20",
  updatedAt: "2026-08-20",
  readingTime: "10 minute read",
  primaryKeyword: "types of sarees in India",
  hero: {
    src: "/images/campaign/house-textile-closeup.png",
    alt: "Close view of an ANURRAKTI textile showing its colour, surface and border",
    width: 2220,
    height: 1481,
  },
  introduction: [
    "There is no single way to describe an Indian saree. Across the country, saree traditions have developed around different fibres, looms, dyeing methods, motifs and ceremonial customs. Their names may refer to a place, a community or a textile technique, and each carries its own visual language.",
    "This guide introduces eight widely recognised types of sarees in India. It is a starting point rather than an exhaustive catalogue: India has many more regional and community-specific traditions, and even within one named tradition, materials and designs can vary. Learning to notice construction, surface, border and drape is more useful than reducing a saree to a label alone.",
  ],
  traditions: [
    {
      id: "banarasi",
      name: "Banarasi",
      region: "Varanasi, Uttar Pradesh",
      signature: "Brocade weaving, silk and zari",
      character: "Ornate, luminous and ceremonial",
      paragraphs: [
        "Banarasi sarees are closely associated with Varanasi's brocade-weaving tradition. They are recognised for richly patterned surfaces, zari work and motifs built into the cloth rather than simply placed on top of it. Depending on the weave and complexity, the effect may range from a restrained field of butis to an elaborate all-over composition.",
        "The density of the brocade and the prominence of the border or pallu give many Banarasi sarees a distinctly formal presence. They are often chosen for weddings and significant celebrations, but lighter interpretations can be styled with considerably less ceremony.",
      ],
    },
    {
      id: "kanjeevaram",
      name: "Kanjeevaram",
      region: "Kanchipuram, Tamil Nadu",
      signature: "Structured silk, zari and defined borders",
      character: "Architectural, lustrous and enduring",
      paragraphs: [
        "Kanjeevaram sarees come from the temple town of Kanchipuram and are known for their substantial silk, lustre and strongly articulated borders. Traditional imagery often draws from temple architecture, nature and geometric forms, giving the cloth a sense of rhythm and structure.",
        "A Kanjeevaram usually holds its shape more firmly than a very light or fluid saree. That body makes the pleats and pallu visually pronounced, which is one reason the tradition remains closely connected with South Indian weddings, festivals and heirloom dressing.",
      ],
    },
    {
      id: "chanderi",
      name: "Chanderi",
      region: "Chanderi, Madhya Pradesh",
      signature: "Light, translucent silk-cotton cloth",
      character: "Airy, polished and quietly formal",
      paragraphs: [
        "Chanderi is associated with a fine, lightweight and often translucent fabric woven in silk, cotton or combinations of the two. Small motifs, delicate checks and a measured use of zari are characteristic of many classic Chanderi sarees.",
        "Its lightness gives Chanderi an elegant formality without the visual weight of dense brocade. It can work particularly well for daytime celebrations, warmer weather and occasions that call for refinement rather than heavy ornament.",
      ],
    },
    {
      id: "paithani",
      name: "Paithani",
      region: "Paithan and Yeola, Maharashtra",
      signature: "Silk with tapestry-like borders and pallus",
      character: "Jewel-toned, intricate and celebratory",
      paragraphs: [
        "Paithani takes its name from Paithan in Maharashtra and is distinguished by richly worked borders and pallus created with a tapestry-like weaving approach. Colour is central to its identity: contrasting warp and weft can produce a shifting, luminous effect as the fabric moves in light.",
        "Birds, flowers and geometric forms frequently appear in Paithani design. Its detail, colour and ceremonial associations make it a prominent choice for Maharashtrian weddings and festive wardrobes, with the pallu often serving as the visual centre of the saree.",
      ],
    },
    {
      id: "bandhani",
      name: "Bandhani",
      region: "Gujarat and Rajasthan",
      signature: "Tied resist-dye patterns",
      character: "Graphic, vibrant and full of movement",
      paragraphs: [
        "Bandhani is created by tying many small sections of cloth before dyeing it. When the ties are opened, they leave undyed dots that form fields, waves, circles and intricate figurative patterns. The word is connected to bandh, meaning to tie.",
        "Because the design comes from the relationship between tied points and colour, Bandhani can feel both precise and alive. Red, yellow, green and deep blue are strongly associated with the tradition, although contemporary pieces move well beyond a fixed palette.",
      ],
    },
    {
      id: "sambalpuri",
      name: "Sambalpuri",
      region: "Western Odisha",
      signature: "Ikat-patterned yarns",
      character: "Graphic, rhythmic and culturally rooted",
      paragraphs: [
        "Sambalpuri sarees are closely associated with Odisha's ikat traditions. In ikat, sections of yarn are resist-dyed before weaving, so the pattern is planned in the threads and then resolved on the loom. The slight softness at the edges of a motif is part of the technique's distinctive visual character.",
        "Geometric forms, flowers, animals and symbols connected with Odisha's cultural life often appear in Sambalpuri textiles. The combination of disciplined planning and small variations created through dyeing gives each composition its energy.",
      ],
    },
    {
      id: "jamdani",
      name: "Jamdani",
      region: "Bengal",
      signature: "Supplementary-weft inlay motifs",
      character: "Fine, floating and intricately detailed",
      paragraphs: [
        "Jamdani is recognised for motifs that appear to float across a fine ground. The design is formed during weaving through a supplementary-weft inlay technique, allowing individual motifs to be built into the cloth with exceptional control.",
        "The space around each motif matters as much as the motif itself. That balance can make Jamdani feel light and restrained even when the weaving is technically complex. Variations are produced across Bengal in cotton, silk and blended grounds.",
      ],
    },
    {
      id: "patola",
      name: "Patola",
      region: "Patan, Gujarat",
      signature: "Double-ikat weaving",
      character: "Precise, vivid and highly complex",
      paragraphs: [
        "Patola from Patan is celebrated for double ikat, a demanding process in which both warp and weft yarns are resist-dyed before they meet on the loom. The pattern emerges only when the separately planned threads align during weaving.",
        "This method produces compositions that can appear exceptionally crisp despite being constructed through dyed yarn. Geometric grids, flowers, birds and other symbolic motifs are characteristic, and the technical complexity places Patola among India's most exacting textile traditions.",
      ],
    },
  ],
  sources: [
    {
      title: "Woven Narratives — Ministry of Culture, Government of India",
      href: "https://www.indiaculture.gov.in/node/38441",
    },
    {
      title: "Woven Narratives exhibition catalogue — Ministry of Culture",
      href: "https://www.indiaculture.gov.in/sites/default/files/pdf/Woven_Narratives_16012024.pdf",
    },
    {
      title: "Varanasi weaving and Banarasi sarees — Incredible India",
      href: "https://www.incredibleindia.gov.in/en/uttar-pradesh/varanasi/let-us-walk-in-varanasi",
    },
    {
      title: "Kanchipuram, home of the Kanjeevaram saree — Incredible India",
      href: "https://www.incredibleindia.gov.in/en/tamil-nadu/kanchipuram",
    },
    {
      title: "Chanderi fabric — Incredible India",
      href: "https://www.incredibleindia.gov.in/en/madhya-pradesh/chanderi-fabric",
    },
    {
      title: "Paithani sarees — Incredible India",
      href: "https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/aurangabad/paithani-sarees.html",
    },
    {
      title: "Jamnagari Bandhani — Incredible India",
      href: "https://www.incredibleindia.gov.in/en/gujarat/dwarka/jamnagari-bandhani",
    },
    {
      title: "Sambalpuri sarees and Odisha's ikat tradition — Incredible India",
      href: "https://www.incredibleindia.gov.in/en/odisha/cuttack/discover-a-canvas-of-creativity-and-culture-in-cuttack",
    },
    {
      title: "Geographical Indications: an introduction — Intellectual Property India",
      href: "https://ipindia.gov.in/page-content/geographical-indications-an-introduction",
    },
  ],
};

export const blogPosts: BlogPost[] = [typesOfSareesPost];

export function blogPath(post: BlogPost) {
  return `/blogs/${post.slug}`;
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
