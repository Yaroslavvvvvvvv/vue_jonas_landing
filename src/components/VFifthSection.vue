<template>
<div>
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
</div>
</template>

<script>
export default {
  name: "VFifthSection"
}
</script>

<style scoped>

</style>