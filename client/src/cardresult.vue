

<template>
  <div >
    <div class="box" id="canvas" :style="{'background-image': 'url('+i+')'}">
      <div class="container">
        <br>
        <h1 id="recipient" class="text-right">{{t}}</h1>
        <br>
        <p id="message" class="text-right">
          <slot></slot>
          {{m}}
        </p>
      </div>
    </div>
    <br>
 <div class="row p-3">
      <div class="col">
        <button type="button" class="btn btn-lg btn-primary" @click.prevent="screenshot"><i class="fas fa-save"></i> <span> Save</span></button>
      </div>
      <div class="col" v-if="fburl">
        <button type="button" class= "btn" id="fb-share-button">
          <a v-bind:href="fburl"><i class="fab fa-facebook-f"></i> <span>Share on Facebook </span></a>
        </button>
      </div>
      <div class="col" v-if="twurl">
        <button type="button" class= "btn" id="twitter-share-button">
          <a v-bind:href="twurl"><i class="fab fa-twitter"></i> <span>Share on Twitter </span></a>
        </button>
      </div>
      <div class="col" v-if="linurl">
        <button type="button" class= "btn" id="linkedin-share-button">
          <a v-bind:href="linurl"><i class="fab fa-linkedin-in"></i> <span> Share on LinkedIn</span></a>
        </button>
      </div>
      <div class="col" v-if="url">
        <button type="button" class= "btn" id="download-button">
          <a v-bind:href="url" download="myimage"><i class="fas fa-download"></i> <span> Download </span></a>
        </button>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  props: ["i", "m", "t"],
  data() {
    return {
      fburl: "",
      url: "",
      twurl: "",
      linurl: "",
    };
  },
  methods: {
    screenshot() {
      console.log("screenshot layar");
      html2canvas(document.getElementById("canvas")).then(canvas => {
        var base64URL = canvas.toDataURL("image/png");
        axios
          .post("http://localhost:3000/upload", {
            image: base64URL
          })
          .then(data => {
            console.log(data);
            this.url = data.data;
            let url = this.url.replace(":", "%3A");
            // https%3A//storage.googleapis.com/kartu-lebaran/upload/1557471469708undefined
            this.fburl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
            this.twurl = "https://twitter.com/intent/tweet?url=" + url;
            this.linurl =
              "https://www.linkedin.com/shareArticle?mini=true&url=" +
              url +
              "&title=Selamat%20idul%20fitri%20semuanya&summary=&source=";
            console.log("dapet url share nya");
          })
          .catch(err => {
            console.log("error di axios");
            console.log(err);
          });
      });
    }
  }
};
</script>

<style scoped>
</style>

