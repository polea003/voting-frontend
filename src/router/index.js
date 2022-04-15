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
    path: '/SAE',
    name: 'SAE',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SAE.vue')
  },
  {
  path: '/FIU',
  name: 'FIU',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/FIU.vue')
},
{
  path: '/AEMB',
  name: 'AEMB',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/AEMB.vue')
},
{
  path: '/AIAA',
  name: 'AIAA',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/AIAA.vue')
},
{
  path: '/ASHRAE',
  name: 'ASHRAE',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/ASHRAE.vue')
},
{
  path: '/BMES',
  name: 'BMES',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/BMES.vue')
},
{
  path: '/CELL-MET',
  name: 'CELL-MET',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/CELL-MET.vue')
},
{
  path: '/EWB',
  name: 'EWB',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/EWB.vue')
},
{
  path: '/FES',
  name: 'FES',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: 
  () => import(/* webpackChunkName: "about" */ '../views/FES.vue')
},
{
  path: '/HKN',
  name: 'HKN',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: 
  () => import(/* webpackChunkName: "about" */ '../views/HKN.vue')
},
{
  path: '/IAARC',
  name: 'IAARC',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: 
  () => import(/* webpackChunkName: "about" */ '../views/IAARC.vue')
},
{
  path: '/IEEE',
  name: 'IEEE',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: 
  () => import(/* webpackChunkName: "about" */ '../views/IEEE.vue')
},
{
  path: '/NSBE',
  name: 'NSBE',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: 
  () => import(/* webpackChunkName: "about" */ '../views/NSBE.vue')
},
{
  path: '/TBP',
  name: 'TBP',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: 
  () => import(/* webpackChunkName: "about" */ '../views/TBP.vue')
},
{
  path: '/Theta Tau',
  name: 'Theta Tau',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: 
  () => import(/* webpackChunkName: "about" */ '../views/Theta Tau.vue')
},
{
  path: '/UPE',
  name: 'UPE',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: 
  () => import(/* webpackChunkName: "about" */ '../views/UPE.vue')
},
{
  path: '/WiCS',
  name: 'WiCS',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: 
  () => import(/* webpackChunkName: "about" */ '../views/WiCS.vue')
},
  {
    path: '/NewElection/:club',
    name: 'NewElection',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/NewElection.vue')
  },

    {
      path: "/login",
      name: "login",
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
    {
      path: '/Face',
      name: 'Face',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Face.vue')
    },
    {
      path: '/uploadPicture',
      name: 'uploadPicture',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/UploadPicture.vue')
    },
    
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
