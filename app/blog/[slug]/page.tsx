import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-posts";
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Vitrerie LB9`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
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
          // ... garde le reste de tes types de section tel quel
        })}
      </div>
    </main>
  );
}