export type CollectionId = "ehsaas" | "raga";

export type BrandImage = {
  src: string;
  alt: string;
  title: string;
  note: string;
  palette: string;
  width: number;
  height: number;
  detailImages?: string[];
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
  collectionId: CollectionId;
  collectionName: string;
  collectionNumber: string;
  slug: string;
  garmentType?: string;
  status?: "available" | "reserved" | "collected";
  description: [string, string];
  productDetails?: ProductDetails;
};

export type CollectionArchive = {
  id: CollectionId;
  name: string;
  number: string;
  slug: CollectionId;
  title: string;
  note: string;
  description: string;
  heroImages: BrandImage[];
  pieces: CollectionPiece[];
};

const productSize = {
  width: 1080,
  height: 1350,
};

export function collectionSlug(piece: CollectionPiece) {
  return piece.slug;
}

export function collectionPath(collection: CollectionArchive | CollectionId) {
  const id = typeof collection === "string" ? collection : collection.id;
  return `/collection/${id}`;
}

export function productPath(piece: CollectionPiece) {
  return `/collection/${piece.collectionId}/${piece.slug}`;
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

const paletteByPiece: Record<CollectionId, string[]> = {
  ehsaas: [
    "Black / Red / Gold",
    "Red / Ivory / Teal",
    "Ivory / Vermilion",
    "Ivory / Checks",
    "Black / Rust",
    "Charcoal / Ivory",
  ],
  raga: [
    "Black / Red / Gold",
    "Ivory / Vermilion",
    "Midnight / Gold",
    "Ivory / Rose",
    "Graphite / Red",
    "Ivory / Black",
  ],
};

const notesByPiece: Record<CollectionId, string[]> = {
  ehsaas: [
    "The depth of midnight meets the brilliance of vermilion.",
    "A vivid story of colour, movement and memory.",
    "A canvas of stories, framed in vermilion.",
    "A quiet study in ivory, colour and line.",
    "Shadowed cloth, warmed by illustration.",
    "A pale canvas touched by quiet ornament.",
  ],
  raga: [
    "A darker note, composed for evening.",
    "A rhythm of illustration and vermilion.",
    "Colour held with ceremony and restraint.",
    "An ivory expression softened by gesture.",
    "A grounded drape with archival character.",
    "Line, shadow and textile in conversation.",
  ],
};

function makePiece(collectionId: CollectionId, index: number): CollectionPiece {
  const number = String(index).padStart(2, "0");
  const collectionName = collectionId === "ehsaas" ? "EHSAAS" : "RAGA";
  const collectionNumber = collectionId === "ehsaas" ? "01" : "02";
  const basePath = `/images/collection/${collectionId}/${number}`;

  return {
    src: `${basePath}/main.png`,
    alt: `${collectionName} ${number} saree shown as a complete product image`,
    title: number,
    note: notesByPiece[collectionId][index - 1],
    description: [
      `${collectionName} ${number} is presented as an edited textile study, allowing the full drape to remain visible.`,
      "Detail images reveal the surface, border and movement without cropping the finished composition.",
    ],
    palette: paletteByPiece[collectionId][index - 1],
    width: productSize.width,
    height: productSize.height,
    collectionId,
    collectionName,
    collectionNumber,
    slug: number,
    garmentType: "Saree",
    status: "available",
    imageViewType: "product",
    detailImageMetadata: [1, 2, 3].map((detailIndex) => ({
      src: `${basePath}/detail-${detailIndex}.png`,
      alt: `${collectionName} ${number} detail ${detailIndex} showing the textile surface and drape`,
      imageViewType: "detail" as const,
    })),
    productDetails: {
      oneOfOne: true,
      material: "Available on enquiry",
      construction: "Saree",
      designWork: "Surface, border and drape study",
      care: "Dry clean only",
      availability: "Private enquiry",
    },
  };
}

export const ehsaasCollection: CollectionPiece[] = [1, 2, 3, 4, 5, 6].map((index) =>
  makePiece("ehsaas", index),
);

export const ragaCollection: CollectionPiece[] = [1, 2, 3, 4, 5, 6].map((index) =>
  makePiece("raga", index),
);

function makeHeroImages(pieces: CollectionPiece[]): BrandImage[] {
  return pieces.flatMap((piece) =>
    (piece.detailImageMetadata ?? []).map((image, index) => ({
      src: image.src,
      alt: image.alt,
      title: `${piece.collectionName} ${piece.title} Detail ${index + 1}`,
      note: piece.note,
      palette: piece.palette,
      width: productSize.width,
      height: productSize.height,
      imageViewType: "detail" as const,
    })),
  );
}

export const collections: CollectionArchive[] = [
  {
    id: "ehsaas",
    slug: "ehsaas",
    name: "EHSAAS",
    number: "01",
    title: "EHSAAS",
    note: "An ode to emotion, artistry and the enduring beauty of the saree.",
    description:
      "EHSAAS brings together colour, illustration and drape in six singular expressions from the House of ANURRAKTI.",
    heroImages: makeHeroImages(ehsaasCollection),
    pieces: ehsaasCollection,
  },
  {
    id: "raga",
    slug: "raga",
    name: "RAGA",
    number: "02",
    title: "RAGA",
    note: "A quieter rhythm of textile, shadow and ceremonial colour.",
    description:
      "RAGA extends the ANURRAKTI language through six considered drapes, each composed around movement and memory.",
    heroImages: makeHeroImages(ragaCollection),
    pieces: ragaCollection,
  },
];

export const collectionImages: CollectionPiece[] = collections.flatMap(
  (collection) => collection.pieces,
);

export function getCollection(collectionId: string) {
  return collections.find((collection) => collection.id === collectionId);
}

export function getCollectionPiece(collectionId: string, pieceSlug: string) {
  return getCollection(collectionId)?.pieces.find((piece) => piece.slug === pieceSlug);
}

// The House section intentionally features only polished campaign photography.
// Source study photographs remain preserved in /public but are not displayed.
export const houseImages: BrandImage[] = [campaignImages[1], campaignImages[2]];
