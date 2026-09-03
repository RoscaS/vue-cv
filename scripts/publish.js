// Dev-server endpoint behind the Publish button of the overlay.
//
// Enabled only when PUBLISH_DIR is set; the client sees it as VUE_APP_PUBLISH_DIR.
//   POST /__publish  {"name": "en-light"}  ->  <PUBLISH_DIR>/<prefix>-en-light.pdf
//
// The page printed is the one the dev server is serving, so what you see is what
// lands in the folder. Mounted by vue.config.js through devServer.before.
const path = require("path");
const fs = require("fs");
const { printPdf } = require("./print");

function mountPublish(app, { dir, prefix }) {
  app.post("/__publish", (req, res) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const { name } = JSON.parse(body || "{}");
        const slug = String(name || "")
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
        const file = `${prefix}${slug ? "-" + slug : ""}.pdf`;
        const out = path.join(dir, file);
        fs.mkdirSync(dir, { recursive: true });
        // Print through the same origin the browser used, with the URL it sent:
        // query parameters (a letter, a variant) travel along.
        const url = new URL(req.headers.referer || "/", `http://${req.headers.host}`);
        const pages = await printPdf(url.toString(), out);
        res.json({ file: out, pages });
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
    });
  });
}

module.exports = { mountPublish };
