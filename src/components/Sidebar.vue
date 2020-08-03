<template>
  <div class="sidebar-wrapper">
    <div class="sections">
      <div>
        <Header />
      </div>

      <div
        v-if="content.sidebar.contactSection.entries.length"
        id="contact"
        class="side-block"
      >
        <h1>Contact <span>info</span></h1>
        <ul>
          <li
            v-for="entry in content.sidebar.contactSection.entries"
            :key="entry.value"
          >
            <i class="fa" :class="entry.icon" />
            {{ entry.value }}
          </li>
        </ul>
      </div>

      <div
        class="side-block-element side-block"
        v-for="block in content.sidebar.blocks"
        :key="block.name"
      >
        <h1 v-if="!block.icon">{{ block.name }}</h1>
        <h1 v-else style="text-align: center;">
          <i class="fa" :class="block.icon" />
        </h1>
        <ul class="subtitle">
          <li
            v-for="entry in block.entries"
            :key="entry.value"
            :style="entry.complement ? 'margin-bottom: 5px' : ''"
          >
            <span class="block-entry-value">{{ entry.value }}</span>
            <br />
            <span class="block-entry-complement" v-if="entry.complement">
              {{ entry.complement }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div id="disclamer" class="side-block">
      <!--      &copy; JrosK.ch-->
    </div>
  </div>
</template>

<script>
import content from "@/mixins/content";
import Header from "@/components/sections/Header";

export default {
  name: "Sidebar",
  components: { Header },
  mixins: [content],
};
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
}

.block-entry-value {
  font-weight: 400;
}

.block-entry-complement {
  font-weight: 100;
  margin-left: 2px;
}

#disclamer {
  margin-top: auto;
}
</style>
