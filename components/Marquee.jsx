'use client';

const phrases = [
  'hand-stitched',
  'small batch',
  'signed with thread',
  'shipped in recycled cotton',
  'packed with a handwritten note',
  'made slow on purpose',
];

export default function Marquee() {
  return (
    <section
      aria-label="What makes us us"
      className="relative border-y border-ink/10 bg-cream-50/60 py-5 backdrop-blur-sm"
    >
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-12 whitespace-nowrap pr-12">
          {[...phrases, ...phrases, ...phrases].map((p, i) => (
            <span key={i} className="flex items-center gap-10 text-ink">
              <span className="font-display text-2xl italic md:text-3xl">
                {p}
              </span>
              <XMark />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function XMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" className="text-terracotta" aria-hidden>
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
      </g>
    </svg>
  );
}
