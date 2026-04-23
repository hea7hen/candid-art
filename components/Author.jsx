'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import authorPhoto from '@/images/author.png';

const annotations = [
  {
    id: 'hoop',
    label: 'the only hoop',
    note: 'used since the very first stitch in 2021',
    x: '46%',
    y: '46%',
    side: 'right',
  },
  {
    id: 'cup',
    label: 'her grandmother\u2019s cup',
    note: 'fired in a backyard kiln in Palakkad',
    x: '12%',
    y: '64%',
    side: 'left',
  },
  {
    id: 'note',
    label: 'the note that ships',
    note: '\u201cmade slowly, with care, for you.\u201d',
    x: '70%',
    y: '74%',
    side: 'right',
  },
];

export default function Author() {
  return (
    <section
      id="maker"
      className="relative overflow-hidden px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 lg:gap-16">
        {/* LEFT — portrait */}
        <div className="reveal col-span-12 lg:col-span-7">
          <PortraitCard />
        </div>

        {/* RIGHT — bio */}
        <div className="col-span-12 flex flex-col justify-center lg:col-span-5">
          <span className="reveal text-[11px] uppercase tracking-[0.4em] text-terracotta">
            — the maker
          </span>

          <h2 className="reveal mt-6 font-display text-[clamp(2.5rem,4.8vw,4.6rem)] leading-[1.02] text-ink">
            Meet
            <span className="serif-italic text-terracotta"> Sowparnika</span>,
            <br />
            the hand behind
            <br />
            <span className="serif-italic text-sage-700">every hoop.</span>
          </h2>

          <p className="reveal mt-8 max-w-md text-[16px] leading-[1.85] text-ink/75">
            By day, Sowparnika sculpts in pixels — a 3D artist who spends her
            working hours rigging light, fabric, and shadow inside the quiet
            hum of a monitor. By evening she steps away from the screen and
            picks up the other kind of craft: the one that leaves thread on
            your sleeve and clay under your fingernails.
          </p>

          <p className="reveal mt-5 max-w-md text-[16px] leading-[1.85] text-ink/75">
            She learned to thread a needle at eleven, sitting beside her
            grandmother on a verandah in Palakkad — and has quietly been
            returning to that table ever since. candid.art is her slow hour:
            a kiln at the back of the house, a kettle always on, and one
            very stubborn embroidery hoop that refuses to be retired.
          </p>

          <p className="reveal mt-5 max-w-md text-[16px] leading-[1.85] text-ink/75">
            She is the atelier&rsquo;s entire team. Every coaster, dress, and
            clay pendant passes through the same pair of hands — sketched,
            stitched, signed, and sealed in muslin before it leaves the
            studio door.
          </p>

          {/* signature */}
          <div className="reveal mt-10">
            <SignatureScript />
            <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-ink/55">
              founder &middot; stitched since 2014
            </p>
          </div>

          {/* facts strip */}
          <div className="reveal mt-12 grid grid-cols-3 gap-4 border-t border-dashed border-ink/30 pt-6">
            <Fact kicker="Kerala" label="based in" />
            <Fact kicker="312" label="orders posted" />
            <Fact kicker="1 of 1" label="team size" />
          </div>

          {/* CTA */}
          <a
            href="#shop"
            data-cursor="hover"
            className="reveal btn-thread mt-10 inline-flex w-fit items-center gap-3 rounded-full border border-ink bg-transparent px-7 py-3 text-[11px] uppercase tracking-[0.3em] text-ink transition-all hover:bg-ink hover:text-cream-50"
          >
            See what she&rsquo;s stitched
            <svg width="18" height="10" viewBox="0 0 20 10" fill="none">
              <path
                d="M1 5h17m0 0-4-4m4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function PortraitCard() {
  return (
    <div className="relative">
      {/* polaroid frame */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -3 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="relative rounded-[10px] bg-cream-50 p-4 pb-16 shadow-thread md:p-5 md:pb-20"
      >
        {/* washi tape */}
        <span
          className="absolute -top-4 left-12 h-8 w-32 -rotate-3 opacity-70"
          style={{
            background:
              'repeating-linear-gradient(45deg, rgba(193,95,60,0.5) 0 6px, rgba(193,95,60,0.25) 6px 12px)',
          }}
        />
        <span
          className="absolute -top-4 right-16 h-8 w-24 rotate-2 opacity-65"
          style={{
            background:
              'repeating-linear-gradient(90deg, rgba(138,160,131,0.55) 0 4px, rgba(138,160,131,0.25) 4px 9px)',
          }}
        />

        {/* photo */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px]">
          <Image
            src={authorPhoto}
            alt="Sowparnika at her atelier table, mid-stitch, surrounded by coasters and dried flowers."
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority
          />

          {/* duotone wash */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-cream/5 mix-blend-multiply" />

          {/* dashed inner frame */}
          <div className="pointer-events-none absolute inset-3 rounded-[4px] border border-dashed border-cream-50/60" />

          {/* annotations */}
          {annotations.map((a, i) => (
            <Annotation key={a.id} {...a} delay={0.6 + i * 0.18} />
          ))}

          {/* stamp */}
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-cream-50/90 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-ink/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            atelier · kerala
          </div>
        </div>

        {/* polaroid caption */}
        <p className="mt-5 px-2 font-display text-base italic text-ink/75 md:text-lg">
          &ldquo;a tuesday in the studio, batch no. 27 — the hoop hasn&rsquo;t
          left this table since wednesday last.&rdquo;
        </p>

        {/* corner stitch holes */}
        <span className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-ink/30" />
        <span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-ink/30" />
        <span className="absolute left-3 bottom-3 h-1.5 w-1.5 rounded-full bg-ink/30" />
        <span className="absolute right-3 bottom-3 h-1.5 w-1.5 rounded-full bg-ink/30" />
      </motion.div>

      {/* floating circle stamp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute -bottom-6 -left-6 hidden h-32 w-32 md:flex"
      >
        <CircleStamp />
      </motion.div>

      {/* floating thread squiggle */}
      <svg
        aria-hidden
        className="absolute -right-6 -top-8 hidden h-32 w-32 text-terracotta md:block"
        viewBox="0 0 120 120"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.9 }}
          d="M10 100 Q 40 30 80 60 Q 110 80 100 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="3 4"
          strokeLinecap="round"
        />
        <circle cx="10" cy="100" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}

function Annotation({ label, note, x, y, side, delay }) {
  const isRight = side === 'right';
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="absolute hidden md:block"
      style={{ left: x, top: y }}
    >
      {/* the dot anchored on the photo element */}
      <span className="relative flex h-3 w-3 items-center justify-center">
        <span className="absolute h-3 w-3 animate-ping rounded-full bg-cream-50/70" />
        <span className="h-2 w-2 rounded-full bg-cream-50 ring-2 ring-terracotta" />
      </span>
      {/* line + label */}
      <div
        className={`pointer-events-none absolute top-0 flex items-center gap-2 ${
          isRight ? 'left-3 flex-row' : 'right-3 flex-row-reverse'
        }`}
      >
        <svg
          width="48"
          height="20"
          viewBox="0 0 48 20"
          className="text-cream-50/80"
          aria-hidden
        >
          <path
            d={isRight ? 'M0 10 H 46' : 'M48 10 H 2'}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </svg>
        <div
          className={`min-w-[140px] rounded-md bg-cream-50/95 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-ink shadow-stitch backdrop-blur-sm ${
            isRight ? 'text-left' : 'text-right'
          }`}
        >
          <div className="font-display text-[12px] italic normal-case tracking-normal text-terracotta">
            {label}
          </div>
          <div className="mt-0.5 text-ink/65">{note}</div>
        </div>
      </div>
    </motion.div>
  );
}

function Fact({ kicker, label }) {
  return (
    <div>
      <div className="font-display text-2xl text-ink">{kicker}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ink/55">
        {label}
      </div>
    </div>
  );
}

function SignatureScript() {
  return (
    <svg viewBox="0 0 280 70" className="h-14 w-56 text-ink" aria-hidden>
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeOut' }}
        d="M8 50 Q 18 18 30 36 Q 36 52 46 38 Q 56 18 64 40 T 88 36 Q 100 16 110 38 Q 120 56 130 36 Q 144 16 156 38 Q 170 56 184 30 Q 200 8 214 32 T 244 30 Q 260 22 272 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.6 }}
        d="M210 56 Q 240 60 268 54"
        fill="none"
        stroke="#C15F3C"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

function CircleStamp() {
  return (
    <div className="relative h-32 w-32">
      <svg
        viewBox="0 0 140 140"
        className="absolute inset-0 h-full w-full animate-[spin_24s_linear_infinite] text-ink"
        aria-hidden
      >
        <defs>
          <path
            id="maker-curve"
            d="M70,70 m-54,0 a54,54 0 1,1 108,0 a54,54 0 1,1 -108,0"
          />
        </defs>
        <text
          fontSize="10.5"
          letterSpacing="3.5"
          fill="currentColor"
          fontFamily="var(--font-dm-sans)"
        >
          <textPath href="#maker-curve" startOffset="0">
            stitched by sowparnika · since 2021 · made in palakkad ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-3 flex items-center justify-center rounded-full border border-dashed border-ink/50 bg-cream-50">
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
          <circle
            cx="20"
            cy="20"
            r="15"
            fill="none"
            stroke="#3D2E26"
            strokeDasharray="3 3"
          />
          <path
            d="M12 20 L18 26 L28 14"
            fill="none"
            stroke="#C15F3C"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
