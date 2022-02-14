<template>
  <div class="m-5">
    <div id="Election" class="my-5 border-gray-500 border-4 rounded-xl">
      <div class="mt-5 mb-5">
        <span class="font-serif font-bold text-3xl">{{
          election.Poisition
        }}</span>
      </div>

      <table width="370">
        <!--
      <div v-for="DivNumber in DivNumber" v-bind:key="DivNumber">
      <tr class="border border-green-600" v-if="DivNumber === 1">-->
        <tr>
          <td class="font-serif text-xl font-bold">First</td>
          <div v-for="FirstName in election.FirstName" v-bind:key="FirstName">
            <td
              height="60"
              class="py-3 font-serif text-lg overflow-hidden truncate"
            >
              {{ FirstName.value }}
            </td>
          </div>
        </tr>

        <tr>
          <!--<div v-if="DivNumber === 2">-->
          <td class="font-serif text-xl font-bold">Last</td>
          <div v-for="LastName in election.LastName" v-bind:key="LastName">
            <td
              height="60"
              class="py-3 font-serif text-lg overflow-hidden truncate"
            >
              {{ LastName.value }}
            </td>
          </div>
        </tr>

        <tr>
          <!--Vote Button-->
          <!--<div v-if="DivNumber === 3">-->
          <td class="font-serif text-xl font-bold">&nbsp;</td>
          <div
            v-for="NumberOfCandidates in election.NumberOfCandidates"
            v-bind:key="NumberOfCandidates"
          >
            <td height="60">
              <!--:disabled="disableBtnFlag==true" -->
              <button
                @click="
                  isOpen = true;
                  canident = NumberOfCandidates;
                  fullName =
                    election.FirstName[canident - 1].value +
                    ' ' +
                    election.LastName[canident - 1].value;
                "
                class="
                  font-serif font-bold
                  text-lg text-white
                  w-full
                  h-full
                  bg-gradient-to-r
                  from-blue-400
                  to-blue-800
                  rounded-md
                  border-4
                  hover:from-yellow-400
                  hover:to-yellow-700
                  hover:text-black
                  hover:border-current
                "
                type="button"
              >
                Vote
              </button>
              <div
                v-show="isOpen"
                class="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-gray-700 bg-opacity-50
                "
              >
                <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
                  <div class="flex justify-center">
                    <h3 class="text-2xl">Please Confrim</h3>
                  </div>
                  <div class="mt-4">
                    <div class="mb-5">
                      Are you sure you want to vote for: {{ fullName }}?
                    </div>
                    <button
                      @click="isOpen = false"
                      class="
                        px-6
                        py-2
                        text-blue-800
                        border border-blue-600
                        rounded
                      "
                    >
                      Cancel
                    </button>

                    <button
                      class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded"
                      @click="ProcessVote(election._id, canident)"
                    >
                      Vote
                    </button>
                  </div>
                </div>
              </div>
            </td>
          </div>
        </tr>

        <tr>
          <div>
            <!--<div v-if="DivNumber === 4">-->
            <td class="font-serif text-xl font-bold">Votes</td>
            <div v-for="Vote in election.Vote" v-bind:key="Vote">
              <td height="60">
                <div class="py-3 font-serif text-lg">{{ Vote.value }}</div>
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
              font-serif font-bold
              text-xl
              w-full
              h-16
              bg-gradient-to-r
              from-red-300
              to-red-500
              hover:from-red-500 hover:to-red-800 hover:text-white
              border-8 border-current
            "
          >
            Delete
          </button>
        </div>
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
import { ref } from "vue";
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
      //DivNumber: 4,
      disableBtnFlag: false,

      // passed to ProcessVote() for correct element position for CanidateNumber when incrementing vote count
      canidate: "",
      // string displayed to user in popup when voting, uses canidate for element postion
      fullName: "",
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
      //added flag rise and cnt increment to signal to disable Vote button
      //if (!this.disableBtnFlag) {
      //this.disableBtnFlag = true;

      this.$emit("Update");
      ElectionService.UpdateElection(id, Canadent_number);
      this.isOpen = false; // closes popup window
      //}
    },

    /*DivCoutner() {
      this.DivNumber++;
    },*/
  },
  setup() {
    let isOpen = ref(false);
    return { isOpen };
  },
};
</script>


<style scoped>
#Election {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(221, 221, 221, 1) 50%,
    rgb(201, 201, 201) 100%
  );
}

/* Changes Format from building Table from Rows to Columns*/
table {
  display: table;
  border: none;
  border-collapse: collapse;
}
table tr {
  display: table-cell;
}
table td {
  white-space: pre;
  border-bottom: 3px solid #000;
}
table tr td {
  display: block;
}
</style>
