<!-- Button used in Election Component when clicking "Vote" button-->
<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <button
        @click="isOpen = true"
        class="
          mt-2
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
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Please Confirm Selection</h3>
          </div>
          <div class="mt-4">
            <div class="mb-5">
              Are you sure you want to vote for: {{ fullName }}?
            </div>
            <button
              @click="isOpen = false"
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
  props: {
    electionId: {
      type: String,
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
  },
  methods: {
    ProcessVote() {
      this.$emit("Update");
      ElectionService.UpdateElection(this.electionId, this.canident);
      this.isOpen = false; // closes popup window
      alert("Your Vote was Counted");
    },
  },
  data() {
    return {

    };
  },

  setup() {
    let isOpen = ref(false);
    return { isOpen };
  },
};
</script>