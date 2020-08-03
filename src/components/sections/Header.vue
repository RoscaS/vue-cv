<template>
  <div>
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

<style lang="scss" scoped></style>
