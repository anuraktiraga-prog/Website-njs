export type CollectionId = "ehsaas" | "raga" | "noor";

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
  noor: [
    "Ivory / Silver",
    "Violet / Silver",
    "Midnight / Teal / Ochre",
    "Ivory / Emerald / Vermilion",
    "Ivory / Silver",
    "Black / Ivory",
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
  noor: [
    "Light traced through a field of floral linework.",
    "Violet held in a quiet silver rhythm.",
    "A nocturnal composition alive with story and ornament.",
    "Ivory framed by emerald and vermilion ceremony.",
    "Sculptural detail, softened by an ivory ground.",
    "A graphic conversation in black and ivory.",
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
  noor: [
    [
      "Ivory gives this one-of-one saree its luminous ground, with silver-toned floral lines moving across the composition.",
      "Model, drape and detail views record the relationship between the open field, linework and finished border.",
    ],
    [
      "Violet and silver shape this one-of-one saree through a saturated field and fine botanical linework.",
      "The accompanying views move between the worn silhouette, arranged drape and closer studies of its surface.",
    ],
    [
      "A midnight ground holds an illustrated composition of figures, animals and foliage in teal, ochre and softer accents.",
      "Closer photographs isolate the narrative motifs, border and layered colour within the complete drape.",
    ],
    [
      "Ivory establishes the field of this one-of-one saree, punctuated by small illustrated elephants and stronger emerald and vermilion panels.",
      "The full silhouette and detail studies show how motif, open space and the contrasting edge meet.",
    ],
    [
      "Ivory and silver create a pale, sculptural composition, with dimensional rosette-like details set against a striped pallu.",
      "Model and close views follow the shifts between surface ornament, soft volume and the finished drape.",
    ],
    [
      "Black and ivory define this one-of-one saree through a graphic illustrated field and a quieter dark pallu.",
      "The gallery moves from the worn silhouette to closer studies of the monochrome surface and border.",
    ],
  ],
};

const collectionIdentity: Record<CollectionId, { name: string; number: string }> = {
  ehsaas: { name: "EHSAAS", number: "01" },
  raga: { name: "RAGA", number: "02" },
  noor: { name: "NOOR", number: "03" },
};

const primaryAltByPiece: Record<CollectionId, string[]> = {
  ehsaas: [
    "Model wearing EHSAAS 01 in black, ivory and red with an architectural illustrated panel",
    "Model wearing EHSAAS 02 in ivory with black illustration and a red-edged drape",
    "Model wearing EHSAAS 03 in graphite with a black, red and gold-toned border",
    "Model wearing EHSAAS 04 in ivory with fine red and black linework",
    "Model wearing EHSAAS 05 in black with rust-coloured illustrated fish",
    "Model wearing EHSAAS 06 in moss with pale motifs and a rust-coloured edge",
  ],
  raga: [
    "Model wearing RAGA 01 in blue and ivory checks with floral illustration",
    "Model wearing RAGA 02 in ivory with a multicolour checked panel",
    "Model wearing RAGA 03 in vermilion with a multicolour illustrated motif",
    "Model wearing RAGA 04 in ivory with dark illustration and a striped panel",
    "Model wearing RAGA 05 in black with gold-toned dots and a red architectural panel",
    "Model wearing RAGA 06 in graphite with orange, magenta and black panels",
  ],
  noor: [
    "Model wearing NOOR 01 in ivory with silver-toned floral linework",
    "Model wearing NOOR 02 in violet with silver-toned botanical linework",
    "Model wearing NOOR 03 in midnight tones with figures, animals and foliage",
    "Model wearing NOOR 04 in ivory with elephant motifs and emerald and vermilion panels",
    "Model wearing NOOR 05 in ivory and silver with sculptural rosette-like details",
    "Model wearing NOOR 06 in black and ivory with a graphic illustrated surface",
  ],
};

const noorGalleryFiles: Record<string, { file: string; label: string; imageViewType: ProductImage["imageViewType"] }[]> = {
  "01": [
    { file: "editorial-1.jpg", label: "seated model view", imageViewType: "product" },
    { file: "editorial-2.jpg", label: "arranged drape view", imageViewType: "product" },
    { file: "detail-1.jpg", label: "complete drape detail", imageViewType: "detail" },
    { file: "detail-2.jpg", label: "floral linework detail", imageViewType: "detail" },
    { file: "detail-3.jpg", label: "border detail", imageViewType: "detail" },
  ],
  "02": [
    { file: "editorial-1.jpg", label: "model portrait", imageViewType: "product" },
    { file: "editorial-2.jpg", label: "arranged drape view", imageViewType: "product" },
    { file: "detail-1.jpg", label: "complete drape detail", imageViewType: "detail" },
    { file: "detail-2.jpg", label: "botanical linework detail", imageViewType: "detail" },
    { file: "detail-3.jpg", label: "border detail", imageViewType: "detail" },
  ],
  "03": [
    { file: "detail-1.jpg", label: "illustrated figure detail", imageViewType: "detail" },
    { file: "detail-2.jpg", label: "animal and foliage detail", imageViewType: "detail" },
    { file: "detail-3.jpg", label: "border and motif detail", imageViewType: "detail" },
  ],
  "04": [
    { file: "detail-1.jpg", label: "complete drape detail", imageViewType: "detail" },
    { file: "detail-2.jpg", label: "elephant motif detail", imageViewType: "detail" },
    { file: "detail-3.jpg", label: "contrasting panel detail", imageViewType: "detail" },
  ],
  "05": [
    { file: "editorial-1.jpg", label: "seated model view", imageViewType: "product" },
    { file: "detail-1.jpg", label: "complete drape detail", imageViewType: "detail" },
    { file: "detail-2.jpg", label: "sculptural surface detail", imageViewType: "detail" },
    { file: "detail-3.jpg", label: "striped pallu detail", imageViewType: "detail" },
  ],
  "06": [
    { file: "editorial-1.jpg", label: "seated model view", imageViewType: "product" },
    { file: "detail-1.jpg", label: "complete drape detail", imageViewType: "detail" },
    { file: "detail-2.jpg", label: "illustrated surface detail", imageViewType: "detail" },
    { file: "detail-3.jpg", label: "black pallu detail", imageViewType: "detail" },
  ],
};

function makePiece(collectionId: CollectionId, index: number): CollectionPiece {
  const number = String(index).padStart(2, "0");
  const { name: collectionName, number: collectionNumber } = collectionIdentity[collectionId];
  const basePath = `/images/collection/${collectionId}/${number}`;
  const detailImageMetadata: ProductImage[] = collectionId === "noor"
    ? (noorGalleryFiles[number] ?? []).map((image) => ({
        src: `${basePath}/${image.file}`,
        alt: `${collectionName} ${number} ${image.label}`,
        imageViewType: image.imageViewType,
      }))
    : [
        {
          src: `${basePath}/main.png`,
          alt: `${collectionName} ${number} shown as a complete product drape`,
          imageViewType: "product" as const,
        },
        ...(collectionId === "ehsaas" && number === "05"
          ? [{
              src: `${basePath}/editorial-1.jpg`,
              alt: `${collectionName} ${number} seated model view`,
              imageViewType: "product" as const,
            }]
          : []),
        ...[1, 2, 3].map((detailIndex) => ({
          src: `${basePath}/detail-${detailIndex}.png`,
          alt: `${collectionName} ${number} detail ${detailIndex} showing the textile surface and drape`,
          imageViewType: "detail" as const,
        })),
      ];

  return {
    src: `${basePath}/model.jpg`,
    alt: primaryAltByPiece[collectionId][index - 1],
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
    detailImageMetadata,
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

export const noorCollection: CollectionPiece[] = [1, 2, 3, 4, 5, 6].map((index) =>
  makePiece("noor", index),
);

function makeHeroImages(pieces: CollectionPiece[]): BrandImage[] {
  return pieces.map((piece) => ({
    src: piece.src,
    alt: piece.alt,
    title: `${piece.collectionName} ${piece.title}`,
    note: piece.note,
    palette: piece.palette,
    width: piece.width,
    height: piece.height,
    imageViewType: "campaign" as const,
  }));
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
  {
    id: "noor",
    slug: "noor",
    name: "NOOR",
    number: "03",
    title: "NOOR",
    note: "A luminous study of line, ornament and singular presence.",
    description:
      "NOOR is ANURRAKTI's most elevated expression, bringing together six one-of-one sarees shaped by light, illustration and considered detail.",
    heroImages: makeHeroImages(noorCollection),
    pieces: noorCollection,
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
