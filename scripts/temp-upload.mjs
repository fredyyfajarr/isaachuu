import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { readFile } from 'fs/promises';

const firebaseConfig = {
  apiKey: "AIzaSyCD7ZYQ1SlsGsw4iDBURLAOooLJGiPpCvU",
  authDomain: "isaachuu-portfolio.firebaseapp.com",
  projectId: "isaachuu-portfolio",
  storageBucket: "isaachuu-portfolio.firebasestorage.app",
  messagingSenderId: "292044331539",
  appId: "1:292044331539:web:233ac28da867b14d16bde6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seed() {
  const file = await readFile('src/data/projects.json', 'utf-8');
  const projects = JSON.parse(file);

  console.log(`Starting to seed ${projects.length} projects...`);
  for (const project of projects) {
    const docRef = doc(db, 'projects', project.id);
    await setDoc(docRef, project, { merge: true });
    console.log(`Inserted ${project.id}`);
  }
  console.log("Done!");
  process.exit(0);
}

seed().catch(console.error);
