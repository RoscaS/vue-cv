<template>
  <div>
    <div class="main-block" v-for="block in content.blocks" :key="block.name">
      <h2>
        <i class="fa" :class="block.icon" />
        {{ block.name }}
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

<style lang="scss" scoped></style>
