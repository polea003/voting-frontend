<!--Displays Election Balot, TODO make seperate Admin and Voter Balots -->
<template>
  <div id="Election" class="border-gray-300 rounded-2xl m-7">
    <!-- DISPLAY 'Club Name' then 'Position' using flex-col -->
    <div class="mt-5 mb-5">
      <span class="titleBall flex flex-col font-serif font-bold text-5xl mb-2">{{
        `${election.club}`
      }}</span>
            <span class="titleBall flex flex-col font-serif font-bold text-3xl">{{
        `${election.Poisition}`
      }}</span>
    </div>

    <!-- DISPLAY 'Start time' and 'End time' of Election -->
    <div class="font-bold" v-show="election.startTime">{{`Election Start: ${new Date(election.startTime).toString()}`}}</div>
    <div class="font-bold" v-show="election.endTime">{{`Election End: ${new Date(election.endTime).toString()}`}}</div>

    <!-- TABLE to DISPLAY Election Data, width of table is 760 (hard coded) -->
    <!-- TODO, need to test name length overflow, maybe truncate the name then allow hover to see full name (not sure about mobile)-->
    <table width="760"> 
      <!-- Column First Names -->
      <tr>
        <td class="titleBall font-serif text-xl font-bold">
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
              bg-gray-100
             
            "
          >
            {{ FirstName.value }}
          </td>
        </div>
      </tr>

      <!-- Column Last Names -->
      <tr>
        <td class="titleBall font-serif text-xl font-bold">
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
              bg-gray-100
            "
          >
            {{ LastName.value }}
          </td>
        </div>
      </tr>

      <!-- Column for Vote Button -->
      <tr>
        <td class="titleBall font-serif text-xl font-bold">
          Selection
        </td>
        <div
          v-for="(NumberOfCandidates, index) in election.NumberOfCandidates"
          v-bind:key="NumberOfCandidates"
        >
          <td height="60" class="font-serif font-bold text-lg bg-gray-100">
            <div v-if="selectedVote && index === selectedVote - 1" class=" 
                w-full
                h-full
                font-bold
                rounded-md
                bg-gradient-to-r 
                border-4 border-black
                text-base
              "
              :class="{'from-blue-300 to-blue-600' : loadingBlockchainVotes || loadingDatabaseVotes, 'from-green-300 to-green-600' : !loadingBlockchainVotes && !loadingDatabaseVotes}"
              >{{loadingBlockchainVotes || loadingDatabaseVotes ? 'Processing' : 'Confirmed'}}
              
            </div>
            <div v-else
              @click="!selectedVote ? confirmVote(index) : {}"
              class=" 
                w-full
                h-full
                font-bold
                text-white
                border-gray-300
                rounded-md
                bg-gradient-to-r from-blue-400 to-blue-800
                border-4 
              "
              :class="{'opacity-20': selectedVote ,'cursor-pointer hover:from-yellow-200 hover:to-yellow-600 hover:text-black hover:border-black': !selectedVote  }"
            >
              {{'Vote'}}
            </div>

            <div
                v-show="confirmationOpen && voteToConfirm === index"
                class="
                  fixed
                  inset-0
                  w-screen
                  h-screen
                  flex
                  items-center
                  justify-center
                  bg-gray-700 bg-opacity-50
                "
              >
                <!-- Confirmation PopUp -->
                <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
                  <!--Header for Popup-->
                  <div class="flex justify-center">
                    <h3 class="text-2xl">Please Confrim</h3>
                  </div>
                  <!-- Body for Popup-->
                  <div class="mt-4">
                    <!-- Display Name of Selection with message -->
                    <div class="mb-5">
                      Are you sure you want to vote for: {{ `${election.FirstName[index].value} ${election.LastName[index].value}` }}?
                    </div>
                    <!-- Cancel vote selection button -->
                    <button
                      @click="confirmationOpen = false"
                      class="
                        font-bold
                        text-xl
                        w-32
                        px-6
                        py-2
                        mr-6
                        text-black
                        bg-white
                        border-4 border-red-600
                        rounded-md
                        hover:bg-red-500 hover:text-black hover:border-black
                        hover:underline
                        
                      "
                    >
                      Cancel
                    </button>
                    <!-- Vote confirmation Button, Calls ProcessVote() function: updates vote count in mongoDB and blockchain -->
                    <button
                      class="w-32 font-bold text-xl px-6 py-2 ml-6 text-blue-100 bg-blue-600 rounded-md border-4 border-gray hover:underline hover:bg-yellow-500 hover:text-black hover:border-black"
                      @click="ProcessVote(election._id, NumberOfCandidates)"
                    >
                      Vote
                    </button>
                  </div>
                </div>
              </div>
          </td>
        </div>
      </tr>

      <!-- Column DISPLAYing mongoDB Vote Count -->
      <tr>
        <div>
          <td
            class="titleBall font-serif text-xl font-bold "
          >
            {{`Vote Count`}}
          </td>
          <div v-for="(Vote, index) in election.Vote" v-bind:key="Vote" class="bg-gray-100">
            <td height="60">
              <div v-if="loadingDatabaseVotes && index === selectedVote - 1">
                <Preloader class="-mt-11" color="red" scale="0.2" />
              </div>
              <div v-else class="font-serif text-lg">
                Votes: {{ Vote.value }}
              </div>
            </td>
          </div>
        </div>
      </tr>

      <!-- Column DISPLAYing BlockChain Vote Count -->
      <tr>
        <div>
          <td
            class="titleBall font-serif text-xl font-bold"
          >
            {{`Blockchain`}}
          </td>
          <div v-for="(Vote, index) in election.Vote" v-bind:key="Vote" class="bg-gray-100">
            <td height="60">
              <div v-if="loadingBlockchainVotes && index === selectedVote - 1">
                <Preloader class="-mt-11" color="red" scale="0.2" />
              </div>
              <div v-else class="font-serif text-lg">
                Votes: {{ blockchainVotes.filter(vote => vote.selection - 1 === index).length }}
              </div>
            </td>
          </div>
        </div>
      </tr>
    </table>
    
    <!-- DELETE Election BUTTON -->
    <div>
      <div class=" border-8 m-2 rounded-md border-transparent">
        <button
          @click="deleteElection(election._id)"
          class="
            font-serif
            text-xl
            font-bold
            w-full
            h-16
            rounded
            bg-gradient-to-r
            from-red-300
            to-red-500
            hover:from-red-600 hover:to-red-900
            border-8 
            border-black
            hover:border-white
            hover:text-white
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
import Preloader from './Preloader.vue'
//import About from '../views/About.vue'

