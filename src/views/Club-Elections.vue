
<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="club in clubs" :key="club">
      <div class="w-64 h-64 border-blue-500 border-4 rounded m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
        <div @click="$router.push({ name:'Club-Election-Dashboard', params:{club: club} })">
            <img :src="require(`../assets/${club}.png`)"/>
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
