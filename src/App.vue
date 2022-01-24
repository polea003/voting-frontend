  <template>
  <div>
    <div id="nav" style="Mystyle" >
      
      <div class='text-xl font-bold'>Panther Votes</div>
      <router-link to="/">Election Dashboard</router-link> |
      <router-link to="/Club-Elections">Club Elections</router-link> |
      <router-link to="/about">Voting History</router-link> |
      <router-link to="/how">How It Works</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: rgb(110, 111, 141);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
   

    
    footer {
      text-align: center;
      height: 50px;
      background-color: #ccc;
      padding: 10px;
      margin-top: 10px;
      bottom: 0px;
    }
</style>

