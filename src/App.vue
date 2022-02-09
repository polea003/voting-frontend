  <template>
  <div>
    <div id="nav" style="Mystyle" >
      
      <div class='flex flex-wrap justify-center text-7xl font-bold text-white '>Panther Votes</div>
      <div class="flex flex-wrap justify-center">
      <router-link to="/">Home</router-link>
      <router-link to="/election-Dashboard">Election Dashboard</router-link>
      <router-link to="/club-Elections">Club Elections</router-link>
      <router-link to="/about">Voting History</router-link>
      <router-link to="/how">How It Works</router-link>
    </div>
    </div>
    <router-view/>
  </div>
</template>



<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  /* color: #eff303; */
     /* color: #15e1f0;  */

}

#nav {
  padding: 30px;
  background-color: rgb(4, 6, 56);
}

#nav a {
  font-size: 20px;
  text-decoration: underline;
  color: #FFD800;
  margin-top: 4px;
  margin-bottom: 0px;
  margin-right: 8px;
  margin-left: 8px;
}
#nav a.active,
#nav a:hover {
  background-color: #444;
  /*border-bottom-color: #FF5858;*/
}
#nav a.router-link-exact-active {
    font-weight: bold;
  color: #ffffff;
  background-color:#0022d2;

}
   

    
    footer {
      text-align: center;
      height: 50px;
      background-color: #ccc;
      padding: 10px;
      /* margin-top: 10px; */
      bottom: 0px;
      
    }
</style>

