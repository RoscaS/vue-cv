<template>
  <div class="blocks" :class="concise">
    <div class="date">
      <span v-if="data.fromDate">{{ data.fromDate }}</span>
      <span v-if="data.toDate">{{ data.toDate }}</span>
    </div>
    <div class="decorator"></div>
    <div class="details">
      <header>
        <h3>{{ data.title }}</h3>
        <span class="place secondary" v-if="data.place">{{ data.place }}</span>
        <span class="location" v-if="data.location">{{ data.location }}</span>
      </header>

      <div class="description">
        <ul v-if="data.tasks">
          <li v-for="i in data.tasks" :key="i">{{ i }}</li>
        </ul>
        <div v-if="data.description" class="concise">
          {{ data.description }}
          <ul v-if="data.list">
            <li v-for="element in data.list" :key="element" v-html="element"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockEntry",
  props: {
    data: { type: Object },
    concise: { type: Boolean },
  },
};
</script>

<style lang="scss" scoped></style>
