<template>
  <div class="app">
    <div id="nav" style="Mystyle">
      <!-- TITLE of Webpage -->
      <div class='title flex flex-wrap justify-center font-serif pb-2'>Panther Votes
        <div id="img">
          <img :src="require(`./assets/pantherPawHand.png`)"/>
        </div>
      </div> 
      <!-- TOP NAV BAR -->
      <div class="flex flex-wrap justify-center">
        <div class="flex flex-wrap justify-center">
          <router-link to="/">Home</router-link>
          <router-link to="/election-Dashboard">Election Dashboard</router-link>
          <router-link to="/club-Elections">Club Elections</router-link>
          <router-link to="/results">Voting History</router-link>
          <router-link to="/how">How It Works</router-link>
          <router-link to="/about">About</router-link>
        </div>
        <div class="flex flex-wrap justify-center">
          <router-link v-if="!currentUser" to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
          <router-link v-if="!currentUser" to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>

          <router-link v-if="currentUser" to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.name }}
          </router-link>
          <a  v-if="currentUser" @click="logOut()">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
          
          <img v-if="currentUser" class="object-cover w-14 h-14 rounded-full border-2 border-yellow-400" v-show="userImg" :src="userImg">
        </div>
      </div>
    </div>
    <router-view/>
    <div class="footer">Copyright &copy;2022. Senior team 2 - Panther Votes. All rights reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    userImg() {
      if (!this.currentUser) return undefined
      return `http://localhost:5000/api/upload/files/${this.currentUser._id}`
    }
  },
  methods:{
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style>
/*div.wallpaper {
  background: url("./assets/miami-sights-data.jpg") no-repeat fixed;
  /*-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;*/
 /* background-size: 100%;
  opacity: 100%
}*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-bottom: 50px;
  width: 100%; /***********************************Could NOT figure out how to make it dynamic adjust for mobile******************************************/

  /* color: #eff303; */
     /* color: #15e1f0;  */

}

#nav {
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  background-color: rgb(8, 30, 63, 1.0);
  width:auto;
  font-weight: bold;
  
}

#nav a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-decoration: underline;
  color: rgba(255, 204, 0, 1.0);
 -webkit-text-fill-color: rgba(255, 204, 0, 1.0); /* Will override color (regardless of order) */
 -webkit-text-stroke-width: 1 px;
  -webkit-text-stroke-color: rgba(255, 204, 0, 0.3);
  margin-bottom: 0px;
  margin-right: 1px;
  margin-left: 1px;
  border: solid 0.4em rgb(8, 30, 63, 0);

}

#nav a.active,
#nav a:hover {
  -webkit-text-fill-color: rgb(0, 255, 255, 1);
  background-color: rgb(8, 30, 63);
  border: groove 0.4em;
  border-color: rgb(0, 255, 255, 0.7); 
  border-radius: 20px;
  width: auto;
}

#nav a.router-link-exact-active {
  font-weight: bold;
  color: rgb(0, 255, 255, 1);
  -webkit-text-fill-color: rgb(0, 255, 255, 1);
}

div.footer {
  text-align: center;
  position: fixed;
  font-weight: 700;
  color: white;
  background-color: rgb(8, 30, 63, 0.95) !important;
  height: 60px;
  width: 100%;
  background-color: #ccc;
  padding: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 10px;
  bottom: 0px;
  /*opacity: 85%;*/    
}

.signup-login{
  padding-top: 10px;
}

h1 {
  color:#808080;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: rgb(0, 0, 0, 0.5);
  font-size: 3rem; /* 48px */
  line-height: 1;
  
}

img{
  width:80px;
  height:80px;
  margin-left: 15px;
  margin-right: 15px;
  border-color: rgba(255, 204, 0, 1.0);

}
/*text-7xl font-bold font-serif */
div.title{
  color: rgba(255, 204, 0, 1.0);
 -webkit-text-fill-color: rgba(255, 204, 0, 1.0); /* Will override color (regardless of order) */
 -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: rgba(255, 204, 0, 0.3);
  font-size: 4.5rem; /* 72px */
  line-height: 1;
  font-weight: 700;
  letter-spacing:1px;

}
/*div.PVbutton{
    background: linear-gradient(
    180deg,
    rgb(204, 0, 102) 0%,
    rgb(255, 204, 0) 100%
  );
}
div.PVbutton:hover{
    background: linear-gradient(
    180deg,
    rgb(255, 204, 0) 0%,
    rgb(0, 255, 255) 100%
  );
}*/
</style>