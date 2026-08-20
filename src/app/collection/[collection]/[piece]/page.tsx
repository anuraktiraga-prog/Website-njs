import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnalyticsLink } from "@/components/analytics-link";
import { ProductGallery, type ProductGalleryView } from "@/components/product-gallery";
import { SiteHeader } from "@/components/site-header";
import {
  campaignImages,
  collectionPath,
  collections,
  getCollection,
  getCollectionPiece,
  productPath,
  whatsappPath,
} from "@/lib/collection";

type ProductPageProps = {
  params: Promise<{ collection: string; piece: string }>;
};

export function generateStaticParams() {
  return collections.flatMap((collection) =>
    collection.pieces.map((piece) => ({
      collection: collection.id,
      piece: piece.slug,
    })),
  );
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { collection: collectionId, piece: pieceSlug } = await params;
  const piece = getCollectionPiece(collectionId, pieceSlug);

  if (!piece) return {};

  const url = productPath(piece);
  const productImageUrl = `${url}/opengraph-image`;

  return {
    title: `${piece.collectionName} ${piece.title} | ANURRAKTI`,
    description: piece.description.join(" "),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${piece.collectionName} ${piece.title} | ANURRAKTI`,
      description: piece.description.join(" "),
      url,
      images: [{ url: productImageUrl, width: 1200, height: 630, alt: piece.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${piece.collectionName} ${piece.title} | ANURRAKTI`,
      description: piece.description.join(" "),
      images: [productImageUrl],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { collection: collectionId, piece: pieceSlug } = await params;
  const collection = getCollection(collectionId);
  const piece = getCollectionPiece(collectionId, pieceSlug);

  if (!collection || !piece) notFound();

  const colours = piece.palette.split(" / ");
  const details = piece.productDetails;
  const statusCopy = {
    available: "Available for private enquiry.",
    reserved: "Reserved for private viewing.",
    collected: "This piece has found its home.",
  } as const;
  const detailImages = piece.detailImageMetadata ?? [];
  const productUrl = `https://www.anurrakti.com${productPath(piece)}`;
  const enquiryText = `Hello ANURRAKTI, I would like to enquire about ${piece.collectionName} ${piece.title}.\n\nProduct link: ${productUrl}`;
  const galleryViews: ProductGalleryView[] = [
    {
      src: piece.src,
      alt: piece.alt,
      position: "center",
      fit: "contain",
      label: "Full drape",
      imageViewType: "product",
    },
    ...detailImages.map((image, index) => ({
      src: image.src,
      alt: image.alt,
      position: "center",
      fit: "contain" as const,
      label: ["Textile detail", "Border detail", "Texture study"][index] ?? `Detail ${index + 1}`,
      imageViewType: image.imageViewType === "material" ? "detail" : image.imageViewType,
    })),
  ];

  const productFacts = [
    ["Colours", colours.join(", ")],
    ["Material", details?.material],
    ["Construction", details?.construction],
    ["Design work", details?.designWork],
    ["Care", details?.care],
    ["Availability", details?.availability],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  const relatedPieces = collection.pieces
    .filter((related) => related.slug !== piece.slug)
    .slice(0, 3);

  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${productUrl}#webpage`,
        url: productUrl,
        name: `${piece.collectionName} ${piece.title} | ANURRAKTI`,
        description: piece.description.join(" "),
        image: [piece.src, ...detailImages.map((image) => image.src)].map((src) => `https://www.anurrakti.com${src}`),
        isPartOf: {
          "@id": "https://www.anurrakti.com/#website",
        },
        mainEntity: { "@id": `${productUrl}#product` },
      },
      {
        "@type": "Product",
        "@id": `${productUrl}#product`,
        url: productUrl,
        name: `${piece.collectionName} ${piece.title}`,
        description: piece.description.join(" "),
        image: [piece.src, ...detailImages.map((image) => image.src)].map(
          (src) => `https://www.anurrakti.com${src}`,
        ),
        category: piece.garmentType ?? "Saree",
        color: colours,
        brand: {
          "@type": "Brand",
          name: "ANURRAKTI",
        },
        additionalProperty: productFacts.map(([name, value]) => ({
          "@type": "PropertyValue",
          name,
          value,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${productUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.anurrakti.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Collections",
            item: "https://www.anurrakti.com/collection",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: collection.name,
            item: `https://www.anurrakti.com${collectionPath(collection)}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: `${piece.collectionName} ${piece.title}`,
            item: productUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <main className="mx-auto w-full max-w-[90rem] px-5 pb-12 pt-6 sm:px-8 lg:px-10 lg:pb-8">
        <Link
          href={collectionPath(collection)}
          className="inline-flex text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone-700 transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
        >
          <span aria-hidden="true" className="mr-2">←</span> The {collection.name} collection
        </Link>

        <div className="mt-6 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-start lg:gap-8">
          <ProductGallery views={galleryViews} desktopClassName="lg:h-[min(58svh,42rem)] lg:aspect-auto" />

          <section className="min-w-0 self-start">
            <p className="eyebrow">{collection.name} / Private enquiry</p>
            <h1 className="mt-4 max-w-xl font-serif text-[clamp(4.25rem,7.5vw,7rem)] leading-[0.88] tracking-[-0.04em] text-stone-950">
              {piece.title}
            </h1>
            <p className="mt-5 text-base italic leading-7 text-stone-700">{piece.note}</p>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-6 text-stone-700">
              {piece.description[0]} {piece.description[1]}
            </p>

            {details?.oneOfOne || details?.price ? (
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.68rem] uppercase tracking-[0.16em] text-stone-600">
                {details.oneOfOne ? <span className="text-[#7e271e]">One of one</span> : null}
                {details.price ? <span>{details.price}</span> : null}
              </div>
            ) : null}

            {piece.status ? (
              <p className="mt-3 text-sm text-stone-600" role="status">
                {statusCopy[piece.status]}
              </p>
            ) : null}

            {productFacts.length ? (
              <dl className="mt-6 border-y border-stone-300">
                {productFacts.map(([label, value], index) => (
                  <div key={label} className={`grid grid-cols-[minmax(6.5rem,0.72fr)_minmax(0,1.28fr)] gap-4 py-3 text-[0.82rem] leading-5 ${index < productFacts.length - 1 ? "border-b border-stone-300" : ""}`}>
                    <dt className="uppercase tracking-[0.14em] text-stone-500">{label}</dt>
                    <dd className="text-stone-800">{value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <AnalyticsLink
              eventName="product_enquiry_start"
              eventProperties={{ product: `${piece.collectionName} ${piece.title}` }}
              additionalEvents={[{ name: "whatsapp_click", properties: { placement: "product" } }]}
              href={whatsappPath(enquiryText)}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center bg-[#7e271e] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#f7f1e8] transition-colors hover:bg-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
            >
              Enquire about this piece
            </AnalyticsLink>
            <p className="mt-3 text-center text-xs leading-5 text-stone-500">
              For availability, material composition and handwork details.
            </p>
          </section>
        </div>
      </main>

      <section className="section-shell border-t border-stone-300 py-16 sm:py-24" aria-labelledby="editorial-world">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="eyebrow">The world around the piece</p>
          <h2 id="editorial-world" className="type-section font-serif text-stone-950">
            Chosen by feeling. Remembered for a lifetime.
          </h2>
          <p className="type-body max-w-xl text-stone-700">
            Campaign imagery is atmospheric; the product photography above shows this piece itself.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {campaignImages.slice(0, 2).map((image) => (
            <div key={image.src} className="relative aspect-[4/5] overflow-hidden bg-stone-200">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 639px) 100vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-stone-300 py-16 sm:py-24" aria-labelledby="related-pieces">
        <div className="flex items-end justify-between gap-6">
          <h2 id="related-pieces" className="type-subheading font-serif text-stone-950">Related pieces</h2>
          <Link href={collectionPath(collection)} className="type-cta text-stone-700 underline-offset-4 hover:underline">
            View {collection.name}
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {relatedPieces.map((related) => (
            <AnalyticsLink key={related.slug} href={productPath(related)} eventName="related_product_open" eventProperties={{ product: `${related.collectionName} ${related.title}` }} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <Image src={related.src} alt={related.alt} fill sizes="(max-width: 639px) 100vw, 33vw" className="object-contain transition-transform duration-700 group-hover:scale-[1.02] motion-reduce:transition-none" />
              </div>
              <p className="mt-3 type-label text-stone-600">{related.collectionName} {related.title}</p>
            </AnalyticsLink>
          ))}
        </div>
      </section>
    </>
  );
}
