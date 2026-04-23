'use client';

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10">
        {/* Left: portrait hoop */}
        <div className="reveal col-span-12 lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            {/* outer hoop */}
            <div className="absolute inset-0 rounded-full border-[10px] border-ink/80 bg-cream-50 shadow-thread">
              <div className="absolute -left-3 top-1/2 h-7 w-4 -translate-y-1/2 rounded-sm bg-ink/80" />
              <div className="absolute -right-3 top-1/2 h-7 w-4 -translate-y-1/2 rounded-sm bg-ink/80" />
            </div>
            {/* inner embroidery */}
            <div className="absolute inset-[18px] overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-cream to-terracotta/25" />
              <svg viewBox="0 0 400 400" className="absolute inset-0">
                <g fill="none" strokeLinecap="round">
                  {/* botanical stems */}
                  <path
                    d="M40 360 Q 120 260 90 180 Q 70 100 160 60"
                    stroke="#536A4E"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M360 360 Q 280 280 310 200 Q 330 120 260 70"
                    stroke="#536A4E"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  {/* blooms */}
                  {[[120, 120], [170, 180], [230, 130], [280, 200], [200, 240]].map(
                    ([x, y], i) => (
                      <g key={i} transform={`translate(${x} ${y})`}>
                        <circle r="16" fill="#C15F3C" opacity="0.85" />
                        <circle r="7" fill="#FBF6EB" />
                        <g stroke="#3D2E26" strokeWidth="1.5">
                          {[0, 60, 120, 180, 240, 300].map((a) => (
                            <line
                              key={a}
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="-15"
                              transform={`rotate(${a})`}
                            />
                          ))}
                        </g>
                      </g>
                    ),
                  )}
                  {/* leaves */}
                  <path d="M150 260 Q 170 230 200 240" stroke="#8AA083" strokeWidth="4" />
                  <path d="M250 260 Q 230 230 200 240" stroke="#8AA083" strokeWidth="4" />
                  {/* signature */}
                  <text
                    x="200"
                    y="330"
                    textAnchor="middle"
                    fill="#3D2E26"
                    fontFamily="var(--font-playfair)"
                    fontStyle="italic"
                    fontSize="22"
                  >
                    — sowparnika, 2021
                  </text>
                </g>
              </svg>
            </div>

            {/* floating thread tail */}
            <svg
              className="absolute -right-10 -top-6 h-32 w-32 text-terracotta"
              viewBox="0 0 120 120"
              aria-hidden
            >
              <path
                d="M10 100 Q 40 40 80 60 Q 110 80 100 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="3 4"
              />
              <circle cx="10" cy="100" r="3" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Right: text */}
        <div className="col-span-12 flex flex-col justify-center lg:col-span-7">
          <span className="reveal text-[11px] uppercase tracking-[0.4em] text-terracotta">
            — atelier notes
          </span>
          <h2 className="reveal mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-ink">
            A quiet practice
            <br />
            <span className="serif-italic text-sage-700">of stitch &amp; clay.</span>
          </h2>
          <p className="reveal mt-8 max-w-xl text-[17px] leading-[1.8] text-ink/75">
            Candid Art began on a kitchen table in 2021 — a single embroidery
            hoop, one spool of rust-red thread, and an afternoon that refused
            to hurry. Today it&rsquo;s still a studio of one, making tiny objects
            that prefer to take their time: coasters traced with tea stains,
            clay pendants fired in a backyard kiln, a newborn&rsquo;s first dress
            hemmed to whisper their name.
          </p>

          <div className="reveal mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Pillar
              num="01"
              title="One hoop, one hand"
              body="No factories, no third-party finishing. Each piece passes through the same pair of hands, start to knot."
            />
            <Pillar
              num="02"
              title="Earth-leaning materials"
              body="Organic cotton, reclaimed linen, kiln-fired terracotta, plant dyes steeped in steel pots."
            />
            <Pillar
              num="03"
              title="Signed, sealed, sent"
              body="Every order leaves with a thread-signature, a note in cursive, and seeds to plant."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ num, title, body }) {
  return (
    <div className="relative border-t border-ink/20 pt-5">
      <span className="absolute -top-[11px] left-0 bg-cream px-2 text-[10px] uppercase tracking-[0.28em] text-terracotta">
        {num}
      </span>
      <h3 className="font-display text-xl text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">{body}</p>
    </div>
  );
}
