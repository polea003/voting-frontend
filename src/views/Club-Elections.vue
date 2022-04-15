<!-- Page Displays Images of Clubs, images are paths to club pages -->
<template>
  <div class="club-Elections">
    <!-- Local Title Header-->
    <h1 class="text-5xl font-extrabold p-5">Club Elections</h1>
    <!-- DISPLAY Club's Images -->
    <div class="flex flex-wrap justify-center">
      <div v-for="club in clubs" :key="club">
        <div class="p-3 w-72 h-72 border-gray-300 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center bg-white hover:border-yellow-300">
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
      clubs: ['FIU', 'AERO', 'AEMB', 'ASCE', 'AIAA', 'ASME', 'ASHRAE', 'BMES', 'CELL-MET', 'EWB', 'FES', 'HKN', 'IAARC', 'IEEE', 'NSBE', 'PATHS-UP', 'SAE', 'SHPE', 'SWE', 'TBP', 'Theta Tau', 'UPE', 'WiCS', 'WiCyS']
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
.hover\:shadow-2xl:hover {
    --tw-shadow: 0 25px 50px 10px rgba(251, 191, 36, 0.95);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
  
