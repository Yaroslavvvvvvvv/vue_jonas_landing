<template>
  <div>
    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-auto mr-auto pb-5">
          </div>
          <div class="col-auto animate__animated animate__backInRight">
            <button class="mt-5" id="scrollButton">Work</button>
            <button class="ml-3 mt-5" id="scrollSecondButton">About</button>
            <button class="ml-3 mt-5" id="scrollThirdButton">Contact</button>
          </div>
        </div>
      </div>
    </header>
    <v-first-section/>
    <v-second-section/>
    <v-third-section/>
    <v-fourth-section/>
    <v-fifth-section/>
  </div>
</template>

<script>
import VFirstSection from "@/components/VFirstSection.vue";
import VSecondSection from "@/components/VSecondSection.vue";
import VThirdSection from "@/components/VThirdSection.vue";
import VFourthSection from "@/components/VFourthSection.vue";
import VFifthSection from "@/components/VFifthSection.vue";

export default {
  name: "VHeader",
  components: {
    VFirstSection,
    VSecondSection,
    VThirdSection,
    VFourthSection,
    VFifthSection,
  },
  methods: {
  }
}
</script>

<style>
</style>