<template>


  <div class="w-48 h-64 border-green-500 border-4 rounded m-5">
    <div class='flex flex-col h-full items-center'>
      <div class='font-bold my-2'>{{ election.text }}</div>
      <div class='flex flex-col text-small font-bold flex-1'>
        <div>{{ election.createdAt }}</div>
      </div>
      <div @click="createElection(election._id)" class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>create new</div>
      <div @click="deleteElection(election._id)" class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>delete</div>
    </div>
  </div>
  
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
      ElectionService.deletePost(id)
    },
    createElection(id){
      ElectionService.createElection(id)
    }
  }

}
</script>

<style scoped>
</style>
