<template>
  <div class="election-Dashboard">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App test"/> -->
    <!-- Local Title Header-->
    <h1 class="text-5xl font-extrabold text-gray-500 m-5">Election Dashboard</h1>
    <div class="w-full h-full">
      <div class="flex flex-col items-center">
        <div v-if="clubName" class="text-5xl font-sans font-bold my-2">{{clubName}}</div>
        <div 
            class="
              flex
              text-white
              font-xl
              items-center
              justify-center
              w-72
              h-16
              m-4
              mb-6
              bg-gradient-to-r
              from-blue-600
              to-blue-900
              hover:from-yellow-300 hover:to-yellow-600
              hover:text-black
              hover:border-black
              font-bold
              cursor-pointer
              rounded-full
              border-8 border-gray-200
            "
          >
            <div class="font-bold text-2xl">
              <router-link :to="{ name: 'NewElection', params: { club: clubName } }"
                >New Election</router-link
              >
            </div>
          </div>
          
        <select v-model="electionFilter" class="form-select form-control border-2 border-blue-800 w-72 h-10 px-2 mb-4 rounded font-semibold text-center text-xl">
            <option value="active">Active Elections</option>
            <option value="upcoming">Upcoming Elections</option>
            <option value="past">Past Elections</option>
        </select>
        <div class="flex flex-wrap justify-center">

          <div v-for="election in !clubName ? filteredElections : filteredElections.filter( election => election.club === clubName)" :key="election._id">
            <ElectionComponent class="hover:shadow-2xl hover:border-yellow-400" :election="election" :blockchainVotes="blockchainVotes.filter(vote => vote.electionId === election._id)" @update="fetchElectionsAndBlockchainVotes()"/>
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
      electionFilter: 'active',
      elections: [],
      error: undefined,
      blockchainVotes: []
    }
  },
  async created() {
    await this.fetchElectionsAndBlockchainVotes()
  },
  computed: {
    filteredElections () {
      const currentTime = new Date().getTime()
      switch (this.electionFilter) {
        case 'active':
          return this.elections.filter(election => {
            if (election.startTime && (new Date(election.startTime)).getTime() > currentTime) return false
            if (election.endTime && (new Date(election.endTime)).getTime() < currentTime) return false
            return true
          })
        case 'upcoming':
          return this.elections.filter(election => election.startTime && new Date(election.startTime).getTime() > currentTime)
        case 'past':
        return this.elections.filter(election => election.endTime && new Date(election.endTime).getTime() < currentTime)
        default:
          return this.elections
      }
    }
  },
  methods: {
    async fetchElectionsAndBlockchainVotes () {
      await this.fetchElections()
      // await this.getBlockchainVotes()
      // setTimeout(async () => { await this.fetchElectionsAndBlockchainVotes() }, 2000);
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

<style scoped>
.hover\:shadow-2xl:hover {
    --tw-shadow: 0 25px 50px 10px rgba(251, 191, 36, 0.95);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
