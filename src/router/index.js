import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Home2 from "../components/Home2.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
// lazy-loaded
const Profile = () => import("../components/Profile.vue")
const BoardAdmin = () => import("../components/BoardAdmin.vue")
const BoardModerator = () => import("../components/BoardModerator.vue")
const BoardUser = () => import("../components/BoardUser.vue")

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/election-Dashboard',
    name: 'Election-Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Election-Dashboard.vue')
  },
  {
    path: '/election-Dashboard/:club',
    name: 'Club-Election-Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Election-Dashboard.vue'),
    props: (route) => ({ clubName: route.params.club })
  },
  {
    path: '/election-DashUser',
    name: 'Election-DashUser',
    component: () => import(/* webpackChunkName: "about" */ '../views/Election-DashUser.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/voting-History',
    name: 'Voting-History',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Voting-History.vue')
  },
  {
    path: '/how',
    name: 'How',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/How.vue')
  },
  {
    path: '/election',
    name: 'Election',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Election.vue')
  },
  {
    path: '/results',
    name: 'Results',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Results.vue')
  }
  ,
  {
    path: '/club-Elections',
    name: 'Club-Elections',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Club-Elections.vue')
  },
  {
    path: '/SHPE',
    name: 'SHPE',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SHPE.vue')
  }
  ,
  {
    path: '/SWE',
    name: 'SWE',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SWE.vue')
  }
  ,
  {
    path: '/AERO',
    name: 'AERO',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AERO.vue')
  }
  ,
  {
    path: '/IEEE',
    name: 'IEEE',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/IEEE.vue')
  }
  ,
  {
    path: '/ASCE',
    name: 'ASCE',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ASCE.vue')
  }
  ,
  {
    path: '/Motor',
    name: 'Motor',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Motor.vue')
  },
  {
    path: '/NewElection/:club',
    name: 'NewElection',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/NewElection.vue')
  },
  {
    path: '/Login',
      name: 'Login',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
      path: "/login2",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/profile",
      name: "profile",
      // lazy-loaded
      component: Profile,
    },
    {
      path: "/admin",
      name: "admin",
      // lazy-loaded
      component: BoardAdmin,
    },
    {
      path: "/mod",
      name: "moderator",
      // lazy-loaded
      component: BoardModerator,
    },
    {
      path: "/user",
      name: "user",
      // lazy-loaded
      component: BoardUser,
    },
    {
      path: "/home2",
      component: Home2,
    },
    
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
