import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import {
  blogPath,
  blogPosts,
  formatBlogDate,
  getBlogPost,
  type BlouseBlogPost,
  type BlogPost,
  type CareBlogPost,
  type ColourBlogPost,
  type DrapingBlogPost,
  type FabricsBlogPost,
  type OccasionsBlogPost,
  type StylingBlogPost,
  type TraditionsBlogPost,
} from "@/lib/blog";

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
    authors: [{ name: "ANURRAKTI Editorial", url: "/about" }],
    category: post.eyebrow,
    keywords: [
      post.primaryKeyword,
      "Indian sarees",
      post.kind === "colour"
        ? "colour combinations for saree"
        : post.kind === "blouse"
        ? "saree blouse design and fit"
        : post.kind === "fabrics"
        ? "types of saree fabrics"
        : post.kind === "care"
        ? "saree washing and storage"
        : post.kind === "draping"
        ? "saree draping for beginners"
        : post.kind === "traditions"
        ? "regional sarees"
        : post.kind === "occasions"
          ? "saree for occasions"
          : "saree for body type",
      "saree guide",
    ],
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
        url: articleUrl,
        headline: post.title,
        description: post.description,
        image: `https://www.anurrakti.com${post.hero.src}`,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: "en-IN",
        isAccessibleForFree: true,
        articleSection: post.eyebrow,
        keywords: [post.primaryKeyword, "Indian sarees", "saree guide"],
        about: {
          "@type": "Thing",
          name: post.primaryKeyword,
        },
        citation: post.sources.map((source) => source.href),
        mainEntityOfPage: articleUrl,
        isPartOf: {
          "@type": "Blog",
          "@id": "https://www.anurrakti.com/blogs#blog",
          name: "ANURRAKTI Saree Guides & Stories",
          url: "https://www.anurrakti.com/blogs",
        },
        author: {
          "@type": "Organization",
          "@id": "https://www.anurrakti.com/#organization",
          name: "ANURRAKTI",
          url: "https://www.anurrakti.com/about",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.anurrakti.com/#organization",
          name: "ANURRAKTI",
          url: "https://www.anurrakti.com",
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
              <span>{post.eyebrow}</span>
            </nav>

            <h1 className="type-page-title mt-6 max-w-5xl font-serif text-stone-950">
              {post.title}
            </h1>
            <p className="type-lead mt-7 max-w-3xl text-stone-700">{post.excerpt}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-stone-900/15 pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
              <span>ANURRAKTI Editorial</span>
              <span aria-hidden="true">/</span>
              <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
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
                style={{ objectPosition: post.hero.objectPosition ?? "50% 50%" }}
              />
            </div>
            <figcaption className="px-5 pt-3 text-[10px] uppercase tracking-[0.14em] text-stone-500 sm:px-0">
              {post.hero.caption}
            </figcaption>
          </figure>
          {post.kind === "traditions" && <TraditionsArticle post={post} />}
          {post.kind === "occasions" && <OccasionsArticle post={post} />}
          {post.kind === "styling" && <StylingArticle post={post} />}
          {post.kind === "draping" && <DrapingArticle post={post} />}
          {post.kind === "care" && <CareArticle post={post} />}
          {post.kind === "fabrics" && <FabricsArticle post={post} />}
          {post.kind === "blouse" && <BlouseArticle post={post} />}
          {post.kind === "colour" && <ColourArticle post={post} />}
        </article>
      </main>
    </>
  );
}

