<template>
<div>
  <section class="second_section">
    <div class="container">
      <p id="targetParagraph"
         class="ml-3 animate__animated animate__rotateInDownLeft"><span class="work">Featured work</span>
        <span class="date"> · 2018–2022</span></p>
      <div class="row justify-content-between">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="pt-4">
            <img id="first_image" class="mw-100" src="../assets/img/second_section/watch.png" alt="watch"
                 onclick="openModal()">
            <div class="animate__animated animate__backInLeft" id="modal_first">
              <img src="../assets/img/second_section/watch.png" alt="enlarged picture" id="image_first"
                   onclick="closeModal()">
            </div>
            <div id="first_bottom" class="bottom_block">
              <div class="pt-3 pl-4 pb-3">
                <span class="first pt-5">Rule ratio</span><br>
                <span class="second">Product design</span>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <img id="second_image" class="mw-100" src="../assets/img/second_section/castro.png" alt="page"
                 onclick="secondOpenModal()">
            <div class="animate__animated animate__backInLeft" id="modal_second">
              <img src="../assets/img/second_section/castro.png" alt="enlarged picture" id="image_second"
                   onclick="secondCloseModal()">
            </div>
            <div id="second_bottom" class="bottom_block">
              <div class="pt-3 pl-4 pb-3">
                <span class="first pt-5">Dry air</span><br>
                <span class="second">User research</span>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <img id="third_image" class="mw-100" src="../assets/img/second_section/grey_phone.png" alt="phone"
                 onclick="thirdOpenModal()">
            <div class="animate__animated animate__backInLeft" id="modal_third">
              <img src="../assets/img/second_section/grey_phone.png" alt="enlarged picture" id="image_third"
                   onclick="thirdCloseModal()">
            </div>
            <div id="third_bottom" class="bottom_block">
              <div class="pt-3 pl-4 pb-3">
                <span class="first pt-5">Variable compose</span><br>
                <span class="second">Product design</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="pt-4">
            <img id="fourth_image" class="mw-100" src="../assets/img/second_section/ball.png" alt="ball"
                 onclick="fourthOpenModal()">
            <div class="animate__animated animate__backInLeft" id="modal_fourth">
              <img src="../assets/img/second_section/ball.png" alt="enlarged picture" id="image_fourth"
                   onclick="fourthCloseModal()">
            </div>
            <div id="fourth_bottom" class="bottom_block">
              <div class="pt-3 pl-4 pb-3">
                <span class="first pt-5">Situation</span><br>
                <span class="second">Visual identity</span>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <img id="fifth_image" class="mw-100" src="../assets/img/second_section/yellow_phone.png" alt="phone"
                 onclick="fifthOpenModal()">
            <div class="animate__animated animate__backInLeft" id="modal_fifth">
              <img src="../assets/img/second_section/yellow_phone.png" alt="enlarged picture" id="image_fifth"
                   onclick="fifthCloseModal()">
            </div>
            <div id="fifth_bottom" class="bottom_block">
              <div class="pt-3 pl-4 pb-3">
                <span class="first pt-5">Vertical</span><br>
                <span class="second">Product design</span>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <img id="sixth_image" class="mw-100" src="../assets/img/second_section/last_phone.png" alt="phone"
                 onclick="sixthOpenModal()">
            <div class="animate__animated animate__backInLeft" id="modal_sixth">
              <img src="../assets/img/second_section/last_phone.png" alt="enlarged picture" id="image_sixth"
                   onclick="sixthCloseModal()">
            </div>
            <div id="sixth_bottom" class="bottom_block">
              <div class="pt-3 pl-4 pb-3">
                <span class="first pt-5">Scope shift</span><br>
                <span class="second">Product design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "VSecondSection"
}
</script>

<style scoped>

</style>