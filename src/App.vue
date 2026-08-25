<template>
  <div id="app">
    <LangToggle />
    <MainContent />
    <Sidebar id="sidebar" />
  </div>
</template>

<script>
import MainContent from "@/components/sections/MainContent";
import Sidebar from "@/components/Sidebar";
import LangToggle from "@/components/LangToggle";

export default {
  name: "App",
  components: { Sidebar, MainContent, LangToggle },
};
</script>

<style lang="scss">
@import "style/main.scss";
</style>
