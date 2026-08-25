#!/usr/bin/env bash
# Report where the rendered content ends relative to the A4 page boundaries.
# Run after a build; prints per-block offsets in px (1 page = 1122px at 96dpi).
set -euo pipefail
cd "$(dirname "$0")/.."
PORT="${PORT:-8322}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

TMP=$(mktemp -d)
cp -R dist/. "$TMP/"
cat >> "$TMP/index.html" <<'JS'
<script>
window.addEventListener('load', function () {
  setTimeout(function () {
    var PAGE = 11.09 * 96; // printable height, see @page in resume.scss
    var out = [];
    var main = document.querySelector('#main');
    document.querySelectorAll('.main-block').forEach(function (b) {
      out.push(b.querySelector('h2 .title').textContent + ' ends at ' +
               Math.round(b.getBoundingClientRect().bottom) + 'px');
    });
    var sbs = document.querySelectorAll('#sidebar .side-block');
    out.push('SIDEBAR content ends at ' +
             Math.round(sbs[sbs.length - 1].getBoundingClientRect().bottom) + 'px');
    var blocks = document.querySelectorAll('#main .main-block');
    var end = Math.round(blocks[blocks.length - 1].getBoundingClientRect().bottom);
    out.push('CONTENT ENDS ' + end + 'px = page ' + (end / PAGE).toFixed(2) +
             ' (' + Math.round((end % PAGE) / PAGE * 100) + '% of last page)');
    var d = document.createElement('pre');
    d.id = 'measure';
    d.textContent = out.join('\n');
    document.body.appendChild(d);
  }, 300);
});
</script>
JS

python3 -m http.server "$PORT" --directory "$TMP" >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true; rm -rf "$TMP"' EXIT
sleep 1
"$CHROME" --headless --disable-gpu --virtual-time-budget=5000 \
  --window-size=794,1123 --dump-dom "http://localhost:$PORT/" 2>/dev/null \
  | sed -n '/<pre id="measure">/,/<\/pre>/p' | sed 's/<[^>]*>//g'
