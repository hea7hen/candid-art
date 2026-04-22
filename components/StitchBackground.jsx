'use client';

/* Floating embroidery motifs — running stitches, X-stitches, spools, needles,
   french knots, floral blooms. All pure SVG so they stay crisp at any zoom. */

const XStitch = ({ className = '', style }) => (
  <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden>
    <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none">
      <line x1="6" y1="6" x2="34" y2="34" />
      <line x1="34" y1="6" x2="6" y2="34" />
    </g>
  </svg>
);

const RunStitch = ({ className = '', style }) => (
  <svg viewBox="0 0 120 20" className={className} style={style} aria-hidden>
    <path
      d="M2 10 Q 30 -4 60 10 T 118 10"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeDasharray="10 8"
      strokeLinecap="round"
    />
  </svg>
);

const Bloom = ({ className = '', style }) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
    <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line
          key={a}
          x1="32"
          y1="32"
          x2="32"
          y2="10"
          transform={`rotate(${a} 32 32)`}
          strokeDasharray="3 3"
        />
      ))}
      <circle cx="32" cy="32" r="4" fill="currentColor" />
    </g>
  </svg>
);

const Spool = ({ className = '', style }) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
    <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
      <rect x="12" y="10" width="40" height="44" rx="3" />
      <line x1="12" y1="20" x2="52" y2="20" />
      <line x1="12" y1="44" x2="52" y2="44" />
      <path
        d="M16 24 Q 32 30 48 24 Q 32 34 16 40 Q 32 38 48 40"
        strokeDasharray="2 3"
      />
      <line x1="52" y1="32" x2="62" y2="40" strokeDasharray="3 3" />
    </g>
  </svg>
);

const Needle = ({ className = '', style }) => (
  <svg viewBox="0 0 120 120" className={className} style={style} aria-hidden>
    <g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
      <circle cx="20" cy="20" r="6" />
      <line x1="24" y1="24" x2="100" y2="100" />
      <path d="M 20 20 Q 40 10 60 22 T 98 20" strokeDasharray="3 4" />
    </g>
  </svg>
);

const Hoop = ({ className = '', style }) => (
  <svg viewBox="0 0 80 80" className={className} style={style} aria-hidden>
    <g stroke="currentColor" strokeWidth="1.8" fill="none">
      <circle cx="40" cy="40" r="32" strokeDasharray="4 5" />
      <circle cx="40" cy="40" r="26" />
      <line x1="8" y1="38" x2="8" y2="42" strokeWidth="3" />
      <line x1="72" y1="38" x2="72" y2="42" strokeWidth="3" />
    </g>
  </svg>
);

export default function StitchBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden linen-texture"
    >
      {/* Warm gradient blobs */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-terracotta/15 blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-sage/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-saffron/10 blur-3xl" />

      {/* Floating motifs */}
      <XStitch
        className="absolute text-terracotta/30 animate-drift"
        style={{ top: '12%', left: '8%', width: 28, height: 28, animationDelay: '0s' }}
      />
      <Bloom
        className="absolute text-sage-700/35 animate-sway"
        style={{ top: '22%', right: '10%', width: 72, height: 72, animationDelay: '1.2s' }}
      />
      <RunStitch
        className="absolute text-terracotta/25 animate-drift-alt"
        style={{ top: '38%', left: '2%', width: 180, height: 30, animationDelay: '2s' }}
      />
      <Spool
        className="absolute text-mulberry/30 animate-sway"
        style={{ top: '46%', right: '6%', width: 56, height: 56, animationDelay: '3s' }}
      />
      <XStitch
        className="absolute text-sage-700/30 animate-drift"
        style={{ top: '62%', left: '15%', width: 36, height: 36, animationDelay: '4s' }}
      />
      <Needle
        className="absolute text-ink/25 animate-drift-alt"
        style={{ top: '70%', right: '18%', width: 120, height: 120, animationDelay: '1.8s' }}
      />
      <Hoop
        className="absolute text-terracotta/25 animate-sway"
        style={{ top: '80%', left: '6%', width: 88, height: 88, animationDelay: '2.5s' }}
      />
      <Bloom
        className="absolute text-saffron/35 animate-drift"
        style={{ top: '88%', right: '25%', width: 56, height: 56, animationDelay: '5s' }}
      />
      <RunStitch
        className="absolute text-sage-700/25 animate-drift-alt"
        style={{ top: '94%', left: '40%', width: 220, height: 30, animationDelay: '3.5s' }}
      />
      <XStitch
        className="absolute text-mulberry/25 animate-drift"
        style={{ top: '28%', left: '46%', width: 22, height: 22, animationDelay: '6s' }}
      />
    </div>
  );
}
