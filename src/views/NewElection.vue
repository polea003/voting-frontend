<template>
<div>


<form v-on:submit="addProduct">
        <input type="name" v-model="name" placeholder="Election Name" >
<span>{{ club }}</span>

<!-- <p>Message is: {{ club }}</p>         -->
<button @click="goback(name, club,Candidate1FirstName, Candidate1LastName, Candidate2FirstName,Candidate2LastName, Position)" class="w-16">Add</button>
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
     <span>Candidate 1:      </span>    
    <!-- username input -->
    <input type="Candidate1FirstName" v-model="Candidate1FirstName" placeholder="First Name">

    <!-- email input -->
    <input type="Candidate1LastName" v-model="Candidate1LastName" placeholder="Last Name">

    
    

  </form>
  <form @submit.prevent="submitForm">
     <span>Candidate 2:      </span>    
    <!-- username input -->
    <input type="Candidate2FirstName" v-model="Candidate2FirstName" placeholder="First Name">

    <!-- email input -->
    <input type="Candidate2LastName" v-model="Candidate2LastName" placeholder="Last Name">

    
    

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
       Candidate1FirstName: "",
       Candidate1LastName: "",
       Candidate2FirstName: "",
       Candidate2LastName: "",
       Position: "",
       
         
        
     }},
 methods: {
   
    goback(name, club, Candidate1FirstName, Candidate1LastName, Candidate2FirstName,Candidate2LastName, Position ){
        ElectionService.createElection(name, this.club, Candidate1FirstName,Candidate1LastName
        ,Candidate2FirstName,Candidate2LastName, Position)
        this.$router.push("/"+ club);
        

    },
    onChange(e) {
                console.log(e.target.value);         
                this.Position  =  e.target.value; }
  },
 created(){
    this.club = router.currentRoute.value.params.club
 }
    }
</script>
