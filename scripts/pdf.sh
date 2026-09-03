#!/usr/bin/env bash
# Build the CV and print it to PDF, without the dev server.
#
#   ./scripts/pdf.sh [output.pdf]
#
# webpack 4 needs --openssl-legacy-provider on modern Node; the Chrome call lives in
# scripts/print.js, shared with the dev server's Publish button.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT="${1:-cv.pdf}"
PORT="${PORT:-8321}"

NODE_OPTIONS=--openssl-legacy-provider npx vue-cli-service build

python3 -m http.server "$PORT" --directory dist >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true' EXIT
sleep 1

node scripts/print.js "http://localhost:$PORT/" "$OUT"
