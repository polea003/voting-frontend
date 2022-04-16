<template>
  <div class="app">
    <div id="nav" style="Mystyle">
      <!-- TITLE of Webpage -->
      <div class="title flex flex-wrap justify-center font-serif pb-2">
        Panther Votes
        <div id="img">
          <img :src="require(`./assets/pantherPawHand.png`)" />
        </div>
      </div>
      <!-- TOP NAV BAR -->
      <div class="flex flex-wrap justify-center">
        <div class="flex flex-wrap justify-center">
          <router-link to="/">Home</router-link>
          <router-link to="/election-Dashboard">Election Dashboard</router-link>
          <router-link to="/club-Elections">Club Elections</router-link>
          <!--<router-link to="/results">Voting History</router-link>-->
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

          <a v-if="currentUser" @click="logOut()">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
          <router-link v-if="currentUser" to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.name }}
          </router-link>
          <img
            v-if="currentUser"
            class="
              object-cover
              w-14
              h-14
              rounded-full
              border-2 border-yellow-400
            "
            v-show="userImg"
            :src="userImg"
          />
          <input
            @change="toggleTheme"
            id="checkbox"
            type="checkbox"
            class="switch-checkbox"
          />
          <label for="checkbox" class="switch-label ml-4">
            <span>🌙</span>
            <span>☀️</span>
            <div
              class="switch-toggle"
              :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
            ></div>
          </label>
        </div>
      </div>
    </div>
    <router-view />
    <div class="footer">
      Copyright &copy;2022. Senior team 2 - Panther Votes. All rights reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      userTheme: "light-theme",
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    userImg() {
      if (!this.currentUser) return undefined;
      return `http://localhost:5000/api/upload/files/${this.currentUser._id}`;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
    getTheme() {
      return localStorage.getItem("user-theme");
    },
  },
  mounted() {
    const initUserTheme = this.getMediaPreference();
    this.setTheme(initUserTheme);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-bottom: 50px;
  height: 100%;
  width: 100%; 
  color: var(--text-primary-color);
  background: var(--background-color-primary) ;
  
  /*-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;*/
  
}

/* Define styles for the default root window element */
:root {
  --background-color-secondary: url("./assets/FIU_background_picture.jpg");
  --background-color-primary:rgb(250, 250, 250);
  --text-primary-color: rgb(8, 30, 63, 1);
  -webkit-text-stroke-color: rgba(182,134,44,1);
  --border-color: rgba(209, 213, 219,1);
  --border-color-button: rgba(0, 0, 0, 1);
  --border-color-input: rgba(8, 30, 63, 1);
  --background: linear-gradient(
    50deg,
    rgb(180, 180, 180) 0%,
    rgba(230, 230, 230) 10%,
    rgba(255, 255, 255) 20%,
    rgba(230, 230, 230) 30%,
    rgb(180, 180, 180) 40%,
    rgb(205, 205, 205) 50%,
    rgba(180, 180, 180) 60%,
    rgb(220, 220, 220) 70%,
    rgba(235, 235, 235) 80%,
    rgb(230, 230, 230) 90%,
    rgb(160, 160, 160) 100%
  );
}
/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-secondary: url("./assets/stars.jpg");
  --background-color-primary: rgb(2, 10, 23);
  --text-primary-color: rgb(250, 250, 250, 1);
  -webkit-text-stroke-color: rgba(0, 255, 255, 1);
  --border-color: rgba(182,134,44,1);
  --border-color-button: rgb(255, 230, 131);
  --text-secondary-button: rgb(70, 52, 17);
  --border-color-input: rgba(255,204,0,1);
  --background: radial-gradient(circle, rgba(204,0,102,1)0%, rgba(255,204,0,1)  100%);

}
#Election{
  border-color: var(--border-color) !important;
  background: var(--background) !important;
}
/*.election-Dashboard{
  background: var(--background-color-secondary) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}*/

.PVbutton:hover{
  border-color: var(--border-color-button) !important;
  color: var(--text-secondary-button)!important;
  /*-webkit-text-fill-color: var(--border-color-button) !important;
  -webkit-text-stroke-width: 1px !important;
  -webkit-text-stroke-color: var(--border-color-button) !important;*/
}
.canCard{ 
  border-color: var(--border-color) !important;
  background: var(--background) !important;
}
.standard{
  border-color: var(--border-color-input) !important;
  color: rgb(8, 30, 63, 1) !important;
}
.picker{
  border-color: var(--border-color-input) !important;
  color: rgba(8, 30, 63, 1) !important
}
span.titleBall{
  -webkit-text-stroke-width: 1px;
}
span.titleBall2{
  color: var(--text-primary-color) !important;
}
span.titleBall3{
  color: var(--text-primary-color) !important;
}
h1 {
  color: rgb(8, 30, 63, 1);
  -webkit-text-stroke-width: 2px;
  font-size: 3rem; /* 48px */
  line-height: 1;
}
h2{
   color: var(--text-primary-color);
}
h3{
   color: var(--text-primary-color);
}
p {
  color: var(--text-primary-color);
}
select{
  color: rgb(8, 30, 63, 1) !important;
}
label{
  color: var(--text-primary-color) !important;
}
input{
  color: var(--text-primary-color);
}
div.night{
  color: var(--text-primary-color) !important;
}
.switch-checkbox {
  display: none;
}
.switch-label {
  /* for width, use the standard element-size */
  width: var(--element-size);

  /* for other dimensions, calculate values based on it */
  border-radius: var(--element-size);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  padding: calc(var(--element-size) * 0.1);
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);

  align-items: center;
  background: rgb(8, 30, 63, 1);
  cursor: pointer;
  display: flex;
  position: relative;
  /*transition: background 0.5s ease;*/
  justify-content: space-between;
  z-index: 1;
}
#nav {
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  background-color: rgb(8, 30, 63, 1);
  width: auto;
  font-weight: bold;

  border-bottom: solid 0.2em rgba(182, 134, 44, 1);
}

#nav a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-decoration: underline;
  color: rgba(255, 204, 0, 1);
  -webkit-text-fill-color: rgba(255,204,0,1); /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0 px;
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
  background-color: rgb(8, 30, 63, 1) !important;
  height: 60px;
  width: 100%;
  /*background-color: #ccc;*/
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 8px;
  margin-top: 10px;
  bottom: 0px;
  border-top: solid 0.2em rgba(182, 134, 44, 1);
  opacity: 90%;
}

.signup-login {
  padding-top: 10px;
}
img {
  width: 80px;
  height: 80px;
  margin-left: 15px;
  margin-right: 15px;
  border-color: rgba(255, 204, 0, 1);
}
/*text-7xl font-bold font-serif */
div.title {
  color: rgba(255, 204, 0, 1);
  -webkit-text-fill-color: rgba(
    255,
    204,
    0,
    1
  ); /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0px;
  -webkit-text-stroke-color: rgb(0, 255, 255, 0.5);
  font-size: 4.5rem; /* 72px */
  line-height: 1;
  font-weight: 700;
  letter-spacing: 1px;
}
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background: var(--background-color-primary);
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