  <template>
  <div>
    <div id="nav" style="Mystyle" >
      <!-- TITLE of Webpage -->
      <div class='flex flex-wrap justify-center text-7xl font-bold text-white py-2 '>Panther Votes</div>
      <!-- TOP NAV BAR -->
      <div class="flex flex-wrap justify-center">
        <router-link to="/">Home</router-link>
        <router-link to="/Login">Login</router-link>
        <router-link to="/election-Dashboard">Election Dashboard</router-link>
        <router-link to="/club-Elections">Club Elections</router-link>
        <router-link to="/voting-History">Voting History</router-link>
        <router-link to="/how">How It Works</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view/>
    <!-- FOOTER -->
    <div class="pt-8">
    <div class="h-8 w-full py-2 text-center text-sm fixed bottom-0 text-white bg-blue-800 font-bold">Copyright &copy;2022. Senior team 2 - Panther Votes. All rights reserved</div>
    </div>
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
      
footer {
  text-align: center;
  height: 50px;
  background-color: #ccc;
  padding: 10px;
  /* margin-top: 10px; */
  bottom: 0px;
      
}

h1 {
color:gray;
}
</style>

