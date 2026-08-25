<template>
  <div id="app">
    <LangToggle />
    <MainContent />
    <Sidebar id="sidebar" />
  </div>
</template>

<script>
import MainContent from "@/components/sections/MainContent";
import Sidebar from "@/components/Sidebar";
import LangToggle from "@/components/LangToggle";

const PAGE_PX = 11.69 * 96; // A4 at 96dpi; @page margins are zero

export default {
  name: "App",
  components: { Sidebar, MainContent, LangToggle },
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
      this.fitTimeline();
      this.alignSidebar();
    },

    // The fill-page entry closes a page: run its timeline to the foot of that page
    // and no further. Measured, because the gap differs per language and per edit.
    fitTimeline() {
      const el = document.querySelector(".blocks.fill-page");
      if (!el) return;
      el.style.removeProperty("--fill-page-height");
      const bottom = el.getBoundingClientRect().bottom + window.pageYOffset;
      const remainder = PAGE_PX - (bottom % PAGE_PX);
      el.style.setProperty("--fill-page-height", Math.max(0, Math.round(remainder)) + "px");
    },

    // Line the name up with the first section heading. Whichever sits higher gets
    // pushed down, so it holds in any language: the sidebar can't simply be padded
    // to match, since the photo above the name would clip off the top of the sheet.
    alignSidebar() {
      const sidebar = document.querySelector("#sidebar");
      const main = document.querySelector("#main");
      const name = document.querySelector("#sidebar h1");
      const heading = document.querySelector("#main .main-block h2");
      if (!sidebar || !main || !name || !heading) return;

      sidebar.style.removeProperty("--sidebar-offset");
      main.style.removeProperty("--main-offset");
      const delta = Math.round(
        heading.getBoundingClientRect().top - name.getBoundingClientRect().top
      );
      if (delta > 0) {
        const pad = parseFloat(getComputedStyle(sidebar).paddingTop) || 0;
        sidebar.style.setProperty("--sidebar-offset", pad + delta + "px");
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
