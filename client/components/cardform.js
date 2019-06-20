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
      this.image = event.target.files[0];
    },
    submitInput: function() {
      console.log("disini");
      console.log(this.recipient, this.message);
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
  
  `
});
