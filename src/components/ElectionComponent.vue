<template>

<div> <div class='font-bold'> {{election.Poisition}}</div>
  <div  id= "Election" class="w-80 h-52 border-blue-500 border-4 rounded-lg m-5">
 <div class="flex">
  <div>
    <div class='flex w-40 flex-col h-full items-center'>
      <div class='font-bold my-2'>{{ election.Candidate1FirstName }}</div>
      <div class='font-bold my-5'>{{ election.Candidate1LastName }}</div>
      <button @click="createElection(election._id)" class=' w-32 h-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold'>Vote</button>
    </div>
  </div>
  <div>
   <div class='flex flex-col h-full items-center'>
      <div class='font-bold my-2'>{{ election.Candidate2FirstName }}</div>
      <div class='font-bold my-5'>{{ election.Candidate2LastName }}</div>
      <button @click="createElection(election._id)" class=' w-32 h-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold'>Vote</button>
    </div>
  </div>
 </div>
       <button @click="deleteElection(election._id)" class=' w-72 h-10 m-2 bg-gradient-to-r from-red-400 to-red-500 hover:from-pink-500 hover:to-yellow-500 font-bold'>Delete</button>

    
</div></div>
  
</template>

<script>

import ElectionService from '../services/ElectionService'

export default {
  name: 'ElectionComponent',
  props: {
    election: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      // elections: [],
      error: '',
      text: ''
    }
  },
  methods:{
    deleteElection(id){
      this.$emit("delete")
      ElectionService.deletePost(id)
    },
    createElection(id){
      ElectionService.createElection(id)
    }
  }

}
</script>

<style scoped>
#Election{
  background: rgba(121, 121, 117, 0.425) 
}
</style>
