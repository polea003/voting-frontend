<!-- Page Displays Images of Clubs, images are paths to club pages -->
<template>
  <div class="club-Elections">
    <!-- Local Title Header-->
    <h1 class="text-5xl font-extrabold m-5">Club Elections</h1>
    <!-- DISPLAY Club's Images -->
    <div class="flex flex-wrap justify-center">
      <div v-for="club in clubs" :key="club">
        <div class="p-3 w-72 h-72 border-gray-300 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
          <div @click="$router.push({ name:'Club-Election-Dashboard', params:{club: club} })">
              <img :src="require(`../assets/${club}.png`)"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clubs: [ 'SHPE', 'SWE', 'AERO', 'IEEE', 'ASCE', 'Motor']
    }
  }
}
</script>

<style scoped>
img{
  width:100%;
  height:100%;
  /* NEEDED to supersede App.vue*/
  margin-left: 0px;
  margin-right: 0px;

}
</style>
  
