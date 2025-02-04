import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
//import Tables from "../views/Tables.vue";
import Perdin from "../views/Perdin.vue";
//import Billing from "../views/Billing.vue";
//import VirtualReality from "../views/VirtualReality.vue";
//import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Agenda from "../views/Agenda.vue";
import Kehadiran from "../views/Kehadiran.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
/*  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  */
 {
    path: "/perdin",
    name: "Perdin",
    component: Perdin,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/agenda",
    name: "Agenda",
    component: Agenda,
  },
  {
    path: "/kehadiran",
    name: "Kehadiran",
    component: Kehadiran,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
