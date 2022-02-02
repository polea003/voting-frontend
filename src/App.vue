  <template>
  <div>
    <div id="nav" style="Mystyle" >
      
      <div class='text-7xl font-bold text-white'>Panther Votes</div>
      <router-link to="/">Election Dashboard</router-link> |
      <router-link to="/Club-Elections">Club Elections</router-link> |
      <router-link to="/about">Voting History</router-link> |
      <router-link to="/how">How It Works</router-link>
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
  background-color: rgb(2, 3, 36);
}

#nav a {
  font-weight: bold;
  color: #dbff10;
}
#nav a.active,
#nav a:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}
#nav a.router-link-exact-active {
  color: #42b983;
  
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

