// Publish endpoint for the dev server. Set PUBLISH_DIR to the folder the PDFs should
// land in and the overlay shows a Publish button:
//
//   PORT=8080 PUBLISH_DIR=~/Documents/Perso/Job/CV/cv npm run dev
//
// Without PUBLISH_DIR the app runs as before, without the button.
const { mountPublish } = require("./scripts/publish");

const dir = process.env.PUBLISH_DIR;
process.env.VUE_APP_PUBLISH_DIR = dir || "";

module.exports = {
  devServer: {
    before(app) {
      if (dir) mountPublish(app, { dir, prefix: "cv" });
    },
  },
};
