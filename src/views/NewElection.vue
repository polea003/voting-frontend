<template>
<div id="app">


<form v-on:submit="addProduct">
        <input type="name" v-model="name" placeholder="Election Name" >
<span class = 'font-bold'> Club: {{ club }}</span>

<!-- <p>Message is: {{ club }}</p>         -->
<button @click="goback(name, club,Candidate1FirstName, Candidate1LastName, Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2, FirstName, LastName, NumberOfCandidates, Vote)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3 mx-2">Add Election</button>
      </form>
  
<!-- <navbar />  -->
<div id="Drop">
  <select v-model="age" @change="onChange($event)" class="form-select form-control border-2 border-green-300 my-3">
    <option value="undefined" disabled>Positions</option>
    <option value="President">President</option>
    <option value="Vice president">Vice president</option>
    <option value="Secretary">Secretary</option>
    <option value="Treasurer">Treasurer</option>
  </select>
</div>

  <div>
  <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3" @click="add()">Add Candidate</button>
  </div>
<div class="flex wrap justify-center">
<!-- <component v-bind:is="NewElectionForm"></component> -->
<div>
<div v-for="FirstName in FirstName" v-bind:key=FirstName>
  <form @submit.prevent="submitForm">
     <span class = "font-bold">Candidate:      </span>    
    <input type="FirstName" v-model="FirstName.value" placeholder="First Name">
  </form>
  
</div></div>

<div>
<div v-for="LastName in LastName" v-bind:key=LastName>
  <form @submit.prevent="submitForm">
    <input type="LastName" v-model="LastName.value" placeholder="Last Name">
  </form>
</div></div>
  <!-- <Form></Form> -->

</div></div>

</template>
<script>

import ElectionService from '../services/ElectionService'
import router from '../router'
// import Navbar from '../components/Navbar.vue';
//const Comp = {template: '<div>Hello world</div>'}
/* const Form = {

  render(){return(`<form @submit.prevent="submitForm">
     <span>Candidate 3:      </span>    
    <input type="Candidate2FirstName" v-model="Candidate2FirstName" placeholder="First Name">
    <input type="Candidate2LastName" v-model="Candidate2LastName" placeholder="Last Name">
  </form>`)
}}; */
    export default {
      name: "NewElection",
      components: {
            // Form
       
      },
      el: '#app',
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
       NumberOfCandidates: 0,
       FirstName : [],
       LastName : [],
       Vote: []
     }},
 methods: {
   add(){
  
      //console.log(this.components)
      //this.components.push(Comp)
      this.NumberOfCandidates++
      this.Vote.push({value: 0})
      this.FirstName.push({ value: '' });
      this.LastName.push({value: ''});
    
    },
    goback(name, club, Candidate1FirstName, Candidate1LastName, Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2, FirstName, LastName,NumberOfCandidates, Vote){
        ElectionService.createElection(name, this.club, Candidate1FirstName,Candidate1LastName
        ,Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2, FirstName, LastName,NumberOfCandidates, Vote)
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
    /*
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
    */
</script>


