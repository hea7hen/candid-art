'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductArt from './ProductArt';
import ProductPhoto from './ProductPhoto';
import { openRazorpay } from '@/lib/razorpay-client';

import teaCoaster1 from '@/images/tea_coaster_pic1.jpeg';
import teaCoaster2 from '@/images/tea_coaster_pic2.jpeg';
import dryFlower1 from '@/images/dry_flower_art_pic1.jpeg';
import dryFlower2 from '@/images/dry_flower_art_pic2.jpeg';
import cat1 from '@/images/painting_cat_pic1.jpeg';
import cat2 from '@/images/painting_cat_pic2.jpeg';
import cat3 from '@/images/painting_cat_pic3.jpeg';
import nature1 from '@/images/painting_nature_pic1.jpeg';
import nature2 from '@/images/painting_nature_pic2.jpeg';

const products = [
  {
    slug: 'tea-coasters',
    name: 'Tea Coasters',
    tagline: 'hand-painted · set of four',
    price: 420,
    span: 'md:col-span-5 md:row-span-2',
    palette: 'from-terracotta/10 to-cream-100',
    label: 'best seller',
    images: [teaCoaster1, teaCoaster2],
  },
  {
    slug: 'baby-dress',
    name: 'Newborn Baby Dress',
    tagline: 'custom · stitched to name',
    price: 2400,
    span: 'md:col-span-3 md:row-span-2',
    palette: 'from-terracotta-50 to-cream',
    label: 'bespoke',
  },
  {
    slug: 'fridge-magnets',
    name: 'Fridge Magnets',
    tagline: 'clay · set of six',
    price: 480,
    span: 'md:col-span-2 md:row-span-1',
    palette: 'from-sage-50 to-cream',
  },
  {
    slug: 'stickers',
    name: 'Stickers',
    tagline: 'matte · weather-sealed',
    price: 120,
    span: 'md:col-span-2 md:row-span-1',
    palette: 'from-saffron/10 to-cream',
  },
  {
    slug: 'clay-pendants',
    name: 'Clay Pendants',
    tagline: 'kiln-fired · cotton cord',
    price: 680,
    span: 'md:col-span-2 md:row-span-1',
    palette: 'from-cream-100 to-cream-50',
  },
  {
    slug: 'keychains',
    name: 'Keychains',
    tagline: 'hooped · pocket-sized',
    price: 220,
    span: 'md:col-span-2 md:row-span-1',
    palette: 'from-sage-50 to-cream-50',
  },
  {
    slug: 'stuffed-toys',
    name: 'Stuffed Toys',
    tagline: 'plush companions',
    price: 1250,
    span: 'md:col-span-4 md:row-span-1',
    palette: 'from-terracotta-50 to-cream-100',
    label: 'new',
  },
  {
    slug: 'bookmarks',
    name: 'Bookmarks',
    tagline: 'linen · tasseled',
    price: 260,
    span: 'md:col-span-4 md:row-span-1',
    palette: 'from-cream-100 to-sage-50',
  },
  {
    slug: 'greeting-cards',
    name: 'Greeting Cards',
    tagline: 'deckled · set of three',
    price: 320,
    span: 'md:col-span-4 md:row-span-1',
    palette: 'from-cream-50 to-terracotta-50',
  },
  {
    slug: 'cat-portraits',
    name: 'Cat Portraits',
    tagline: 'hand-painted · framed in pine',
    price: 3200,
    span: 'md:col-span-5 md:row-span-2',
    palette: 'from-terracotta-50 to-cream',
    label: 'atelier edition',
    images: [cat1, cat2, cat3],
  },
  {
    slug: 'dry-flower-frames',
    name: 'Dry Flower Frames',
    tagline: 'pressed blooms · wood mount',
    price: 1850,
    span: 'md:col-span-4 md:row-span-2',
    palette: 'from-cream-100 to-saffron/10',
    images: [dryFlower1, dryFlower2],
  },
  {
    slug: 'nature-paintings',
    name: 'Nature Paintings',
    tagline: 'watercolor · easel-mounted',
    price: 2400,
    span: 'md:col-span-3 md:row-span-2',
    palette: 'from-sage-50 to-cream-50',
    label: 'new',
    images: [nature1, nature2],
  },
];

