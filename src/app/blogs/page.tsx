import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { blogPath, blogPosts, formatBlogDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Saree Guides & Stories",
  description:
    "Read ANURRAKTI guides to sarees, regional textile traditions, styling, selection and care.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Saree Guides & Stories | ANURRAKTI",
    description:
      "Guides to sarees, regional textile traditions, styling, selection and care.",
    url: "/blogs",
    images: [
      {
        url: "/images/campaign/house-textile-closeup.png",
        width: 2220,
        height: 1481,
        alt: "Close view of an ANURRAKTI textile",
      },
    ],
  },
};

export default function BlogsPage() {
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.anurrakti.com/blogs#blog",
    url: "https://www.anurrakti.com/blogs",
    name: "ANURRAKTI Saree Guides & Stories",
    description:
      "Guides to sarees, regional textile traditions, styling, selection and care.",
    inLanguage: "en-IN",
    publisher: { "@id": "https://www.anurrakti.com/#organization" },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://www.anurrakti.com${blogPath(post)}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
    })),
  };

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        <section className="section-shell border-b border-stone-900/10 pb-12 pt-16 sm:pb-16 sm:pt-24 lg:pt-28">
          <p className="eyebrow">ANURRAKTI / The Journal</p>
          <h1 className="type-page-title mt-5 max-w-4xl font-serif text-stone-950">
            Saree guides and stories.
          </h1>
          <p className="type-lead mt-6 max-w-2xl text-stone-700">
            Clear introductions to sarees, regional textile traditions, styling,
            selection and care.
          </p>
        </section>

        <section className="section-shell py-12 sm:py-16 lg:py-20" aria-labelledby="latest-articles">
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-stone-900/15 pb-5">
            <h2 id="latest-articles" className="font-serif text-2xl text-stone-950 sm:text-3xl">
              Latest articles
            </h2>
            <p className="eyebrow">{String(blogPosts.length).padStart(2, "0")} published</p>
          </div>

          <div className="grid gap-10">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="grid items-center gap-7 border-b border-stone-900/10 pb-10 last:border-b-0 last:pb-0 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                <Link
                  href={blogPath(post)}
                  className="group relative block aspect-[3/2] overflow-hidden bg-[#e8ded1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7e271e]"
                  aria-label={`Read ${post.title}`}
                >
                  <Image
                    src={post.hero.src}
                    alt={post.hero.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    style={{ objectPosition: post.hero.objectPosition ?? "50% 50%" }}
                  />
                </Link>

                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                    <span>{post.eyebrow}</span>
                    <span aria-hidden="true">/</span>
                    <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                    <span aria-hidden="true">/</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mt-5 font-serif text-[clamp(2rem,3.5vw,3.6rem)] leading-[1.04] tracking-[-0.025em] text-stone-950">
                    <Link className="transition-colors hover:text-[#7e271e]" href={blogPath(post)}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-6 max-w-xl text-stone-700">{post.excerpt}</p>
                  <Link href={blogPath(post)} className="btn-secondary mt-8">
                    Read the guide
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
