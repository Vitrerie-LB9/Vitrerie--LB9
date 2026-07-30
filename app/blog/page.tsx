import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata = {
  title: "Conseils vitrerie | Vitrerie LB9",
  description: "Conseils pratiques sur les fenêtres, thermos, douches en verre et plus, par Vitrerie LB9.",
};

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-[900px] px-5 py-24 sm:px-10">
      <h1 className="mb-10 font-display text-3xl font-extrabold text-ink">
        Conseils vitrerie
      </h1>
      <ul className="flex flex-col gap-8">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug} className="border-b border-ink/10 pb-8">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-xl font-semibold text-ink group-hover:text-gold-light">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-gray">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
