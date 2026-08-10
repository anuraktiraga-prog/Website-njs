export type CollectionImage = {
  src: string;
  alt: string;
  title: string;
  note: string;
  palette: string;
  width: number;
  height: number;
};

export const collectionImages: CollectionImage[] = [
  {
    src: "/images/collection/noir-drape.jpg",
    alt: "Black and red textile draped over a sculptural chair",
    title: "Noir Banarasi",
    note: "Deep black, antique gold and red border work.",
    palette: "Black / Red / Gold",
    width: 1465,
    height: 2200,
  },
  {
    src: "/images/collection/blue-check-drape.jpg",
    alt: "Blue checked textile with embroidered floral border",
    title: "Blue Check Drape",
    note: "Checks, soft florals and a cool silver border.",
    palette: "Blue / Silver / Ivory",
    width: 1465,
    height: 2200,
  },
  {
    src: "/images/collection/ivory-red-drape.jpg",
    alt: "Ivory and red textile with animal motif draped over a chair",
    title: "Ivory Motif",
    note: "A graphic ivory field framed with rich red accents.",
    palette: "Ivory / Red / Navy",
    width: 1465,
    height: 2200,
  },
  {
    src: "/images/collection/grey-border-drape.jpg",
    alt: "Grey textile with a gold and red border draped over a chair",
    title: "Slate Border",
    note: "Quiet grey body with a ceremonial contrast border.",
    palette: "Grey / Red / Gold",
    width: 1465,
    height: 2200,
  },
];

export const studioImages: CollectionImage[] = [
  {
    src: "/images/collection/orange-green-textile.jpg",
    alt: "Orange and green textile photographed in a studio setting",
    title: "Textile Study",
    note: "Ruffled edge detail and hand-finished movement.",
    palette: "Saffron / Green",
    width: 1800,
    height: 1200,
  },
  {
    src: "/images/collection/black-red-textile.jpg",
    alt: "Black and red textile photographed in a studio setting",
    title: "Border Study",
    note: "A closer look at contrast borders and woven shimmer.",
    palette: "Black / Red / Gold",
    width: 1800,
    height: 1200,
  },
];
