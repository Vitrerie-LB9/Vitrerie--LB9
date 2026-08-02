import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata = {
  title: "Conseils vitrerie | Vitrerie LB9",
  description: "Conseils pratiques sur les fenêtres, thermos, douches en verre et plus, par Vitrerie LB9.",
};

export default function BlogIndexPage() {
  return (
    <main>
      <section className="relative flex min-h-[40vh] items-end bg-ink text-paper">
        <Image
          src="/images/photos/garde-corps-courbe-nuit.webp"
          alt=""
          fill
          priority
          className="object-cover object-[center_40%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(10,10,10,.35) 0%, rgba(10,10,10,.85) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[900px] px-5 py-14 sm:px-10">
          <h1 className="font-display text-3xl font-extrabold text-paper">
            Conseils vitrerie
          </h1>
          <p className="mt-2 max-w-[52ch] text-[1.05rem] text-[#c7c4bd]">
            Conseils pratiques sur les fenêtres, thermos, douches en verre et plus.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-16 sm:px-10">
        <ul className="flex flex-col gap-8">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug} className="border-b border-ink/10 pb-8">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold text-ink group-hover:text-gold">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}