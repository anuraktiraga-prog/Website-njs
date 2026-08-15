export type BrandImage = {
  src: string;
  alt: string;
  title: string;
  note: string;
  palette: string;
  width: number;
  height: number;
  detailImages?: string[];
  /** The role this image plays in search, accessibility, and editorial layout. */
  imageViewType?: "product" | "detail" | "campaign" | "material";
  detailImageMetadata?: ProductImage[];
};

export type ProductImage = {
  src: string;
  alt: string;
  imageViewType: "product" | "detail" | "material";
};

export type ProductDetails = {
  oneOfOne?: boolean;
  price?: string;
  material?: string;
  construction?: string;
  designWork?: string;
  border?: string;
  motif?: string;
  weave?: string;
  embroideryOrPrint?: string;
  pallu?: string;
  care?: string;
  availability?: string;
};

export type CollectionPiece = BrandImage & {
  collection?: string;
  garmentType?: string;
  status?: "available" | "reserved" | "collected";
  description: [string, string];
  productDetails?: ProductDetails;
};

export function collectionSlug(piece: CollectionPiece) {
  return piece.title
    .toLowerCase()
    .replace(/^\d+\s+/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const contactLinks = {
  whatsappPrimary:
    "https://wa.me/918800219663?text=Hello%20ANURRAKTI%2C%20I%20would%20like%20to%20enquire%20about%20the%20collection.",
  whatsappSecondary:
    "https://wa.me/919958704890?text=Hello%20ANURRAKTI%2C%20I%20would%20like%20to%20enquire%20about%20the%20collection.",
  call: "tel:+919958704890",
  instagram: "https://www.instagram.com/anurrakti/",
};

export const campaignImages: BrandImage[] = [
  {
    src: "/images/campaign/red-grey-portrait.jpg",
    alt: "Model wearing a red and grey drape in low evening light",
    title: "EHSAAS",
    note: "Heritage, reimagined.",
    palette: "Red / Grey / Gold",
    width: 1760,
    height: 2200,
    imageViewType: "campaign",
  },
  {
    src: "/images/campaign/anurrakti-staircase.png",
    alt: "Model wearing a black and grey saree against a red velvet staircase",
    title: "The First Expression",
    note: "A world of velvet, movement and remembered ceremony.",
    palette: "Black / Red / Gold",
    width: 1760,
    height: 2200,
    imageViewType: "campaign",
  },
  {
    src: "/images/campaign/anurrakti-garden.png",
    alt: "Model wearing a white saree in a night garden campaign frame",
    title: "Nocturne In Ivory",
    note: "An ivory drape held between stillness and gesture.",
    palette: "Ivory / Pink / Black",
    width: 1760,
    height: 2200,
    imageViewType: "campaign",
  },
  {
    src: "/images/campaign/blue-check-profile-anurrakti.png",
    alt: "Model wearing a blue checked saree with floral embroidery",
    title: "NAAZ",
    note: "Blue softened by embroidery and evening light.",
    palette: "Blue / Silver / Ivory",
    width: 1760,
    height: 2200,
    imageViewType: "campaign",
  },
];

export const collectionImages: CollectionPiece[] = [
  {
    src: "/images/collection/final/product-01-full.png",
    alt: "Black saree with gold motifs and a red brocade border arranged on a sculptural chair",
    title: "01",
    note: "The depth of midnight meets the brilliance of vermilion.",
    description: [
      "A dark expression framed with red and antique gold.",
      "Created for evenings that ask for stillness and presence.",
    ],
    palette: "Black / Red / Gold",
    width: 1465,
    height: 2200,
    detailImages: [
      "/images/collection/ehsaas-details/01-detail-6943.png",
      "/images/collection/ehsaas-details/01-detail-6939.png",
      "/images/collection/ehsaas-details/01-artboard12.png",
    ],
  },
  {
    src: "/images/collection/final/product-02-full.png",
    alt: "Red saree with an illustrated animal panel arranged on a sculptural chair",
    title: "02",
    note: "A vivid story of colour, movement and memory.",
    description: [
      "Illustrated figures unfold across a warm red ground with a playful, hand-drawn spirit.",
      "A joyful drape composed for movement, conversation and celebration.",
    ],
    palette: "Red / Ivory / Teal",
    width: 1465,
    height: 2200,
    detailImages: [
      "/images/collection/ehsaas-details/02-detail-6924.png",
      "/images/collection/ehsaas-details/02-detail-6926-clean.png",
      "/images/collection/ehsaas-details/02-detail-6939.png",
    ],
  },
  {
    src: "/images/collection/final/product-3.png",
    alt: "Ivory saree with illustrated writing and a rust ruffle border",
    title: "03",
    note: "A canvas of stories, framed in vermilion.",
    description: [
      "Illustrated forms unfold across ivory, each carrying its own character.",
      "The vermilion border holds the composition with warmth and memory.",
    ],
    palette: "Ivory / Red / Navy",
    width: 1465,
    height: 2200,
  },
  {
    src: "/images/collection/final/product-4.png",
    alt: "Ivory saree with a multicolour checked border on a sculptural chair",
    title: "04",
    note: "A quiet drape held by gold and shadow.",
    description: [
      "A graphite body lets the border carry the visual rhythm.",
      "Restrained, enduring and composed with a ceremonial edge.",
    ],
    palette: "Grey / Red / Gold",
    width: 1465,
    height: 2200,
  },
  {
    src: "/images/collection/final/product-5.png",
    alt: "Black saree with a rust illustrated panel on a sculptural chair",
    title: "05",
    note: "A golden expression with a softened festive pulse.",
    description: [
      "Warm colour gathers around the drape with an archival sensibility.",
      "Made for moments that call for light without excess.",
    ],
    palette: "Gold / Ivory",
    width: 2200,
    height: 2200,
  },
  {
    src: "/images/collection/final/product-6.png",
    alt: "Charcoal and white saree with illustrated writing and tassels",
    title: "06",
    note: "A pale canvas touched by quiet ornament.",
    description: [
      "Soft tones allow the border and fall to speak with restraint.",
      "An expression of clarity, grace and considered craft.",
    ],
    palette: "Ivory / Silver",
    width: 2200,
    height: 2200,
  },
  {
    src: "/images/collection/final/product-7.png",
    alt: "Red saree with a hand-drawn animal panel and ruffled border",
    title: "07 MEHR",
    note: "Colour gathered with affection and ease.",
    description: [
      "A piece shaped by warmth, movement and a gentle festive spirit.",
      "The drape carries softness while the border gives it form.",
    ],
    palette: "Rose / Gold",
    width: 2200,
    height: 2200,
  },
  {
    src: "/images/collection/final/product-8.png",
    alt: "Ivory saree with red and navy animal motifs and a striped border",
    title: "08 RASA",
    note: "A darker note, composed for evening.",
    description: [
      "Shadowed tones create a grounded expression of ceremony.",
      "Its detail is quiet at first, then slowly becomes the story.",
    ],
    palette: "Black / Gold",
    width: 2200,
    height: 2200,
  },
  {
    src: "/images/collection/final/product-9.png",
    alt: "Black saree with gold motifs and a red brocade border",
    title: "09 NOOR",
    note: "Light held gently across the textile.",
    description: [
      "A luminous drape designed around softness and air.",
      "Its beauty sits between simplicity and ornament.",
    ],
    palette: "Ivory / Blush",
    width: 2200,
    height: 2200,
  },
  {
    src: "/images/collection/final/product-10.png",
    alt: "Grey saree with a checked fall and black and gold border",
    title: "10 REKHA",
    note: "Line, rhythm and border in conversation.",
    description: [
      "A graphic expression where structure becomes elegance.",
      "The saree carries a contemporary eye without losing its rootedness.",
    ],
    palette: "Grey / Gold",
    width: 2200,
    height: 2200,
  },
  {
    src: "/images/collection/final/product-11.png",
    alt: "Ivory saree with fine linear woven stripes",
    title: "11 MEHFIL",
    note: "Made for rooms filled with memory.",
    description: [
      "A celebratory drape with colour held in measured balance.",
      "Its character is expressive, but never loud.",
    ],
    palette: "Red / Gold",
    width: 2200,
    height: 2200,
  },
  {
    src: "/images/collection/final/product-12.png",
    alt: "Bright red saree with a gold embellished border",
    title: "12 ANGANA",
    note: "An intimate expression of home and occasion.",
    description: [
      "Colour and craft meet with the warmth of familiar spaces.",
      "A drape that feels personal before it feels formal.",
    ],
    palette: "Earth / Vermilion",
    width: 2200,
    height: 2200,
  },
  {
    src: "/images/collection/final/product-13.png",
    alt: "Coral and grey saree with a patterned gold border",
    title: "13 SONA",
    note: "A gold-lit study in textile and gesture.",
    description: [
      "This piece carries ornament through tone rather than excess.",
      "Created to feel enduring, luminous and collected.",
    ],
    palette: "Gold / Ochre",
    width: 2200,
    height: 2200,
  },
];

export const ehsaasCollection = collectionImages.slice(0, 6);

export function getCollectionPiece(slug: string) {
  return collectionImages.find((piece) => collectionSlug(piece) === slug);
}

// The House section intentionally features only polished campaign photography.
// Source study photographs remain preserved in /public but are not displayed.
export const houseImages: BrandImage[] = [campaignImages[1], campaignImages[2]];
