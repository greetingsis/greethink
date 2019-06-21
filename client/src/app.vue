

<template>
  <div>
    <nav>
      <h1 class="brand"></h1>
      <ul>
        <li>
          <a
            class="ml-5"
            style=" text-decoration: none;color: white"
            href="#"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            Kartu
            <span style="color:crimson">Ilahi</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- FORM DAN CARD YG DI HTML  -->
    <div v-if="page == 'card'">
      <div class="container-fluid">
        <div class="row" style="align-items: center;">
          <center class="w-100 d-flex">
            <div class="container-fluid p-5">
              <div class="col-lg-8" v-bind:style="{ color: textColor }">
                <h1
                  class="text-center"
                  style="letter-spacing:0px; color: black !important"
                >Card Preview</h1>
                <cardresult :i="card.image" :m="card.message" :t="card.to">
                  <h1
                    v-bind:style="{ top:top + 'px', right:right + 'px', width:width  + 'px', height:height + 'px', fontFamily: fontStyle, fontSize: fontSize + 'px' }"
                    style="position: relative"
                    v-bind:class="styling"
                  >{{ text }}</h1>

                  <h1
                    v-bind:style="{ top:top + 'px', right:right + 'px', width:width  + 'px', height:height + 'px', fontFamily: fontStyle, fontSize: fontSize + 'px' }"
                    style="position: relative"
                    v-bind:class="styling"
                  >{{ text2 }}</h1>
                </cardresult>
              </div>
            </div>
          </center>
          <div class="col-lg-12">
            <cardform v-on:newcard="generatecard"></cardform>

            <!-- DROP DOWN FONT -->
            <br>
            <h5 class="mt-2">2) Please choose or adjust your style</h5>
            <div class="col-12">
              <div class="row align-items-start justify-content-around">
                <div>
                  <label>Select Style</label>
                  <br>
                  <select v-model="fontStyle">
                    <option value="'Aref Ruqaa', serif" selected>Aref Ruqaa (Arabic)</option>
                    <option value="'Reem Kufi', sans-serif">Reem Kufi(Arabic)</option>
                    <option value="'Lemonada', cursive">Lemonada(Arabic)</option>
                    <option value="'Cairo', sans-serif">Cairo(Arabic)</option>
                    <option value="'Tajawal', sans-serif">Tajawal(Arabic)</option>
                    <option
                      value="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
                      class="dropdown-item"
                      href="#"
                    >'Franklin Gothic Medium'</option>
                    <option
                      value="'Courier New', Courier, monospace"
                      class="dropdown-item"
                      href="#"
                    >'Courier New'</option>
                    <option
                      value="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
                      class="dropdown-item"
                      href="#"
                    >'Lucida Sans'</option>
                    <option
                      value="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                      class="dropdown-item"
                      href="#"
                    >'Segoe UI'</option>
                    <option
                      value="'Times New Roman', Times, serif"
                      class="dropdown-item"
                      href="#"
                    >'Times New Roman'</option>
                    <option
                      value="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
                      class="dropdown-item"
                      href="#"
                    >'Trebuchet MS'</option>
                    <option
                      value="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
                      class="dropdown-item"
                      href="#"
                    >-apple-system</option>
                    <option
                      value="Arial, Helvetica, sans-serif"
                      class="dropdown-item"
                      href="#"
                    >Arial</option>
                    <option
                      value="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                      class="dropdown-item"
                      href="#"
                    >Cambria</option>
                    <option
                      value="Georgia, 'Times New Roman', Times, serif"
                      class="dropdown-item"
                      href="#"
                    >Georgia</option>
                    <option
                      value="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                      class="dropdown-item"
                      href="#"
                    >Impact</option>
                    <option
                      value="Verdana, Geneva, Tahoma, sans-serif"
                      class="dropdown-item"
                      href="#"
                    >Verdana</option>
                  </select>
                </div>
                <div>
                  <label>Your Message</label>
                  <br>
                  <input class="form-control" type="text" name v-model="text">
                </div>
                <div>
                  <label>Select Effect</label>
                  <br>
                  <select v-model="styling">
                    <option value="outlined">Outlined</option>
                    <option value="engraved">Engraved</option>
                    <option value="embossed">Embossed</option>
                    <option value="rainbows">Rainbows</option>
                    <option value="stickers">Stickers</option>
                    <option value="thickness">Thickness</option>
                    <option value="thic">3D</option>
                  </select>
                </div>
                <div>
                  <label>Y Axis Position</label>
                  <br>
                  <input class="form-control" type="number" name v-model="top">
                </div>
                <div>
                  <label>X Axis Position</label>
                  <br>
                  <input class="form-control" type="number" name v-model="right">
                </div>
                <div>
                  <label>Container Width</label>
                  <br>
                  <input class="form-control" type="number" name v-model="width">
                </div>
                <div>
                  <label>Container Height</label>
                  <br>
                  <input class="form-control" type="number" name v-model="height">
                </div>
                <div>
                  <label>Font Size</label>
                  <br>
                  <input class="form-control" type="number" name v-model="fontSize">
                </div>
                <div>
                  <label>Color</label>
                  <br>
                  <input type="color" v-model="textColor">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- LANDING PAGE -->
    <div id="home" v-if="page == 'home'">
      <div class="bg-image"></div>
      <div class="bg-text">
        <p class="py-5" style="letter-spacing:1px;font-size:12px;">
          <i>
            <q>
              Andai jemari tak sempat berjabat. Jika raga tak bisa bersua.
              Bila Ada kata membekas luka. Semoga pintu maaf masih terbuka.
            </q>
            <br>
            <br>Selamat Idul Fitri 1440 H
          </i>
        </p>
        <transition name="slide-fade">
          <button @click.prevent="showCard" class="ghost-button-full-color">Get Free Card</button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import cardresult from "./cardresult";
import cardform from "./cardform";

export default {
  data: {
    card: "",
    image: "",
    message: "",
    to: "",
    email: "",
    password: "",
    isLogin: "",
    page: "home",
    top: -18,
    right: 0,
    width: 300,
    height: 200,
    fontStyle: "'Aref Ruqaa', serif",
    fontSize: 16,
    text: "",
    textColor: "#000000",
    styling: "",
    text2: ""
  },
  components: {
    cardresult,
    cardform
  },
  methods: {
    generatecard(el) {
      var file = el.image;
      var reader = new FileReader();
      reader.onloadend = function() {
        $("#canvas").css("background-image", 'url("' + reader.result + '")');
      };
      if (file) {
        reader.readAsDataURL(file);
      }
      this.card = {
        to: el.to,
        message: el.text,
        image: reader.result
      };
    },
    showCard() {
      this.page = "card";
    }
  },
  events: {},
  created() {
    if (localStorage.getItem("token")) {
      this.isLogin = true;
    }
  }
};
</script>

<style scoped>
</style>

