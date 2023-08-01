<template>
  <div id="app">
    <v-header/>
    <v-footer/>
  </div>
</template>

<script>

import VHeader from "@/components/VHeader.vue";
import VFooter from "@/components/VFooter.vue";

export default {
  name: 'App',
  components: {
    VFooter,
    VHeader

  }
}
</script>

<style>

</style>
