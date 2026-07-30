import { BLOG_POSTS } from "@/lib/blog-posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Vitrerie LB9`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-[760px] px-5 py-24 sm:px-10">
      <Link href="/blog" className="text-sm text-gray-500 hover:text-ink">
        Retour aux conseils
      </Link>
      <h1 className="mb-3 mt-4 font-display text-3xl font-extrabold text-ink">
        {post.title}
      </h1>
      <p className="mb-10 text-sm text-gray-500">{post.date}</p>

      <div className="flex flex-col gap-5 text-ink/90">
        {post.sections.map((section, i) => {
          if (section.type === "h2") {
            return (
              <h2 key={i} className="mt-4 text-xl font-semibold text-ink">
                {section.text}
              </h2>
            );
          }
          if (section.type === "ul") {
            return (
              <ul key={i} className="list-disc pl-6">
                {section.items?.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          }
          return <p key={i}>{section.text}</p>;
        })}
      </div>

      <div className="mt-12 rounded-sm bg-sand p-6">
        <p className="mb-3 font-semibold text-ink">
          Une fenetre embuee chez vous ?
        </p>
        <Link
          href="/#soumission"
          className="inline-flex rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-paper hover:bg-gold-light"
        >
          Demander une soumission
        </Link>
      </div>
    </main>
  );
}
