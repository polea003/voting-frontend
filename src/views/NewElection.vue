<template>
<form v-on:submit="addProduct">
        <input type="name" v-model="name" placeholder="Product Name" >
       
        <button @click="goback(name)">Add</button>
      </form>
</template>
<script>

import ElectionService from '../services/ElectionService'
    export default {
       data: function(){
     return {
       name: "",
       price: "",
   }
},
 methods: {
    addProduct(e){
      e.preventDefault() // it prevent from page reload
      // console.log(this.name, this.price);
    },

    goback(name){
        ElectionService.createElection(name)
        this.$router.push("/SHPE");
    }
  }
    }
</script>