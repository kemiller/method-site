const APP_URL = 'https://app.method.cooking';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Nav */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="text-sm font-semibold tracking-wide text-slate-700">
          Method
        </div>
        <div className="flex gap-4 text-sm">
          <a href="/blog" className="text-slate-600 hover:text-slate-900">
            Blog
          </a>
          <a
            href={`${APP_URL}/sign-in`}
            className="text-slate-600 hover:text-slate-900"
          >
            Sign In
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Stop ruining recipes.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Method restructures any recipe into a guided workflow so the right
          information is in front of you at the right time.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <a
            href={`${APP_URL}/waitlist`}
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Try It Free
          </a>
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="overflow-hidden rounded-xl" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src="https://www.loom.com/embed/b56e5d14a2584968b102e1a6d1706e54"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-6 py-12 text-center text-sm text-slate-400">
        Method — recipes that work with your brain. © 2026 Mount Pelion LLC
      </footer>
    </main>
  );
}
