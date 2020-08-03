<template>
  <div class="sidebar-wrapper">
    <div class="sections">
      <div>
        <Header />
      </div>

      <div v-if="content.sidebar.contactSection.entries.length" id="contact" class="side-block">
        <h1>Contact <span>info</span></h1>
        <ul>
          <li
            v-for="entry in content.sidebar.contactSection.entries"
            :key="entry"
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
        <h1 v-else style="text-align: center">
          <i class="fa" :class="block.icon" />
        </h1>
        <ul>
          <li v-for="entry in block.entries" :key="entry">
            {{ entry }}
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

#disclamer {
  margin-top: auto;
}
</style>
