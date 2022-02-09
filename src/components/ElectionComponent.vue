<template>
  <div id="Election" class="border-blue-400 border-8 rounded-lg m-5">
    <div class="mt-3 mb-7">
      <span class="font-serif font-bold text-2xl underline">{{
        election.Poisition
      }}</span>
    </div>
    <table width="500">
     
     <!--
      <div v-for="DivNumber in DivNumber" v-bind:key="DivNumber">
        
          <tr class="border border-green-600" v-if="DivNumber === 1">-->
      <tr>
        <td class="
        font-serif
              text-lg
              font-bold
              ml-4
              mb-3
              text-left
              underline">First</td>
        <div v-for="FirstName in election.FirstName" v-bind:key="FirstName">
          
          <td
            height="50"
            class="
              font-serif
              text-lg
              
              ml-4
              text-left
              overflow-hidden
              truncate
              w-15
            "
          >
            {{ FirstName.value }}
          </td>
        </div>
      </tr>

      <tr>
        <!--<div v-if="DivNumber === 2">-->
          <td class="
        font-serif
              text-lg
              font-bold
              ml-4
              mb-3
              text-left
              underline">Last</td>
        <div v-for="LastName in election.LastName" v-bind:key="LastName">
          <td
            height="50"
            class="
              font-serif
              text-lg
              
              ml-4
              text-left
              overflow-hidden
              truncate
              w-15
            "
          >
            {{ LastName.value }}
          </td>
        </div>
      </tr>
      <tr>
        <!--<div v-if="DivNumber === 3">-->
          <td class="
        font-serif
              text-lg
              font-bold
              
              mb-3
              text-center
              underline">Selection</td>
        <div
          v-for="NumberOfCandidates in election.NumberOfCandidates"
          v-bind:key="NumberOfCandidates"
        >
          <td height="50">
            <button
              @click="ProcessVote(election._id, NumberOfCandidates)"
              class="
                font-serif font-bold
                text-lg
                w-32
                h-7
                bg-gradient-to-r
                from-blue-200
                to-blue-600
                hover:from-yellow-200 hover:to-yellow-600
                font-bold
                rounded-full
              "
            >
              Vote
            </button>
          </td>
        </div>
      </tr>
      <tr>
        <div>
          <!--<div v-if="DivNumber === 4">-->
            <td class="
        font-serif
              text-lg
              font-bold
              ml-4
              mb-3
              text-left
              underline">Vote Count</td>
          <div v-for="Vote in election.Vote" v-bind:key="Vote">
            <td height="50">
              <div class="font-serif text-lg text-left w-15 ml-5">
                Votes: {{ Vote.value }}
              </div>
            </td>
          </div>
        </div>
      </tr>
    </table>
    <div>
      <div class="shadow hover:shadow-2xl">
        <button
          @click="deleteElection(election._id)"
          class="
            font-serif
            text-lg
            w-60
            h-12
            m-5
            bg-gradient-to-r
            from-red-300
            to-red-500
            hover:from-red-500 hover:to-red-800
            font-bold
            rounded-full
            border-4 border-current
          "
        >
          Delete
        </button>
      </div>
    </div>
  </div>

  <!--
<div> <div class='font-bold'> {{election.Poisition}}</div>
  <div  id= "Election" class="w-80 h-52 border-blue-500 border-4 rounded-lg m-5">
 <div class="flex">
  <div>
    <div class='flex w-40 flex-col h-full items-center'>
      <div class='font-bold my-2'>{{ election.Candidate1FirstName }}</div>
      <div class='font-bold my-5'>{{ election.Candidate1LastName }}</div>
      <button @click="ProcessVote(election._id, 1)" class=' w-32 h-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold'>Vote</button>
    </div>
  </div>
  <div>
   <div class='flex flex-col h-full items-center'>
      <div class='font-bold my-2'>{{ election.Candidate2FirstName }}</div>
      <div class='font-bold my-5'>{{ election.Candidate2LastName }}</div>
      <button @click="ProcessVote(election._id,2)" class=' w-32 h-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-bold'>Vote</button>
    </div>
  </div>
 </div>
       <button @click="deleteElection(election._id)" class=' w-72 h-10 m-2 bg-gradient-to-r from-red-400 to-red-500 hover:from-pink-500 hover:to-yellow-500 font-bold'>Delete</button>

</div> 
    <div class="flex flex-row justify-center border-blue-500 border-4 rounded-lg m-5"> 
      <div class="px-16"> {{election.Candidate1FirstName}} : {{election.Vote1}} </div>
      <div class="px-16">{{election.Candidate2FirstName}} : {{election.Vote2}}
        </div></div>
        <div v-for="FirstName in election.FirstName" v-bind:key=FirstName>{{FirstName.value}}</div>
 </div>
 -->
</template>

<script>
import ElectionService from "../services/ElectionService";
//import About from '../views/About.vue'

export default {
  components: {
    //About
  },
  name: "ElectionComponent",
  props: {
    election: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // elections: [],
      error: "",
      text: "",
      DivNumber: 4,
    };
  },
  methods: {
    deleteElection(id) {
      this.$emit("Update");
      ElectionService.deletePost(id);
    },
    createElection(id) {
      ElectionService.createElection(id);
    },
    ProcessVote(id, Canadent_number) {
      this.$emit("Update");
      ElectionService.UpdateElection(id, Canadent_number);
    },
    DivCoutner() {
      this.DivNumber++;
    },
  },
};
</script>

<style scoped>
#Election {
  /*background: rgb(255,255,255);*/
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(221,221,221,1) 50%, rgb(201, 201, 201) 100%);
}

/* Changes Format from building Table from Rows to Columns*/
table {
  display: table;
}
table tr {
  display: table-cell;
}
table tr td {
  display: block;
}
</style>
