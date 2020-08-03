<template>
  <div id="app">
    <div id="main">
<!--      <Header id="title"/>-->
      <MainContent/>
    </div>
    <Sidebar id="sidebar"/>
  </div>
</template>

<script>
// import Header from '@/components/sections/Header';
import MainContent from '@/components/sections/MainContent';
import Sidebar from '@/components/Sidebar';

export default {
  name: "App",
  components: { Sidebar, MainContent },
};
</script>

<style lang="scss">
  @import "style/main.scss";

  #app {
    height: 100%;
  }

</style>
