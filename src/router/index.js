import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Work from "../views/Work.vue"
import Skills from "../views/Skills.vue"
import Projects from "../views/Projects.vue"
import Testimonials from "../views/Testimonials.vue"
import TestimonialDetails from "../views/TestimonialDetails.vue";
import Contact from "../views/Contact.vue";

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
    path: "/work",
    name: "Work",
    component: Work,
  },

  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },

  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },

  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
  },

  {
    path: "/testimonial/:id",
    name: "TestimonialDetails",
    component: TestimonialDetails,
    props: true,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/allprojects",
    redirect: "/projects",
  },
  
  //404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
