  <template>
  <!-- <div class='bg-gray-100'> -->
    <div id="nav">
      <div class='text-xl font-bold'>Panther Votes</div>
      <router-link to="/">Election Dashboard</router-link> |
      <router-link to="/Club-Elections">Club Elections</router-link> |
      <router-link to="/about">Voting History</router-link> |
      <router-link to="/how">How It Works</router-link>
    </div>
    <router-view/>
  <!-- </div> -->
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
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
