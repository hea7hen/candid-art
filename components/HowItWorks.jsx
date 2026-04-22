'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Trace the thought',
    body: 'A sketch in the margin of a notebook, a fabric swatch pinned to the wall. Every piece starts as an idea traced in pencil.',
    accent: 'text-terracotta',
  },
  {
    n: '02',
    title: 'Choose the fibre',
    body: 'Organic cotton, hand-spun linen, or kiln-ready clay — sourced from three small mills we know by name.',
    accent: 'text-sage-700',
  },
  {
    n: '03',
    title: 'Stitch slow',
    body: 'Threaded by lamplight in batches of six. A single coaster takes forty minutes and three tea breaks.',
    accent: 'text-saffron',
  },
  {
    n: '04',
    title: 'Sign & send',
    body: 'Folded in unbleached muslin, tied with string, slipped into the post with a note in looping cursive.',
    accent: 'text-mulberry',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative overflow-hidden px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-20 grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 md:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.4em] text-terracotta">
              — the process
            </span>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] text-ink">
              Four steps,
              <br />
              <span className="serif-italic text-terracotta">one stubbornly slow pace.</span>
            </h2>
          </div>
          <p className="col-span-12 text-sm leading-relaxed text-ink/70 md:col-span-5">
            Every order moves through the same four rooms: the sketchbook,
            the fibre drawer, the hoop under the lamp, and finally the
            post-box round the corner. No conveyor, no shortcuts, no haste.
          </p>
        </div>

        <div className="relative">
          {/* connecting dashed thread line */}
          <svg
            className="pointer-events-none absolute left-0 right-0 top-20 hidden h-40 w-full text-terracotta/60 md:block"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut' }}
              d="M40 80 Q 300 10 600 80 T 1160 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
          </svg>

          <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                {/* seal */}
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cream-50 shadow-thread">
                  <span className="absolute inset-0 rounded-full border border-dashed border-ink/50" />
                  <span className="absolute inset-[6px] rounded-full border border-ink/70" />
                  <span className="font-display text-2xl italic text-ink">{s.n}</span>
                </div>

                <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-ink/70">
                  {s.body}
                </p>

                {/* stitch detail */}
                <svg
                  className={`mt-5 h-3 w-24 ${s.accent}`}
                  viewBox="0 0 120 12"
                  aria-hidden
                >
                  <path
                    d="M2 6 Q 30 -4 60 6 T 118 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
