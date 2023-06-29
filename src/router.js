import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "./stores/user";

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  userStore.loadingSession = true;
  const user = await userStore.currentUser();
  if (user) {
    next();
  } else {
    next("/register");
  }
  userStore.loadingSession = false;
};

const routes = [
  {
    path: "/",
    beforeEnter: requireAuth,
    component: () => import("./layouts/DefaultLayout.vue"),
    meta: { title: "Inicio" },
    children: [
      {
        path: "",
        name: "home",
        component: () => import("./views/HomeView.vue"),
        meta: { title: "home" },
      },
      {
        path: "/movies",
        name: "movies",
        component: () => import("./views/MoviesView.vue"),
        meta: { title: "movies" },
      },
      {
        path: "/movies/:name",
        name: "movie",
        component: () => import("./views/MovieView.vue"),
        meta: { title: "movie" },
      },
    ],
  },
  { path: "/register", component: () => import("./views/RegisterView.vue") },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
