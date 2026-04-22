'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-6 pb-28 pt-40 md:px-10 md:pt-48"
    >
      {/* faint paper torn edge at top */}
      <div className="absolute inset-x-0 top-24 h-px bg-ink/10" />

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8">
        {/* LEFT: headline */}
        <div className="col-span-12 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-ink/60"
          >
            <span className="h-px w-10 bg-ink/40" />
            Est. 2021 · Made by hand in India
          </motion.p>

          <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] text-ink">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="block"
            >
              Small, slow
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="block"
            >
              and{' '}
              <span className="relative serif-italic text-terracotta">
                stitched
                <StitchSwoosh />
              </span>{' '}
              by
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="block"
            >
              a single pair
              <span className="serif-italic text-sage-700"> of hands.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-ink/75"
          >
            Candid Art is a small-batch atelier for coasters, clay pendants,
            stuffed companions, and hand-embroidered newborn dresses. Every
            piece is signed with a thread and packed with a note in looping
            cursive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#shop"
              data-cursor="hover"
              className="btn-thread group relative inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-cream-50 transition-all duration-500 hover:bg-terracotta hover:shadow-thread"
            >
              Browse the shelf
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path
                  d="M1 5h17m0 0-4-4m4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </a>

            <a
              href="#about"
              className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.32em] text-ink/80 hover:text-terracotta"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/30 group-hover:border-terracotta">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1v8m0 0L1 5m4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </span>
              Our story
            </a>
          </motion.div>

          {/* credential strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-ink/15 pt-6 text-ink/70"
          >
            <Stat kicker="2.4k" label="pieces stitched" />
            <Stat kicker="47" label="repeat collectors" />
            <Stat kicker="12" label="cities shipped to" />
          </motion.div>
        </div>

        {/* RIGHT: collage */}
        <div className="relative col-span-12 lg:col-span-5">
          <Collage />
        </div>
      </div>

      {/* scroll cue */}
      <div className="mt-20 flex items-center justify-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-ink/50">scroll</span>
        <span className="relative flex h-8 w-8 items-center justify-center">
          <span className="absolute h-8 w-8 animate-ping rounded-full border border-terracotta/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
        </span>
      </div>
    </section>
  );
}

function Stat({ kicker, label }) {
  return (
    <div>
      <div className="font-display text-3xl text-ink">{kicker}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ink/50">{label}</div>
    </div>
  );
}

function StitchSwoosh() {
  return (
    <svg
      viewBox="0 0 220 24"
      className="pointer-events-none absolute -bottom-3 left-0 h-6 w-full text-terracotta"
      aria-hidden
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 1.1, ease: 'easeOut' }}
        d="M2 16 Q 55 2 110 14 T 218 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
    </svg>
  );
}

