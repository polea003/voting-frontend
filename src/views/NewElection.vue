<template>
<form v-on:submit="addProduct">
        <input type="name" v-model="name" placeholder="Product Name" >
<input v-model="club" placeholder= />
<!-- <p>Message is: {{ club }}</p>         -->
<button @click="goback(name, club)">Add</button>
      </form>
    
</template>
<script>

import ElectionService from '../services/ElectionService'
import router from '../router'

    export default {
      name: "NewElection",
       data: function(){
     return {
       name: "",
       stupid: "0",
       
   }
},
 methods: {
    addProduct(e){
      e.preventDefault() // it prevent from page reload
      // console.log(this.name, this.price);
    },

    goback(name, club){
        ElectionService.createElection(name, this.club)
        this.$router.push("/"+ club);
    }
  },
 created(){
    this.club = router.currentRoute.value.params.club

 }
    }
</script>