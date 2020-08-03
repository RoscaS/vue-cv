<template>
  <div class="blocks">
    <div class="date">
      <span v-if="data.fromDate">
        {{ data.fromDate.split(' ')[0] }}
        <br>
        {{ data.fromDate.split(' ')[1] }}
      </span>
      <span v-if="data.toDate">
        {{ data.toDate.split(' ')[0] }}
        <br>
        {{ data.toDate.split(' ')[1] }}
      </span>
    </div>
    <div class="decorator"></div>
    <div class="details">
      <header>
        <h3>{{ data.title }}</h3>
        <span class="place secondary" v-if="data.place">{{ data.place }}</span>
        <span class="location" v-if="data.location">{{ data.location }}</span>
      </header>

      <div class="description">
        <div :class="{'concise': data.concise}">
          <span v-if="data.description">{{ data.description }}</span>
          <ul class="tasks" v-if="data.tasks">
            <li v-for="i in data.tasks" :key="i" v-html="i"/>
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

<style lang="scss" scoped>
  
  .place {
    font-weight: 400;
  }
  
  .description {
    font-weight: 400;
  }
  
  .tasks {
    font-weight: 300;
  }
  
</style>
