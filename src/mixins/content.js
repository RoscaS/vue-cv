// Language selection.
//
// `VUE_APP_LANG=fr npm run build` picks `src/content.fr.js` when that file exists;
// anything else falls back to `src/content.js`, the canonical file for the branch.
// Add a translation by dropping `content.<xx>.js` next to it — no wiring needed.
const files = require.context("../", false, /^\.\/content(\.[a-z]{2})?\.js$/);
const wanted = process.env.VUE_APP_LANG
  ? `./content.${process.env.VUE_APP_LANG}.js`
  : "./content.js";
const key = files.keys().indexOf(wanted) !== -1 ? wanted : "./content.js";

export default {
  data() {
    return {
      content: files(key).default,
    };
  },
};
