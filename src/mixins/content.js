// The CV content is one file, `src/content.json`. Variants (another language, a
// lighter Arcanite entry) are edits of that file, printed under their own name.
import content from "@/content.json";

export default {
  computed: {
    content() {
      return content;
    },
  },
};
