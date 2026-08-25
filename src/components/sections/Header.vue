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
  /* Sized so the name lands level with the first section heading in the main column
     without pushing that column down — French has no vertical slack to give. */
  margin-bottom: 12px;
  margin-left: auto;
  margin-right: auto;
  background-color: #e2e2e2;
  border-radius: 50%;
  width: 77px;
  height: 77px;
}
</style>
