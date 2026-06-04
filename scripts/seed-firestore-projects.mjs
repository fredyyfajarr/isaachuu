import { readFile } from 'node:fs/promises';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

if (!serviceAccountJson && !serviceAccountPath) {
  throw new Error(
    'Missing Firebase admin credentials. Set FIREBASE_SERVICE_ACCOUNT_JSON or GOOGLE_APPLICATION_CREDENTIALS.'
  );
}

const credentials = serviceAccountJson
  ? JSON.parse(serviceAccountJson)
  : JSON.parse(await readFile(serviceAccountPath, 'utf8'));

if (!getApps().length) {
  initializeApp({
    credential: cert(credentials),
  });
}

const projects = JSON.parse(
  await readFile(new URL('../src/data/projects.json', import.meta.url), 'utf8')
);
const db = getFirestore();
const batch = db.batch();

for (const project of projects) {
  const ref = db.collection('projects').doc(project.id);
  batch.set(ref, project, { merge: true });
}

await batch.commit();

console.log(`Seeded ${projects.length} portfolio projects to Firestore.`);
