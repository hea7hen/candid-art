/* Hand-drawn SVG illustrations for each product, styled as embroidery
   patterns rather than stock photos. Inherits currentColor where useful. */

export default function ProductArt({ slug, className = '' }) {
  const Comp = MAP[slug] ?? Placeholder;
  return <Comp className={className} />;
}

const Placeholder = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden>
    <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeDasharray="4 4" />
  </svg>
);

const TeaCoasters = ({ className }) => (
  <svg viewBox="0 0 320 220" className={className} aria-hidden>
    <defs>
      <pattern id="tc-grain" width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="0.6" fill="#3D2E26" opacity="0.4" />
      </pattern>
    </defs>
    {/* coaster stack */}
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(${60 + i * 30} ${50 + i * 6})`}>
        <ellipse cx="50" cy="50" rx="48" ry="14" fill="#E8DAB8" />
        <ellipse cx="50" cy="48" rx="48" ry="14" fill="#F7EFDC" />
        <ellipse cx="50" cy="48" rx="48" ry="14" fill="url(#tc-grain)" />
        <ellipse cx="50" cy="48" rx="44" ry="11" fill="none" stroke="#3D2E26" strokeDasharray="3 3" strokeWidth="0.8" />
      </g>
    ))}
    {/* tea cup on top */}
    <g transform="translate(170 50)">
      <ellipse cx="40" cy="30" rx="34" ry="10" fill="#C15F3C" />
      <path d="M6 30 V 70 a34 10 0 0 0 68 0 V 30" fill="#C15F3C" />
      <ellipse cx="40" cy="30" rx="30" ry="8" fill="#3D2E26" opacity="0.85" />
      <path d="M74 40 Q 92 45 92 60 Q 92 74 74 70" fill="none" stroke="#C15F3C" strokeWidth="6" strokeLinecap="round" />
      {/* steam */}
      <path d="M30 16 Q 35 4 28 -8" fill="none" stroke="#3D2E26" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.6" />
      <path d="M45 14 Q 50 2 43 -12" fill="none" stroke="#3D2E26" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.6" />
    </g>
    {/* decorative stitch */}
    <path d="M40 190 Q 160 170 280 190" fill="none" stroke="#3D2E26" strokeDasharray="4 5" strokeWidth="1.2" />
  </svg>
);

const FridgeMagnets = ({ className }) => (
  <svg viewBox="0 0 220 160" className={className} aria-hidden>
    <g transform="translate(30 20)">
      {/* lemon */}
      <ellipse cx="30" cy="40" rx="24" ry="18" fill="#D9A441" />
      <path d="M10 40 Q 30 26 52 40" fill="none" stroke="#3D2E26" strokeWidth="1" />
      {/* leaf */}
      <path d="M26 24 Q 36 10 44 20 Q 38 30 26 24" fill="#8AA083" />
    </g>
    <g transform="translate(110 10)">
      {/* moth */}
      <path d="M30 40 Q 6 28 4 48 Q 12 56 30 50" fill="#7D3C55" opacity="0.85" />
      <path d="M30 40 Q 54 28 56 48 Q 48 56 30 50" fill="#C15F3C" opacity="0.85" />
      <ellipse cx="30" cy="48" rx="3" ry="12" fill="#3D2E26" />
      <path d="M30 34 Q 24 24 18 20" stroke="#3D2E26" fill="none" strokeWidth="1" />
      <path d="M30 34 Q 36 24 42 20" stroke="#3D2E26" fill="none" strokeWidth="1" />
    </g>
    <g transform="translate(30 80)">
      {/* mushroom */}
      <path d="M4 40 Q 30 4 56 40 Z" fill="#C15F3C" />
      <rect x="20" y="40" width="20" height="26" rx="4" fill="#F7EFDC" />
      <circle cx="18" cy="24" r="3" fill="#F7EFDC" />
      <circle cx="34" cy="18" r="3" fill="#F7EFDC" />
      <circle cx="44" cy="28" r="3" fill="#F7EFDC" />
    </g>
    <g transform="translate(120 76)">
      {/* sun */}
      <circle cx="30" cy="30" r="16" fill="#D9A441" />
      <g stroke="#3D2E26" strokeWidth="1.5">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line key={a} x1="30" y1="30" x2="30" y2="6" transform={`rotate(${a} 30 30)`} strokeDasharray="2 4" />
        ))}
      </g>
    </g>
    {/* stitch tray line */}
    <path d="M14 140 L 206 140" stroke="#3D2E26" strokeDasharray="3 4" strokeWidth="1" opacity="0.5" />
  </svg>
);

const Stickers = ({ className }) => (
  <svg viewBox="0 0 240 160" className={className} aria-hidden>
    {[
      { x: 30, y: 24, r: -8, color: '#C15F3C' },
      { x: 110, y: 14, r: 6, color: '#8AA083' },
      { x: 178, y: 30, r: -4, color: '#D9A441' },
      { x: 60, y: 86, r: 10, color: '#7D3C55' },
      { x: 150, y: 92, r: -12, color: '#536A4E' },
    ].map((s, i) => (
      <g key={i} transform={`translate(${s.x} ${s.y}) rotate(${s.r})`}>
        <rect width="54" height="54" rx="10" fill="#F7EFDC" stroke="#3D2E26" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="27" cy="27" r="12" fill={s.color} />
        <path d="M15 27 Q 27 15 39 27 Q 27 39 15 27" fill="#F7EFDC" opacity="0.3" />
      </g>
    ))}
  </svg>
);

const StuffedToys = ({ className }) => (
  <svg viewBox="0 0 260 220" className={className} aria-hidden>
    {/* bunny */}
    <g transform="translate(40 40)">
      {/* ears */}
      <ellipse cx="40" cy="24" rx="8" ry="24" fill="#F0C8B4" />
      <ellipse cx="72" cy="24" rx="8" ry="24" fill="#F0C8B4" />
      <ellipse cx="40" cy="24" rx="4" ry="16" fill="#C15F3C" />
      <ellipse cx="72" cy="24" rx="4" ry="16" fill="#C15F3C" />
      {/* head */}
      <circle cx="56" cy="70" r="40" fill="#F0C8B4" />
      <circle cx="46" cy="68" r="3" fill="#3D2E26" />
      <circle cx="66" cy="68" r="3" fill="#3D2E26" />
      <path d="M52 80 Q 56 84 60 80" stroke="#3D2E26" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* cheek blush */}
      <circle cx="40" cy="78" r="4" fill="#C15F3C" opacity="0.35" />
      <circle cx="72" cy="78" r="4" fill="#C15F3C" opacity="0.35" />
      {/* stitch across body */}
      <path d="M30 108 L 82 108" stroke="#3D2E26" strokeDasharray="3 3" strokeWidth="1" />
    </g>
    {/* heart */}
    <g transform="translate(160 70)">
      <path
        d="M40 60 Q 10 40 20 18 Q 34 4 40 22 Q 46 4 60 18 Q 70 40 40 60 Z"
        fill="#C15F3C"
      />
      <path
        d="M40 60 Q 10 40 20 18 Q 34 4 40 22 Q 46 4 60 18 Q 70 40 40 60 Z"
        fill="none"
        stroke="#3D2E26"
        strokeDasharray="3 3"
      />
    </g>
  </svg>
);

const Bookmarks = ({ className }) => (
  <svg viewBox="0 0 220 120" className={className} aria-hidden>
    {[
      { x: 10, color: '#C15F3C' },
      { x: 54, color: '#8AA083' },
      { x: 98, color: '#D9A441' },
      { x: 142, color: '#7D3C55' },
    ].map((b, i) => (
      <g key={i} transform={`translate(${b.x} 10) rotate(${(i - 1.5) * 4} 16 48)`}>
        <path
          d="M0 0 H 32 V 96 L 16 84 L 0 96 Z"
          fill={b.color}
          opacity="0.88"
        />
        <path
          d="M0 0 H 32 V 96 L 16 84 L 0 96 Z"
          fill="none"
          stroke="#3D2E26"
          strokeDasharray="2 3"
          strokeWidth="1"
        />
        <circle cx="16" cy="18" r="4" fill="#F7EFDC" />
        <path d="M6 30 Q 16 40 26 30" stroke="#F7EFDC" strokeWidth="1.5" fill="none" />
        <path d="M6 50 Q 16 60 26 50" stroke="#F7EFDC" strokeWidth="1.5" fill="none" />
      </g>
    ))}
    {/* tassel threads */}
    <g stroke="#3D2E26" strokeWidth="1" strokeDasharray="2 3">
      <path d="M180 50 Q 200 70 194 100" fill="none" />
      <path d="M184 50 Q 208 80 200 104" fill="none" />
    </g>
  </svg>
);

const ClayPendants = ({ className }) => (
  <svg viewBox="0 0 220 160" className={className} aria-hidden>
    {/* chain */}
    <path
      d="M20 20 Q 110 80 200 20"
      fill="none"
      stroke="#3D2E26"
      strokeWidth="1.5"
      strokeDasharray="2 4"
    />
    {/* pendant 1 */}
    <g transform="translate(70 52)">
      <circle cx="0" cy="0" r="22" fill="#C15F3C" />
      <circle cx="0" cy="0" r="22" fill="none" stroke="#3D2E26" strokeDasharray="2 3" />
      <path d="M-12 0 Q 0 -14 12 0 Q 0 14 -12 0" fill="#F7EFDC" />
      <circle cx="0" cy="0" r="3" fill="#3D2E26" />
    </g>
    {/* pendant 2 */}
    <g transform="translate(140 62)">
      <rect x="-16" y="-18" width="32" height="36" rx="6" fill="#8AA083" />
      <rect x="-16" y="-18" width="32" height="36" rx="6" fill="none" stroke="#3D2E26" strokeDasharray="2 3" />
      <g stroke="#F7EFDC" strokeWidth="1.5" fill="none">
        <line x1="-8" y1="-8" x2="8" y2="8" />
        <line x1="8" y1="-8" x2="-8" y2="8" />
      </g>
    </g>
  </svg>
);

const BabyDress = ({ className }) => (
  <svg viewBox="0 0 220 260" className={className} aria-hidden>
    {/* hanger */}
    <path d="M110 30 L 70 60 L 150 60 Z" fill="none" stroke="#3D2E26" strokeWidth="1.5" />
    <circle cx="110" cy="24" r="4" fill="#3D2E26" />
    {/* dress */}
    <path
      d="M70 64 L 60 100 L 80 104 L 50 200 L 170 200 L 140 104 L 160 100 L 150 64 Z"
      fill="#F9E7DD"
    />
    <path
      d="M70 64 L 60 100 L 80 104 L 50 200 L 170 200 L 140 104 L 160 100 L 150 64 Z"
      fill="none"
      stroke="#3D2E26"
      strokeDasharray="3 3"
    />
    {/* collar */}
    <path d="M88 64 Q 110 82 132 64" fill="none" stroke="#3D2E26" strokeWidth="1.5" />
    {/* pocket embroidery */}
    <g transform="translate(110 130)">
      <circle cx="0" cy="0" r="5" fill="#C15F3C" />
      <g stroke="#8AA083" strokeWidth="1.2">
        <path d="M0 0 L-10 -14" />
        <path d="M0 0 L10 -14" />
        <path d="M0 0 L-14 0" />
        <path d="M0 0 L14 0" />
        <path d="M0 0 L-10 14" />
        <path d="M0 0 L10 14" />
      </g>
      <circle cx="-10" cy="-14" r="3" fill="#8AA083" />
      <circle cx="10" cy="-14" r="3" fill="#D9A441" />
      <circle cx="-14" cy="0" r="3" fill="#C15F3C" />
      <circle cx="14" cy="0" r="3" fill="#7D3C55" />
      <circle cx="-10" cy="14" r="3" fill="#8AA083" />
      <circle cx="10" cy="14" r="3" fill="#D9A441" />
    </g>
    {/* hem running stitch */}
    <path d="M54 196 Q 110 220 166 196" fill="none" stroke="#3D2E26" strokeDasharray="3 3" />
  </svg>
);

const GreetingCards = ({ className }) => (
  <svg viewBox="0 0 260 160" className={className} aria-hidden>
    <g transform="translate(30 20) rotate(-6)">
      <rect width="100" height="120" rx="4" fill="#F7EFDC" stroke="#3D2E26" strokeDasharray="3 3" />
      <text x="50" y="60" textAnchor="middle" fontFamily="var(--font-playfair)" fontStyle="italic" fontSize="22" fill="#C15F3C">
        hello.
      </text>
      <path d="M20 80 Q 50 72 80 80" stroke="#8AA083" fill="none" strokeDasharray="2 3" />
    </g>
    <g transform="translate(140 30) rotate(4)">
      <rect width="100" height="120" rx="4" fill="#F0C8B4" stroke="#3D2E26" strokeDasharray="3 3" />
      <g transform="translate(50 50)">
        <circle r="18" fill="#C15F3C" />
        <g stroke="#F7EFDC" strokeWidth="1.5" fill="none">
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <line key={a} x1="0" y1="0" x2="0" y2="-14" transform={`rotate(${a})`} />
          ))}
        </g>
      </g>
      <text x="50" y="100" textAnchor="middle" fontFamily="var(--font-playfair)" fontStyle="italic" fontSize="14" fill="#3D2E26">
        thinking of you
      </text>
    </g>
  </svg>
);

const Keychains = ({ className }) => (
  <svg viewBox="0 0 180 160" className={className} aria-hidden>
    {/* ring */}
    <circle cx="40" cy="30" r="14" fill="none" stroke="#3D2E26" strokeWidth="2.5" />
    {/* chain */}
    <path d="M42 44 L 54 70" stroke="#3D2E26" strokeWidth="1.5" strokeDasharray="2 3" />
    {/* charm: tiny embroidery hoop */}
    <g transform="translate(90 110)">
      <circle r="32" fill="#8AA083" />
      <circle r="32" fill="none" stroke="#3D2E26" strokeDasharray="3 3" />
      <g stroke="#F7EFDC" strokeWidth="1.5" fill="none">
        <path d="M-16 -6 Q 0 -20 16 -6" strokeDasharray="3 3" />
        <circle cx="-10" cy="0" r="3" fill="#C15F3C" />
        <circle cx="10" cy="0" r="3" fill="#D9A441" />
        <circle cx="0" cy="10" r="3" fill="#7D3C55" />
      </g>
    </g>
  </svg>
);

const MAP = {
  'tea-coasters': TeaCoasters,
  'fridge-magnets': FridgeMagnets,
  stickers: Stickers,
  'stuffed-toys': StuffedToys,
  bookmarks: Bookmarks,
  'clay-pendants': ClayPendants,
  'baby-dress': BabyDress,
  'greeting-cards': GreetingCards,
  keychains: Keychains,
};
