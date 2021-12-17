import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/main",
    component: Home,
    children: [
      {
        path: "/main",
        name: "Main",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/Main.vue"),
      },
      {
        path: "/general",
        name: "General",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: { category: "general" },
      },
      {
        path: "/tech",
        name: "Tech",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: { category: "technology" },
      },
      {
        path: "/sports",
        name: "Sports",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: { category: "sports" },
      },
      {
        path: "/entertainment",
        name: "Entertainment",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: { category: "entertainment" },
      },
      {
        path: "/science",
        name: "Science",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: { category: "science" },
      },
      {
        path: "/health",
        name: "Health",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: { category: "health" },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
