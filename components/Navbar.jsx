'use client';

import { useEffect, useState } from 'react';
import AuthButton from './AuthButton';

const links = [
  { label: 'Atelier', href: '#about' },
  { label: 'The Shop', href: '#shop' },
  { label: 'How It\u2019s Made', href: '#process' },
  { label: 'The Maker', href: '#maker' },
  { label: 'Notes', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-cream-50/70 border-b border-ink/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <LogoMark />
          <span className="font-display text-2xl tracking-tight text-ink">
            candid<span className="serif-italic text-terracotta">.art</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[11px] uppercase tracking-[0.28em] text-ink/70 transition-colors hover:text-terracotta"
              >
                {l.label}
                <span className="absolute inset-x-0 -bottom-1.5 h-[6px] bg-[repeating-linear-gradient(90deg,currentColor_0_5px,transparent_5px_9px)] bg-[length:100%_2px] bg-[position:0_100%] bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Wishlist"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition-all hover:border-terracotta hover:text-terracotta sm:flex"
          >
            <HeartIcon />
          </button>
          <button
            aria-label="Cart"
            className="relative flex h-10 items-center gap-2 rounded-full border border-ink/15 px-4 text-[11px] uppercase tracking-[0.22em] text-ink/70 transition-all hover:border-terracotta hover:text-terracotta"
          >
            <BagIcon />
            <span className="hidden sm:inline">Cart</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-terracotta text-[10px] text-cream-50">
              2
            </span>
          </button>
          <AuthButton compact />
        </div>
      </nav>
    </header>
  );
}

function LogoMark() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="text-ink transition-transform duration-500 group-hover:rotate-12"
      aria-hidden
    >
      <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
      <path
        d="M11 20 L17 26 L29 14"
        fill="none"
        stroke="#C15F3C"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="20" r="1.6" fill="#C15F3C" />
      <circle cx="29" cy="14" r="1.6" fill="#C15F3C" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
