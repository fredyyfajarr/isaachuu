const fs = require('fs');

async function seed() {
  const file = fs.readFileSync('src/data/projects.json', 'utf-8');
  const projects = JSON.parse(file);

  const projectId = 'isaachuu-portfolio';
  
  for (const project of projects) {
    const docId = project.id;
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/projects/${docId}`;
    
    // Convert JSON to Firestore document format
    // A simplified conversion since we just need to send the data
    // Actually, Firestore REST API requires strict type formatting like { fields: { title: { stringValue: "..." } } }
    // It's much easier to just use the firebase client sdk!
    console.log(`Will use firebase client sdk instead.`);
  }
}

seed();
