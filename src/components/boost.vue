<template>
  <section class="section">
    <div class="main-wrap">
      <main class="main">
        <div class="bg">
          <PhoneBg_home></PhoneBg_home>

         <div class="content-bg">
          <div class="top">
            <img src="../assets/nj/title.png" alt="title">
          </div>
          <div class="middle">
            <img src="../assets/nj/icon-images.png" alt="icon-images" @click="go_images_click">
            <img src="../assets/nj/images-button.png" alt="images-button" v-if="boosts_btn == false" @click="go_images_click">
            <img src="../assets/nj/images-button-click.png" alt="images-button-click" v-if="boosts_btn == true">
          </div>
            <div class="sns-list">
          <ul>
            <li @click="twitter_click()">
              <img src="../assets/main/twitter-icon.png" alt="twitter-icon">
            </li>
            <li @click="insta_click()">
              <img src="../assets/main/instagram-icon.png" alt="instagram-icon">
            </li>
            <li @click="youtube_click()">
              <img src="../assets/main/youtube-icon.png" alt="youtube-icon">
            </li>
          </ul>
        </div>




         </div>

        </div>
      </main>
    </div>
  </section>
</template>
<script>
//import $ from 'jquery';
import PhoneBg_home from './PhoneBg_home.vue';
export default {
  name: 'boost',
  components: {
    PhoneBg_home,
  },
  data() {
    return {
boosts_btn:false,
    }
  },
  methods: {
  twitter_click(){
    var audio = new Audio(require('../assets/main/sound-2.mp3'));
        audio.play();
    setTimeout(() => {
    location.href='https://twitter.com/NewJeans_ADOR';
    }, 1000)
  },
  insta_click(){
    var audio = new Audio(require('../assets/main/sound-2.mp3'));
        audio.play();
    setTimeout(() => {
    location.href='https://www.instagram.com/newjeans_official/';
  },1000)
  },
  youtube_click(){
    var audio = new Audio(require('../assets/main/sound-2.mp3'));
        audio.play();
    setTimeout(() => {
    location.href='https://www.youtube.com/channel/UCMki_UkHb4qSc0qyEcOHHJw';
  },1000)
  },
  nj_click(){
    var audio = new Audio(require('../assets/main/sound-2.mp3'));
        audio.play();
    setTimeout(() => {
    location.href='/#/newjeans/boost';
  },1000)
  },
  go_images_click(){
        var audio = new Audio(require('../assets/main/sound-2.mp3'));
        audio.play();
        this.boosts_btn = true;
    setTimeout(() => {
    location.href='/#/newjeans/boost/images';
  },1000)
  }
  }, // Method End

}

</script>

<style scoped>
.content-bg {
  position: absolute;
  top: 40px;
  bottom: 46px;
  left: 36px;
  right: 37px;
  overflow: hidden;
  background: black;
  background-image: url('../assets/nj/bg\ \(1\).png');
  background-size: cover;
  background-position: center;
  text-align: center;
  padding-top: 60px;
}
.content-bg>.top{
width: 100%;
position: absolute;
top: 23%;
}
.content-bg>.top>img{
width: 78%;
}
.content-bg>.middle{
  position: absolute;
  top: 43%;
display: flex;
align-items: center;
width: 100%;
flex-direction: column;
height: 211px;
justify-content: space-evenly;
}
.content-bg>.middle>img{
  width: 30%;
  cursor: pointer;
}
.sns-list{
 margin-top: 30px;
 position: absolute;
 bottom: 13%;
 left: 20%;
}
.sns-list>ul{
   display: flex;
    width: 225px;
    margin: 0 auto;
    justify-content: space-evenly;
}
.sns-list>ul>li>img{
  height: 30px;
}
@media screen and (max-width: 500px) {

 .content-bg {
    top: 0;
    left: 0;
    right: 0;
    background-position: inherit;
}
.sns-list{
  left: 50%;
  transform: translate(-50%,-50%);
}

}
</style>