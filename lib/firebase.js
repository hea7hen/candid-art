'use client';

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
} from 'firebase/auth';

/* ─── Replace these placeholders with your real Firebase project config ─── */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? 'YOUR_FIREBASE_API_KEY',
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? 'YOUR_PROJECT.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? 'YOUR_PROJECT_ID',
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? 'YOUR_PROJECT.appspot.com',
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? 'YOUR_SENDER_ID',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? 'YOUR_APP_ID',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app = null;
let auth = null;
let analytics = null;

function ensureApp() {
  if (typeof window === 'undefined') return null;
  if (!app) {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    isSupported().then((yes) => (yes ? (analytics = getAnalytics(app)) : null));
  }
  return app;
}

export function isFirebaseConfigured() {
  return (
    firebaseConfig.apiKey &&
    !firebaseConfig.apiKey.startsWith('YOUR_') &&
    firebaseConfig.projectId &&
    !firebaseConfig.projectId.startsWith('YOUR_')
  );
}

export async function signInWithGoogle() {
  if (!isFirebaseConfigured()) {
    throw new Error(
      'Firebase is not configured yet. Drop your keys into .env.local (see .env.local.example).',
    );
  }
  ensureApp();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

export async function signOut() {
  if (!auth) return;
  await fbSignOut(auth);
}

export function onAuth(callback) {
  if (!isFirebaseConfigured()) return () => {};
  ensureApp();
  return onAuthStateChanged(auth, callback);
}
