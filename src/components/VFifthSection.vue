<template>
  <div>
    <section class="fifth_section">
      <div class="container last_section">
        <div class="text-center pt-5" id="targetDiv">
          <h3 class="pt-5">Want to create<br>something awesome?<br>Drop me an email.</h3>
          <div class="pb-5 pt-2">
            <b-button v-b-modal.modal-prevent-closing size="lg" variant="outline-dark">→ Order</b-button>
            <div class="mt-3 text-dark text-uppercase font-weight-bold">
              Last Orders:
              <div v-if="submittedNames.length === 0">--</div>
              <ul v-else class="d-flex justify-content-around row">
                <li class="col-1" v-for="name in submittedNames" :key="name">{{ name }}</li>
              </ul>
            </div>
            <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Submit Your Name"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                    label="Name"
                    label-for="name-input"
                    invalid-feedback="Name is required"
                    :state="nameState"
                >
                  <b-form-input
                      id="name-input"
                      v-model="name"
                      :state="nameState"
                      required
                  ></b-form-input>
                </b-form-group>
              </form>
            </b-modal>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "VFifthSection",
  data() {
    return {
      name: '',
      nameState: false,
      submittedNames: []
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }
}
</script>

<style scoped>

</style>