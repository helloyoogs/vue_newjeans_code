<template>
      <img class="bg-img" src="../assets/phone.png" alt="bg-img">
        <h1 class="clock">{{this.$store.state.now}}</h1>
        <div class="pc-phone-top"></div>
        <div class="pc-phone-left"></div>
        <div class="pc-phone-right"></div>
        <div class="pc-phone-bottom"></div>
        <div class="pc-phone-bar-status-white"></div>


</template>
 <!-- pc-phone-bar-status-white까지 핸드폰화면 페이지마다 겹치는 부분 -->
<script>
export default {
  name: 'PhoneBg',
  components: {
  },
  props:{
  },
  data() {
    return {
    
    }
  },
  methods: {
        home_click() {
      var audio = new Audio(require('../assets/main/sound-2.mp3'));
      audio.play();
      setTimeout(() => {
        location.href = '/#/newjeans/main';
      }, 1000)
    },
updateNow(){
  let current = new Date();
   let hh = current.getHours();
      let mm = current.getMinutes();
      if(hh < 10){
       hh = '0'+hh;
      }
      if(mm < 10){
       mm = '0'+mm;
      }
  this.$store.state.now = hh + ":" + mm;
}

},
mounted() {
  this.updateNow()
  setInterval(this.updateNow.bind(this), 1000)
},
}
</script>

<style scoped>

</style>
