<template>
  <div class="sidebar-wrapper">
    <div class="sections">
      <div id="contact" class="side-block">
        <h1>Contact Info</h1>
        <ul>
          <li>
            <i class="fa" :class="content.website.icon" />
            {{ content.website.value }}
          </li>
          <li>
            <i class="fa" :class="content.email.icon" />
            {{ content.email.value }}
          </li>
          <li>
            <i class="fa" :class="content.phone.icon" />
            {{ content.phone.value }}
          </li>
        </ul>
      </div>
  
      <div id="skills" class="side-block">
        <h1>Skills</h1>
        <ul>
          <li v-for="skill in content.skills" :key="skill">
            {{ skill }}
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

export default {
  name: "Sidebar",
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
