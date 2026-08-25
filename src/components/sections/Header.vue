<template>
  <div class="header-wrapper">
    <img class="picture" src="@/assets/picture.jpg" alt="" />
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
  margin-bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  background-color: #e2e2e2;
  border-radius: 50%;
  /* alignSidebar() pins the name to the first entry's title, so every px here pushes
     the MAIN column down too — and page 1 of main is full to the band's foot. The
     ceiling is main, not the sidebar: it was paid for by the small spacing trims in
     resume.scss (.sub-entry, #main ul, #main li). Re-run ./scripts/measure.sh in FR,
     which is the tight language, before growing it further. */
  width: 88px;
  height: 88px;
}
</style>
