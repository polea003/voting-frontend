<template>
  <div class="election-Dashboard">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App test"/> -->
    <div class="w-full h-full">
      <div class="flex flex-col">
        <div class="flex flex-col text-3xl font-bold mt-4">Active Elections</div>
        <div class="flex flex-wrap justify-center">

          <div v-for="election in elections" :key="election._id">
            <ElectionComponent :election="election" />
          </div>


        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import ElectionComponent from '@/components/ElectionComponent.vue'
import ElectionService from '../services/ElectionService'

export default {
  name: 'Election-Dashboard',
  components: {
    ElectionComponent
  },
  data () {
    return {
      elections: undefined,
      error: undefined
    }
  },
  async created() {
    try {
      this.elections = await ElectionService.getElections()
    } catch(err) {
      this.error = err.message
    }
  }
}
</script>
