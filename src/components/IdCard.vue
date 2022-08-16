<template>
  <section class="section">
    <div class="main-wrap">
      <main class="main">
        <div class="bg">
          <PhoneBg_home></PhoneBg_home>

          <div class="content-bg">
            <div class="press">
              <ul>
                <li class="press-1" v-if="press == 0">
                  <div class="step-list">
                    <ol>
                      <li class="step-1" v-if="step == 0" @click="step_1_click">
                        <div class="item">
                          <img class="join_popup" src="../assets/idcard/process-1-step-1-con.png"
                            alt="process-1-step-1-con">
                        </div>
                      </li>
                      <li class="step-2" v-if="step == 1">
                        <div class="item">
                          <div class="panel">
                            <p>아래 정보를 입력해주세요.</p>
                            <p class="en">Please enter the information below.</p>
                          </div>
                          <div class="form" @input="form_write">
                            <div class="row">
                              <div class="label">
                                <span>닉네임 Nickname</span>
                              </div>
                              <div class="data">
                                <input placeholder="어도어 ADOR" @input="nickname = $event.target.value"
                                  :value="nickname" />
                              </div>
                            </div>
                            <div class="row">
                              <div class="label">
                                <span>지역 Location</span>
                              </div>
                              <div class="data">
                                <input placeholder="서울 Seoul" @input="location = $event.target.value"
                                  :value="location" />
                              </div>
                            </div>
                            <div class="row">
                              <div class="label">
                                <span>좋아하는 것 What I like</span>
                              </div>
                              <div class="data">
                                <input placeholder="뉴진스 NewJeans" @input="like = $event.target.value" :value="like" />
                              </div>
                            </div>
                          </div>
                          <div class="controller">
                            <div class="prev" @click="prev_click">
                              <img src="../assets/idcard/btn-back.png" alt="btn-back">
                            </div>
                            <div class="next" :class="{ on: 인풋체크1 }">
                              <img src="../assets/idcard/btn-next-off.png" alt="btn-next">
                              <img src="../assets/idcard/btn-next.png" alt="btn-next" @click="next_click">
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="step-3" v-if="step == 2">
                        <div class="item">
                          <div class="panel">
                            <p @click="nowDate">관심 있는 활동을 선택해주세요.</p>
                            <p class="en">Choose your favorite activity.</p>
                          </div>
                          <div class="form">
                            <div class="choice">
                              <ul>
                                <li @click="choice1_click" :class="{ on: choice1 }">
                                  <div class="num">
                                    <img src="../assets/idcard/rect-num-1.png" alt="rect-num-1">
                                    <img src="../assets/idcard/rect-num-1-on.png" alt="rect-num-1">
                                  </div>
                                  <div class="answer">기록하고 꾸미기<br>
                                    <span class="en">Keeping a journal and decorating it</span>
                                  </div>
                                </li>
                                <li @click="choice2_click" :class="{ on: choice2 }">
                                  <div class="num">
                                    <img src="../assets/idcard/rect-num-2.png" alt="rect-num-2">
                                    <img src="../assets/idcard/rect-num-2-on.png" alt="rect-num-2">
                                  </div>
                                  <div class="answer">맛있는 것 만들기<br>
                                    <span class="en">Cooking</span>
                                  </div>
                                </li>
                                <li @click="choice3_click" :class="{ on: choice3 }">
                                  <div class="num">
                                    <img src="../assets/idcard/rect-num-3.png" alt="rect-num-1">
                                    <img src="../assets/idcard/rect-num-3-on.png" alt="rect-num-1">
                                  </div>
                                  <div class="answer">땀 흘리며 즐기는 운동<br>
                                    <span class="en">Exercising sports that get your heart pumping</span>
                                  </div>
                                </li>
                                <li @click="choice4_click" :class="{ on: choice4 }">
                                  <div class="num">
                                    <img src="../assets/idcard/rect-num-4.png" alt="rect-num-1">
                                    <img src="../assets/idcard/rect-num-4-on.png" alt="rect-num-1">
                                  </div>
                                  <div class="answer">새로운 것을 알아가기<br>
                                    <span class="en">Learning new things</span>
                                  </div>
                                </li>
                                <li @click="choice5_click" :class="{ on: choice5 }">
                                  <div class="num">
                                    <img src="../assets/idcard/rect-num-5.png" alt="rect-num-1">
                                    <img src="../assets/idcard/rect-num-5-on.png" alt="rect-num-1">
                                  </div>
                                  <div class="answer">다양한 주제로 대화하기<br>
                                    <span class="en">Talking about anything</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="controller">
                            <div class="prev" @click="prev_click">
                              <img src="../assets/idcard/btn-back.png" alt="btn-back">
                            </div>
                            <div class="next" :class="{ on: 인풋체크2 }">
                              <img src="../assets/idcard/btn-next-off.png" alt="btn-next">
                              <img src="../assets/idcard/btn-next.png" alt="btn-next" @click="next_click">
                            </div>
                          </div>
                        </div>
                      </li>

                      <li class="step-4" v-if="step == 3">
                        <div class="item">
                          <div class="panel">
                            <p>관심 있는 활동을 선택해주세요.</p>
                            <p class="en">Choose your favorite activity.</p>
                          </div>
                          <div class="form">
                            <div class="choice">
                              <ul>
                                <li @click="type1_click" :class="{ on: type1 }">
                                  <div class="num">
                                    <img src="../assets/idcard/rect-num-1.png" alt="rect-num-1">
                                    <img src="../assets/idcard/rect-num-1-on.png" alt="rect-num-1">
                                  </div>
                                  <div class="answer">재미있고 사랑스러운<br>
                                    <span class="en">Funny and silly</span>
                                  </div>
                                </li>
                                <li @click="type2_click" :class="{ on: type2 }">
                                  <div class="num">
                                    <img src="../assets/idcard/rect-num-2.png" alt="rect-num-2">
                                    <img src="../assets/idcard/rect-num-2-on.png" alt="rect-num-2">
                                  </div>
                                  <div class="answer">사랑스럽고 행복한<br>
                                    <span class="en">Sweet and gentle</span>
                                  </div>
                                </li>
                                <li @click="type3_click" :class="{ on: type3 }">
                                  <div class="num">
                                    <img src="../assets/idcard/rect-num-3.png" alt="rect-num-1">
                                    <img src="../assets/idcard/rect-num-3-on.png" alt="rect-num-1">
                                  </div>
                                  <div class="answer">엉뚱하고 호기심 많은<br>
                                    <span class="en">Unpredictable and enlightening</span>
                                  </div>
                                </li>
                                <li @click="type4_click" :class="{ on: type4 }">
                                  <div class="num">
                                    <img src="../assets/idcard/rect-num-4.png" alt="rect-num-1">
                                    <img src="../assets/idcard/rect-num-4-on.png" alt="rect-num-1">
                                  </div>
                                  <div class="answer">도전적이고 반항적인<br>
                                    <span class="en">New and challenging</span>
                                  </div>
                                </li>
                                <li @click="type5_click" :class="{ on: type5 }">
                                  <div class="num">
                                    <img src="../assets/idcard/rect-num-5.png" alt="rect-num-1">
                                    <img src="../assets/idcard/rect-num-5-on.png" alt="rect-num-1">
                                  </div>
                                  <div class="answer">차분하고 진지한<br>
                                    <span class="en">Calm and thought-provoking</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="controller">
                            <div class="prev" @click="prev_click">
                              <img src="../assets/idcard/btn-back.png" alt="btn-back">
                            </div>
                            <div class="next" :class="{ on: 인풋체크3 }">
                              <img src="../assets/idcard/btn-next-off.png" alt="btn-next">
                              <img src="../assets/idcard/btn-next.png" alt="btn-next" @click="next_click">
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="step-5" v-if="step == 4">
                        <div class="item">
                          <div class="panel">
                            <p>카드에 들어갈 사진을 업로드해주세요.</p>
                            <p class="en">Choose an image for your card..</p>
                          </div>
                          <div class="form" @input="searchChangeFunc($event)">
                            <label class="uploader">
                              <div class="pic" :style="`background-image: url(${이미지})`" @click="fileupload"></div>
                              <div class="text" :class="{ on: 파일업로드 }">Click</div>
                              <input type="file" accept="image/*" @change="upload">
                            </label>
                          </div>
                          <div class="controller">
                            <div class="prev" @click="prev_click">
                              <img src="../assets/idcard/btn-back.png" alt="btn-back">
                            </div>
                            <div class="next" :class="{ on: 인풋체크4 }">
                              <img src="../assets/idcard/btn-print-off.png" alt="btn-next">
                              <img src="../assets/idcard/btn-print.png" alt="btn-next" @click="next_click">
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="step-6" v-if="step == 5" v-bind="pagenext1()">
                        <div class="item">
                          <div class="form">
                            <p>ID 카드 출력 중... <br>
                              Printing your ID card...</p>
                            <img src="../assets/idcard/printing-icon.png" alt="printing-icon">
                            <div class="print_loading">
                              <div class="loadbar"></div>
                            </div>
                          </div>
                        </div>
                      </li>



                    </ol>

                    <div class="step-icon-list">
                      <img src="../assets/idcard/con-bottom-steps-list-bg.png" alt="con-bottom-steps-list-bg">
                      <ol>
                        <li>
                          <div class="step-icon">
                            <img src="../assets/idcard/con-bottom-step-on.png" alt="con-bottom-step-on"
                              v-if="step == 0">
                            <img src="../assets/idcard/con-bottom-step.png" alt="con-bottom-step" v-if="step != 0">
                          </div>
                        </li>
                        <li>
                          <div class="step-icon">
                            <img src="../assets/idcard/con-bottom-step-on.png" alt="con-bottom-step-on"
                              v-if="step == 1">
                            <img src="../assets/idcard/con-bottom-step.png" alt="con-bottom-step" v-if="step != 1">
                          </div>
                        </li>
                        <li>
                          <div class="step-icon">
                            <img src="../assets/idcard/con-bottom-step-on.png" alt="con-bottom-step-on"
                              v-if="step == 2">
                            <img src="../assets/idcard/con-bottom-step.png" alt="con-bottom-step" v-if="step != 2">
                          </div>
                        </li>
                        <li>
                          <div class="step-icon">
                            <img src="../assets/idcard/con-bottom-step-on.png" alt="con-bottom-step-on"
                              v-if="step == 3">
                            <img src="../assets/idcard/con-bottom-step.png" alt="con-bottom-step" v-if="step != 3">
                          </div>
                        </li>
                        <li>
                          <div class="step-icon">
                            <img src="../assets/idcard/con-bottom-step-on.png" alt="con-bottom-step-on"
                              v-if="step == 4">
                            <img src="../assets/idcard/con-bottom-step.png" alt="con-bottom-step" v-if="step != 4">
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </li>
                <li class="press-2" v-if="press == 1" v-bind="pagenext2()">
                  <video src="../assets/idcard/process-2-mov.mp4" autoplay></video>
                </li>
                <li class="press-3" v-if="press == 2">
                  <div class="top">
                    <img src="../assets/idcard/title-img.png" alt="title-img">
                  </div>
                  <div class="middle">
                    <div class="card-front" v-if="카드뒤집기 == false" @click="카드뒤집기 = true">
                      <div class="profile_img" >
                        <div class="p_img" :style="`background-image: url(${이미지})`">

                        </div>
                      </div>
   
                      <div class="profile">
                        <ul>
                          <li>NO.{{ 오늘날짜ID }}{{ 랜덤값 }}</li>
                          <li>{{ nickname }}</li>
                          <li>{{ 오늘날짜 }}</li>
                          <li>{{ location }}</li>
                          <li>{{ like }}</li>
                          <li>{{클럽}}<br>{{클럽en}}
                          </li>
                        </ul>
                      </div>
                    </div>
                      <div class="card-back"  v-if="카드뒤집기 == true" @click="카드뒤집기 = false">
                      <!-- <img :src="클럽종류[클럽종류넘버].img[클럽이미지넘버]" alt=""> -->
                                      <div class="b_img" :style="`background-image: url(${클럽종류[클럽종류넘버].img[클럽이미지넘버]})`" alt="클럽이미지">

                        </div>
                    </div>
                  </div>
                  <div class="bottom">
                    <img src="../assets/idcard/btn-download.png" alt="btn-download">
                    <img src="../assets/idcard/btn-share.png" alt="btn-share">
                    <img src="../assets/idcard/btn-back(1).png" alt="btn-back(1)">
                  </div>
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
// import $ from 'jquery';
import PhoneBg_home from './PhoneBg_home.vue';
import clubimg from '../js/clubimg.js'
export default {
  name: 'IdCard',
  components: {
    PhoneBg_home,
  },
  data() {
    return {
      step: 0,
      press: 0,
      인풋체크1: false,
      인풋체크2: false,
      인풋체크3: false,
      인풋체크4: false,
      nickname: '',
      location: '',
      like: '',
      choice1: false,
      choice2: false,
      choice3: false,
      choice4: false,
      choice5: false,
      type1: false,
      type2: false,
      type3: false,
      type4: false,
      type5: false,
      이미지: '',
      파일: '',
      파일업로드: false,
      카드뒤집기: false,
      오늘날짜: '',
      랜덤값: 0,
      오늘날짜ID: '',
      클럽: '',
      클럽en: '',
      클럽종류: clubimg,
      클럽종류넘버: 0,
      클럽이미지넘버: 0,
    }
  },
  methods: {
    pagenext1() {
      if (this.step == 5) {
        setTimeout(() => {
          this.press = 1;
        }, 1000)
      }
    },
    pagenext2() {
      if (this.press == 1) {
        setTimeout(() => {
          this.press = 2;
        }, 7000)
      }
    },
    step_1_click() {
      var audio = new Audio(require('../assets/idcard/sound-1.mp3'));
      audio.play();
      this.step = 1;
    },
    prev_click() {
      this.step -= 1;
    },
    next_click() {
      var audio = new Audio(require('../assets/idcard/sound-1.mp3'));
      audio.play();
      this.step += 1;
    },
    form_write() {
      if (this.nickname && this.like && this.location != '') {
        this.인풋체크1 = true;
      }
      else {
        this.인풋체크1 = false;
      }
    },

    choice1_click() {
      this.choice1 = true;
      this.choice2 = false;
      this.choice3 = false;
      this.choice4 = false;
      this.choice5 = false;
      this.인풋체크2 = true;
      this.클럽 = '다꾸';
      this.클럽en = 'Journaling';
this.클럽종류넘버 = 0;

    },
    choice2_click() {
      this.choice1 = false;
      this.choice2 = true;
      this.choice3 = false;
      this.choice4 = false;
      this.choice5 = false;
      this.인풋체크2 = true;
      this.클럽 = '베이킹';
      this.클럽en = 'Baking';
      this.클럽종류넘버 = 1;
    },
    choice3_click() {
      this.choice1 = false;
      this.choice2 = false;
      this.choice3 = true;
      this.choice4 = false;
      this.choice5 = false;
      this.인풋체크2 = true;
      this.클럽 = '서핑';
      this.클럽en = 'Surfing';
      this.클럽종류넘버 = 2;
    },
    choice4_click(){
      this.choice1 = false;
      this.choice2 = false;
      this.choice3 = false;
      this.choice4 = true;
      this.choice5 = false;
      this.인풋체크2 = true;
       this.클럽 = '토론';
      this.클럽en = 'Debate';
      this.클럽종류넘버 = 3;
    },
    choice5_click() {
      this.choice1 = false;
      this.choice2 = false;
      this.choice3 = false;
      this.choice4 = false;
      this.choice5 = true;
      this.인풋체크2 = true;
      this.클럽 = '쓸데없는 대화';
      this.클럽en = 'Random Talking';
      this.클럽종류넘버 = 4;
      
    },
    type1_click() {
      this.type1 = true;
      this.type2 = false;
      this.type3 = false;
      this.type4 = false;
      this.type5 = false;
      this.인풋체크3 = true;
            this.클럽이미지넘버 = 0;
    },
    type2_click() {
      this.type1 = false;
      this.type2 = true;
      this.type3 = false;
      this.type4 = false;
      this.type5 = false;
      this.인풋체크3 = true;
       this.클럽이미지넘버 = 1;
    },
    type3_click() {
      this.type1 = false;
      this.type2 = false;
      this.type3 = true;
      this.type4 = false;
      this.type5 = false;
      this.인풋체크3 = true;
      this.클럽이미지넘버 = 2;
    },
    type4_click() {
      this.type1 = false;
      this.type2 = false;
      this.type3 = false;
      this.type4 = true;
      this.type5 = false;
      this.인풋체크3 = true;
     this.클럽이미지넘버 = 3;
    },
    type5_click() {
      this.type1 = false;
      this.type2 = false;
      this.type3 = false;
      this.type4 = false;
      this.type5 = true;
      this.인풋체크3 = true;
      this.클럽이미지넘버 = 4;
    },
    upload(e) {
      let 파일 = e.target.files;
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.이미지 = url;
      this.파일업로드 = true;
      this.인풋체크4 = true;
    },
    getNowDay() {
      let current = new Date();
      let year = current.getFullYear();
      let month = current.getMonth() + 1;
      let date = current.getDate();
      this.오늘날짜 = year + '-' + month + '-' + date;
      this.오늘날짜ID = year + '' + month + '' + date;
    },
    random() {
      this.랜덤값 = Math.floor(Math.random() * 9999 + 1000);

    },

  },
  mounted() {
    this.getNowDay();
    this.random();
  },
}
</script>
<style scoped>
@media screen and (max-width: 500px) {
.content-bg{
  top: 0;
  left: 0;
  width: 100%;
  top: 0;
  left: 0;
}
}

