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

export const defaultWhatsAppMessage =
  "Hello ANURRAKTI, I would like to enquire about the collection.";

export function whatsappPath(message = defaultWhatsAppMessage, phone = "918800219663") {
  return `/whatsapp?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(message)}`;
}

export const contactLinks = {
  whatsappPrimary: whatsappPath(),
  whatsappSecondary: whatsappPath(defaultWhatsAppMessage, "919958704890"),
  callPrimary: "tel:+918800219663",
  callSecondary: "tel:+919958704890",
  call: "tel:+919958704890",
  instagram: "https://www.instagram.com/anurrakti/",
} as const;

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

const descriptionsByPiece: Record<CollectionId, [string, string][]> = {
  ehsaas: [
    [
      "Black establishes the ground of this one-of-one saree, with red and gold creating the defining contrasts across the complete drape.",
      "Closer views record the illustrated surface, border and shifts between its darker field and warmer accents.",
    ],
    [
      "Red leads this one-of-one composition, while ivory and teal introduce lighter and cooler points within the full drape.",
      "The detail studies keep the colour relationships visible across the surface, border and finished saree.",
    ],
    [
      "Ivory forms the pale field of this one-of-one saree, framed by vermilion as its central colour contrast.",
      "Full and closer views show how illustration, open space and the stronger border colour sit together.",
    ],
    [
      "Ivory and checks shape this one-of-one saree through line, repetition and measured areas of colour.",
      "The complete drape and detail images allow the checked composition, surface and border to be considered separately.",
    ],
    [
      "Black and rust give this one-of-one saree a grounded palette, with the warmer tone carried through its illustrated surface.",
      "Closer studies focus on how the darker field, border and rust-coloured details meet within the finished drape.",
    ],
    [
      "Charcoal and ivory create a restrained contrast across this one-of-one saree and its recorded ornament.",
      "The product views move from the complete drape to closer studies of its pale details, surface and border.",
    ],
  ],
  raga: [
    [
      "Black gives this one-of-one saree its evening ground, while red and gold punctuate the complete composition.",
      "Closer images follow the relationship between the dark field, warmer details and the finished border.",
    ],
    [
      "Ivory and vermilion create a direct two-colour conversation across this one-of-one saree.",
      "The full drape establishes the composition before closer views isolate its illustration, surface and border.",
    ],
    [
      "Midnight and gold shape this one-of-one saree around a dark field and a measured ceremonial accent.",
      "Detailed views show where the gold-toned elements sit across the surface and within the completed drape.",
    ],
    [
      "Ivory and rose give this one-of-one saree a pale composition softened by a warmer secondary colour.",
      "Full and closer photographs record the movement between its open field, surface details and border.",
    ],
    [
      "Graphite and red form the grounded palette of this one-of-one saree, balancing a dark base with a stronger accent.",
      "The detail studies examine how that contrast continues across the illustrated surface and finished edge.",
    ],
    [
      "Ivory and black define this one-of-one saree through line, shadow and a clear light-dark contrast.",
      "The complete drape and closer studies keep its surface, border and graphic relationship visible.",
    ],
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
    description: descriptionsByPiece[collectionId][index - 1],
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
