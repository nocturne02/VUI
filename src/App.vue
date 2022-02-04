<template>
  <div id="app">
    <FrameHeader />
    <FrameNavigation />
    <main class="main">
      <FrameAside />
      <FrameSection />
    </main>
    <FrameFooter />
  </div>
</template>

<script>
import FrameHeader from "@/layouts/FrameHeader";
import FrameNavigation from "@/layouts/FrameNavigation";
import FrameSection from "@/layouts/FrameSection";
import FrameAside from "@/layouts/FrameAside";
import FrameFooter from "@/layouts/FrameFooter";

import "@/assets/css/frame.scss";

export default {
  name: "App",
  components: {
    FrameHeader,
    FrameSection,
    FrameAside,
    FrameFooter,
    FrameNavigation
  }
};
</script>
