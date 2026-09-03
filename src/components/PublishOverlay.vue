<template>
  <!-- Invisible until hovered, absolutely positioned so it never affects layout,
       and dropped entirely when printing. Only rendered when the dev server was
       started with PUBLISH_DIR (see vue.config.js). -->
  <div v-if="dir" class="publish">
    <button type="button" class="publish__btn" :disabled="busy" @click="publish">
      {{ busy ? "Printing…" : "Publish" }}
    </button>
    <span v-if="status" class="publish__status" :class="{ 'is-error': error }">{{ status }}</span>
  </div>
</template>

<script>
export default {
  name: "PublishOverlay",
  data() {
    return {
      dir: process.env.VUE_APP_PUBLISH_DIR,
      busy: false,
      status: "",
      error: false,
    };
  },
  methods: {
    async publish() {
      const name = window.prompt(
        `Name of this version, prefixed to "cv" (e.g. "fr" gives cv-fr.pdf).\nLands in ${this.dir}`,
        ""
      );
      if (name === null) return;
      this.busy = true;
      this.status = "";
      try {
        const res = await fetch("/__publish", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || res.statusText);
        this.error = data.pages !== 2;
        this.status = `${data.file.split("/").pop()}: ${data.pages} page(s)`;
      } catch (e) {
        this.error = true;
        this.status = e.message;
      } finally {
        this.busy = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.publish {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 6px;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }
}

.publish__btn {
  padding: 3px 8px;
  border: 1px solid #ff5e4f;
  border-radius: 3px;
  background: #ff5e4f;
  color: #fff;
  font: inherit;
  font-size: 9pt;
  line-height: 1;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
}

.publish__status {
  font-size: 9pt;
  color: #555;
  background: #fff;
  padding: 3px 6px;
  border-radius: 3px;

  &.is-error {
    color: #b3261e;
  }
}

@media print {
  .publish {
    display: none !important;
  }
}
</style>
