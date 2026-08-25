<template>
  <div class="blocks">
    <div class="date">
      <span v-if="data.fromDate">{{ data.fromDate }}</span>
      <span v-if="data.toDate">{{ data.toDate }}</span>
    </div>
    <div class="decorator"></div>
    <div class="details">
      <header>
        <h3 class="title">{{ data.title }}</h3>
        <div class="meta" v-if="data.place || data.location || data.url">
          <span class="place secondary" v-if="data.place">{{ data.place }}</span>
          <span class="meta-right" v-if="data.location || data.url">
            <span class="location" v-if="data.location">{{ data.location }}</span>
            <span class="url" v-if="data.url">{{ data.url }}</span>
          </span>
        </div>
      </header>

      <div class="description" :class="{ concise: data.concise }">
        <span v-if="data.description" v-html="data.description" />

        <!-- sub-entries: named blocks under a single date range -->
        <section
          class="sub-entry"
          v-for="sub in data.subEntries"
          :key="sub.title"
        >
          <header class="sub-header">
            <h4 class="sub-title">
              <span v-html="sub.title" />
              <span class="sub-subtitle" v-if="sub.subtitle" v-html="sub.subtitle" />
            </h4>
            <span class="sub-date" v-if="sub.date">{{ sub.date }}</span>
          </header>
          <span class="sub-description" v-if="sub.description" v-html="sub.description" />
          <ul class="tasks" v-if="sub.tasks && sub.tasks.length">
            <li v-for="i in sub.tasks" :key="i" v-html="i" />
          </ul>
        </section>

        <ul class="tasks" v-if="data.tasks && data.tasks.length">
          <li v-for="i in data.tasks" :key="i" v-html="i" />
        </ul>

        <!-- stack line closing the entry: a plain line, never a bullet -->
        <div class="stack accent" v-if="data.stack" v-html="data.stack" />
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
  /* all prose sits at 300; bold marks structure (titles) and evidence (figures) only */
  font-weight: 300;
  font-size: 8.5pt;
}

.description ::v-deep b {
  font-weight: 600;
}

.stack {
  margin-top: 7px;
  font-weight: 400;
}

.tasks {
  font-weight: 300;

  li {
    line-height: 17px;
  }
}
</style>
