<!-- TODO: Delete Candiate Button. Logic to make sure First and Last Name Entered in Input -->
<template>
<div id="app">


<form v-on:submit="addProduct">
  <div class="flex flex-col items-center">
    <h1 class="text-5xl font-bold m-5">New Election</h1>
    <span class = 'font-bold text-3xl m-2'> Club: {{ club }}</span>
    <div class="pt-2 text-lg font-bold">Election Name</div>
    <input type="name" v-model="name" placeholder="Election Name" class="w-72 h-10 border-2 border-blue-800 rounded px-2">
    <div class="pt-2 text-lg font-bold">Position</div>
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
  <div class="pt-2 text-lg font-bold">Candidates</div>
  <div class="flex wrap justify-center">
  <!-- <component v-bind:is="NewElectionForm"></component> -->
    <div>
      <div v-for="FirstName in FirstName" v-bind:key="FirstName" class="my-3 mr-2">
         <Form  :validation-schema="schema">
      <div v-if="!successful">
        <div class="form-group mb-6">
          <div>
          <label for="FirstName" class="font-bold">First Name</label>
          </div>
          <Field name="FirstName" type="text" v-model="FirstName.value" class="form-control border-2 border-black" />
          <div>
            <ErrorMessage name="FirstName" class="error-feedback" />
          </div>
        </div></div></Form>
        
      </div>
    </div>

    <div>
       
    <div v-for="LastName in LastName" v-bind:key="LastName" class="my-3 ml-2">
      <Form  :validation-schema="schema">
      <div v-if="!successful">
        <div class="form-group mb-6">
          <div>
          <label for="LastName" class="font-bold">Last Name</label>
          </div>
          <Field name="LastName" type="text" v-model="LastName.value" class="form-control border-2 border-black" />
          <div>
            <ErrorMessage name="LastName" class="error-feedback" />
          </div>
        </div></div></Form>
    
    </div></div>
    <!-- <Form></Form> -->
  </div>
  <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3" @click="add()">Add Candidate</button>

  <div class="pt-2 font-bold">Date/Time Voting Starts:</div>
  <div class="flex justify-center"><datepicker class="w-72" v-model="startTime"/></div>
  <div class="pt-4 font-bold">Date/Time Voting Ends:</div>
  <div class="flex justify-center"><datepicker class="w-72" v-model="endTime"/></div>
  <div class="flex flex-wrap justify-center">
    <button @click="goback(name, club,Candidate1FirstName, Candidate1LastName, Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2, FirstName, LastName, FullName, NumberOfCandidates, Vote, startTime, endTime)"
      class="
        flex
        items-center
        justify-center
        font-bold
        text-white
        text-3xl
        w-72
        h-16
        m-6
        mt-8
        cursor-pointer
        rounded-full
        border-8 border-inherit
        bg-gradient-to-r
        from-blue-400
        to-blue-800
        hover:from-yellow-300 hover:to-yellow-600
        hover:border-black 
        hover:text-black
      "
      :disabled="loading"
    >
      <span
        v-show="loading"
        class="spinner-border spinner-border-sm"
      ></span>
      Create Election
    </button>
  </div>
</form>  


<!-- <p>Message is: {{ club }}</p>         -->

      
  
<!-- <navbar />  -->

</div>

</template>

<style>
input {
  text-align: center;
}
</style>

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
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
    export default {
      name: "NewElection",
      components: {
            // Form
            Datepicker,
           
    Form,
    Field,
    ErrorMessage,
 
      },
      el: '#app',
       data: function(){
       const schema = yup.object().shape({
      FirstName: yup
        .string()
        .required("Username is required!")
        .max(20, "Must be maximum 20 characters!"),
      LastName: yup
        .string()
        .required("Username is required!")
        .max(20, "Must be maximum 20 characters!"),

    
        
    });  
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
       FirstName: [],
       LastName: [],
       FullName: [],
       Vote: [],
       startTime: new Date(),
       endTime: null,
      successful: false,
      loading: false,
      message: "",
      schema,
     }},
 methods: {
   add(){
  
      //console.log(this.components)
      //this.components.push(Comp)
      this.NumberOfCandidates++
      this.Vote.push({value: 0})
      this.FirstName.push({ value: '' });
      this.LastName.push({value: ''});
      this.FullName.push({value: ''});
    
    },
   /* sub(){
      this.NumberOfCandidates--
      this.Vote.pull({value: 0})
      this.FirstName.pull({ value: '' });
      this.LastName.pull({value: ''});
    },*/
    goback(name, club, Candidate1FirstName, Candidate1LastName, Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2, FirstName, LastName, FullName, NumberOfCandidates, Vote, startTime, endTime){
        console.log(NumberOfCandidates)
        var i = 0;
       // let candiates = []
        while(i < NumberOfCandidates){
        if(FirstName[i].value == "" || LastName[i].value == ""){
          throw(Error)}
        else{
          /* go fuck yourself */
          //FullName[i].value = FirstName[i].value + " " + LastName[i].value;}
          let str = FirstName[i].value.concat(' ', LastName[i].value)
          console.log(str)
          FullName[i].value = str
          console.log(FullName[i].value)
         /* canidates = [
            {firstName: FirstName[i], lastName: LastName[i]},
          ]*/

          }
        i++}
        console.log(FullName)
       /* console.log(canidates)
        fullCanName = canidates.map (canidates => `${canidates.firstName} ${canidates.lastName}`)
        console.log(fullCanName)*/
        
        ElectionService.createElection(name, this.club, Candidate1FirstName,Candidate1LastName
        ,Candidate2FirstName,Candidate2LastName, Position, Vote1, Vote2, FirstName, LastName, FullName, NumberOfCandidates, Vote, startTime, endTime)
        this.$router.push({ name:'Club-Election-Dashboard', params:{club: club} });
        

    }
  },
 created(){
    this.club = router.currentRoute.value.params.club
 },
 handleinput() {
      
      

      }
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

<style scoped>
.error-feedback{
  color:red;
}
div.form-control{
  width: 60px;
  height: 10px;
}
</style>
