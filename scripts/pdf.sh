#!/usr/bin/env bash
# Build the CV and print it to PDF.
#
#   ./scripts/pdf.sh [output.pdf]
#   VUE_APP_LANG=fr ./scripts/pdf.sh cv-fr.pdf
#
# Why the flags: webpack 4 needs --openssl-legacy-provider on modern Node, and
# Chrome will not load the bundle over file:// so the build is served locally first.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT="${1:-cv.pdf}"
PORT="${PORT:-8321}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

NODE_OPTIONS=--openssl-legacy-provider npx vue-cli-service build

python3 -m http.server "$PORT" --directory dist >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true' EXIT
sleep 1

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" --virtual-time-budget=10000 \
  "http://localhost:$PORT/" >/dev/null 2>&1

echo "wrote $OUT"
