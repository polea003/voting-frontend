
<template>

  <div class="about">
 
    <div class='flex flex-col mx-64'>
      <div class="text-xl font-bold my-5">Society of Hispanic Professional Engineers</div>
     
    </div>
    <v-row align="center" justify="center">
     <div class='w-auto border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>
          <div class="flex h-full justify-center">
            
            <router-link to="/NewElection"
              >New Election</router-link>
              
          </div></div></v-row>
        <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App test"/> -->
    <div class="w-full h-full">
      <div class="flex flex-col">
        <div class="text-xl font-bold">Active Elections</div>
        <div class="flex justify-center">

          <div v-for="election in elections" :key="election._id">
            <ElectionComponent :election="election" />
          </div>


        </div>
      </div>
    </div>
  </div>
 
   <form @submit.prevent="submitForm">
         
    <!-- username input -->
    <input type="text" v-model="username" placeholder="Username">

    <!-- email input -->
    <input type="text" v-model="email" placeholder="Email">

    <!-- password input -->
    <input type="password" v-model="password" placeholder="Password">

    <!-- submit button -->
    <button type="submit">Submit</button>

  </form>
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