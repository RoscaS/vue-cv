<template>
  <!-- Invisible until hovered, absolutely positioned so it never affects layout,
       and dropped entirely when printing. -->
  <div class="lang-toggle" aria-label="Language">
    <button
      v-for="code in codes"
      :key="code"
      type="button"
      class="lang-toggle__btn"
      :class="{ 'is-active': code === current }"
      @click="select(code)"
    >
      {{ code.toUpperCase() }}
    </button>
  </div>
</template>

<script>
import { lang, locales, setLang } from "@/mixins/content";

export default {
  name: "LangToggle",
  data() {
    return { codes: Object.keys(locales) };
  },
  computed: {
    current() {
      return lang.current;
    },
  },
  methods: {
    select(code) {
      setLang(code);
    },
  },
};
</script>

<style lang="scss" scoped>
.lang-toggle {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  gap: 2px;
  padding: 6px;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }
}

.lang-toggle__btn {
  padding: 3px 8px;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  background: #fff;
  color: #777;
  font: inherit;
  font-size: 9pt;
  line-height: 1;
  cursor: pointer;

  &:hover {
    color: #333;
  }

  &.is-active {
    border-color: #ff5e4f;
    background: #ff5e4f;
    color: #fff;
  }
}

@media print {
  .lang-toggle {
    display: none !important;
  }
}
</style>
