

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color:#455268">
        <a class="navbar-brand" href="#">
            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/38/heart-304085_960_720.png" width="20" height="20"
                class="d-inline-block " alt="">
            <b>Greethink</b>

        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="navbarLoginLogout" class="navbar-nav ml-auto">
                

            </ul>

        </div>
    </nav>

    <!-- FORM DAN CARD YG DI HTML  -->
    <div v-if="page == 'card' " style="background-image: url('/asset/cloudy-day.png');"  >
      <div class="container-fluid" >
        <div class="row" style="align-items: center;">
          <center class="w-100 d-flex">
            <div class="container-fluid p-5">
              <div class="col-lg-8" v-bind:style="{ color: textColor }">
                <h1
                  class="text-center text-anuan"
                  style="letter-spacing:0px !important"
                >Design Your Card</h1>
                <cardresult :i="canvasTemplate" :m="card.message" :t="card.to">
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
            
            <!-- DROP DOWN FONT -->
            
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
                <div>
                  <label class="col-sm-3 my-1" for="head">Template</label>
                    <select  v-model="canvasTemplate" class="form-control" id="exampleFormControlSelect1" style="margin-bottom:  200px">
                      <option :value="JSON.stringify(assets[1].png)">Birhday Template 1</option>
                      <option :value="JSON.stringify(assets[2].png)">Birhday Template 2</option>
                      <option :value="JSON.stringify(assets[3].png)">Birhday Template 3</option>
                      <option :value="JSON.stringify(assets[4].png)">Birhday Template 4</option>
                      <option :value="JSON.stringify(assets[5].png)">Birhday Template 5</option>
                      <option :value="JSON.stringify(assets[6].png)">New Born 1</option>
                      <option :value="JSON.stringify(assets[7].png)">New Born 2</option>
                      <option :value="JSON.stringify(assets[8].png)">New Born 3</option>
                      <option :value="JSON.stringify(assets[9].png)">New Born 4</option>
                      <option :value="JSON.stringify(assets[10].png)">Eid Mubarak 1</option>
                      <option :value="JSON.stringify(assets[11].png)">Eid Mubarak 2</option>
                      <option :value="JSON.stringify(assets[12].png)">Nyepi Template 2</option>
                      <option :value="JSON.stringify(assets[13].png)">Wedding Template 1</option>
                      <option :value="JSON.stringify(assets[14].png)">Wedding Template 1</option>
                    </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- LANDING PAGE -->

    <div id="home" v-if="page == 'home'">
      <div class="bg-image">
            <div id="registerText" class="col-md-5" style="padding-top:250px;">
                <h1>Send All Your</h1>
                <h1><span>Love</span> With Card</h1>
                <div class="smallText">
                    <p style="color:#383838">Easily customize greeting cards for every event. Print or send as eCard  to your special one for free !</p>
                    <button @click.prevent="showCard" type="button" class="btn btn-lg"
                        style="background-color:#455268">Get Started - It's Free</button>
                </div>
                

            </div>
       
      </div>
      
    </div>
  </div>
</template>

<script>
import assets from '../asset/*.*';

import cardresult from "./cardresult";
import cardform from "./cardform";

export default {
  data: {
    canvasTemplate: "",
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
    text2: "",
    assets: assets,
  },
  components: {
    cardresult,
    cardform
  },
  created(){
    },
  mounted(){
    console.log(this.assets)

  },
  methods: {
    // generateTemplate(event){
    
    //     // $("#canvas").css("background-image", 'url("' + this.canvasTemplate + '")');
      
    // },
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

