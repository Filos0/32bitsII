import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Contactenos from "../views/Contactenos.vue";
import NotFound from "../views/NotFound.vue";
const Inicio = () => import("../views/Inicio");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/Busqueda",
    name: "Busqueda",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Busqueda.vue"),
  },
  {
    path: "/Venta",
    name: "Venta",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Venta.vue"),
  },
  {
    path: "/contactenos",
    name: "Contactenos",
    component: Contactenos,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