function Collage() {
  return (
    <div className="relative h-[560px] w-full">
      {/* large embroidery hoop card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: -3 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute right-2 top-2 flex h-[360px] w-[300px] items-center justify-center rounded-[180px] bg-cream-50 p-6 shadow-thread"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, #F7EFDC 0 55%, rgba(61,46,38,0.15) 55% 58%, transparent 60%)',
        }}
      >
        <EmbroideredMoth />
        <span className="absolute -left-3 top-1/2 h-6 w-3 rounded-sm bg-ink/70" />
        <span className="absolute -right-3 top-1/2 h-6 w-3 rounded-sm bg-ink/70" />
      </motion.div>

      {/* small taped polaroid */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute left-0 top-24 w-[230px] rounded-md bg-cream-50 p-4 pb-10 shadow-stitch"
      >
        <div className="h-[180px] w-full overflow-hidden rounded-sm bg-gradient-to-br from-terracotta/90 via-terracotta to-terracotta-700">
          <CoasterArt />
        </div>
        <p className="mt-3 font-display text-xs italic text-ink/70">
          “batch no. 14 — jasmine tea coasters”
        </p>
        <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-saffron/70 opacity-70" />
      </motion.div>

      {/* price tag */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -10 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-6 w-[180px]"
      >
        <div className="relative flex flex-col items-start rounded-sm border border-ink/50 bg-cream-100 p-4 pl-8 shadow-[2px_2px_0_0_rgba(61,46,38,0.6)]">
          <span className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-ink/60 bg-cream" />
          <span className="absolute -left-3 top-1/2 -translate-y-1/2 font-display text-xl">•</span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-ink/60">
            from
          </span>
          <span className="font-display text-3xl text-ink">₹ 180</span>
          <span className="mt-1 text-[11px] text-ink/60">a piece, a story</span>
        </div>
      </motion.div>

      {/* signature stamp */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: -14 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-0 right-4"
      >
        <SignatureSeal />
      </motion.div>
    </div>
  );
}

function EmbroideredMoth() {
  return (
    <svg viewBox="0 0 220 220" className="h-[250px] w-[250px]" aria-hidden>
      <g stroke="#3D2E26" strokeWidth="1.5" fill="none" strokeLinecap="round">
        {/* body */}
        <ellipse cx="110" cy="110" rx="8" ry="36" fill="#3D2E26" />
        {/* antennae */}
        <path d="M110 74 Q 98 56 86 48" strokeDasharray="3 3" />
        <path d="M110 74 Q 122 56 134 48" strokeDasharray="3 3" />
        {/* upper wings */}
        <path
          d="M106 92 Q 40 60 30 110 Q 55 120 106 108"
          fill="#C15F3C"
          fillOpacity="0.25"
        />
        <path
          d="M114 92 Q 180 60 190 110 Q 165 120 114 108"
          fill="#8AA083"
          fillOpacity="0.3"
        />
        {/* lower wings */}
        <path d="M106 118 Q 60 136 52 168 Q 90 166 108 142" fill="#D9A441" fillOpacity="0.3" />
        <path d="M114 118 Q 160 136 168 168 Q 130 166 112 142" fill="#7D3C55" fillOpacity="0.25" />
        {/* stitch detail dots */}
        {[40, 60, 80, 100, 120, 140, 160, 180].map((x) => (
          <circle key={x} cx={x} cy={110} r="1.2" fill="#3D2E26" />
        ))}
        {/* floral below */}
        <path d="M80 180 Q 110 170 140 180" strokeDasharray="3 4" />
        <circle cx="90" cy="184" r="3" fill="#C15F3C" />
        <circle cx="130" cy="184" r="3" fill="#8AA083" />
      </g>
    </svg>
  );
}

function CoasterArt() {
  return (
    <svg viewBox="0 0 200 180" className="h-full w-full">
      <g>
        {[0, 1].map((row) =>
          [0, 1].map((col) => (
            <g key={`${row}-${col}`} transform={`translate(${30 + col * 80} ${20 + row * 70})`}>
              <circle cx="30" cy="30" r="28" fill="#FBF6EB" />
              <circle
                cx="30"
                cy="30"
                r="25"
                fill="none"
                stroke="#3D2E26"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <path
                d="M14 30 Q 30 16 46 30 Q 30 44 14 30"
                fill="none"
                stroke={['#C15F3C', '#8AA083', '#D9A441', '#7D3C55'][row * 2 + col]}
                strokeWidth="2"
              />
              <circle cx="30" cy="30" r="2.5" fill="#3D2E26" />
            </g>
          )),
        )}
      </g>
    </svg>
  );
}

function SignatureSeal() {
  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      <svg viewBox="0 0 140 140" className="absolute inset-0 h-full w-full animate-[spin_24s_linear_infinite] text-ink">
        <defs>
          <path id="seal-curve" d="M70,70 m-54,0 a54,54 0 1,1 108,0 a54,54 0 1,1 -108,0" />
        </defs>
        <text fontSize="10.5" letterSpacing="4" fill="currentColor" fontFamily="var(--font-dm-sans)">
          <textPath href="#seal-curve" startOffset="0">
            hand stitched · small batch · signed with thread · hand stitched · small batch ·
          </textPath>
        </text>
      </svg>
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-ink/60 bg-cream-50">
        <span className="font-display text-2xl italic text-terracotta">C·A</span>
      </div>
    </div>
  );
}
