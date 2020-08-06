<template>
  <div id="main">
    <div
      class="main-block"
      v-for="(block, c) in content.blocks"
      :key="c"
      :style="block.break ? 'page-break-before: always; margin-top: .5in' : ''"
    >
      <h2>
        <i class="fa" :class="block.icon" />
        <span class="title">{{ block.name }}</span>
      </h2>
      <BlockEntry
        v-for="entry in block.entries"
        :key="entry.title"
        :data="entry"
        :concise="entry.conciste"
      />
    </div>
  </div>
</template>

<script>
import content from "@/mixins/content";
import BlockEntry from "@/components/BlockEntry";

export default {
  name: "MainContent",
  components: { BlockEntry },
  mixins: [content],
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 12pt;
}
</style>
