<!-- CURRENTLY NOT IMPLEMENTED, TODO (maybe) GET WORKING IN ELECTION COMPONENT-->
<!-- Button used in Election Component when clicking "Vote" button-->
<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div
        v-if="selectedVote && index === selectedVote - 1"
        class="
          w-full
          h-full
          font-bold
          rounded-md
          bg-gradient-to-r
          border-4 border-black
          text-base
        "
        :class="{
          'from-blue-300 to-blue-600':
            loadingBlockchainVotes || loadingDatabaseVotes,
          'from-green-300 to-green-600':
            !loadingBlockchainVotes && !loadingDatabaseVotes,
        }"
      >
        {{
          loadingBlockchainVotes || loadingDatabaseVotes
            ? "Processing"
            : "Confirmed"
        }}
      </div>
      <div
        v-else
        @click="!selectedVote ? confirmVote(index) : {}"
        class="
          w-full
          h-full
          font-bold
          rounded-md
          bg-gradient-to-r
          from-blue-200
          to-blue-600
          border-4 border-black
        "
        :class="{
          'opacity-20': selectedVote,
          'cursor-pointer hover:from-yellow-200 hover:to-yellow-600':
            !selectedVote,
        }"
      >
        {{ "Vote" }}
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
        <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Please Confirm Selection</h3>
          </div>
          <div class="mt-4">
            <div class="mb-5">
              Are you sure you want to vote for:
              {{
                `${election.FirstName[index].value} ${election.LastName[index].value}`
              }}?
            </div>
            <button
              @click="confirmationOpen = false"
              class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
            >
              Cancel
            </button>

            <button
              @click="ProcessVote()"
              class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded"
            >
              Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ElectionService from "../services/ElectionService";

export default {
  name: "VoteBtn",
  components: {},
  props: {
    electionId: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    selectedVote: {
      type: String,
      required: true,
    },
    loadingDatabaseVotes: {
      type: Boolean,
      required: true,
    },
    loadingBlockchainVotes: {
      type: Boolean,
      required: true,
    },
    confirmationOpen: {
      type: Boolean,
      required: true,
    },
    voteToConfirm: {
      type: undefined,
      required: true,
    },
    canident: {
      type: Number,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    blockchainVotes: {
      type: Array,
      required: true,
      default: new Array(),
    },
  },
  methods: {
    async ProcessVote() {
      this.confirmationOpen = false;
      this.loadingDatabaseVotes = true;
      this.loadingBlockchainVotes = true;
      //this.selectedVote = Canadent_number
      await ElectionService.UpdateElection(this.electionId, this.canident);
      this.isOpen = false; // closes popup window
      alert("Your Vote was Counted");
      this.$emit("Update");
    },
    confirmVote(index) {
      this.voteToConfirm = index;
      this.confirmationOpen = true;
    },
  },
  data() {
    return {
      voteToConfirm: undefined,
      loadingDatabaseVotes: true,
      loadingBlockchainVotes: true,
      confirmationOpen: false,
      selectedVote: null,
    };
  },
  watch: {
    blockchainVotes: function () {
      this.loadingBlockchainVotes = false;
    },
    election: function () {
      this.loadingDatabaseVotes = false;
    },
  },
  setup() {
    let isOpen = ref(false);
    return { isOpen };
  },
};
</script>