export default function Products() {
  return (
    <section id="shop" className="relative px-6 py-32 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* heading */}
        <div className="reveal mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-terracotta">
              — the shop
            </span>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] text-ink">
              A dozen little
              <br />
              <span className="serif-italic text-sage-700">rituals</span>, made by hand.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/70">
            Curated in small batches and restocked only when the last one has
            found a home. Tap any piece to add it to the basket — or stitch
            something custom for you.
          </p>
        </div>

        {/* filter chips */}
        <div className="reveal mb-10 flex flex-wrap gap-3">
          {['all', 'for the home', 'to wear', 'for little ones', 'paper & ink', 'wall pieces'].map(
            (f, i) => (
              <button
                key={f}
                className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition-all ${
                  i === 0
                    ? 'border-ink bg-ink text-cream-50'
                    : 'border-ink/25 text-ink/70 hover:border-terracotta hover:text-terracotta'
                }`}
              >
                {f}
              </button>
            ),
          )}
        </div>

        {/* bento grid */}
        <div
          className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-5"
          style={{ gridAutoRows: 'minmax(230px, auto)' }}
        >
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>

        {/* footnote */}
        <div className="reveal mt-16 flex flex-col items-start justify-between gap-6 border-t border-ink/15 pt-8 md:flex-row md:items-center">
          <p className="max-w-md text-sm text-ink/70">
            Want something that isn&rsquo;t on the shelf? The atelier takes four
            bespoke commissions every month.
          </p>
          <a
            href="mailto:atelier@candid.art"
            className="group inline-flex items-center gap-3 rounded-full border border-ink/40 px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-ink transition-all hover:border-terracotta hover:bg-terracotta hover:text-cream-50"
          >
            Commission a piece
            <svg width="18" height="12" viewBox="0 0 20 10" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M1 5h17m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }) {
  const [loading, setLoading] = useState(false);
  const isPhoto = Array.isArray(product.images) && product.images.length > 0;

  const handleBuy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    try {
      await openRazorpay(product);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.article
      data-cursor="hover"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: Math.min(index, 8) * 0.06 }}
      className={`group relative col-span-2 flex flex-col overflow-hidden rounded-[20px] bg-cream-50/80 p-5 shadow-stitch backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-thread md:p-6 ${product.span}`}
    >
      {/* stitched dashed frame */}
      <div className="pointer-events-none absolute inset-2 z-20 rounded-[16px] border border-dashed border-ink/40" />

      {/* label chip */}
      {product.label && (
        <span className="absolute right-4 top-4 z-30 rounded-full bg-terracotta px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-cream-50">
          {product.label}
        </span>
      )}

      {/* visual panel */}
      <div
        className={`relative flex flex-1 items-center justify-center overflow-hidden rounded-[12px] ${
          isPhoto ? 'min-h-[240px]' : `bg-gradient-to-br ${product.palette} p-4`
        }`}
      >
        {isPhoto ? (
          <ProductPhoto images={product.images} alt={product.name} />
        ) : (
          <ProductArt
            slug={product.slug}
            className="h-full max-h-[280px] w-full object-contain"
          />
        )}
        {!isPhoto && (
          <div className="pointer-events-none absolute inset-0 bg-paper-noise opacity-40 mix-blend-multiply" />
        )}
      </div>

      {/* meta row */}
      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <h3 className="font-display text-xl leading-tight text-ink md:text-2xl">
            {product.name}
          </h3>
          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ink/60">
            {product.tagline}
          </p>
        </div>
        <div className="text-right">
          <div className="font-display text-xl text-terracotta md:text-2xl">
            ₹{product.price}
          </div>
          <button
            onClick={handleBuy}
            disabled={loading}
            className="mt-1 text-[10px] uppercase tracking-[0.28em] text-ink/70 underline-offset-4 transition-colors hover:text-terracotta hover:underline disabled:opacity-50"
          >
            {loading ? 'opening…' : 'add to basket'}
          </button>
        </div>
      </div>

      {/* corner X stitch */}
      <svg
        className="absolute right-5 top-5 z-30 h-4 w-4 text-cream-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        viewBox="0 0 16 16"
        style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
      >
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <line x1="2" y1="2" x2="14" y2="14" />
          <line x1="14" y1="2" x2="2" y2="14" />
        </g>
      </svg>
    </motion.article>
  );
}