.content-bg {
  position: absolute;
  width: 381px;
  height: 825px;
  overflow: hidden;
  top: 27px;
  left: 32px;
}

.press {
  background-image: url('../assets/idcard/con-bg.png');
  overflow: hidden;
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.step-list {
  width: 381px;
  height: 470px;
  position: absolute;
  top: 214px;
}

/* 아이콘 영역 */
.step-icon-list {
  position: absolute;
  left: 38.2%;
  bottom: 30px;
}

.step-icon-list>img {
  position: absolute;
  width: 90px;
}

.step-icon-list>ol {
  display: flex;
  position: absolute;
  left: 10px;
}

.step-icon>img {
  width: 10px;
  padding-left: 2px;
  padding-right: 2px;
}

/* 아이콘 영역 끝 */
.step-1 {
  cursor: pointer;
  margin: 25px;
  width: 332px;
  height: 340px;
}

.step-1>.item {
  background-image: url('../assets/idcard/con-mid-monitor-step-1-bg.png');
  background-size: cover;
  width: 332px;
  height: 340px;
  background-color: #8fbaff;

}

.step-1>.item>img {
  width: 100%;
  animation: process-1-step-1-panel-open 0.5s ease-in forwards;

}

@keyframes process-1-step-1-panel-open {
  0% {
    width: 0%;
    height: 1px;
    margin-top: 50%;
  }

  50% {
    width: 100%;
    height: 1px;
    margin-top: 50%;
  }

  75% {
    width: 100%;
    height: 1px;
    margin-top: 50%;
  }

  100% {
    width: 100%;
    height: 100%;
  }
}

.step-2 {
  position: relative;
  cursor: pointer;
  margin: 25px;
  width: 332px;
  height: 340px;
}

.step-2>.item {
  background-image: url('../assets/idcard/con-mid-monitor-step-2-bg.png');
  background-size: cover;
  width: 332px;
  height: 340px;
}

.step-2>.item>.panel {
  width: 290px;
  height: 60px;
  background: yellow;
  position: absolute;
  top: 15px;
  left: 5.5%;
  text-align: center;
  border: 3px solid #000;
}

.step-2>.item>.panel>p {
  margin-top: 12px;
  font-size: 11px;
  font-weight: bold;
}

.step-2>.item>.form {
  width: 280px;
  height: 130px;
  padding-top: 30px;
  position: absolute;
  top: 100px;
  left: 8%;
  cursor: text;
}

.step-2>.item>.form>.row {
  display: flex;
  border-bottom: 2px solid #000;
  justify-content: space-between;
  margin-bottom: 20px;
}

.step-2>.item>.form>.row>.label>span {
  font-size: 11px;
  font-weight: bold;

}

.step-2>.item>.form>.row>.data>input {
  width: 100px;
  text-align: right;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
}

.step-2>.item>.controller {
  width: 90%;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  left: 5.3%;
}

.step-2>.item>.controller>.prev>img {
  width: 120px;
}

.step-2>.item>.controller>.next>img {
  width: 120px;
}

.step-2>.item>.controller>.next>img:nth-child(2) {
  display: none;
  ;
}

.step-2>.item>.controller>.next>img:nth-child(1) {
  display: block;
  ;
}

.step-2>.item>.controller>.on>img:nth-child(1) {
  display: none;
  ;
}

.step-2>.item>.controller>.on>img:nth-child(2) {
  display: block;
  ;
}

.step-3 {
  position: relative;
  cursor: pointer;
  margin: 25px;
  width: 332px;
  height: 340px;
}

.step-3>.item {
  background-image: url('../assets/idcard/con-mid-monitor-step-2-bg.png');
  background-size: cover;
  width: 332px;
  height: 340px;
}

.step-3>.item>.panel {
  width: 290px;
  height: 60px;
  background: yellow;
  position: absolute;
  top: 15px;
  left: 5.5%;
  text-align: center;
  border: 3px solid #000;
}

.step-3>.item>.panel>p {
  margin-top: 12px;
  font-size: 11px;
  font-weight: bold;
}

.step-3>.item>.form {
  width: 280px;
  height: 190px;
  position: absolute;
  top: 92px;
  left: 8%;
  cursor: text;
}

.step-3>.item>.form>.choice>ul>li {
  height: 40px;
  display: flex;
  cursor: pointer;

}

.step-3>.item>.form>.choice>ul>li.on {
  color: red;

}

.step-3>.item>.form>.choice>ul>li>.num>img:nth-child(1) {
  display: block;
}

.step-3>.item>.form>.choice>ul>li>.num>img:nth-child(2) {
  display: none;
}

.step-3>.item>.form>.choice>ul>li.on>.num>img:nth-child(1) {
  display: none;
}

.step-3>.item>.form>.choice>ul>li.on>.num>img:nth-child(2) {
  display: block;
}

.step-3>.item>.form>.choice>ul>li>.answer {
  font-size: 11px;
  font-weight: bold;
  margin-left: 7px;
  line-height: 14px;
}

.step-3>.item>.form>.choice>ul>li>.num>img {
  width: 13px;
}

.step-3>.item>.controller {
  width: 90%;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  left: 5.3%;
}

.step-3>.item>.controller>.prev>img {
  width: 120px;
}

.step-3>.item>.controller>.next>img {
  width: 120px;
}

.step-3>.item>.controller>.next>img:nth-child(2) {
  display: none;
  ;
}

.step-3>.item>.controller>.next>img:nth-child(1) {
  display: block;
  ;
}

.step-3>.item>.controller>.on>img:nth-child(1) {
  display: none;
  ;
}

.step-3>.item>.controller>.on>img:nth-child(2) {
  display: block;
  ;
}

.step-4 {
  position: relative;
  cursor: pointer;
  margin: 25px;
  width: 332px;
  height: 340px;
}

.step-4>.item {
  background-image: url('../assets/idcard/con-mid-monitor-step-2-bg.png');
  background-size: cover;
  width: 332px;
  height: 340px;
}

.step-4>.item>.panel {
  width: 290px;
  height: 60px;
  background: yellow;
  position: absolute;
  top: 15px;
  left: 5.5%;
  text-align: center;
  border: 3px solid #000;
}

.step-4>.item>.panel>p {
  margin-top: 12px;
  font-size: 11px;
  font-weight: bold;
}

.step-4>.item>.form {
  width: 280px;
  height: 190px;
  position: absolute;
  top: 92px;
  left: 8%;
  cursor: text;
}

.step-4>.item>.form>.choice>ul>li {
  height: 40px;
  display: flex;
  cursor: pointer;

}

.step-4>.item>.form>.choice>ul>li.on {
  color: red;

}

.step-4>.item>.form>.choice>ul>li>.answer {
  font-size: 11px;
  font-weight: bold;
  margin-left: 7px;
  line-height: 14px;
}

.step-4>.item>.form>.choice>ul>li>.num>img {
  width: 13px;
}
.step-4>.item>.form>.choice>ul>li>.num>img:nth-child(1) {
  display: block;
}

.step-4>.item>.form>.choice>ul>li>.num>img:nth-child(2) {
  display: none;
}

.step-4>.item>.form>.choice>ul>li.on>.num>img:nth-child(1) {
  display: none;
}

.step-4>.item>.form>.choice>ul>li.on>.num>img:nth-child(2) {
  display: block;
}
.step-4>.item>.controller {
  width: 90%;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  left: 5.3%;
}

.step-4>.item>.controller>.prev>img {
  width: 120px;
}

.step-4>.item>.controller>.next>img {
  width: 120px;
}

.step-4>.item>.controller>.next>img:nth-child(2) {
  display: none;
  ;
}

.step-4>.item>.controller>.next>img:nth-child(1) {
  display: block;
  ;
}

.step-4>.item>.controller>.on>img:nth-child(1) {
  display: none;
  ;
}

.step-4>.item>.controller>.on>img:nth-child(2) {
  display: block;
  ;
}

.step-5 {
  position: relative;
  cursor: pointer;
  margin: 25px;
  width: 332px;
  height: 340px;
}

.step-5>.item {
  background-image: url('../assets/idcard/con-mid-monitor-step-2-bg.png');
  background-size: cover;
  width: 332px;
  height: 340px;
}

.step-5>.item>.panel {
  width: 290px;
  height: 60px;
  background: yellow;
  position: absolute;
  top: 15px;
  left: 5.5%;
  text-align: center;
  border: 3px solid #000;
}

.step-5>.item>.panel>p {
  margin-top: 12px;
  font-size: 11px;
  font-weight: bold;
}

.step-5>.item>.form {
  width: 280px;
  height: 130px;
  padding-top: 30px;
  position: absolute;
  top: 81px;
  left: 8%;
  cursor: text;
}

.step-5>.item>.form>.uploader {
  position: absolute;
  width: 99px;
  height: 123px;
  left: 31%;
  top: 23%;
  border: 1px solid #000;
  cursor: pointer;
}

.step-5>.item>.form>.uploader>input {
  width: 0;
  height: 0;
}

.step-5>.item>.form>.uploader>input[type="file"] {
  width: 0;
  height: 0;
}

.step-5>.item>.form>.uploader>.pic {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.step-5>.item>.form>.uploader>.text {
  top: 44%;
  left: 36%;
  position: absolute;
  font-weight: bold;
  font-size: 13px;
}

.step-5>.item>.form>.uploader>.on {
  display: none;
}

.step-5>.item>.controller {
  width: 90%;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  left: 5.3%;
}

.step-5>.item>.controller>.prev>img {
  width: 120px;
}

.step-5>.item>.controller>.next>img {
  width: 120px;
}

.step-5>.item>.controller>.next>img:nth-child(2) {
  display: none;
  ;
}

.step-5>.item>.controller>.next>img:nth-child(1) {
  display: block;
  ;
}

.step-5>.item>.controller>.on>img:nth-child(1) {
  display: none;
  ;
}

.step-5>.item>.controller>.on>img:nth-child(2) {
  display: block;
  ;
}

.step-6 {
  cursor: pointer;
  margin: 25px;
  width: 332px;
  height: 340px;
}

.step-6>.item {
  background-image: url('../assets/idcard/con-mid-monitor-step-1-bg.png');
  background-size: cover;
  width: 332px;
  height: 340px;
}

.step-6>.item>.form {
  top: 60px;
  left: 22px;
  position: relative;
  width: 290px;
  height: 230px;
  background: yellow;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-evenly;
  align-items: center;
}

.step-6>.item>.form>p {
  text-align: center;
  font-weight: bold;
}

.step-6>.item>.form>img {
  width: 25%;
}

.step-6>.item>.form>.print_loading {
  border: 1px solid #000;
  border-radius: 10px;
  height: 10px;
  width: 200px;
  position: relative;
}

.step-6>.item>.form>.print_loading>.loadbar {
  position: absolute;
  width: 200px;
  height: 10px;
  background: #000;
  animation: loadbar 0.5s ease-in forwards;
}

@keyframes loadbar {
  0% {
    width: 0%;
  }

  50% {
    width: 20%;
  }

  75% {
    width: 50%;
  }

  100% {
    width: 100%;
  }
}

.press-2 {
  height: 824px;
}

.press-2>video{
    width: 100%;
    height: auto;
}

.press-3 {
  height: 822px;
  background-image: url('../assets/idcard/bg.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.press-3>.top {
  height: 316px;
  width: 100%;
}

.press-3>.top>img {
  position: absolute;
  top: 14%;
  left: 18%;
  width: 240px;
}

.press-3>.middle {
  height: 284px;
}

.press-3>.middle>.card-front {
  background-image: url('../assets/idcard/card-front.png');
  position: relative;
  width: 318px;
  height: 216px;
  background-size: contain;
  background-repeat: no-repeat;
  left: 32px;
  border: 1px solid #000;
  border-radius: 14px;
    box-shadow: 2px 2px;
      animation: reverse 0.5s ease-in forwards;

}

.press-3>.middle>.card-front>.profile_img {
  position: absolute;
  width: 105px;
  height: 133px;
  top: 24%;
  left: 5%;
  border: 1px solid #000;

}

.press-3>.middle>.card-front>.profile_img>.p_img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}

.press-3>.middle>.card-front>.profile {
  width: 100px;
  height: 131px;
  right: 18px;
  position: absolute;
  top: 24px;
}

.press-3>.middle>.card-front>.profile>ul>li {
  font-size: xx-small;
  text-align: right;
  height: 21px;
  margin-bottom: 1px;
}

.press-3>.bottom {
  height: 220px;
  position: relative;
  display: flex;
  justify-content: space-evenly
}

.press-3>.bottom>img {
  width: 68px;
  height: 68px;
}

.press-3>.middle>.card-back {
  position: absolute;
  width: 318px;
  height: 216px;
  left: 32px;
  border: 1px solid #000;
  border-radius: 14px;
  box-shadow: 2px 2px;
  animation: reverse 0.5s ease-in forwards;

}
.press-3>.middle>.card-back>img {
  width: 100%;
}

.press-3>.middle>.card-back>.b_img {
  position: relative;
  width: 318px;
  height: 216px;
  background-size: contain;
  background-repeat: no-repeat;
  border: 1px solid #000;
  border-radius: 14px;
    box-shadow: 2px 2px;
      animation: reverse 0.5s ease-in forwards;
}

@keyframes reverse {
  0% {
    transform: rotateY(-180deg);
  }

  100% {
   transform: rotateY(0);
  }
}
@media screen and (max-width: 500px) {

.content-bg{
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
}
.step-list{
  width: 90%;
top: 24.5%;
left: -8px;
}
.step-1{
  width: 100%;
  height: 100%;
}
.step-1>.item{
width: 100%;
  height: 100%;
}
.step-icon-list{
  display: none;
}
.step-2{
  width: 100%;
height: auto;
}

.step-2>.item{
  width: 100%;
  height: 365px;
}
.step-2>.item>.panel{
  width: 80%;
  left: 10%;
}
.step-2>.item>.form{
  width: 80%;
  left: 11%;
}
.step-3{
  width: 100%;
  height: 100%;
}
.step-3>.item{
width: 100%;
    height: 369px;
}
.step-3>.item>.panel{
  width: 89%;
}
.step-3>.item>.form{
  width: 90%;
  top: 28%;
} 
.step-4{
  width: 100%;
  height: 100%;
}
.step-4>.item{
width: 100%;
    height: 369px;
}
.step-4>.item>.panel{
  width: 89%;
}
.step-4>.item>.form{
  width: 90%;
  top: 28%;
} 
.step-5{
  width: 100%;
  height: 100%;
}
.step-5>.item{
width: 100%;
    height: 369px;
}
.step-5>.item>.panel{
  width: 89%;
}
.step-5>.item>.form{
  width: 90%;
  top: 28%;
} 
.step-6{
  width: 100%;
  height: 100%;
}
.step-6>.item{
width: 100%;
    height: 369px;
}
.step-6>.item>.form{
width: 80%;
    left:10%;
} 
.press-3{
  width: 100%;
  background-size: cover;
}
.press-3>video{
  width: 100%;
}
.press-3>.middle {
width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.press-3>.middle>.card-front {
 left: 0;
}
body{
 width: 100%;
}
}

</style>
