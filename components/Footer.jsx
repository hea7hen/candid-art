'use client';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-10 overflow-hidden bg-ink text-cream-50">
      {/* top stitched seam */}
      <div
        aria-hidden
        className="h-4 w-full"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0 12px, rgba(251,246,235,0.3) 12px 22px)',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid grid-cols-12 gap-10">
          {/* brand + newsletter */}
          <div className="col-span-12 md:col-span-6">
            <div className="font-display text-[clamp(3rem,6vw,5rem)] leading-none tracking-tight">
              candid<span className="serif-italic text-terracotta">.art</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-50/70">
              A tiny atelier in the south of India. Hand-stitching slow
              objects for the people who live with them.
            </p>

            <form
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="relative flex-1">
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.28em] text-cream-50/50">
                  your email
                </span>
                <input
                  type="email"
                  required
                  className="h-14 w-full rounded-full border border-dashed border-cream-50/40 bg-transparent px-5 pt-4 text-sm text-cream-50 placeholder:text-cream-50/30 focus:border-terracotta focus:outline-none"
                  placeholder="ada@studio.in"
                />
              </label>
              <button
                type="submit"
                className="btn-thread h-14 rounded-full bg-terracotta px-8 text-[11px] uppercase tracking-[0.3em] text-cream-50 transition-all hover:bg-cream-50 hover:text-ink"
              >
                post me letters
              </button>
            </form>
            <p className="mt-3 text-[11px] text-cream-50/40">
              one hand-written dispatch per full moon. no spam, no hurry.
            </p>
          </div>

          {/* sitemap */}
          <div className="col-span-6 md:col-span-2">
            <Group
              title="shop"
              links={['All pieces', 'Bespoke', 'Gift cards', 'Wholesale']}
            />
          </div>
          <div className="col-span-6 md:col-span-2">
            <Group
              title="atelier"
              links={['Our story', 'Journal', 'Sustainability', 'Press']}
            />
          </div>
          <div className="col-span-12 md:col-span-2">
            <Group
              title="care"
              links={['Shipping', 'Returns', 'Contact', 'FAQ']}
            />
          </div>
        </div>

        {/* giant wordmark */}
        <div
          aria-hidden
          className="pointer-events-none mt-24 select-none font-display text-[clamp(4rem,18vw,18rem)] leading-[0.85] tracking-tight text-cream-50/10"
        >
          candid · art
        </div>

        {/* bottom row */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-cream-50/20 pt-6 md:flex-row md:items-center">
          <p className="text-[11px] uppercase tracking-[0.28em] text-cream-50/50">
            © 2026 candid.art · made slowly in kerala
          </p>
          <div className="flex items-center gap-5 text-cream-50/60">
            <a href="#" className="hover:text-terracotta">instagram</a>
            <a href="#" className="hover:text-terracotta">pinterest</a>
            <a href="#" className="hover:text-terracotta">whatsapp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Group({ title, links }) {
  return (
    <div>
      <div className="mb-5 text-[11px] uppercase tracking-[0.3em] text-cream-50/50">
        {title}
      </div>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-sm text-cream-50/85 underline-offset-4 transition hover:text-terracotta hover:underline"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
