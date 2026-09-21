import fs from 'fs';

const pdfBuffer = fs.readFileSync('docs/kupdf.net_el-mundo-magico-de-las-combinaciones-koblenz.pdf');
const text = pdfBuffer.toString('latin1');

console.log('PDF buffer size:', pdfBuffer.length);

// Search for "Diagrama" or "Diagrama núm." occurrences
const matches = [];
const regex = /Diagrama\s*(?:n[úu]m\.?\s*)?(\d+)/gi;
let match;
while ((match = regex.exec(text)) !== null) {
  matches.push({ num: match[1], index: match.index });
}

console.log('Found Diagrama occurrences:', matches.length);
matches.slice(0, 30).forEach(m => {
  const snippet = text.slice(Math.max(0, m.index - 50), Math.min(text.length, m.index + 200)).replace(/[\r\n\t]+/g, ' ');
  console.log(`Diagrama ${m.num}: ${snippet}`);
});
