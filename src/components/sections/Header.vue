<template>
  <div class="header-wrapper">
    <img class="picture" src="@/assets/picture-cv.jpg" alt="" />
    <h1 style="font-size: 24px">
      <span> {{ content.firstname }}</span>
      <span class="primary"> {{ content.lastname }}</span>
    </h1>
    <div style="font-weight: 600; font-size: 14px" class="subtitle" v-html="content.title"></div>
    <div style="margin-top: 0.7em" class="subtitle" v-html="content.basic"></div>
  </div>
</template>

<script>
import content from "@/mixins/content";

export default {
  name: "Header",
  mixins: [content],
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  flex-direction: column;
  /*text-align: center;*/
}

.picture {
  margin-top: 16px;
  margin-bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  background-color: #e2e2e2;
  border-radius: 50%;
  /* 150px since 04.11.2026 (was 88px): as large as the sidebar allows; the ceiling is the
     sidebar's foot in French, ~16px under the band's end. The name no longer lines up with
     the first entry: alignSidebar() only moves the sidebar, never main (Sol's choice).
     picture-cv.jpg is picture.jpg cropped square on the face (920px, sips). Re-run
     ./scripts/measure.sh in FR, the tight language, before growing it further. */
  width: var(--picture-size, 150px);
  height: var(--picture-size, 150px);
  object-fit: cover;
}
</style>