export default {
  async mounted () {
  },
  components: {
    //About
    Preloader
  },
  name: "ElectionComponent",
  props: {
    election: {
      type: Object,
      required: true,
    },
    blockchainVotes: {
      type: Array,
      required: true,
      default: new Array,
    }
  },
  data() {
    return {
      // elections: [],
      error: "",
      text: "",
      DivNumber: 4,
      voteToConfirm: undefined,
      loadingDatabaseVotes: true,
      loadingBlockchainVotes: true,
      confirmationOpen: false,
      selectedVote: null,
    };
  },
  methods: {
    async deleteElection(id) {
      await ElectionService.deletePost(id);
      this.$emit("update");
    },
    createElection(id) {
      ElectionService.createElection(id);
    },
    confirmVote(index) {
      this.voteToConfirm = index
      this.confirmationOpen = true
    },
    async ProcessVote(id, Canadent_number) {
      this.confirmationOpen = false
      this.loadingDatabaseVotes = true
      this.loadingBlockchainVotes = true
      this.selectedVote = Canadent_number
      await ElectionService.UpdateElection(id, Canadent_number);
      this.$emit("update");
    },
    /*DivCoutner() {
      this.DivNumber++;
    },*/
  },
  watch: {
    blockchainVotes: function () { this.loadingBlockchainVotes = false },
    election: function () { this.loadingDatabaseVotes = false }
  }
};
</script>

<style scoped>

#Election {
  /*background: rgb(255,255,255);*/
  background: linear-gradient(
    50deg,
    rgb(180, 180, 180) 0%,
    rgba(230, 230, 230) 10%,
    rgba(255, 255, 255) 20%,
    rgba(230, 230, 230) 30%,
    rgb(180, 180, 180) 40%,
    rgb(205, 205, 205) 50%,
    rgba(180, 180, 180) 60%,
    rgb(220, 220, 220) 70%,
    rgba(235, 235, 235) 80%,
    rgb(230, 230, 230) 90%,
    rgb(160, 160, 160) 100%
    
        /*rgba(4, 6, 56, 0.50) 50%,
    rgb(250, 204, 21, 0.50) 100%*/
  );
  border-width: 11px;
}
span.titleBall{
  color:black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(180, 180, 180, 0.9);
}
td.titleBall{
  color:black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(180, 180, 180, 0.5);
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
    border-bottom: 3px double rgba(100, 100, 100, 0.7);
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
/*div{
  color:rgba(4, 6, 56)
}*/
</style>
