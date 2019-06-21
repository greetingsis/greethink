Vue.component("input-form", {
  props: [],
  data: function() {
    return {
      recipient: "",
      message: "",
      image: "",
      dataStyle: "",
      message2: ""
    };
  },
  methods: {
    previewFile: function(event) {
      console.log(event.target.files[0], "asdasdasd");
      
      this.image = event.target.files[0];
      
    },
    submitInput: function() {
      console.log("disini");
      this.$emit("newcard", {
        to: this.recipient,
        text: this.message,
        image: this.image

      });
      this.recipient = "";
      this.message = "";
      this.image = "";
      let submit = document.getElementById("submitbg");
      submit.value = "";
      if (!/safari/i.test(navigator.userAgent)) {
        submit.type = "";
        submit.type = "file";
      }
    }
  },
  template: `
  <div>
  <h5>1) Please input your background card</h5>
  <form class="form" @submit.prevent="submitInput">
    <div class="form-group">
      <label>Upload a picture</label>
      <input type="file" @change="previewFile" id="submitbg" class="form-control-file">
    </div>
    <button type="submit" class="btn btn-primary">submit</button>
  </form>
  </div>
  `
});
