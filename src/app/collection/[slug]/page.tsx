import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery, type ProductGalleryView } from "@/components/product-gallery";
import { SiteHeader } from "@/components/site-header";
import {
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
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const piece = getCollectionPiece(slug);

  if (!piece) notFound();

  const colours = piece.palette.split(" / ");
  const enquiryText = encodeURIComponent(
    `Hello ANURRAKTI, I would like to enquire about ${piece.title} from the EHSAAS collection.`,
  );
  const galleryViews: ProductGalleryView[] = [
    { src: piece.src, alt: piece.alt, position: "center", label: "Full drape" },
    ...(piece.detailImages ?? [piece.src, piece.src, piece.src]).map((src, index) => ({
      src,
      alt: `${piece.title} textile detail ${index + 1}`,
      position: ["center 35%", "left 62%", "right 60%"][index] ?? "center",
      zoom: [1.8, 2.15, 2.35][index] ?? 1,
      label: ["Textile detail", "Border detail", "Texture study"][index] ?? `Detail ${index + 1}`,
    })),
  ];

  return (
    <>
      <SiteHeader />
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
            <p className="eyebrow">EHSAAS / Private viewing</p>
            <h1 className="type-display mt-5 max-w-xl font-serif text-stone-950">
              {piece.title}
            </h1>
            <p className="mt-6 text-lg italic leading-8 text-stone-700">{piece.note}</p>
            <p className="mt-7 max-w-xl text-base leading-7 text-stone-700">
              {piece.description[0]} {piece.description[1]}
            </p>

            <dl className="mt-10 border-y border-stone-300">
              <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-stone-300 py-5 text-sm">
                <dt className="uppercase tracking-[0.16em] text-stone-500">Colours</dt>
                <dd className="text-stone-800">{colours.join(", ")}</dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-stone-300 py-5 text-sm">
                <dt className="uppercase tracking-[0.16em] text-stone-500">Material</dt>
                <dd className="text-stone-800">Shared during a private viewing</dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-stone-300 py-5 text-sm">
                <dt className="uppercase tracking-[0.16em] text-stone-500">Craft</dt>
                <dd className="text-stone-800">Work details shared during a private viewing</dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-4 py-5 text-sm">
                <dt className="uppercase tracking-[0.16em] text-stone-500">Signature</dt>
                <dd className="text-stone-800">{piece.description[0]}</dd>
              </div>
            </dl>

            <a
              href={`${contactLinks.whatsappPrimary.split("?")[0]}?text=${enquiryText}`}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center bg-[#7e271e] px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#f7f1e8] transition-colors hover:bg-stone-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
            >
              Enquire about {piece.title}
            </a>
            <p className="mt-4 text-center text-xs leading-5 text-stone-500">
              For availability, material composition and handwork details.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
