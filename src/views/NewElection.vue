<template>
<div>


<form v-on:submit="addProduct">
        <input type="name" v-model="name" placeholder="Election Name" >
<span>{{ club }}</span>

<!-- <p>Message is: {{ club }}</p>         -->
<button @click="goback(name, club,Candidate1FirstName, Candidate1LastName, Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2)" class="w-16">Add</button>
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
  <button type="button" @click="add()">Add</button>

<!-- <component v-bind:is="NewElectionForm"></component> -->
<div v-for="counter in counter" v-bind:key=counter>
<new-election-form></new-election-form>
</div>
</div>



</template>
<script>

import ElectionService from '../services/ElectionService'
import router from '../router'
import NewElectionForm from '../components/NewElectionForm.vue'
// import Navbar from '../components/Navbar.vue';
//const Comp = {template: '<div>Hello world</div>'}
    export default {
      name: "NewElection",
      components: {
        'NewElectionForm' : NewElectionForm
       
      },
      
       data: function(){
     return {
       name: "",
       Candidate1FirstName: "",
       Candidate1LastName: "",
       Candidate2FirstName: "",
       Candidate2LastName: "",
       Position: "",
       Vote1: 0,
       Vote2: 0,
       counter: 1,
      //components: [Comp]
    

       
         
        
     }},
 methods: {
   add(){
  
      //console.log(this.components)
      //this.components.push(Comp)
      this.counter++
    
    },
    goback(name, club, Candidate1FirstName, Candidate1LastName, Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2){
        ElectionService.createElection(name, this.club, Candidate1FirstName,Candidate1LastName
        ,Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2)
        this.$router.push("/"+ club);
    

    },
    onChange(e) {
                console.log(e.target.value);         
                this.Position  =  e.target.value; }
  },
 created(){
    this.club = router.currentRoute.value.params.club
 },
 
    }
</script>

