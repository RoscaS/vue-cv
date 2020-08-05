<template>
  <div class="blocks">
    <div class="date">
      <span v-if="data.fromDate">
        {{ data.fromDate.split(" ")[0] }}
        <br />
        {{ data.fromDate.split(" ")[1] }}
      </span>
      <span v-if="data.toDate">
        {{ data.toDate.split(" ")[0] }}
        <br />
        {{ data.toDate.split(" ")[1] }}
      </span>
    </div>
    <div class="decorator"></div>
    <div class="details">
      <header>
        <h3 class="title">{{ data.title }}</h3>
        <span class="place secondary" v-if="data.place">{{ data.place }}</span>

        <span class="location" v-if="data.location">{{ data.location }}</span>
        <span class="url" v-if="data.url">{{ data.url }}</span>
      </header>

      <div
        class="description"
        :class="{ concise: data.concise }"
        :style="!data.location ? 'margin-top: 0' : ''"
      >
        <span v-if="data.description">{{ data.description }}</span>
        <ul class="tasks" v-if="data.tasks">
          <li v-for="i in data.tasks" :key="i" v-html="i" />
        </ul>
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

<style lang="scss" scoped>
.title {
  font-size: 10pt;
  font-weight: 600;
}

.place {
  font-weight: 400;
  font-size: 9pt !important;
}

.location,
.url {
  font-size: 7pt;
}

.description {
  font-weight: 400;
  font-size: 8pt;
}

.tasks {
  font-weight: 300;
}
</style>
