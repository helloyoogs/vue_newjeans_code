import { createRouter, createWebHashHistory } from "vue-router";
import IdCard from './components/IdCard.vue';
import main from './components/Main.vue';
import MainLoad from './components/MainLoad.vue';
import MovingPhotos from './components/MovingPhotos.vue';
import boost from './components/boost.vue';
import images from './components/images.vue';
import App from './App.vue';



const router = createRouter({
  mode: "history",
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: App,
    },
  
    {
      path: "/newjeans",
      component: MainLoad,
    },
  
        {
          path: "/newjeans/id-card",
          component: IdCard,
        },
        {
          path: "/newjeans/main",
          component: main,
        },
        {
          path: "/newjeans/moving-photos",
          component: MovingPhotos,
        },
        {
          path: "/newjeans/boost",
          component: boost,
        },
        {
          path: "/newjeans/boost/images",
          component: images,
        },
      ]
});

export default router; 