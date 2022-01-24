<template>
  <!-- <div class='bg-gray-100'> -->
  <div id="nav">
    <!-- <div class=”example”>This is a div on a webpage. </div> -->
    <div class="text-7xl font-bold text-blue-500">Panther Votes</div>
    <router-link to="/">Home</router-link> |
    <router-link to="/election">Election Dashboard</router-link> |
    <router-link to="/about">About</router-link> |

  </div>

  <router-view />

  <!-- </div> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2261a0;
}

#nav {
  padding: 30px; /*generates space around an object*/
}

#nav a {
  font-weight: 700; /*100-900*/
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  font-weight: 900;
  color: #42b983;
}
</style>
