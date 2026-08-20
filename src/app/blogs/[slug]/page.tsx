import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { blogPath, blogPosts, getBlogPost } from "@/lib/blog";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: [post.primaryKeyword, "Indian sarees", "regional sarees", "saree guide"],
    alternates: { canonical: blogPath(post) },
    openGraph: {
      type: "article",
      title: `${post.title} | ANURRAKTI`,
      description: post.description,
      url: blogPath(post),
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [
        {
          url: post.hero.src,
          width: post.hero.width,
          height: post.hero.height,
          alt: post.hero.alt,
        },
      ],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const articleUrl = `https://www.anurrakti.com${blogPath(post)}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${articleUrl}#article`,
        headline: post.title,
        description: post.description,
        image: `https://www.anurrakti.com${post.hero.src}`,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        mainEntityOfPage: articleUrl,
        author: { "@type": "Organization", name: "ANURRAKTI" },
        publisher: {
          "@type": "Organization",
          name: "ANURRAKTI",
          logo: {
            "@type": "ImageObject",
            url: "https://www.anurrakti.com/logos/anurrakti-stamp.png",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
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
            name: "Blogs",
            item: "https://www.anurrakti.com/blogs",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <article>
          <header className="section-shell pb-10 pt-12 sm:pb-14 sm:pt-20 lg:pt-24">
            <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2">
              <Link href="/blogs" className="transition-colors hover:text-[#7e271e]">
                The Journal
              </Link>
              <span aria-hidden="true">/</span>
              <span>Guide 01</span>
            </nav>

            <h1 className="type-page-title mt-6 max-w-5xl font-serif text-stone-950">
              {post.title}
            </h1>
            <p className="type-lead mt-7 max-w-3xl text-stone-700">{post.excerpt}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-stone-900/15 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
              <span>ANURRAKTI Editorial</span>
              <span aria-hidden="true">/</span>
              <time dateTime={post.publishedAt}>20 August 2026</time>
              <span aria-hidden="true">/</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          <figure className="mx-auto w-full max-w-[90rem] px-0 sm:px-8">
            <div className="relative aspect-[3/2] overflow-hidden bg-[#e8ded1]">
              <Image
                src={post.hero.src}
                alt={post.hero.alt}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover"
              />
            </div>
            <figcaption className="px-5 pt-3 text-[10px] uppercase tracking-[0.14em] text-stone-500 sm:px-0">
              Textile study / ANURRAKTI
            </figcaption>
          </figure>

          <div className="section-shell grid gap-12 py-12 lg:grid-cols-[15rem_minmax(0,45rem)] lg:justify-center lg:gap-16 lg:py-20">
            <aside className="lg:sticky lg:top-40 lg:self-start" aria-labelledby="article-contents">
              <p id="article-contents" className="eyebrow">In this guide</p>
              <ol className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-stone-900/15 pt-5 text-sm text-stone-700 lg:grid-cols-1">
                {post.traditions.map((tradition, index) => (
                  <li key={tradition.id}>
                    <a className="transition-colors hover:text-[#7e271e]" href={`#${tradition.id}`}>
                      <span className="mr-2 text-[10px] text-stone-400">{String(index + 1).padStart(2, "0")}</span>
                      {tradition.name}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="min-w-0">
              <section className="space-y-5 text-stone-700" aria-labelledby="introduction">
                <h2 id="introduction" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
                  A vocabulary of cloth and place
                </h2>
                {post.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>

              <section className="mt-12" aria-labelledby="comparison">
                <h2 id="comparison" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
                  Eight traditions at a glance
                </h2>
                <div className="mt-6 overflow-x-auto border-y border-stone-900/15">
                  <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-[#efe5d7] text-[10px] uppercase tracking-[0.14em] text-stone-600">
                        <th className="px-4 py-3 font-semibold">Tradition</th>
                        <th className="px-4 py-3 font-semibold">Region</th>
                        <th className="px-4 py-3 font-semibold">Signature</th>
                        <th className="px-4 py-3 font-semibold">Character</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-900/10 text-stone-700">
                      {post.traditions.map((tradition) => (
                        <tr key={tradition.id}>
                          <th className="px-4 py-4 font-serif text-base font-normal text-stone-950">{tradition.name}</th>
                          <td className="px-4 py-4">{tradition.region}</td>
                          <td className="px-4 py-4">{tradition.signature}</td>
                          <td className="px-4 py-4">{tradition.character}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <div className="mt-16 divide-y divide-stone-900/15 border-t border-stone-900/15">
                {post.traditions.map((tradition, index) => (
                  <section key={tradition.id} id={tradition.id} className="scroll-mt-40 py-12" aria-labelledby={`${tradition.id}-heading`}>
                    <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr]">
                      <p className="eyebrow pt-1">{String(index + 1).padStart(2, "0")}</p>
                      <div>
                        <h2 id={`${tradition.id}-heading`} className="font-serif text-4xl leading-none text-stone-950 sm:text-5xl">
                          {tradition.name}
                        </h2>
                        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7e271e]">
                          {tradition.region} / {tradition.signature}
                        </p>
                        <div className="mt-6 space-y-5 text-stone-700">
                          {tradition.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              <section className="border-t border-stone-900/15 py-12" aria-labelledby="how-to-choose">
                <h2 id="how-to-choose" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
                  How to choose between saree traditions
                </h2>
                <p className="mt-6 text-stone-700">
                  Begin with how you want the saree to feel and move, then look at its name. Consider the climate, duration of the occasion, visual formality and the amount of structure you enjoy carrying.
                </p>
                <ul className="mt-7 grid gap-4 border-l border-[#7e271e]/40 pl-6 text-stone-700">
                  <li><strong className="font-semibold text-stone-950">For structure:</strong> look at the body of the fabric and how decisively it holds pleats.</li>
                  <li><strong className="font-semibold text-stone-950">For lightness:</strong> notice weight, transparency and how softly the pallu falls.</li>
                  <li><strong className="font-semibold text-stone-950">For surface:</strong> distinguish woven motifs, supplementary-weft work and resist-dyed patterns.</li>
                  <li><strong className="font-semibold text-stone-950">For provenance:</strong> ask where the saree was made, what fibres were used and which technique gives it its name.</li>
                </ul>
                <p className="mt-7 text-stone-700">
                  These questions are especially important when a regional name or geographical indication is part of the description. A beautiful saree should also come with clear, specific information about what you are choosing.
                </p>
              </section>

              <section className="bg-[#421712] px-6 py-10 text-[#fff7ec] sm:px-10 sm:py-12" aria-labelledby="article-cta">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8bcae]">Continue exploring</p>
                <h2 id="article-cta" className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
                  Discover the current ANURRAKTI collections.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#eadfd5]">
                  View each one-of-one saree as a complete composition, followed by its border, surface and drape details.
                </p>
                <Link href="/collection" className="btn-light mt-7">Explore collections</Link>
              </section>

              <section className="mt-12 border-t border-stone-900/15 pt-8" aria-labelledby="sources">
                <h2 id="sources" className="eyebrow">Sources and further reading</h2>
                <p className="mt-4 text-sm text-stone-600">
                  This introductory guide was checked against Government of India cultural, tourism and geographical-indication resources. Textile terminology and regional practices can contain further local variations.
                </p>
                <ol className="mt-5 grid gap-3 text-sm text-stone-700">
                  {post.sources.map((source, index) => (
                    <li key={source.href} className="flex gap-3">
                      <span className="text-[10px] text-stone-400">{String(index + 1).padStart(2, "0")}</span>
                      <a href={source.href} target="_blank" rel="noreferrer" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
