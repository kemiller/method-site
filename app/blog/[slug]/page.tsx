import { getAllPosts, getPost } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.description };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-700">
          Method
        </Link>
        <Link href="/blog" className="text-sm text-slate-600 hover:text-slate-900">
          Blog
        </Link>
      </nav>

      <article className="prose prose-slate mx-auto max-w-3xl px-6 py-12">
        <h1>{post.meta.title}</h1>
        <time className="text-sm text-slate-400">{post.meta.date}</time>
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
