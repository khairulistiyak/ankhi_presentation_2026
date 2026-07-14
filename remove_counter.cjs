const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components/unique-slides');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

let updated = 0;
files.forEach(f => {
  const filePath = path.join(dir, f);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the span containing the hardcoded counter, e.g. <span className="text-xs ... font-mono">11 / 28</span>
  // This regex matches <span ... font-mono ...> ... </span> and any leading/trailing spaces on its line.
  const regex = /^[ \t]*<span[^>]*font-mono[^>]*>.*?<\/span>[ \t]*\n?/gm;
  const newContent = content.replace(regex, '');
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${f}`);
    updated++;
  }
});
console.log(`Total files updated: ${updated}`);
