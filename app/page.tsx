const APP_URL = 'https://app.method.cooking';

function Screenshot({ alt, caption }: { alt: string; caption: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
      {/* TODO: Replace with actual screenshot */}
      <div className="flex aspect-[4/3] items-center justify-center text-sm text-slate-400">
        {alt}
      </div>
      <p className="px-4 py-3 text-center text-sm text-slate-500">{caption}</p>
    </div>
  );
}

function Feature({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{heading}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );
}

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
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Recipes that work with your brain, not against it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Method restructures any recipe into a guided, step-by-step cooking
          workflow. No more re-reading paragraphs, losing your place, or
          forgetting what you already added. Built by someone with ADHD, for
          people who get it.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`${APP_URL}/sign-up`}
            className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Get Started Free
          </a>
          <a
            href="#how-it-works"
            className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Screenshot: Hero */}
      <section className="mx-auto max-w-4xl px-6">
        <Screenshot
          alt="[Screenshot: Method mode — a recipe broken into structured steps with ingredient tracking]"
          caption="Method mode turns a wall of text into a clear, trackable workflow."
        />
      </section>

      {/* The Problem */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-3xl font-bold">Cooking shouldn&apos;t be this hard.</h2>
        <p className="mt-4 text-lg text-slate-600">
          Most recipe sites are designed for scrolling, not cooking. Ingredient
          lists at the top, steps at the bottom, ads everywhere, and nothing to
          help you keep track of where you are. If you have ADHD or struggle
          with executive dysfunction, this is a recipe for frustration — not
          dinner.
        </p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold">How Method works</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            <div>
              <div className="text-2xl font-bold text-indigo-600">1</div>
              <h3 className="mt-2 text-lg font-semibold">Import any recipe</h3>
              <p className="mt-2 text-slate-600">
                Paste a URL, scan a cookbook page, or type it in. Method&apos;s AI
                extracts everything and structures it automatically.
              </p>
              <div className="mt-4">
                <Screenshot
                  alt="[Screenshot: URL import — paste a link, get a structured recipe]"
                  caption="Paste a URL. That's it."
                />
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">2</div>
              <h3 className="mt-2 text-lg font-semibold">
                Switch to Method mode
              </h3>
              <p className="mt-2 text-slate-600">
                AI breaks the recipe into a step-by-step workflow. Each step
                shows exactly which ingredients you need, in the right amounts,
                right there.
              </p>
              <div className="mt-4">
                <Screenshot
                  alt="[Screenshot: Method mode — structured steps with inline ingredients]"
                  caption="Everything you need for each step, in one place."
                />
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-indigo-600">3</div>
              <h3 className="mt-2 text-lg font-semibold">Cook without losing your place</h3>
              <p className="mt-2 text-slate-600">
                Check off steps as you go. Built-in timers start automatically.
                Your screen stays on. If you walk away, you can pick up right
                where you left off.
              </p>
              <div className="mt-4">
                <Screenshot
                  alt="[Screenshot: Step tracking with timers and checkboxes]"
                  caption="Check off steps. Timers just work."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-3xl font-bold">Built for how your brain actually works</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            heading="AI recipe import"
            description="Paste a URL from any recipe site. Method extracts ingredients, steps, and images — no copy-pasting."
          />
          <Feature
            heading="Scan cookbooks"
            description="Take a photo of a cookbook page or recipe card. AI reads it and creates a structured recipe."
          />
          <Feature
            heading="Smart scaling"
            description="Scale any recipe up or down. Units convert automatically — metric, imperial, or fractions."
          />
          <Feature
            heading="Method Chef"
            description="An AI cooking assistant that knows your recipe. Ask about substitutions, timing, technique — anything."
          />
          <Feature
            heading="Step timers"
            description="Timers appear automatically for any step that mentions a time. No fumbling with your phone's clock app."
          />
          <Feature
            heading="Screen stays on"
            description="Your screen won't go dark while you're cooking. No tapping the phone with flour-covered hands."
          />
          <Feature
            heading="Dietary alerts"
            description="Set your dietary restrictions once. Method flags conflicts automatically on every recipe."
          />
          <Feature
            heading="Works offline"
            description="Recipes sync to your device. View and cook even when you don't have a connection."
          />
          <Feature
            heading="Import from Paprika"
            description="Switching from Paprika? Import your entire library — recipes and images — in one step."
          />
        </div>
      </section>

      {/* ADHD section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold">Why ADHD and cooking?</h2>
          <p className="mt-4 text-lg text-slate-600">
            I built Method because I have ADHD and I love cooking — but I kept
            abandoning recipes halfway through. I&apos;d lose my place, forget
            what I already added, get overwhelmed by a wall of text, or just...
            wander off.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Method is the tool I needed. It breaks recipes into small, trackable
            steps. It puts the right information in front of you at the right
            time. It doesn&apos;t ask you to hold everything in working memory.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            If that sounds like what you need too, give it a try.
          </p>
          <div className="mt-8">
            <a
              href={`${APP_URL}/sign-up`}
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-6 py-12 text-center text-sm text-slate-400">
        Method - recipes that work with your brain. © 2026 Mount Pelion LLC
      </footer>
    </main>
  );
}
