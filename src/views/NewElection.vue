<template>
<div id="app">


<form v-on:submit="addProduct">
  <div class="flex flex-col items-center">
    <span class = 'font-bold'> Club: {{ club }}</span>
    <div class="pt-2 font-bold">Election Name</div>
    <input type="name" v-model="name" placeholder="Election Name" class="w-72 h-10 border-2 border-blue-800 rounded px-2">
    <div class="pt-2 font-bold">Position</div>
    <div id="Drop">
      <select v-model="Position" class="form-select form-control border-2 border-blue-800 w-72 h-10 px-2 rounded">
        <option value="undefined" disabled>Positions</option>
        <option value="President">President</option>
        <option value="Vice president">Vice president</option>
        <option value="Secretary">Secretary</option>
        <option value="Treasurer">Treasurer</option>
      </select>
    </div>
  </div>
  <div class="pt-2 font-bold">Candidates</div>
  <div class="flex wrap justify-center">
  <!-- <component v-bind:is="NewElectionForm"></component> -->
    <div>
      <div v-for="FirstName in FirstName" v-bind:key="FirstName" class="my-2">
        <form @submit.prevent="submitForm">
          <input type="FirstName" v-model="FirstName.value" placeholder="First Name">
        </form>
      </div>
    </div>

    <div>
    <div v-for="LastName in LastName" v-bind:key="LastName" class="my-2">
      <form @submit.prevent="submitForm">
        <input type="LastName" v-model="LastName.value" placeholder="Last Name">
      </form>
    </div></div>
    <!-- <Form></Form> -->
  </div>
  <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3" @click="add()">Add Candidate</button>
  <div class="pt-2 font-bold">Date/Time Voting Starts:</div>
  <div class="flex justify-center"><datepicker class="w-72" v-model="startTime"/></div>
  <div class="pt-4 font-bold">Date/Time Voting Ends:</div>
  <div class="flex justify-center"><datepicker class="w-72" v-model="endTime"/></div>
   
  <button @click="goback(name, club,Candidate1FirstName, Candidate1LastName, Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2, FirstName, LastName, NumberOfCandidates, Vote, startTime, endTime)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mx-2">Create Election</button>
</form>  


<!-- <p>Message is: {{ club }}</p>         -->

      
  
<!-- <navbar />  -->

</div>

</template>
<script>
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
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
            Datepicker
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
       Vote: [],
       startTime: new Date(),
       endTime: null,
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
    goback(name, club, Candidate1FirstName, Candidate1LastName, Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2, FirstName, LastName,NumberOfCandidates, Vote, startTime, endTime){
        ElectionService.createElection(name, this.club, Candidate1FirstName,Candidate1LastName
        ,Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2, FirstName, LastName,NumberOfCandidates, Vote, startTime, endTime)
        this.$router.push({ name:'Club-Election-Dashboard', params:{club: club} });
    

    }
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


