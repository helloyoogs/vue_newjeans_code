<template>
 <section class="section">
<div class="main-wrap">
  <main class="main">
  <div class="bg">
      <PhoneBg></PhoneBg>

      <div class="content-bg">
        <div class="face-id-bg">
            <img src="../assets/main/face-id-bg.png" alt="face-id-bg">
        </div>
        <div class="face-id-anim">
            <img src="../assets/main/face-id-anim.gif" alt="face-id-anim">
        </div>
      </div>


        </div>
        </main>
        </div>
        </section>
</template>

<script>
import PhoneBg from './PhoneBg.vue';
export default {
  name: 'MainLoad',
  components: {
    PhoneBg
},
methods: {
  currentDateTime() {
      let current = new Date();
      // const time = current.getHours() + ":" + current.getMinutes();
      let hh = current.getHours();
      let mm = current.getMinutes();
      if(hh < 10){
       hh = '0'+hh;
      }
      if(mm < 10){
       mm = '0'+mm;
      }
      return hh + ":" + mm;
      
    },
},
        mounted() {
    setTimeout(() => {
    location.href='/#/newjeans/main';
    }, 3000);  
    }

  }
  

</script>
<style scoped>
.content-bg{
  display: block;
  position: absolute;
  top: 40px;
  bottom: 46px;
  left: 37px;
  right: 37px;
  overflow: hidden;
  background-image: url('../assets/main/bg.png');
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 90px 18px 0;
}
.face-id-bg{
    position: absolute;
    width: 137px;
    top: 33%;
    left: 30%;
    margin: 0 auto;
}
.face-id-bg>img{
    width: 100%;
}
.face-id-anim{
    position: absolute;
    width: 125px;
    top: 35%;
    left: 32%;
}
.face-id-anim>img{
    width: 100%;
}
@media screen and (max-width: 500px) {
.content-bg{
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
}
}
</style>