function ArticleShell({
  contents,
  children,
}: {
  contents: Array<{ id: string; label: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="section-shell grid gap-12 py-12 lg:grid-cols-[15rem_minmax(0,45rem)] lg:justify-center lg:gap-16 lg:py-20">
      <aside className="lg:sticky lg:top-40 lg:self-start" aria-labelledby="article-contents">
        <p id="article-contents" className="eyebrow">In this guide</p>
        <ol className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-stone-900/15 pt-5 text-sm text-stone-700 lg:grid-cols-1">
          {contents.map((item, index) => (
            <li key={item.id}>
              <a className="transition-colors hover:text-[#7e271e]" href={`#${item.id}`}>
                <span className="mr-2 text-[10px] text-stone-400">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function ArticleIntroduction({ post }: { post: BlogPost }) {
  return (
    <section className="space-y-5 text-stone-700" aria-labelledby="introduction">
      <h2 id="introduction" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
        {post.introductionHeading}
      </h2>
      {post.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>
  );
}

function ArticleClosing({ post }: { post: BlogPost }) {
  return (
    <>
      <section className="bg-[#421712] px-6 py-10 text-[#fff7ec] sm:px-10 sm:py-12" aria-labelledby="article-cta">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d8bcae]">{post.cta.eyebrow}</p>
        <h2 id="article-cta" className="mt-4 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">{post.cta.heading}</h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#eadfd5]">{post.cta.body}</p>
        <Link href={post.cta.href} className="btn-light mt-7">{post.cta.label}</Link>
      </section>

      <section className="mt-12 border-t border-stone-900/15 pt-8" aria-labelledby="sources">
        <h2 id="sources" className="eyebrow">Sources and further reading</h2>
        <p className="mt-4 text-sm text-stone-600">{post.sourceNote}</p>
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
    </>
  );
}

function TraditionsArticle({ post }: { post: TraditionsBlogPost }) {
  return (
    <ArticleShell contents={post.traditions.map(({ id, name }) => ({ id, label: name }))}>
      <ArticleIntroduction post={post} />

      <section className="mt-12" aria-labelledby="comparison">
        <h2 id="comparison" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Eight traditions at a glance</h2>
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
                <h2 id={`${tradition.id}-heading`} className="font-serif text-4xl leading-none text-stone-950 sm:text-5xl">{tradition.name}</h2>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7e271e]">{tradition.region} / {tradition.signature}</p>
                <div className="mt-6 space-y-5 text-stone-700">
                  {tradition.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="how-to-choose">
        <h2 id="how-to-choose" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">How to choose between saree traditions</h2>
        <p className="mt-6 text-stone-700">Begin with how you want the saree to feel and move, then look at its name. Consider the climate, duration of the occasion, visual formality and the amount of structure you enjoy carrying.</p>
        <ul className="mt-7 grid gap-4 border-l border-[#7e271e]/40 pl-6 text-stone-700">
          <li><strong className="font-semibold text-stone-950">For structure:</strong> look at the body of the fabric and how decisively it holds pleats.</li>
          <li><strong className="font-semibold text-stone-950">For lightness:</strong> notice weight, transparency and how softly the pallu falls.</li>
          <li><strong className="font-semibold text-stone-950">For surface:</strong> distinguish woven motifs, supplementary-weft work and resist-dyed patterns.</li>
          <li><strong className="font-semibold text-stone-950">For provenance:</strong> ask where the saree was made, what fibres were used and which technique gives it its name.</li>
        </ul>
        <p className="mt-7 text-stone-700">These questions are especially important when a regional name or geographical indication is part of the description. A beautiful saree should also come with clear, specific information about what you are choosing.</p>
      </section>

      <ArticleClosing post={post} />
    </ArticleShell>
  );
}

function OccasionsArticle({ post }: { post: OccasionsBlogPost }) {
  return (
    <ArticleShell contents={post.occasions.map(({ id, name }) => ({ id, label: name }))}>
      <ArticleIntroduction post={post} />

      <p className="mt-6 text-stone-700">
        If you are still identifying the textile itself, begin with our guide to the{" "}
        <Link href="/blogs/types-of-sarees-in-india" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
          types of sarees in India
        </Link>.
      </p>

      <section className="mt-12" aria-labelledby="decision-framework">
        <h2 id="decision-framework" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">A five-question decision framework</h2>
        <ol className="mt-7 grid gap-px bg-stone-900/15 sm:grid-cols-2">
          {post.framework.map((item, index) => (
            <li key={item.title} className="bg-[#f7f1e8] p-6 last:sm:col-span-2">
              <p className="eyebrow">{String(index + 1).padStart(2, "0")} / {item.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">{item.prompt}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12" aria-labelledby="occasion-comparison">
        <h2 id="occasion-comparison" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Occasions at a glance</h2>
        <div className="mt-6 overflow-x-auto border-y border-stone-900/15">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#efe5d7] text-[10px] uppercase tracking-[0.14em] text-stone-600">
                <th className="px-4 py-3 font-semibold">Occasion</th>
                <th className="px-4 py-3 font-semibold">Prioritise</th>
                <th className="px-4 py-3 font-semibold">Direction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10 text-stone-700">
              {post.occasions.map((occasion) => (
                <tr key={occasion.id}>
                  <th className="px-4 py-4 font-serif text-base font-normal text-stone-950">{occasion.name}</th>
                  <td className="px-4 py-4">{occasion.priority}</td>
                  <td className="px-4 py-4">{occasion.direction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-16 divide-y divide-stone-900/15 border-t border-stone-900/15">
        {post.occasions.map((occasion, index) => (
          <section key={occasion.id} id={occasion.id} className="scroll-mt-40 py-12" aria-labelledby={`${occasion.id}-heading`}>
            <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr]">
              <p className="eyebrow pt-1">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 id={`${occasion.id}-heading`} className="font-serif text-4xl leading-none text-stone-950 sm:text-5xl">{occasion.name}</h2>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7e271e]">{occasion.priority} / {occasion.direction}</p>
                <div className="mt-6 space-y-5 text-stone-700">
                  {occasion.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <ul className="mt-7 grid gap-3 border-l border-[#7e271e]/40 pl-6 text-sm text-stone-700">
                  {occasion.considerations.map((consideration) => <li key={consideration}>{consideration}</li>)}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="final-check">
        <h2 id="final-check" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">The final three-part check</h2>
        <ol className="mt-7 grid gap-4 border-l border-[#7e271e]/40 pl-6 text-stone-700">
          <li><strong className="font-semibold text-stone-950">Does it suit the room?</strong> Check the invitation, venue, time and your role.</li>
          <li><strong className="font-semibold text-stone-950">Can you wear it for the full event?</strong> Sit, walk and raise your arms in the complete look.</li>
          <li><strong className="font-semibold text-stone-950">Does it still feel like you?</strong> Keep one choice—colour, textile, blouse or jewellery—distinctly personal.</li>
        </ol>
      </section>

      <ArticleClosing post={post} />
    </ArticleShell>
  );
}

function StylingArticle({ post }: { post: StylingBlogPost }) {
  return (
    <ArticleShell contents={post.principles.map(({ id, name }) => ({ id, label: name }))}>
      <ArticleIntroduction post={post} />

      <p className="mt-6 text-stone-700">
        Fabric characteristics vary across traditions. If those names are still unfamiliar, read our introduction to the{" "}
        <Link href="/blogs/types-of-sarees-in-india" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
          types of sarees in India
        </Link>{" "}
        before comparing their drape.
      </p>

      <section className="mt-12" aria-labelledby="starting-points">
        <h2 id="starting-points" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Starting points, not body-type rules</h2>
        <p className="mt-5 text-stone-700">
          Each row offers two different visual directions. Neither is the correct one. Choose the effect that interests you, try it with the actual saree and keep it only if it feels comfortable.
        </p>
        <div className="mt-6 overflow-x-auto border-y border-stone-900/15">
          <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#efe5d7] text-[10px] uppercase tracking-[0.14em] text-stone-600">
                <th className="px-4 py-3 font-semibold">Starting point</th>
                <th className="px-4 py-3 font-semibold">For a continuous line</th>
                <th className="px-4 py-3 font-semibold">For more contrast or volume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10 text-stone-700">
              {post.startingPoints.map((item) => (
                <tr key={item.frame}>
                  <th className="px-4 py-4 font-serif text-base font-normal text-stone-950">{item.frame}</th>
                  <td className="px-4 py-4">{item.continuousLine}</td>
                  <td className="px-4 py-4">{item.moreContrast}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-16 divide-y divide-stone-900/15 border-t border-stone-900/15">
        {post.principles.map((principle, index) => (
          <section key={principle.id} id={principle.id} className="scroll-mt-40 py-12" aria-labelledby={`${principle.id}-heading`}>
            <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr]">
              <p className="eyebrow pt-1">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 id={`${principle.id}-heading`} className="font-serif text-4xl leading-none text-stone-950 sm:text-5xl">{principle.name}</h2>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7e271e]">{principle.focus} / {principle.effect}</p>
                <div className="mt-6 space-y-5 text-stone-700">
                  {principle.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="mt-7 bg-[#efe5d7] px-6 py-6">
                  <p className="eyebrow">Try this</p>
                  <ul className="mt-4 grid gap-3 text-sm text-stone-700">
                    {principle.experiments.map((experiment) => <li key={experiment}>{experiment}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="mirror-test">
        <h2 id="mirror-test" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">A better mirror test</h2>
        <p className="mt-6 text-stone-700">
          Once the complete look is ready, stop asking whether it makes you appear taller, smaller or slimmer unless that is genuinely your goal. Ask whether the proportions feel intentional, whether you can move naturally and whether the saree still looks like your choice.
        </p>
        <ol className="mt-7 grid gap-4 border-l border-[#7e271e]/40 pl-6 text-stone-700">
          <li><strong className="font-semibold text-stone-950">Look from a distance.</strong> Read the complete silhouette before examining details.</li>
          <li><strong className="font-semibold text-stone-950">Test movement.</strong> Walk, sit and use the stairs in the planned footwear.</li>
          <li><strong className="font-semibold text-stone-950">Change one variable.</strong> Adjust the pallu, blouse contrast or pleats—not everything at once.</li>
          <li><strong className="font-semibold text-stone-950">Keep the version that feels like you.</strong> Confidence comes from recognition, not compliance.</li>
        </ol>
        <p className="mt-7 text-stone-700">
          If the occasion itself is the larger question, continue with our guide on{" "}
          <Link href="/blogs/how-to-choose-saree-for-every-occasion" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            how to choose a saree for every occasion
          </Link>.
        </p>
      </section>

      <ArticleClosing post={post} />
    </ArticleShell>
  );
}

function DrapingArticle({ post }: { post: DrapingBlogPost }) {
  return (
    <ArticleShell contents={post.steps.map(({ id, name }) => ({ id, label: name }))}>
      <ArticleIntroduction post={post} />

      <section className="mt-12" aria-labelledby="preparation">
        <h2 id="preparation" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">What you need before you begin</h2>
        <div className="mt-7 grid gap-px bg-stone-900/15 sm:grid-cols-2">
          {post.preparation.map((item, index) => (
            <div key={item.item} className="bg-[#f7f1e8] p-6">
              <p className="eyebrow">{String(index + 1).padStart(2, "0")} / {item.item}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">{item.guidance}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 divide-y divide-stone-900/15 border-t border-stone-900/15">
        {post.steps.map((step, index) => (
          <section key={step.id} id={step.id} className="scroll-mt-40 py-12" aria-labelledby={`${step.id}-heading`}>
            <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr]">
              <p className="eyebrow pt-1">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 id={`${step.id}-heading`} className="font-serif text-4xl leading-none text-stone-950 sm:text-5xl">{step.name}</h2>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7e271e]">Checkpoint / {step.checkpoint}</p>
                <div className="mt-6 space-y-5 text-stone-700">
                  {step.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="mt-7 border-l border-[#7e271e]/40 bg-[#efe5d7] px-6 py-5">
                  <p className="eyebrow">Beginner note</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-700">{step.tip}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="troubleshooting">
        <h2 id="troubleshooting" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Common draping problems and adjustments</h2>
        <div className="mt-6 overflow-x-auto border-y border-stone-900/15">
          <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#efe5d7] text-[10px] uppercase tracking-[0.14em] text-stone-600">
                <th className="px-4 py-3 font-semibold">What you notice</th>
                <th className="px-4 py-3 font-semibold">Likely cause</th>
                <th className="px-4 py-3 font-semibold">Adjustment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10 text-stone-700">
              {post.troubleshooting.map((item) => (
                <tr key={item.issue}>
                  <th className="px-4 py-4 font-serif text-base font-normal text-stone-950">{item.issue}</th>
                  <td className="px-4 py-4">{item.likelyCause}</td>
                  <td className="px-4 py-4">{item.adjustment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="practice-plan">
        <h2 id="practice-plan" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Practise in three short rounds</h2>
        <ol className="mt-7 grid gap-4 border-l border-[#7e271e]/40 pl-6 text-stone-700">
          <li><strong className="font-semibold text-stone-950">First round:</strong> learn the sequence without worrying about perfect pleats.</li>
          <li><strong className="font-semibold text-stone-950">Second round:</strong> concentrate on an even hem, waist comfort and clean front pleats.</li>
          <li><strong className="font-semibold text-stone-950">Third round:</strong> wear the blouse, jewellery and footwear planned for the occasion, then test movement.</li>
        </ol>
        <p className="mt-7 text-stone-700">
          The same drape will behave differently in a fluid and a structured textile. Use our guide to{" "}
          <Link href="/blogs/how-to-choose-saree-for-your-body-type" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            choosing a saree and shaping its silhouette
          </Link>{" "}
          to understand those differences, then check the{" "}
          <Link href="/blogs/how-to-choose-saree-for-every-occasion" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            occasion guide
          </Link>{" "}
          before deciding how formal or controlled the final drape should feel.
        </p>
      </section>

      <ArticleClosing post={post} />
    </ArticleShell>
  );
}

function CareArticle({ post }: { post: CareBlogPost }) {
  return (
    <ArticleShell contents={post.practices.map(({ id, name }) => ({ id, label: name }))}>
      <ArticleIntroduction post={post} />

      <section className="mt-12" aria-labelledby="care-decision">
        <h2 id="care-decision" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Six questions before cleaning a saree</h2>
        <ol className="mt-7 grid gap-px bg-stone-900/15 sm:grid-cols-2">
          {post.decisionChecklist.map((item, index) => (
            <li key={item} className="bg-[#f7f1e8] p-6">
              <p className="eyebrow">Question {String(index + 1).padStart(2, "0")}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-16 divide-y divide-stone-900/15 border-t border-stone-900/15">
        {post.practices.map((practice, index) => (
          <section key={practice.id} id={practice.id} className="scroll-mt-40 py-12" aria-labelledby={`${practice.id}-heading`}>
            <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr]">
              <p className="eyebrow pt-1">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 id={`${practice.id}-heading`} className="font-serif text-4xl leading-none text-stone-950 sm:text-5xl">{practice.name}</h2>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7e271e]">{practice.principle} / {practice.outcome}</p>
                <div className="mt-6 space-y-5 text-stone-700">
                  {practice.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="mt-7 border-l border-[#7e271e]/40 bg-[#efe5d7] px-6 py-5">
                  <p className="eyebrow">Care checklist</p>
                  <ul className="mt-4 grid gap-3 text-sm text-stone-700">
                    {practice.checklist.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="material-notes">
        <h2 id="material-notes" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Care changes with the material</h2>
        <p className="mt-5 text-stone-700">
          These are decision prompts, not replacements for the individual saree&apos;s instructions. Construction, dye and decoration can override the usual approach for a fibre.
        </p>
        <div className="mt-6 overflow-x-auto border-y border-stone-900/15">
          <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#efe5d7] text-[10px] uppercase tracking-[0.14em] text-stone-600">
                <th className="px-4 py-3 font-semibold">Material or technique</th>
                <th className="px-4 py-3 font-semibold">Everyday approach</th>
                <th className="px-4 py-3 font-semibold">What changes the decision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10 text-stone-700">
              {post.materialNotes.map((item) => (
                <tr key={item.material}>
                  <th className="px-4 py-4 font-serif text-base font-normal text-stone-950">{item.material}</th>
                  <td className="px-4 py-4">{item.everydayApproach}</td>
                  <td className="px-4 py-4">{item.caution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="care-record">
        <h2 id="care-record" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Keep a simple care record</h2>
        <p className="mt-6 text-stone-700">
          Save the fibre description, maker&apos;s instructions, purchase details, cleaning receipts and a clear photograph of the saree. Record any colour transfer, alteration, stain or repair. That small history makes the next care decision safer and helps another person understand the textile in the future.
        </p>
        <p className="mt-6 text-stone-700">
          Before the saree returns to storage, review how the fabric behaved in our{" "}
          <Link href="/blogs/how-to-drape-a-saree" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            step-by-step draping guide
          </Link>. If you are deciding where to wear it next, continue with the{" "}
          <Link href="/blogs/how-to-choose-saree-for-every-occasion" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            occasion guide
          </Link>.
        </p>
      </section>

      <ArticleClosing post={post} />
    </ArticleShell>
  );
}

function FabricsArticle({ post }: { post: FabricsBlogPost }) {
  return (
    <ArticleShell contents={post.profiles.map(({ id, name }) => ({ id, label: name }))}>
      <ArticleIntroduction post={post} />

      <section className="mt-12" aria-labelledby="vocabulary">
        <h2 id="vocabulary" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
          Six terms that make fabric descriptions clearer
        </h2>
        <div className="mt-7 grid gap-px bg-stone-900/15 sm:grid-cols-2">
          {post.foundationTerms.map((item, index) => (
            <div key={item.term} className="bg-[#f7f1e8] p-6">
              <p className="eyebrow">{String(index + 1).padStart(2, "0")} / {item.term}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-8 text-stone-700">
        These material terms sit alongside regional and weaving traditions, but they are not interchangeable. Our guide to the{" "}
        <Link href="/blogs/types-of-sarees-in-india" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
          types of sarees in India
        </Link>{" "}
        explains how place, technique and textile identity can come together in a saree name.
      </p>

      <div className="mt-16 divide-y divide-stone-900/15 border-t border-stone-900/15">
        {post.profiles.map((profile, index) => (
          <section key={profile.id} id={profile.id} className="scroll-mt-40 py-12" aria-labelledby={`${profile.id}-heading`}>
            <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr]">
              <p className="eyebrow pt-1">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 id={`${profile.id}-heading`} className="font-serif text-4xl leading-none text-stone-950 sm:text-5xl">{profile.name}</h2>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7e271e]">{profile.composition} / {profile.character}</p>
                <div className="mt-6 space-y-5 text-stone-700">
                  {profile.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="mt-7 border-l border-[#7e271e]/40 bg-[#efe5d7] px-6 py-5">
                  <p className="eyebrow">Questions to ask</p>
                  <ul className="mt-4 grid gap-3 text-sm text-stone-700">
                    {profile.questions.map((question) => <li key={question}>{question}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="construction-terms">
        <h2 id="construction-terms" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
          Six fabric terms that are not fibres
        </h2>
        <p className="mt-5 text-stone-700">
          Familiar names may describe a weave, surface or fabric structure rather than the fibre itself. Ask for the exact composition instead of assuming it from the term alone.
        </p>
        <div className="mt-6 overflow-x-auto border-y border-stone-900/15">
          <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#efe5d7] text-[10px] uppercase tracking-[0.14em] text-stone-600">
                <th className="px-4 py-3 font-semibold">Term</th>
                <th className="px-4 py-3 font-semibold">What it describes</th>
                <th className="px-4 py-3 font-semibold">What to ask</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10 text-stone-700">
              {post.constructionTerms.map((item) => (
                <tr key={item.term}>
                  <th className="px-4 py-4 font-serif text-base font-normal text-stone-950">{item.term}</th>
                  <td className="px-4 py-4">{item.description}</td>
                  <td className="px-4 py-4">{item.question}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="fabric-checklist">
        <h2 id="fabric-checklist" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
          A practical saree fabric checklist
        </h2>
        <ol className="mt-7 grid gap-4 border-l border-[#7e271e]/40 pl-6 text-stone-700">
          <li><strong className="font-semibold text-stone-950">Confirm the composition.</strong> Ask for the percentage of every fibre in the saree.</li>
          <li><strong className="font-semibold text-stone-950">Name the construction.</strong> Identify the weave, surface treatment or finishing technique separately.</li>
          <li><strong className="font-semibold text-stone-950">Understand the hand.</strong> Check approximate weight, transparency, texture and how the fabric falls.</li>
          <li><strong className="font-semibold text-stone-950">Check every component.</strong> The body, border, pallu and blouse piece may not share one composition.</li>
          <li><strong className="font-semibold text-stone-950">Read the care instructions.</strong> Decoration, dye and finishing can change how the whole saree must be handled.</li>
          <li><strong className="font-semibold text-stone-950">Verify meaningful claims.</strong> Ask for provenance and production details when handloom, region or technique matters to you.</li>
        </ol>
        <p className="mt-7 text-stone-700">
          Once the material is clear, use our{" "}
          <Link href="/blogs/how-to-choose-saree-for-your-body-type" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            silhouette guide
          </Link>{" "}
          to consider structure and drape. Then save the correct routine in the{" "}
          <Link href="/blogs/how-to-care-for-sarees" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            saree care guide
          </Link>.
        </p>
      </section>

      <ArticleClosing post={post} />
    </ArticleShell>
  );
}

function BlouseArticle({ post }: { post: BlouseBlogPost }) {
  return (
    <ArticleShell contents={post.decisions.map(({ id, name }) => ({ id, label: name }))}>
      <ArticleIntroduction post={post} />

      <p className="mt-6 text-stone-700">
        If the saree&apos;s weight and structure are still unfamiliar, begin with our guide to{" "}
        <Link href="/blogs/saree-fabrics-explained" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
          saree fabrics
        </Link>{" "}
        before deciding how much lining, support or ease the blouse needs.
      </p>

      <section className="mt-12" aria-labelledby="fit-checks">
        <h2 id="fit-checks" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
          What a well-fitting saree blouse should do
        </h2>
        <p className="mt-5 text-stone-700">
          Fit is not the same as tightness. Use these visible and physical checks during a trial, then describe the exact problem instead of asking only for the blouse to be made looser or tighter.
        </p>
        <div className="mt-6 overflow-x-auto border-y border-stone-900/15">
          <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#efe5d7] text-[10px] uppercase tracking-[0.14em] text-stone-600">
                <th className="px-4 py-3 font-semibold">Area</th>
                <th className="px-4 py-3 font-semibold">What good fit feels like</th>
                <th className="px-4 py-3 font-semibold">Problem signs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10 text-stone-700">
              {post.fitChecks.map((item) => (
                <tr key={item.area}>
                  <th className="px-4 py-4 font-serif text-base font-normal text-stone-950">{item.area}</th>
                  <td className="px-4 py-4">{item.goodFit}</td>
                  <td className="px-4 py-4">{item.problemSigns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-16 divide-y divide-stone-900/15 border-t border-stone-900/15">
        {post.decisions.map((decision, index) => (
          <section key={decision.id} id={decision.id} className="scroll-mt-40 py-12" aria-labelledby={`${decision.id}-heading`}>
            <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr]">
              <p className="eyebrow pt-1">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 id={`${decision.id}-heading`} className="font-serif text-4xl leading-none text-stone-950 sm:text-5xl">{decision.name}</h2>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7e271e]">{decision.priority} / {decision.result}</p>
                <div className="mt-6 space-y-5 text-stone-700">
                  {decision.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="mt-7 border-l border-[#7e271e]/40 bg-[#efe5d7] px-6 py-5">
                  <p className="eyebrow">Questions for the fitting</p>
                  <ul className="mt-4 grid gap-3 text-sm text-stone-700">
                    {decision.questions.map((question) => <li key={question}>{question}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="tailor-brief">
        <h2 id="tailor-brief" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
          What to include in your tailor brief
        </h2>
        <ol className="mt-7 grid gap-px bg-stone-900/15 sm:grid-cols-2">
          {post.tailorBrief.map((item, index) => (
            <li key={item} className="bg-[#f7f1e8] p-6">
              <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="movement-test">
        <h2 id="movement-test" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
          The five-minute final fitting
        </h2>
        <ol className="mt-7 grid gap-4 border-l border-[#7e271e]/40 pl-6 text-stone-700">
          <li><strong className="font-semibold text-stone-950">Drape the actual saree.</strong> Pin or arrange the pallu exactly as planned.</li>
          <li><strong className="font-semibold text-stone-950">Move through the event.</strong> Sit, reach, lift the arms, turn and use your phone or handbag.</li>
          <li><strong className="font-semibold text-stone-950">Wait before judging.</strong> Keep the blouse on long enough to notice pressure, abrasion or shifting.</li>
          <li><strong className="font-semibold text-stone-950">Photograph front, side and back.</strong> Look for drag lines, gaping and an uneven lower edge.</li>
          <li><strong className="font-semibold text-stone-950">Mark one change at a time.</strong> Confirm how each alteration affects the neckline, sleeve and closure around it.</li>
        </ol>
        <p className="mt-7 text-stone-700">
          Complete the trial with the steps in our{" "}
          <Link href="/blogs/how-to-drape-a-saree" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            saree draping guide
          </Link>. For formality, duration and venue decisions, continue with the{" "}
          <Link href="/blogs/how-to-choose-saree-for-every-occasion" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            occasion guide
          </Link>.
        </p>
      </section>

      <ArticleClosing post={post} />
    </ArticleShell>
  );
}

function ColourArticle({ post }: { post: ColourBlogPost }) {
  return (
    <ArticleShell contents={post.approaches.map(({ id, name }) => ({ id, label: name }))}>
      <ArticleIntroduction post={post} />

      <section className="mt-12" aria-labelledby="colour-vocabulary">
        <h2 id="colour-vocabulary" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
          Six terms for clearer colour decisions
        </h2>
        <div className="mt-7 grid gap-px bg-stone-900/15 sm:grid-cols-2">
          {post.colourTerms.map((item, index) => (
            <div key={item.term} className="bg-[#f7f1e8] p-6">
              <p className="eyebrow">{String(index + 1).padStart(2, "0")} / {item.term}</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-700">{item.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-8 text-stone-700">
        Colour cannot be separated from material. Review the saree&apos;s fibre, construction and surface in our guide to{" "}
        <Link href="/blogs/saree-fabrics-explained" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
          saree fabrics
        </Link>{" "}
        before judging a palette from names or screen images alone.
      </p>

      <div className="mt-16 divide-y divide-stone-900/15 border-t border-stone-900/15">
        {post.approaches.map((approach, index) => (
          <section key={approach.id} id={approach.id} className="scroll-mt-40 py-12" aria-labelledby={`${approach.id}-heading`}>
            <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr]">
              <p className="eyebrow pt-1">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 id={`${approach.id}-heading`} className="font-serif text-4xl leading-none text-stone-950 sm:text-5xl">{approach.name}</h2>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7e271e]">{approach.relationship} / {approach.effect}</p>
                <div className="mt-6 space-y-5 text-stone-700">
                  {approach.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="mt-7 border-l border-[#7e271e]/40 bg-[#efe5d7] px-6 py-5">
                  <p className="eyebrow">Questions to test</p>
                  <ul className="mt-4 grid gap-3 text-sm text-stone-700">
                    {approach.questions.map((question) => <li key={question}>{question}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="blouse-colour">
        <h2 id="blouse-colour" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
          Five directions for the blouse colour
        </h2>
        <div className="mt-6 overflow-x-auto border-y border-stone-900/15">
          <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#efe5d7] text-[10px] uppercase tracking-[0.14em] text-stone-600">
                <th className="px-4 py-3 font-semibold">Direction</th>
                <th className="px-4 py-3 font-semibold">What it does</th>
                <th className="px-4 py-3 font-semibold">What to check</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-900/10 text-stone-700">
              {post.blouseDirections.map((item) => (
                <tr key={item.direction}>
                  <th className="px-4 py-4 font-serif text-base font-normal text-stone-950">{item.direction}</th>
                  <td className="px-4 py-4">{item.effect}</td>
                  <td className="px-4 py-4">{item.check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-7 text-stone-700">
          Once you select the colour direction, use our guide on{" "}
          <Link href="/blogs/how-to-choose-saree-blouse" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            choosing a saree blouse
          </Link>{" "}
          to resolve its fit, fabric and construction.
        </p>
      </section>

      <section className="border-t border-stone-900/15 py-12" aria-labelledby="colour-test">
        <h2 id="colour-test" className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">
          Test saree colour combinations before the event
        </h2>
        <ol className="mt-7 grid gap-4 border-l border-[#7e271e]/40 pl-6 text-stone-700">
          {post.testingChecklist.map((item, index) => (
            <li key={item}>
              <strong className="font-semibold text-stone-950">{String(index + 1).padStart(2, "0")}.</strong> {item}
            </li>
          ))}
        </ol>
        <p className="mt-7 text-stone-700">
          If the event has a dress code or community-specific colour expectation, check it directly. Then use the{" "}
          <Link href="/blogs/how-to-choose-saree-for-every-occasion" className="underline decoration-stone-400 underline-offset-4 transition-colors hover:text-[#7e271e]">
            occasion guide
          </Link>{" "}
          to balance colour with venue, time, role and movement.
        </p>
      </section>

      <ArticleClosing post={post} />
    </ArticleShell>
  );
}
