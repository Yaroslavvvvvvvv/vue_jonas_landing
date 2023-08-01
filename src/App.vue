<template>
  <div id="app">
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
    <main>
      <section class="first_section">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-md-10 col-sm-12">
              <h1 class="animate__animated animate__backInLeft"><span
                  class="first_header">I’m Jonas — a senior<br>
                        product designer<br></span>
                <span class="next_header">that cares a lot about<br>
                        positive impact projects</span></h1>
            </div>
          </div>
        </div>
      </section>
      <section class="second_section">
        <div class="container">
          <p id="targetParagraph"
             class="ml-3 animate__animated animate__rotateInDownLeft"><span class="work">Featured work</span>
            <span class="date"> · 2018–2022</span></p>
          <div class="row justify-content-between">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="pt-4">
                <img id="first_image" class="mw-100" src="../src/assets/img/second_section/watch.png" alt="watch"
                     onclick="openModal()">
                <div class="animate__animated animate__backInLeft" id="modal_first">
                  <img src="../src/assets/img/second_section/watch.png" alt="enlarged picture" id="image_first"
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
                <img id="second_image" class="mw-100" src="../src/assets/img/second_section/castro.png" alt="page"
                     onclick="secondOpenModal()">
                <div class="animate__animated animate__backInLeft" id="modal_second">
                  <img src="../src/assets/img/second_section/castro.png" alt="enlarged picture" id="image_second"
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
                <img id="third_image" class="mw-100" src="../src/assets/img/second_section/grey_phone.png" alt="phone"
                     onclick="thirdOpenModal()">
                <div class="animate__animated animate__backInLeft" id="modal_third">
                  <img src="../src/assets/img/second_section/grey_phone.png" alt="enlarged picture" id="image_third"
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
                <img id="fourth_image" class="mw-100" src="../src/assets/img/second_section/ball.png" alt="ball"
                     onclick="fourthOpenModal()">
                <div class="animate__animated animate__backInLeft" id="modal_fourth">
                  <img src="../src/assets/img/second_section/ball.png" alt="enlarged picture" id="image_fourth"
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
                <img id="fifth_image" class="mw-100" src="../src/assets/img/second_section/yellow_phone.png" alt="phone"
                     onclick="fifthOpenModal()">
                <div class="animate__animated animate__backInLeft" id="modal_fifth">
                  <img src="../src/assets/img/second_section/yellow_phone.png" alt="enlarged picture" id="image_fifth"
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
                <img id="sixth_image" class="mw-100" src="../src/assets/img/second_section/last_phone.png" alt="phone"
                     onclick="sixthOpenModal()">
                <div class="animate__animated animate__backInLeft" id="modal_sixth">
                  <img src="../src/assets/img/second_section/last_phone.png" alt="enlarged picture" id="image_sixth"
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

      <section class="third_section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                    <span id="targetSpan"
                          class="left_block animate__animate animate__flash ">About me</span>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <p class="right_block pl-4 ">Phasellus accumsan rutrum lacus eget<br>
                pulvinar. Fusce ac ipsum non nulla mollis<br>
                molestie eu fringilla lacus. Vivamus eget<br>
                ligula malesuada, rutrum nulla id, ultricies<br>
                sem. In aliquam condimentum velit, ac rutrum felis ultrices in.</p>
              <p class="right_block pl-4 pt-2">
                Lorem ipsum dolor sit amet,<br>
                consectetur adipiscing elit. Suspendisse<br>
                varius enim in eros elementum tristique.<br>
                Duis cursus, mi quis viverra.
              </p>
              <p class="right_block pl-4 pt-2">
                Vivamus gravida aliquam faucibus. Nulla<br>
                dictum lorem arcu, ut consectetur purus<br>
                faucibus eget. Nam arcu tellus, sagittis sed<br>
                facilisis in, pulvinar vitae enim.<br>
                Pellentesque a dolor sollicitudin, accumsan<br>
                elit non, lacinia lorem. Sed enim sapien,<br>
                viverra vitae dolor ut, iaculis aliquet mi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="fourth_section">
        <div class="container">
          <div class="fourth_img">
            <img class="mw-100" src="../src/assets/img/fourth_section/men.png" alt="men">
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <span class="left_word">Experience</span>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 ">
              <div class="right_group pl-4 pt-2">
                <h2>Company name</h2>
                <p>Job title</p>
                <span>August 2021–today</span>
              </div>
              <div class="pt-5">
                <div class="right_group pl-4 pt-5">
                  <h2>Company name</h2>
                  <p>Job title</p>
                  <span>August 2021–today</span>
                </div>
              </div>
              <div class="pt-5">
                <div class="right_group pl-4 pt-5">
                  <h2>Company name</h2>
                  <p>Job title</p>
                  <span>August 2021–today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container cont_next pt-5">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 pt-5">
              <span class="left_word">Services</span>
              <ul class="pl-0 pt-4">
                <li class="right_list">Design systems</li>
                <li class="right_list pt-3">Product design</li>
                <li class="right_list pt-3">UX design and research</li>
                <li class="right_list pt-3">Design strategy</li>
                <li class="right_list pt-3">Websites and mobile app design</li>
              </ul>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 pl-4 pt-5">
              <span class="left_word">Selected clients</span>
              <ul class="pl-0 pt-4">
                <li class="right_list">Veja</li>
                <li class="right_list pt-3">Polestar</li>
                <li class="right_list pt-3">Allbirds</li>
                <li class="right_list pt-3">Oatly</li>
                <li class="right_list pt-3">Bang & Olufsen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="fifth_section">
        <div class="container last_section">
          <div class="text-center pt-5" id="targetDiv">
            <h3 class="pt-5">Want to create<br>something awesome?<br>Drop me an email.</h3>
            <div class="pb-5 pt-2">
              <button type="button" class="btn btn-outline-dark btn-lg"
                      data-toggle="modal" data-target="#exampleModal"
                      data-whatever="Hi@email.com">→ Order
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                   aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content modal_background animate__animated animate__backInUp">
                    <div class="modal-body">
                      <form id="myForm">
                        <div class="form-group">
                          <label for="recipient-name" class="col-form-label font-weight-bold">
                            Your Email:</label>
                          <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="col-form-label font-weight-bold">Message:
                          </label>
                          <textarea class="form-control" id="message-text"></textarea>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-dark form_button" data-dismiss="modal">Close
                      </button>
                      <button type="button" id="submit"
                              class="btn btn-dark form_button">Send message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-auto mr-auto pb-5 ">
            <a class="my_nav nav_menu" href="#">Home</a>
            <a class="ml-3 my_nav nav_menu" href="#targetParagraph">Work</a>
            <a class="ml-3 my_nav nav_menu" href="#targetSpan">About</a>
            <a class="ml-3 my_nav nav_menu" href="#targetDiv">Contact</a>
          </div>
          <div class="col-auto">
            <a class="my_nav nav_link" href="#">Twitter</a>
            <a class="ml-4 my_nav nav_link" href="#">Instagram</a>
            <a class="ml-4 my_nav nav_link" href="#">LinkedIn</a>
          </div>
        </div>
        <div class="row">
          <div class="col-auto mr-auto pb-5">
            <a class="next_nav" href="#">Style guide</a>
            <a class="ml-3 next_nav" href="#">Licenses</a>
            <a class="ml-3 next_nav" href="#">Password</a>
            <a class="ml-3 next_nav" href="#">404</a>
          </div>
          <div class="col-auto">
            <a class="last_nav" href="#">Built by Bryn Taylor</a>
            <a class="ml-2 last_nav" href="#">Powered by Webflow</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
