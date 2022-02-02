
<template>
  <div id="shpe" >
    <div class="about">
        <div class="flex flex-wrap justify-center text-xl font-bold my-5">Society of Hispanic Professional Engineers</div>
        <div class="flex h-full justify-center">
          <div class ="flex items-center justify-center w-72 h-10 m-2 bg-gradient-to-r from-green-400 to-green-500 hover:from-blue-500 hover:to-green-600 font-bold cursor-pointer ">
            <router-link :to="{ name: 'NewElection', params: {club: Name}}">New Election
            </router-link>
          </div>
        </div>

        <div class="home">
          <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
          <!-- <HelloWorld msg="Welcome to Your Vue.js App test"/> -->
          <div class="w-full h-full">
            <div class="flex flex-col">
              <div class="text-xl font-bold m-6">Active Elections</div>
              <div class="flex justify-center m-2">    
                <div class = "flex flex-wrap justify-center">
                  <div v-for="election in elections" :key="election.club">
                    <div v-if="election.club === Name">
                    <ElectionComponent @delete="refresh()" :election="election" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <form @submit.prevent="submitForm"></form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ElectionComponent from '@/components/ElectionComponent.vue'
import ElectionService from '../services/ElectionService'

export default {
  name: 'SHPE',
  components: {
    ElectionComponent
  },
  data () {
    return {
      elections: undefined,
      error: undefined,
      Name: 'SHPE' ,
      color: '#673AB7'
    }
  },
  async created() {
    try {
      this.elections = await ElectionService.getElections()
    } catch(err) {
      this.error = err.message
    }
  },
  methods: {
    async refresh(){
        try {
      this.elections = await ElectionService.getElections()
      window.location.reload()
    } catch(err) {
      this.error = err.message
      
    }
    }
  }
}
</script>

<style scoped>
#shpe{

  /* background: rgb(2, 3, 36); */

}
</style>