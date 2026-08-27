// Language selection.
//
// Four contents are bundled: `src/content.js` (en), `src/content-fr.js` (fr) and the two
// "light" variants, `src/content-en-light.js` and `src/content-fr-light.js` — those two are
// not locales: same language, same facts, Arcanite entry in prose. They ride the language
// switch because that is already the mechanism for "print this content instead".
// `lang` is a Vue.observable, so flipping it re-renders every component using
// this mixin — that is what the LangToggle overlay does.
//
// `VUE_APP_LANG=fr npm run pdf cv-fr.pdf` sets the language the build starts in,
// which is how a PDF of one language is printed without touching the overlay.
import Vue from "vue";
import en from "@/content";
import fr from "@/content-fr";
import frLight from "@/content-fr-light";
import enLight from "@/content-en-light";

export const locales = { en, fr, "fr-light": frLight, "en-light": enLight };

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
