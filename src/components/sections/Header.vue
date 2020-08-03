<template>
  <div class="header-wrapper">
    <img class="picture" src="@/assets/picture.jpg" alt="" />
    <h1>
      <span> {{ content.firstname }}</span>
      <span class="primary"> {{ content.lastname }}</span>
    </h1>
    <div class="subtitle">{{ content.title }}</div>
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
  text-align: center;
}

.picture {
  margin-left: auto;
  margin-right: auto;
  background-color: #e2e2e2;
  border-radius: 50px;
  width: 100px;
  height: 100px;
}
</style>
