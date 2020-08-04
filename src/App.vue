<template>
  <div id="app">
    <MainContent />
    <Sidebar id="sidebar" />
  </div>
</template>

<script>
import MainContent from "@/components/sections/MainContent";
import Sidebar from "@/components/Sidebar";

export default {
  name: "App",
  components: { Sidebar, MainContent },
};
</script>

<style lang="scss">
@import "style/main.scss";
</style>
