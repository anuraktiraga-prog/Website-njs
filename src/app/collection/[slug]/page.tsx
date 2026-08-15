import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery, type ProductGalleryView } from "@/components/product-gallery";
import { AnalyticsLink } from "@/components/analytics-link";
import { SiteHeader } from "@/components/site-header";
import {
  campaignImages,
  collectionImages,
  collectionSlug,
  contactLinks,
  getCollectionPiece,
} from "@/lib/collection";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return collectionImages.map((piece) => ({ slug: collectionSlug(piece) }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const piece = getCollectionPiece(slug);

  if (!piece) return {};

  return {
    title: `${piece.title} | EHSAAS Collection`,
    description: piece.description.join(" "),
    alternates: { canonical: `/collection/${collectionSlug(piece)}` },
    openGraph: {
      type: "website",
      title: `${piece.title} | EHSAAS Collection | ANURRAKTI`,
      description: piece.description.join(" "),
      url: `/collection/${collectionSlug(piece)}`,
      images: [{ url: piece.src, width: piece.width, height: piece.height, alt: piece.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${piece.title} | EHSAAS Collection | ANURRAKTI`,
      description: piece.description.join(" "),
      images: [piece.src],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const piece = getCollectionPiece(slug);

  if (!piece) notFound();

  const colours = piece.palette.split(" / ");
  const details = piece.productDetails;
  const statusCopy = {
    available: "Available for private enquiry.",
    reserved: "Reserved for private viewing.",
    collected: "This piece has found its home.",
  } as const;
  const detailImages = piece.detailImageMetadata ?? (piece.detailImages ?? []).map((src, index) => ({
    src,
    alt: `${piece.title} textile detail ${index + 1} showing the fabric and surface pattern`,
    imageViewType: "detail" as const,
  }));
  const enquiryText = encodeURIComponent(
    `Hello ANURRAKTI, I would like to enquire about ${piece.title} from the EHSAAS collection.`,
  );
  const galleryViews: ProductGalleryView[] = [
    { src: piece.src, alt: piece.alt, position: "center", label: "Full drape", imageViewType: "product" },
    ...detailImages.map((image, index) => ({
      src: image.src,
      alt: image.alt,
      // Detail shots are already tightly framed; keep them nearly 1:1 so the
      // gallery reveals the full textile study instead of magnifying the same
      // patch across every tile.
      position: ["center 30%", "left 55%", "right 65%"][index] ?? "center",
      fit: "cover" as const,
      label: ["Textile detail", "Border detail", "Texture study"][index] ?? `Detail ${index + 1}`,
      imageViewType: image.imageViewType === "material" ? "detail" : image.imageViewType,
    })),
  ];

  const productFacts = [
    ["Colours", colours.join(", ")],
    ["Material", details?.material],
    ["Construction", details?.construction],
    ["Design work", details?.designWork],
    ["Border", details?.border],
    ["Motif", details?.motif],
    ["Weave", details?.weave],
    ["Embroidery / print", details?.embroideryOrPrint],
    ["Pallu", details?.pallu],
    ["Care", details?.care],
    ["Availability", details?.availability],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  const relatedPieces = collectionImages
    .filter((related) => related.title !== piece.title)
    .slice(0, 3);

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${piece.title} — EHSAAS`,
    description: piece.description.join(" "),
    image: [piece.src, ...detailImages.map((image) => image.src)].map((src) => `https://www.anurrakti.com${src}`),
    url: `https://www.anurrakti.com/collection/${collectionSlug(piece)}`,
    brand: { "@type": "Brand", name: "ANURRAKTI" },
    category: "Saree",
    color: colours.join(", "),
    additionalProperty: [
      { "@type": "PropertyValue", name: "Collection", value: "EHSAAS" },
      { "@type": "PropertyValue", name: "Garment type", value: "Saree" },
      ...(details?.oneOfOne
        ? [{ "@type": "PropertyValue", name: "Edition", value: "One of one" }]
        : []),
    ],
    ...(details?.price && /^\s*[₹\d][\d,]*(?:\.\d+)?\s*$/.test(details.price)
      ? { offers: { "@type": "Offer", price: details.price.replace(/[^\d.]/g, ""), priceCurrency: "INR", url: `https://www.anurrakti.com/collection/${collectionSlug(piece)}` } }
      : {}),
  };

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <main className="section-shell pb-20 pt-8 sm:pt-12">
        <Link
          href="/collection"
          className="inline-flex text-xs font-medium uppercase tracking-[0.2em] text-stone-700 transition-opacity hover:opacity-65 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
        >
          <span aria-hidden="true" className="mr-2">←</span> The EHSAAS collection
        </Link>

        <div className="mt-10 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(20rem,0.8fr)] lg:gap-16">
          <ProductGallery views={galleryViews} />

          <section className="min-w-0 self-start">
            <p className="eyebrow">EHSAAS / Private enquiry</p>
            <h1 className="type-display mt-5 max-w-xl font-serif text-stone-950">
              {piece.title}
            </h1>
            <p className="mt-6 text-lg italic leading-8 text-stone-700">{piece.note}</p>
            <p className="mt-7 max-w-xl text-base leading-7 text-stone-700">
              {piece.description[0]} {piece.description[1]}
            </p>

            {details?.oneOfOne || details?.price ? (
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em] text-stone-600">
                {details.oneOfOne ? <span className="text-[#7e271e]">One of one</span> : null}
                {details.price ? <span>{details.price}</span> : null}
              </div>
            ) : null}

            {piece.status ? (
              <p className="mt-4 text-sm text-stone-600" role="status">
                {statusCopy[piece.status]}
              </p>
            ) : null}

            {productFacts.length ? (
              <dl className="mt-10 border-y border-stone-300">
                {productFacts.map(([label, value], index) => (
                  <div key={label} className={`grid grid-cols-[minmax(7rem,0.7fr)_minmax(0,1.3fr)] gap-4 py-5 text-sm ${index < productFacts.length - 1 ? "border-b border-stone-300" : ""}`}>
                    <dt className="uppercase tracking-[0.16em] text-stone-500">{label}</dt>
                    <dd className="text-stone-800">{value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

      <AnalyticsLink
        eventName="product_enquiry_start"
        eventProperties={{ product: piece.title }}
        additionalEvents={[{ name: "whatsapp_click", properties: { placement: "product" } }]}
              href={`${contactLinks.whatsappPrimary.split("?")[0]}?text=${enquiryText}`}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center bg-[#7e271e] px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#f7f1e8] transition-colors hover:bg-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
            >
              Enquire about this piece
            </AnalyticsLink>
            <p className="mt-4 text-center text-xs leading-5 text-stone-500">
              For availability, material composition and handwork details.
            </p>
          </section>
        </div>
      </main>

      <section className="section-shell border-t border-stone-300 py-16 sm:py-24" aria-labelledby="editorial-world">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="eyebrow">The world around the piece</p>
          <h2 id="editorial-world" className="type-section font-serif text-stone-950">Made to be felt before it is remembered.</h2>
          <p className="type-body max-w-xl text-stone-700">Campaign imagery is atmospheric; the product photography above shows this piece itself.</p>
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
          <Link href="/collection" className="type-cta text-stone-700 underline-offset-4 hover:underline">View collection</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {relatedPieces.map((related) => (
            <AnalyticsLink key={related.title} href={`/collection/${collectionSlug(related)}`} eventName="related_product_open" eventProperties={{ product: related.title }} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <Image src={related.src} alt={related.alt} fill sizes="(max-width: 639px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none" />
              </div>
              <p className="mt-3 type-label text-stone-600">{related.title}</p>
            </AnalyticsLink>
          ))}
        </div>
      </section>
    </>
  );
}
