'use client';

import { motion } from 'framer-motion';

const notes = [
  {
    body:
      'The coasters smelled faintly of cinnamon and paper. I cried a little when I unwrapped them. Already ordering another set for my mother.',
    author: 'Ananya R.',
    place: 'Bengaluru',
    rotate: -3,
    tape: 'left',
  },
  {
    body:
      'My daughter’s first dress is now framed in her nursery. Sowparnika stitched her name in sage thread along the hem. There is nothing else like it.',
    author: 'Ishaan & Meera',
    place: 'Bombay',
    rotate: 2,
    tape: 'right',
  },
  {
    body:
      'I bought six clay pendants for my book club. The attention to detail on each one is absurd — tiny moths, tinier knots. They are obsessed.',
    author: 'Divya K.',
    place: 'Kochi',
    rotate: -2,
    tape: 'center',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.4em] text-terracotta">
            — kind words
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] text-ink">
            Notes pinned to
            <br />
            <span className="serif-italic text-sage-700">the studio wall.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {notes.map((n, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40, rotate: n.rotate + 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: n.rotate }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.9, delay: i * 0.12 }}
              className="relative rounded-[12px] bg-cream-50 p-8 pt-12 shadow-stitch"
            >
              {/* washi tape */}
              <span
                className={`absolute top-[-14px] h-7 w-24 -rotate-3 bg-terracotta/50 ${
                  n.tape === 'left'
                    ? 'left-6'
                    : n.tape === 'right'
                      ? 'right-6'
                      : 'left-1/2 -translate-x-1/2'
                }`}
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, rgba(61,46,38,0.25) 0 3px, transparent 3px 7px)',
                }}
              />
              <svg
                className="absolute left-6 top-4 h-8 w-8 text-terracotta"
                viewBox="0 0 40 40"
                aria-hidden
              >
                <text fontFamily="var(--font-playfair)" fontSize="56" fill="currentColor">“</text>
              </svg>

              <blockquote className="font-display text-xl italic leading-[1.5] text-ink">
                {n.body}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-dashed border-ink/30 pt-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracotta/15 font-display italic text-terracotta">
                  {n.author.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-medium text-ink">{n.author}</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-ink/50">
                    {n.place}
                  </div>
                </div>
              </figcaption>

              {/* stitched holes at corners */}
              <span className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-ink/30" />
              <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-ink/30" />
              <span className="absolute left-3 bottom-3 h-1.5 w-1.5 rounded-full bg-ink/30" />
              <span className="absolute right-3 bottom-3 h-1.5 w-1.5 rounded-full bg-ink/30" />
            </motion.figure>
          ))}
        </div>

        {/* rating stitch */}
        <div className="reveal mt-20 flex flex-col items-center gap-4 text-center">
          <div className="flex gap-1 text-terracotta">
            {[0, 1, 2, 3, 4].map((i) => (
              <StitchStar key={i} />
            ))}
          </div>
          <p className="font-display text-xl italic text-ink">
            4.96 out of 5 — across 312 stitched notes
          </p>
        </div>
      </div>
    </section>
  );
}

function StitchStar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 2 L14.5 9 L22 9 L16 14 L18 21 L12 17 L6 21 L8 14 L2 9 L9.5 9 Z"
        fill="currentColor"
        stroke="#3D2E26"
        strokeWidth="0.8"
      />
    </svg>
  );
}
