import { createWebHistory, createRouter } from "vue-router";
import MenuMain from "@/components/MenuMain.vue";
import MenuTodayTimeline from "@/components/MenuTodayTimeline.vue";
import MenuCertificationCount from "@/components/MenuCertificationCount.vue";

const routes = [
  {
    path: "/",
    name: "MenuMain",
    component: MenuMain,
  },
  {
    path: "/MenuTodayTimeline",
    name: "MenuTodayTimeline",
    component: MenuTodayTimeline,
  },
  {
    path: "/MenuCertificationCount",
    name: "MenuCertificationCount",
    component: MenuCertificationCount,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
