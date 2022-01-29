<template>
<div>


<form v-on:submit="addProduct">
        <input type="name" v-model="name" placeholder="Election Name" >
<span>{{ club }}</span>

<!-- <p>Message is: {{ club }}</p>         -->
<button @click="goback(name, club)" class="w-16">Add</button>
      </form>
  
<!-- <navbar />  -->
<div id="Drop">
  <select v-model="age" @change="onChange($event)" class="form-select form-control">
    <option value="undefined" disabled>Positions</option>
    <option value="President">President</option>
    <option value="Vice president">Vice president</option>
    <option value="Secretary">Secretary</option>
    <option value="Treasurer">Treasurer</option>
  </select>
</div>
<form @submit.prevent="submitForm">
     <span>Canadents 1:      </span>    
    <!-- username input -->
    <input type="text" v-model="username" placeholder="First Name">

    <!-- email input -->
    <input type="text" v-model="email" placeholder="Last Name">

    <!-- password input -->
    <input type="password" v-model="password" placeholder="PID">

    <!-- submit button -->
    

  </form>
  <form @submit.prevent="submitForm">
     <span>Canadents 2:      </span>    
    <!-- username input -->
    <input type="text" v-model="username" placeholder="First Name">

    <!-- email input -->
    <input type="text" v-model="email" placeholder="Last Name">

    <!-- password input -->
    <input type="password" v-model="password" placeholder="PID">

    <!-- submit button -->
    

  </form>
</div>



</template>
<script>

import ElectionService from '../services/ElectionService'
import router from '../router'
// import Navbar from '../components/Navbar.vue';

    export default {
      name: "NewElection",
      components: {
        // Navbar
            
      },
      
       data: function(){
     return {
       name: "",
         onChange(e) {
                console.log(e.target.value);          }
     
        
     }},
 methods: {
   
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