<template>
  <section class="section">
    section
    <div id="picker"></div>
  </section>
</template>

<script>
import iro from "@jaames/iro";

export default {
  name: "FrameSection",
  data() {
    return {
      colorPicker: null
    };
  },
  mounted() {
    this.colorPicker = new iro.ColorPicker("#picker");
  }
};
</script>

<style></style>
