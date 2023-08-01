<template>
  <div>
    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-auto mr-auto pb-5">
          </div>
          <div class="col-auto animate__animated animate__backInRight">
            <button class="mt-5" id="scrollButton" @click="scrollToSecondSection">Work</button>
            <button class="ml-3 mt-5" id="scrollSecondButton" @click="scrollToThirdSection">About</button>
            <button class="ml-3 mt-5" id="scrollThirdButton" @click="scrollToFifthSection">Contact</button>
          </div>
        </div>
      </div>
    </header>
    <v-first-section/>
    <v-second-section ref="secondSection"/>
    <v-third-section ref="thirdSection"/>
    <v-fourth-section/>
    <v-fifth-section ref="fifthSection"/>
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
    scrollToSecondSection() {
      const secondSection = this.$refs.secondSection.$el;
      if (secondSection) {
        secondSection.scrollIntoView({behavior: "smooth"});
      }
    },
    scrollToThirdSection(){
      const thirdSection = this.$refs.thirdSection.$el;
      if (thirdSection){
        thirdSection.scrollIntoView({behavior:"smooth"})
      }
    },
    scrollToFifthSection(){
      const fifthSection = this.$refs.fifthSection.$el;
      if (fifthSection) {
        fifthSection.scrollIntoView({behavior:"smooth"})
      }
    }
  }
}
</script>

<style>
</style>