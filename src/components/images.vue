<template>
    <section class="section">
        <div class="main-wrap">
            <main class="main">
                <div class="bg">
                    <PhoneBg></PhoneBg>
       <div class="home-btn"><img src="../assets/btn-home.png" alt="홈버튼"  @click="go_boost_click"></div>

                    <div class="content-bg">

                        <div class="slide slide_wrap">
                         <div class="slide_item" v-for="(a,i) in 부스트이미지" :key="i">
                                <img :src="부스트이미지[i]" alt="부스트이미지">
                            </div>
                            <div class="slide_prev_button slide_button"></div>
                            <div class="slide_next_button slide_button"></div>
                        </div>




                    </div>


                </div>
            </main>
        </div>
    </section>
</template>

<script>
import PhoneBg from './PhoneBg.vue';
import boostimg from "../js/boostimg";
export default {
    name: 'images',
    components: {
        PhoneBg,
    },
    data() {
        return {
            부스트이미지: boostimg[0].img,
        }
    },
mounted() {
    this.images_slide();
},
    methods: {
    go_boost_click() {
      var audio = new Audio(require('../assets/main/sound-2.mp3'));
      audio.play();
      setTimeout(() => {
        location.href = '/#/newjeans/boost';
      }, 1000)
    },
        images_slide() {
         // 슬라이크 전체 크기(width 구하기)
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

// 버튼 엘리먼트 선택하기
const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
let slideItems = document.querySelectorAll(".slide_item");
// 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
const maxSlide = slideItems.length;

// 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
let currSlide = 1;


// 무한 슬라이드를 위해 start, end 슬라이드 복사하기
const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

// 각 복제한 엘리먼트 추가하기
slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

// 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
slideItems = document.querySelectorAll(".slide_item");
//
let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;
  // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
  if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    setTimeout(() => {
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
 
  }
}
function prevMove() {
  currSlide--;
  // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

  } else {
    // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);  
  }
}

// 버튼 엘리먼트에 클릭 이벤트 추가하기
nextBtn.addEventListener("click", () => {
  // 이후 버튼 누를 경우 현재 슬라이드를 변경
  nextMove();
});
// 버튼 엘리먼트에 클릭 이벤트 추가하기
prevBtn.addEventListener("click", () => {
  // 이전 버튼 누를 경우 현재 슬라이드를 변경
  prevMove();
});

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});

// 드래그(스와이프) 이벤트를 위한 변수 초기화
let startPoint = 0;
let endPoint = 0;

// PC 클릭 이벤트 (드래그)
slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 마우스가 오른쪽으로 드래그 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 마우스가 왼쪽으로 드래그 된 경우
    nextMove();
  }
});

// 모바일 터치 이벤트 (스와이프)
slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
  if (startPoint < endPoint) {
    // 오른쪽으로 스와이프 된 경우
    prevMove();
  } else if (startPoint > endPoint) {
    // 왼쪽으로 스와이프 된 경우
    nextMove();
  }
});

// 기본적으로 슬라이드 루프 시작하기
// let loopInterval = setInterval(() => {
//   nextMove();
// }, 3000);

// // 슬라이드에 마우스가 올라간 경우 루프 멈추기
// slide.addEventListener("mouseover", () => {
//   clearInterval(loopInterval);
// });

// // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
// slide.addEventListener("mouseout", () => {
//   loopInterval = setInterval(() => {
//     nextMove();
//   }, 3000);
// });

        }
    },


}


</script>
<style scoped>
.home-btn {
  position: absolute;
  top: 120px;
  left: 52px;
  z-index: 1;
  width: 33px;
  height: 33px;
}

.home-btn>img {
  width: 100%;
  cursor: pointer;
}
.content-bg {
    position: absolute;
    top: 40px;
    bottom: 46px;
    left: 36px;
    right: 37px;
    overflow: hidden;
    background: black;
    text-align: center;
    padding-top: 100px;
}

.slide {
    /* layout */
    display: flex;
    flex-wrap: nowrap;
    /* 컨테이너의 내용물이 컨테이너 크기(width, height)를 넘어설 때 보이지 않도록 하기 위해 hidden을 준다. */
    overflow: hidden;

    /* position */
    /* slide_button의 position absolute가 컨테이너 안쪽에서 top, left, right offset이 적용될 수 있도록 relative를 준다. (기본값이 static인데, static인 경우 그 상위 컨테이너로 나가면서 현재 코드에선 html을 기준으로 offset을 적용시키기 때문) */
    position: relative;

    /* size */
    width: 100%;

    /* slide drag를 위해 DOM요소가 드래그로 선택되는것을 방지 */
    user-select: none;
}

.slide_item {
    /* layout */
    display: flex;
    align-items: center;
    justify-content: center;

    /* position - 버튼 클릭시 left offset값을 적용시키기 위해 */
    position: relative;
    left: 0px;

    /* size */
    width: 100%;
    height: 560px;
    /* flex item의 flex-shrink는 기본값이 1이므로 컨테이너 크기에 맞게 줄어드는데, 슬라이드를 구현할 것이므로 줄어들지 않도록 0을 준다. */
    flex-shrink: 0;

    /* transition */
    transition: left 0.15s;
}

.slide_button {
    /* layout */
    display: flex;
    justify-content: center;
    align-items: center;

    /* position */
    position: absolute;
    /* 버튼이 중앙에 위치하게 하기위해 계산 */
    top: calc(50% - 16px);

    /* size */
    width: 32px;
    height: 32px;

    /* style */
    border-radius: 100%;
    cursor: pointer;
}

.slide_prev_button {
  left: 10px;
  background-image: url('../assets/movingphotos/ico-prev.png');
  opacity: 0.3;
  height: 40px;
  width: 40px;
}

.slide_next_button {
  right: 10px;
    opacity: 0.3;

  background-image: url('../assets/movingphotos/ico-next.png');
  height: 40px;
  width: 40px;
}
.slide_item>img {
width: 100%;
  -webkit-user-drag: none;
}

/* 페이지네이션 스타일 */
ul,
li {
    list-style-type: none;
    padding: 0;
    margin: 0;
}



.slide_item_duplicate {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left: 0px;
    width: 100%;
    height: 300px;
    flex-shrink: 0;
    transition: left 0.15s;
}
@media screen and (max-width: 500px) {
  .section{
    height: 0;
  }
  .main{
width: 100%;
height:700px;
  }
.slide_item{
  width: 100%;
}
.slide_item>img{
width: 100%;
}
.content-bg{
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
padding-top: 70px;
}
.slide{
  width: 100%;
}

}
</style>