<template>
<section class="section">
<div class="main-wrap">
  <main class="main">
  <div class="bg">
    <PhoneBg></PhoneBg>
      
      <div class="content-bg">
        <div class="title_img">
          <img src="../assets/main/title.png" alt="title-img">
        </div>
        <div class="music-btn-wrap">
          <audio id="chiptune" controls=""  name="media" style="display: none;"> <!--오디오 vue로 안되서 js로 처리-->
            <source src="../assets/main/chiptune.mp3" type="audio/mpeg">
            </audio>
            <div class="music-btn" @click="soundOnOff">
                <img v-if="소리키고끄기 == 0" src="../assets/main/sound-on.png" alt="sound-on">
                <img v-if="소리키고끄기 == 1" src="../assets/main/sound-off.png" alt="sound-off">
            </div>
        </div>
        <div class="mention">
          <p>원하는 서비스를 선택해주세요.</p>
          <p class="mention-en">Please select the service.</p>
        </div>

        <div class="button-list">
            <ul class="img-list">
              <li class="id-card" @mousedown="id_card_click()" @mouseup="아이디카드클릭=0">
              <a href="#">
                <img v-if="아이디카드클릭==0" class="on" src="../assets/main/id-card-icon.png" alt="id-card-icon">
                <img v-if="아이디카드클릭==1" class="off" src="../assets/main/id-card-icon-click.png" alt="id-card-icon-click">
              </a>
              </li>
            </ul>
            <ul class="btn-list">
            <li class="id-card" @mousedown="id_card_click()" @mouseup="아이디카드클릭=0">
              <a href="#">
                <img v-if="아이디카드클릭==0" src="../assets/main/id-card-button.png" alt="id-card-button">
                <img v-if="아이디카드클릭==1" src="../assets/main/id-card-button-click.png" alt="id-card-button-click">
              </a>
              </li>
            </ul>
            <br><br>
            <ul class="img-list">
             <li class="moving-photos" @mousedown="moving_photos_click()" @mouseup="무빙포토클릭=0">
              <a href="#">
                <img v-if="무빙포토클릭==0" src="../assets/main/moving-photos-icon.png" alt="moving-photos-icon">
                <img v-if="무빙포토클릭==1" src="../assets/main/moving-photos-icon-click.png" alt="moving-photos-icon-click">
              </a>
              </li>
              <li class="phoning" @mousedown="포닝클릭=1,clickSound()" @mouseup="포닝클릭=0">
              <a href="#">
                <img v-if="포닝클릭==0" src="../assets/main/phoning-icon.png" alt="phoning-icon">
                <img v-if="포닝클릭==1" src="../assets/main/phoning-icon-click.png" alt="phoning-icon-click">
              </a>
              </li>
            </ul>
            <ul class="btn-list">
             <li class="moving-photos" @mousedown="moving_photos_click()" @mouseup="무빙포토클릭=0">
              <a href="#" >
                <img v-if="무빙포토클릭==0" src="../assets/main/moving-photos-button.png" alt="moving-photos-button">
                <img v-if="무빙포토클릭==1" src="../assets/main/moving-photos-button-click.png" alt="moving-photos-button-click">
              </a>
              </li>
              <li class="phoning" @mousedown="포닝클릭=1,clickSound()" @mouseup="포닝클릭=0" >
              <a href="#">
                <img v-if="포닝클릭==0" src="../assets/main/phoning-button.png" alt="phoning-button">
                <img v-if="포닝클릭==1" src="../assets/main/phoning-button-click.png" alt="phoning-button-click">
              </a>
              </li>
            </ul>
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
            <li @click="nj_click()">
              <img src="../assets/main/nj-icon.png" alt="nj-icon">
            </li>
          </ul>
        </div>

        <div class="phoning_popup" v-if="포닝클릭 == 1" @click="포닝클릭 = 0">
            <img src="../assets/main/qr-code.png" alt="qr-code">
        </div>
      </div>

  </div>
  </main>
</div>
  </section>
</template>
 <!-- pc-phone-bar-status-white까지 핸드폰화면 페이지마다 겹치는 부분 -->
<script>
import PhoneBg from './PhoneBg.vue';
export default {
  name: 'Main',
  components: {
    PhoneBg
},
  data() {
    return {
      소리키고끄기: 0,
      아이디카드클릭: 0,
      무빙포토클릭: 0,
      포닝클릭: 0,
    }
  },
  methods: {
    soundOnOff(){
      if(this.소리키고끄기 == 0){
        this.소리키고끄기 = 1;
     document.getElementById('chiptune').play();
      document.getElementById('chiptune').loop = true;
      } else{
        this.소리키고끄기 = 0;
       document.getElementById('chiptune').pause();
        document.getElementById('chiptune').currentTime = 0;
      }
  },
  clickSound(){
      var audio = new Audio(require('../assets/main/sound-2.mp3'));
        audio.play();
  },
  id_card_click(){
    var audio = new Audio(require('../assets/main/sound-2.mp3'));
        audio.play();
    this.아이디카드클릭 = 1;
    setTimeout(() => {
    location.href='/#/newjeans/id-card';
    }, 1000)

  },
  moving_photos_click(){
    var audio = new Audio(require('../assets/main/sound-2.mp3'));
        audio.play();
    this.무빙포토클릭 = 1;
    setTimeout(() => {
    location.href='/#/newjeans/moving-photos';
    }, 1000)
  },
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
  }
}
</script>

