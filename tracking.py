import re
from pathlib import Path

path = Path(r'c:/Users/Lenovo/Saved Games/index.html')
text = path.read_text(encoding='utf-8')
m = re.search(r'<!-- LOGIC PROGRAM -->\s*<script>([\s\S]*?)</script>\s*<script>\(function\(\)\{', text)
if not m:
    raise SystemExit('Main script block not found')
compile(m.group(1), str(path), 'exec')
print('JavaScript syntax check: OK')
