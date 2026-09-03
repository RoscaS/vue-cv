// Print a URL to PDF with headless Chrome. Shared by scripts/pdf.sh (one-shot build)
// and by the dev server's publish endpoint (scripts/publish.js).
//
//   node scripts/print.js <url> <out.pdf>
//
// Why: Chrome will not load the bundle over file://, so the page is always served.
// Never print from the browser dialog, it adds its own headers and margins.
const { execFile } = require("child_process");
const fs = require("fs");

const CHROME =
  process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// Asynchronous on purpose: when called from the dev server, a blocking call would
// stall the very server Chrome is loading the page from, and the print comes out blank.
function printPdf(url, out) {
  return new Promise((resolve, reject) => {
    execFile(
      CHROME,
      [
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        `--print-to-pdf=${out}`,
        // Chrome prints once the page has loaded; the timeout is a cap, not the wait.
        // Not --virtual-time-budget: combined with the dev server's live-reload socket
        // it hangs Chrome for good on the letter, reproducibly.
        "--timeout=10000",
        url,
      ],
      { stdio: "ignore" },
      (err) => (err ? reject(err) : resolve(pageCount(out)))
    );
  });
}

// mdls depends on Spotlight indexing and returns (null) outside indexed folders,
// so the pages are counted in the PDF itself.
function pageCount(file) {
  const buf = fs.readFileSync(file, "latin1");
  return (buf.match(/\/Type\s*\/Page[^s]/g) || []).length;
}

module.exports = { printPdf, pageCount };

if (require.main === module) {
  const [url, out] = process.argv.slice(2);
  if (!url || !out) {
    console.error("usage: node scripts/print.js <url> <out.pdf>");
    process.exit(1);
  }
  printPdf(url, out).then(
    (pages) => console.log(`wrote ${out}: ${pages} page(s)`),
    (e) => {
      console.error(e.message);
      process.exit(1);
    }
  );
}
