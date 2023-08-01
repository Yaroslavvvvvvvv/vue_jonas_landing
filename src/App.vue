<template>
  <div id="app">
    <v-header/>
      <v-first-section/>
      <v-second-section/>
      <v-third-section/>
      <v-fourth-section/>
      <v-fifth-section/>
    <v-footer/>
  </div>
</template>

<script>

import VHeader from "@/components/VHeader.vue";
import VFirstSection from "@/components/VFirstSection.vue";
import VSecondSection from "@/components/VSecondSection.vue";
import VThirdSection from "@/components/VThirdSection.vue";
import VFourthSection from "@/components/VFourthSection.vue";
import VFifthSection from "@/components/VFifthSection.vue";
import VFooter from "@/components/VFooter.vue";

export default {
  name: 'App',
  components: {
    VFooter,
    VFifthSection,
    VFourthSection,
    VThirdSection,
    VSecondSection,
    VFirstSection,
    VHeader

  }
}
</script>

<style>

</style>
