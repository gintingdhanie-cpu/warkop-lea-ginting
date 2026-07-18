const fs = require('fs');
const path = 'c:/Users/Lenovo/Saved Games/index.html';
const html = fs.readFileSync(path, 'utf8');
const match = html.match(/<!-- LOGIC PROGRAM -->\s*<script>([\s\S]*?)<\/script>\s*<script>\(function\(\)\{/);
if (!match) {
  console.error('Main script block not found');
  process.exit(1);
}
new Function(match[1]);
console.log('JavaScript syntax check: OK');
