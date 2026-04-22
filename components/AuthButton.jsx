'use client';

import { useEffect, useState } from 'react';
import { signInWithGoogle, signOut, onAuth, isFirebaseConfigured } from '@/lib/firebase';

export default function AuthButton({ compact = false }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsub = onAuth((u) => setUser(u));
    return () => unsub?.();
  }, []);

  const handleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithGoogle();
    } catch (e) {
      setError(e.message || 'Sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    setOpen(false);
  };

  if (user) {
    return (
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 rounded-full border border-ink/15 p-1 pr-3 transition-colors hover:border-terracotta"
        >
          {user.photoURL ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.photoURL}
              alt={user.displayName ?? 'user'}
              className="h-8 w-8 rounded-full border border-ink/20"
            />
          ) : (
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-[11px] text-cream-50">
              {(user.displayName ?? 'U').charAt(0)}
            </span>
          )}
          <span className="hidden text-[11px] uppercase tracking-[0.22em] text-ink/70 sm:inline">
            {user.displayName?.split(' ')[0] ?? 'hi'}
          </span>
        </button>
        {open && (
          <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-dashed border-ink/30 bg-cream-50 p-4 shadow-thread">
            <p className="font-display text-sm italic text-ink">
              Welcome, {user.displayName ?? 'friend'}.
            </p>
            <p className="mt-1 truncate text-[11px] text-ink/60">{user.email}</p>
            <button
              onClick={handleSignOut}
              className="mt-4 w-full rounded-full bg-ink px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-cream-50 transition hover:bg-terracotta"
            >
              sign out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleSignIn}
        disabled={loading}
        className={`btn-thread inline-flex items-center gap-2 rounded-full bg-terracotta px-4 py-2.5 text-[11px] uppercase tracking-[0.24em] text-cream-50 transition-all hover:bg-ink disabled:opacity-60 ${
          compact ? '' : 'px-6 py-3'
        }`}
      >
        <GoogleIcon />
        {loading ? 'opening…' : 'sign in'}
      </button>
      {error && (
        <div className="absolute right-0 top-full mt-3 w-72 rounded-xl border border-dashed border-terracotta/60 bg-cream-50 p-3 text-[11px] leading-relaxed text-ink/80 shadow-stitch">
          {error}
          {!isFirebaseConfigured() && (
            <div className="mt-1 text-[10px] text-ink/50">
              tip: duplicate .env.local.example → .env.local.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#FBF6EB"
        d="M21.35 11.1H12v2.92h5.35c-.24 1.42-1.67 4.17-5.35 4.17a5.99 5.99 0 0 1 0-11.98c1.88 0 3.14.8 3.86 1.5L18 5.65C16.45 4.2 14.43 3.25 12 3.25a8.75 8.75 0 1 0 0 17.5c5.05 0 8.4-3.55 8.4-8.55 0-.57-.06-1-.15-1.4Z"
      />
    </svg>
  );
}