<style>
.section{
  width: 100%;
  height: 100%;
}
.main-wrap{
    width: 445px;
      margin: 13px auto;
    margin-bottom: 0;
}
.main{
  width: 445px;
  height: 893px;
  position: relative;
}
.bg-img{
  position: absolute;
  width: 100%;
}
.clock{
  position: absolute;
  top: 50px;
  z-index: 1;
  left: 77px;
  font-weight: 600;
  font-size: 15px;
  color: #fff;
}
.pc-phone-top{
  position: absolute;
  background-image: url('../assets/pc-phone-top.png');
  width: 445px;
  height: 82px;
  top: 0;
  z-index: 3;
}
.pc-phone-left{
  position: absolute;
  background-image: url('../assets/pc-phone-left.png');
  width: 40px;
  height: 893px;
  background-size: contain;
  top: 0;
  z-index: 3;
  left: 0;
}
.pc-phone-right{
  position: absolute;
  background-image: url('../assets/pc-phone-right.png');
  width: 40px;
  height: 893px;
  background-size: contain;
  top: 0;
  z-index: 3;
  right: 0px;
}
.pc-phone-bottom{
  position: absolute;
  background-image: url('../assets/pc-phone-bottom.png');
  width: 445px;
  height: 85px;
  background-size: contain;
  bottom: 0;
  z-index: 3;
}
.pc-phone-bar-status-white{
  position: absolute;
  background-image: url('../assets/pc-phone-bar-status-white.png');
  width: 68px;
  height: 17px;
  background-size: contain;
  z-index: 1;
  top: 50px;
  right: 60px;
}
@media screen and (max-width: 500px) {
      .bg-img{
      display: none;
    }
      .pc-phone-top{
      display: none;
    }
    .pc-phone-left{
      display: none;
    }
    .pc-phone-right{
      display: none;
    }
    .pc-phone-bottom{
      display: none;
    }
    .pc-phone-bar-status-white{
      display: none;
    }
    .clock{
      left: 11px;
    top: 13px;
}

       .main-wrap {
   width: 100%;
}  
.main-wrap{
  margin: 0;
}
.main{
  width: 100%;
}
body{
  width: 100%;

}

}
</style>
<style scoped>

.content-bg{
  display: block;
  position: absolute;
  top: 40px;
  bottom: 46px;
  left: 37px;
  right: 37px;
  overflow: hidden;
  background-image: url('../assets/main/content-bg.png');
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 90px 18px 0;
}

.title_img{
  width: 100%;
}
.title_img>img{
  width: 90%;
  text-align: center;
}

.music-btn-wrap{
  display: block;
  text-align: right;
  margin-right: 5px;
  margin-top: 15px;
  }
.music-btn{
  position: relative;
  display: inline-block;;
  width: 25px;
  height: 22px;
  z-index: 1;
  }
.music-btn>img{
  position: absolute;
  width: 100%;
  right: 0;
}
.music-btn:hover{
  background: pink;
}
.mention{
  font-size: 14px;
}
.mention-en{
  margin-top: 4px;
  font-weight: 600;
}
.button-list{
margin-top: 20px;
}
.button-list>ul{
 display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.img-list:nth-of-type(2)>li{
  flex: 1 1 auto;
  width: 50%;
}
.img-list>li>a{
  display: block;
  width: 116px;
}
.img-list>li>a>img{
  width: 100%;
}
.btn-list>li{
  flex: 1 1 auto;
  width: 50%;
}
.btn-list>li>a>img{
  height:30px;
}
.img-list>.id-card>a>img{
  margin-right: -20px;
}
.sns-list{
 margin-top: 30px;
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
.phoning_popup{
  position: absolute;
  top: 0;
  left: 0;
width: 100%;
height: 100%;
  background: rgba(0, 0, 0, 0.596);
  z-index: 1;
}
.phoning_popup>img{
padding-top: 66%;
}
@media screen and (max-width: 500px) {

.music-btn-wrap {
    margin-right: 15px;
}
 .content-bg {
    top: 0;
    left: 0;
    right: 0;
    background-position: inherit;
}

.btn-list>li {
    flex: 0;
}
}

</style>
