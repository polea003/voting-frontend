  <template>
  <div>
    <div id="nav" style="Mystyle" >
      <!-- TITLE of Webpage -->
      <div class='flex flex-wrap justify-center text-7xl font-bold font-serif text-yellow-400 py-2'>Panther Votes
        <div id="img">
          <img :src="require(`./assets/pantherPawHand.png`)"/>
        </div>
      </div> 
      <!-- TOP NAV BAR -->
      <div class="flex flex-wrap justify-center">
      <router-link to="/">Home</router-link>
      <router-link to="/election-Dashboard">Election Dashboard</router-link>
      <router-link to="/club-Elections">Club Elections</router-link>
      <router-link to="/about">Voting History</router-link>
      <router-link to="/how">How It Works</router-link>
      <router-link to="/Face">Face</router-link>

     
    </div>
     <div v-if="!currentUser" class="nav-link">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
      </div>
        <div v-if="currentUser" class="navbar-nav ml-auto">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.name }}
          </router-link>
          <a  @click="logOut()">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        
      </div>
    </div>
    <router-view/>
    <div class="h-8 w-full py-2 text-center text-sm fixed bottom-0 text-white bg-blue-800 font-bold">Copyright &copy;2022. Senior team 2 - Panther Votes. All rights reserved</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }},
    methods:{
  logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }

    }
}
</script>

<style>
div.wallpaper {
  background: url("./assets/FIU_Panthers_logo.png") no-repeat center center fixed;
  /*-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;*/
  background-size: 120%;
  opacity: 50%
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-bottom: 50px;
  width: auto; /***********************************Could NOT figure out how to make it dynamic adjust for mobile******************************************/

  /* color: #eff303; */
     /* color: #15e1f0;  */

}

#nav {
  padding: 30px;
  background-color: rgb(4, 6, 56);
  width:auto;
  
}

#nav a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-decoration: underline;
  color: #FACC15;
  margin-top: 4px;
  margin-bottom: 0px;
  margin-right: 6px;
  margin-left: 6px;
  border: solid 0.2em rgb(4, 6, 56); 

}
#nav a.active,
#nav a:hover {
  background-color: rgb(1, 4, 39);
  border: groove 0.2em rgb(4, 6, 56);
  border-color: #00c3ff8c;
  width: auto;


}
#nav a.router-link-exact-active {
  font-weight: bold;
  color: #ffffff;

}

#footer {
  text-align: center;
  position: fixed;
  font-weight: 700;
  color: white;
  background-color: rgb(29 78 216) !important;
  height: 50px;
  width: 100%;
  background-color: #ccc;
  padding: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 10px;
  bottom: 0px;
  opacity: 90%;
      
}

h1 {
color:gray;
}

img{
  width:80px;
  height:80px;
  margin-left: 15px;
  margin-right: 15px;

}
</style>