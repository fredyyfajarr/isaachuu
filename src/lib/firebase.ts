import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const hasFirebaseConfig = Boolean(
  firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
);

const getFirebaseApp = (): FirebaseApp | null => {
  if (!hasFirebaseConfig) {
    return null;
  }

  return getApps()[0] ?? initializeApp(firebaseConfig);
};

export const db = (() => {
  const app = getFirebaseApp();
  return app ? getFirestore(app) : null;
})();

export const auth = (() => {
  const app = getFirebaseApp();
  return app ? getAuth(app) : null;
})();

import { getStorage } from 'firebase/storage';
export const storage = (() => {
  const app = getFirebaseApp();
  return app ? getStorage(app) : null;
})();
