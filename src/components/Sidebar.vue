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
        <h2 v-if="!block.icon">{{ block.name }}</h2>
        <h2 v-else style="text-align: center;">
          <i class="fa" :class="block.icon" />
        </h2>
        <ul class="subtitle">
          <li v-for="entry in block.entries" :key="entry.label">
            <span class="block-entry-label" v-html="entry.label" />
            <span class="block-entry-items" v-if="entry.items" v-html="entry.items" />
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
  /* Pinned to the top, not centred: centring divides whatever slack is left, so the
     name landed at a different height in each language. --sidebar-offset (set by
     alignSidebar() in App.vue) then aligns the name with the first entry's title,
     identically in both languages. */
  justify-content: flex-start;
}

/* group label: the category. Darker and heavier than the list it introduces. */
.block-entry-label {
  display: block;
  font-weight: 400;
}

/* the list itself: lighter, greyer, indented under its label */
.block-entry-items {
  display: block;
  padding-left: 5px;
  font-weight: 300;
  color: #666;
}

#disclamer {
  /* was margin-top: auto to pin it to the foot, which fights justify-content */
  margin-top: 0;
}
</style>
