<template>
  <div id="Election" class="border-gray border-8 rounded-xl m-5">
    <div class="mt-5 mb-5">
      <span class="font-serif font-bold text-3xl">{{
        election.Poisition
      }}</span>
    </div>
    <table width="760">
      <!--
      <div v-for="DivNumber in DivNumber" v-bind:key="DivNumber">
        
          <tr class="border border-green-600" v-if="DivNumber === 1">-->
      <tr>
        <td class="font-serif text-xl font-bold">
          First Name
        </td>
        <div v-for="FirstName in election.FirstName" v-bind:key="FirstName">
          <td
            height="60"
            class="
              font-serif
              text-lg
             
              overflow-hidden
              truncate
             
            "
          >
            {{ FirstName.value }}
          </td>
        </div>
      </tr>

      <tr>
        <!--<div v-if="DivNumber === 2">-->
        <td class="font-serif text-xl font-bold">
          Last Name
        </td>
        <div v-for="LastName in election.LastName" v-bind:key="LastName">
          <td
            height="60"
            class="
              font-serif
              text-lg
              
              overflow-hidden
              truncate
             
            "
          >
            {{ LastName.value }}
          </td>
        </div>
      </tr>
      <tr>
        <!--<div v-if="DivNumber === 3">-->
        <td class="font-serif text-xl font-bold">
          Selection
        </td>
        <div
          v-for="NumberOfCandidates in election.NumberOfCandidates"
          v-bind:key="NumberOfCandidates"
        >
          <td height="60">
            <button
              @click="ProcessVote(election._id, NumberOfCandidates)"
              class="
                font-serif font-bold
                text-lg
                w-full
                h-full
                bg-gradient-to-r
                from-blue-200
                to-blue-600
                hover:from-yellow-200 hover:to-yellow-600
                font-bold
                rounded-md
                border-4 border-black
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
          <td
            class="font-serif text-xl font-bold"
          >
            {{`Vote Count`}}
          </td>
          <div v-for="Vote in election.Vote" v-bind:key="Vote">
            <td height="60">
              <div class="font-serif text-lg">
                Votes: {{ Vote.value }}
              </div>
            </td>
          </div>
        </div>
      </tr>
      <tr>
        <div>
          <!--<div v-if="DivNumber === 4">-->
          <td
            class="font-serif text-xl font-bold"
          >
            {{`Blockchain`}}
          </td>
          <div v-for="(Vote, index) in election.Vote" v-bind:key="Vote">
            <td height="60">
              <div class="font-serif text-lg">
                Votes: {{ blockchainVotes.filter(vote => vote.selection - 1 === index).length }}
              </div>
            </td>
          </div>
        </div>
      </tr>
    </table>
    <div>
      <div class="shadow hover:shadow-2xl border-8 border-gray-400">
        <button
          @click="deleteElection(election._id)"
          class="
            font-serif
            text-lg
            w-full
            h-16
            
            bg-gradient-to-r
            from-red-300
            to-red-500
            hover:from-red-500 hover:to-red-800
            font-bold
            
            border-8 
            border-current
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
  async mounted () {
    await this.getBlockchainVotes()
  },
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
      blockchainVotes: [],
    };
  },
  methods: {
    async getBlockchainVotes() {
      let votes = await ElectionService.getBlockchainVotes()
      votes = votes.data.filter(vote => vote.electionId == this.election._id)
      this.blockchainVotes = votes
    },
    deleteElection(id) {
      this.$emit("update");
      ElectionService.deletePost(id);
    },
    createElection(id) {
      ElectionService.createElection(id);
    },
    async ProcessVote(id, Canadent_number) {
      await ElectionService.UpdateElection(id, Canadent_number);
      this.$emit("update");
      await this.getBlockchainVotes();

    },
    /*DivCoutner() {
      this.DivNumber++;
    },*/
  },
};
</script>

<style scoped>
#Election {
  /*background: rgb(255,255,255);*/
  background: linear-gradient(
    90deg,
    rgb(194, 191, 191) 0%,
    rgb(235, 225, 225) 50%,
    rgb(201, 201, 201) 100%
  );
}

/* Changes Format from building Table from Rows to Columns*/
table {
  display: table;
  border: none;
  border-collapse: collapse;
  /*border: 1px solid black;*/
}
table tr {
  display: table-cell;
  
  /*border: 1px solid black;*/
}
table td {
    border-bottom: 3px solid #000;
      padding:10px;
    /*border-right: 1px solid #000;*/
}
/*
table td:first-child {
    border-left: none;
}

table td:last-child {
    border-right: none;
}
*/
table tr td {
  display: block;
  /*border: 1px solid black;*/

}
</style>
