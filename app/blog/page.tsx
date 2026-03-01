import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export const metadata = { title: 'Blog' };

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-700">
          Method
        </Link>
      </nav>

      <div className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold">Blog</h1>
        {posts.length === 0 ? (
          <p className="mt-8 text-slate-500">Posts coming soon.</p>
        ) : (
          <ul className="mt-8 space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h2 className="text-xl font-semibold group-hover:text-indigo-600">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-1 text-slate-600">{post.description}</p>
                  )}
                  <time className="mt-1 text-sm text-slate-400">
                    {post.date}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
