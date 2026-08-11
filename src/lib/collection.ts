export type BrandImage = {
  src: string;
  alt: string;
  title: string;
  note: string;
  palette: string;
  width: number;
  height: number;
};

export type CollectionPiece = BrandImage & {
  description: [string, string];
};

export const contactLinks = {
  whatsappPrimary:
    "https://wa.me/918800219663?text=Hello%20ANURRAKTI%2C%20I%20would%20like%20to%20enquire%20about%20the%20collection.",
  whatsappSecondary:
    "https://wa.me/919958704890?text=Hello%20ANURRAKTI%2C%20I%20would%20like%20to%20enquire%20about%20the%20collection.",
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
  },
  {
    src: "/images/campaign/anurrakti-raga-staircase.jpg",
    alt: "Model wearing a black and grey saree against a red velvet staircase",
    title: "The First Expression",
    note: "A world of velvet, movement and remembered ceremony.",
    palette: "Black / Red / Gold",
    width: 1760,
    height: 2200,
  },
  {
    src: "/images/campaign/anurrakti-raga-garden.jpg",
    alt: "Model wearing a white saree in a night garden campaign frame",
    title: "Nocturne In Ivory",
    note: "An ivory drape held between stillness and gesture.",
    palette: "Ivory / Pink / Black",
    width: 1760,
    height: 2200,
  },
  {
    src: "/images/campaign/blue-check-profile.jpg",
    alt: "Model wearing a blue checked saree with floral embroidery",
    title: "NAAZ",
    note: "Blue softened by embroidery and evening light.",
    palette: "Blue / Silver / Ivory",
    width: 1760,
    height: 2200,
  },
];

export const collectionImages: CollectionPiece[] = [
  {
    src: "/images/collection/noir-drape.jpg",
    alt: "Black and red saree draped over a sculptural chair",
    title: "EHSAAS",
    note: "The depth of midnight meets the brilliance of vermilion.",
    description: [
      "A dark expression framed with red and antique gold.",
      "Created for evenings that ask for stillness and presence.",
    ],
    palette: "Black / Red / Gold",
    width: 1465,
    height: 2200,
  },
  {
    src: "/images/collection/blue-check-drape.jpg",
    alt: "Blue checked saree with embroidered floral border",
    title: "NAAZ",
    note: "A study in blue, softened by embroidery.",
    description: [
      "Checks meet delicate floral artistry across a translucent canvas.",
      "A considered drape for light, movement and quiet celebration.",
    ],
    palette: "Blue / Silver / Ivory",
    width: 1465,
    height: 2200,
  },
  {
    src: "/images/collection/ivory-red-drape.jpg",
    alt: "Ivory and red saree with animal motif draped over a chair",
    title: "KATHA",
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
    src: "/images/collection/grey-border-drape.jpg",
    alt: "Grey saree with a gold and red border draped over a chair",
    title: "RAAG",
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
    src: "/images/collection/sunehri.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
    title: "SUNEHRI",
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
    src: "/images/collection/chaand.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
    title: "CHAAND",
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
    src: "/images/collection/mehr.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
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
    src: "/images/collection/raatri.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
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
    src: "/images/collection/noor.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
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
    src: "/images/collection/rekha.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
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
    src: "/images/collection/mehfil.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
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
    src: "/images/collection/angana.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
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
    src: "/images/collection/sona.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
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
  {
    src: "/images/collection/aabha.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
    title: "14 AABHA",
    note: "Radiance, softened into drape.",
    description: [
      "A composed piece with a gentle surface glow.",
      "Its presence is felt through proportion, colour and quiet detail.",
    ],
    palette: "Ivory / Gold",
    width: 2200,
    height: 2200,
  },
  {
    src: "/images/collection/lahar.jpg",
    alt: "Saree-only product image from the ANURRAKTI collection",
    title: "15 LAHAR",
    note: "A sense of movement held in cloth.",
    description: [
      "The textile falls with ease, creating a soft visual rhythm.",
      "An expression designed to move with the stories it enters.",
    ],
    palette: "Blue / Ivory",
    width: 2200,
    height: 2200,
  },
];

export const ehsaasCollection = collectionImages.slice(0, 6);

export const houseImages: BrandImage[] = [
  campaignImages[1],
  campaignImages[2],
  {
    src: "/images/collection/orange-green-textile.jpg",
    alt: "Orange and green textile photographed in a studio setting",
    title: "Archive Study",
    note: "Colour, edge and fall observed before they become silhouette.",
    palette: "Saffron / Green",
    width: 1800,
    height: 1200,
  },
  {
    src: "/images/collection/black-red-textile.jpg",
    alt: "Black and red textile photographed in a studio setting",
    title: "Border Study",
    note: "The line where craft becomes character.",
    palette: "Black / Red / Gold",
    width: 1800,
    height: 1200,
  },
];
