"""Extract a top-level `const NAME = {...};` JS object literal from app.js and convert it to Python.
Handles bare keys (identifiers / numbers), double-quoted strings, nested objects/arrays, null/true/false."""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import paths
import json

APP = os.path.join(paths.REPO, 'app.js')

def _find_block(src, name):
    start = src.index(f'const {name} = ') + len(f'const {name} = ')
    depth = 0; i = start; in_str = False
    while True:
        ch = src[i]
        if in_str:
            if ch == '\\': i += 2; continue
            if ch == '"': in_str = False
        else:
            if ch == '"': in_str = True
            elif ch in '{[': depth += 1
            elif ch in '}]':
                depth -= 1
                if depth == 0: return src[start:i + 1]
        i += 1

def _to_json(js):
    out = []; i = 0; n = len(js)
    while i < n:
        ch = js[i]
        if ch == '"':
            j = i + 1
            while js[j] != '"':
                j += 2 if js[j] == '\\' else 1
            out.append(js[i:j + 1]); i = j + 1; continue
        if ch.isalnum() or ch == '_' or ch == '$':
            j = i
            while j < n and (js[j].isalnum() or js[j] in '_$.-+'): j += 1
            word = js[i:j]
            k = j
            while k < n and js[k] in ' \t\r\n': k += 1
            if k < n and js[k] == ':':
                out.append(json.dumps(word))
            else:
                out.append(word)
            i = j; continue
        out.append(ch); i += 1
    s = ''.join(out)
    # trailing commas
    import re
    s = re.sub(r',(\s*[}\]])', r'\1', s)
    return s

def load(name):
    src = open(APP, encoding='utf-8').read()
    return json.loads(_to_json(_find_block(src, name)))
