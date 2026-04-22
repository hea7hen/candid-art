'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hover, setHover] = useState(false);
  const targetRef = useRef({ x: -100, y: -100 });
  const ringRef2 = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    const over = (e) => {
      const t = e.target;
      const interactive =
        t.closest('a, button, [data-cursor="hover"], input, textarea') !== null;
      setHover(interactive);
    };
    let raf;
    const loop = () => {
      ringRef2.current.x += (targetRef.current.x - ringRef2.current.x) * 0.18;
      ringRef2.current.y += (targetRef.current.y - ringRef2.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringRef2.current.x}px, ${ringRef2.current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  return (
    <>
      <span ref={dotRef} className="cursor-dot" aria-hidden />
      <span
        ref={ringRef}
        className={`cursor-ring ${hover ? 'active' : ''}`}
        aria-hidden
      />
    </>
  );
}
