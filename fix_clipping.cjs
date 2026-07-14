const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components/unique-slides');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

let updatedFiles = 0;

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Regex to match className="..." or className={`...`} that contains bg-clip-text
  const classNameRegex = /className=["{`]+([^"`}]+)["}`]+/g;
  
  content = content.replace(classNameRegex, (match, classString) => {
    if (!classString.includes('bg-clip-text')) {
      return match;
    }
    
    // Process the class string
    let classes = classString.split(/\s+/).filter(Boolean);
    
    // Remove problematic leading and small padding
    classes = classes.filter(c => {
      return !['leading-tight', 'leading-none', 'pb-1', 'pb-2', 'py-1', 'py-2', 'pt-1', 'pt-2'].includes(c);
    });
    
    // Ensure leading-normal or leading-relaxed or leading-loose is present
    if (!classes.some(c => c.startsWith('leading-'))) {
      classes.push('leading-normal');
    }
    
    // Ensure py-3 or py-4 is present
    if (!classes.some(c => ['py-3', 'py-4', 'py-5', 'py-6'].includes(c))) {
      classes.push('py-3'); // py-3 is safe and provides enough padding
    }
    
    // Reconstruct the match
    return match.replace(classString, classes.join(' '));
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${f}`);
    updatedFiles++;
  }
});

console.log(`Fixed clipping in ${updatedFiles} files.`);
