<template>
  <div class="election-Dashboard">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App test"/> -->
    
    <!-- Local Title Header-->
    <h1 class="text-5xl font-bold text-gray-500 m-5">Election Dashboard</h1>
    <div class="w-full h-full">
      <div class="flex flex-col items-center">
        <div v-if="clubName" class="text-3xl font-bold mt-2">{{clubName}}</div>
        <div v-if="clubName"
            class="
              flex
              text-white
              items-center
              justify-center
              w-64
              h-16
              m-4
              bg-gradient-to-r
              from-blue-800
              to-blue-800
              hover:from-yellow-300 hover:to-yellow-600
              font-bold
              cursor-pointer
              rounded-full
              border-8 border-inherit
            "
          >
            <div class="font-bold text-xl">
              <router-link :to="{ name: 'NewElection', params: { club: clubName } }"
                >New Election</router-link
              >
            </div>
          </div>
          
        <div class="flex flex-col text-3xl font-bold mt-4">Active Elections</div>
        <div class="flex flex-wrap justify-center">

          <div v-for="election in !clubName ? elections : elections.filter( election => election.club === clubName)" :key="election._id">
            <ElectionComponent class="hover:shadow-2xl" :election="election" :blockchainVotes="blockchainVotes.filter(vote => vote.electionId === election._id)" @update="fetchElectionsAndBlockchainVotes()"/>
          </div>


        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import ElectionComponent from '@/components/ElectionComponent.vue'
import ElectionService from '../services/ElectionService'
//import ElectionCompUser from '../components/ElectionCompUser.vue'

export default {
  // name: 'Election-Dashboard',
  //inject:['adminFlag'],
  components: {
    ElectionComponent,
    //ElectionCompUser,
  },
  props: {
    clubName: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      elections: [],
      error: undefined,
      blockchainVotes: []
    }
  },
  async created() {
    await this.fetchElectionsAndBlockchainVotes()
  },
  methods: {
    async fetchElectionsAndBlockchainVotes () {
      await this.fetchElections()
      await this.getBlockchainVotes()
    },
    async fetchElections () {
      try {
        this.elections = await ElectionService.getElections()
      } catch(err) {
        this.error = err.message
      }
    },
    async getBlockchainVotes() {
      let votes = await ElectionService.getBlockchainVotes()
      votes = votes.data
      this.blockchainVotes = votes
    },
  }
}
</script>
