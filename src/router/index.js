import Vue from "vue";
// import { createRouter, createWebHistory } from "vue-router";

import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Packets from "../views/Packets.vue";
import Topics from "../views/Topics.vue";
import Topic from "../views/Topic.vue";
import Event from "../components/Event.vue";
import Person from "../components/Person.vue";
import GEO from "../views/GEOTester.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/packets",
    name: "Packets",
    component: Packets,
  },
  //Home > Topic
  {
    path: "/Period/:period",
    name: "Period",
    component: Topics,
  },
  {
    // Home > Topics > Topic
    path: "/Period/:period/Topic/:topic/:category",
    name: "Topic",
    component: Topic,
  },
  {
    path: "/Period/:period/Topic/:topic/:category/Event/:event",
    name: "Event",
    component: Event,
  },
  {
    path: "/Period/:period/Topic/:topic/:category/Figure/:person",
    name: "Person",
    component: Person,
  },
  {
    path: "/GEO",
    name: "GEO",
    component: GEO,
  },
];

// const router = createRouter({
//   history: createWebHistory(),
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
