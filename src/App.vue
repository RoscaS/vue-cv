<template>
  <div id="app">
    <div id="sidebar-band" aria-hidden="true" />
    <PublishOverlay />
    <MainContent />
    <Sidebar id="sidebar" />
  </div>
</template>

<script>
import MainContent from "@/components/sections/MainContent";
import Sidebar from "@/components/Sidebar";
import PublishOverlay from "@/components/PublishOverlay";

const PAGE_PX = 11.69 * 96; // A4 at 96dpi; @page margins are zero
// --page-margin in resume.scss: the visual margin painted inside the sheet. The
// timeline has to stop level with the grey band's bottom edge, not run off the paper.
const PAGE_MARGIN_PX = 0.3 * 96;

export default {
  name: "App",
  components: { Sidebar, MainContent, PublishOverlay },
  mounted() {
    this.fit();
    // web fonts change every measurement below, so redo it once they land
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(this.fit);
    window.addEventListener("resize", this.fit);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.fit);
  },
  updated() {
    this.$nextTick(this.fit);
  },
  methods: {
    fit() {
      this.alignSidebar();
      this.fitTimeline();
    },

    // The fill-page entry closes a page: run its timeline to the foot of that page
    // and no further. Measured, because the gap differs per language and per edit.
    fitTimeline() {
      const el = document.querySelector(".blocks.fill-page");
      if (!el) return;
      el.style.removeProperty("--fill-page-height");
      const bottom = el.getBoundingClientRect().bottom + window.pageYOffset;
      const remainder = PAGE_PX - PAGE_MARGIN_PX - (bottom % PAGE_PX);
      el.style.setProperty("--fill-page-height", Math.max(0, Math.round(remainder)) + "px");
    },

    // Line the name up with the first entry's title. Whichever sits higher gets pushed
    // down, so it holds in any language — but keep an eye on the main column: French
    // has no vertical slack, and pushing it down costs a third page.
    alignSidebar() {
      const sidebar = document.querySelector("#sidebar");
      const main = document.querySelector("#main");
      const name = document.querySelector("#sidebar h1");
      const heading = document.querySelector("#main .blocks .title");
      if (!sidebar || !main || !name || !heading) return;

      sidebar.style.removeProperty("--sidebar-offset");
      main.style.removeProperty("--main-offset");

      // rounded to whole pixels, so the two can sit 1px apart — below print resolution
      const delta = Math.round(
        heading.getBoundingClientRect().top - name.getBoundingClientRect().top
      );
      if (delta > 0) {
        sidebar.style.setProperty("--sidebar-offset", delta + "px");
      } else if (delta < 0) {
        main.style.setProperty("--main-offset", -delta + "px");
      }
    },
  },
};
</script>

<style lang="scss">
@import "style/main.scss";
</style>
