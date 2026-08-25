// Language selection.
//
// Two locales are bundled: `src/content.js` (en) and `src/content-fr.js` (fr).
// `lang` is a Vue.observable, so flipping it re-renders every component using
// this mixin — that is what the LangToggle overlay does.
//
// `VUE_APP_LANG=fr npm run pdf cv-fr.pdf` sets the language the build starts in,
// which is how a PDF of one language is printed without touching the overlay.
import Vue from "vue";
import en from "@/content";
import fr from "@/content-fr";

export const locales = { en, fr };

export const lang = Vue.observable({
  current: locales[process.env.VUE_APP_LANG] ? process.env.VUE_APP_LANG : "en",
});

export function setLang(next) {
  if (locales[next]) lang.current = next;
}

export default {
  computed: {
    content() {
      return locales[lang.current];
    },
  },
};
