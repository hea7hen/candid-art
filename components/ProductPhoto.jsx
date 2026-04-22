'use client';

import Image from 'next/image';
import { useState } from 'react';

/* Cross-fades between the first two images on hover. If the product has
   three images, the third appears as a tiny peek at the bottom-right. */
export default function ProductPhoto({ images, alt }) {
  const [hovered, setHovered] = useState(false);
  const primary = images[0];
  const secondary = images[1] ?? images[0];
  const peek = images[2];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={primary}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
        className={`object-cover transition-all duration-700 ease-out ${
          hovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
        }`}
      />
      <Image
        src={secondary}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
        className={`object-cover transition-all duration-700 ease-out ${
          hovered ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
      />

      {/* warm duotone wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-terracotta/10 mix-blend-multiply" />

      {/* peek thumbnail if a third image exists */}
      {peek && (
        <div
          className={`pointer-events-none absolute bottom-3 right-3 h-16 w-16 overflow-hidden rounded-[6px] border-2 border-cream-50 shadow-thread transition-all duration-500 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <Image
            src={peek}
            alt=""
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
      )}

      {/* dashed frame */}
      <div className="pointer-events-none absolute inset-[10px] rounded-[8px] border border-dashed border-cream-50/50" />

      {/* image counter */}
      <div className="absolute bottom-3 left-3 rounded-full bg-cream-50/80 px-2.5 py-1 text-[9px] uppercase tracking-[0.24em] text-ink/80 backdrop-blur-sm">
        {images.length} views
      </div>
    </div>
  );
}
