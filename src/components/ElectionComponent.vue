<template>
  <div class="m-5">
    <div id="Election" class="my-5 border-gray-500 border-4 rounded-xl">
      <div class="mt-5 mb-5">
        <span class="font-serif font-bold text-3xl">{{
          election.Poisition
        }}</span>
      </div>

      <table width="370">
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
          <td class="font-serif text-xl font-bold">&nbsp;</td>
          <div
            v-for="NumberOfCandidates in election.NumberOfCandidates"
            v-bind:key="NumberOfCandidates"
          >
            <td height="60">
              <Vote-btn
                :canident="NumberOfCandidates"
                :electionId="election._id"
                :fullName="
                  election.FirstName[NumberOfCandidates - 1].value +
                  ' ' +
                  election.LastName[NumberOfCandidates - 1].value
                "
                @Update="$emit('Update')"
              >
              </Vote-btn>
            </td>
          </div>
        </tr>

        <tr>
          <div>
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
</template>

<script>
import ElectionService from "../services/ElectionService";
import { ref } from "vue";
import VoteBtn from "./VoteBtn.vue";

export default {
  components: {
    VoteBtn,
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
      error: "",
      text: "",
      // passed to ProcessVote() for correct element position for CanidateNumber when incrementing vote count
      canident: 0,
      // string displayed to user in popup when voting, uses canidate for element postion
      fullName: "",
    };
  },
  methods: {
    toggleUser() {},
    deleteElection(id) {
      this.$emit("Update");
      ElectionService.deletePost(id);
    },
    createElection(id) {
      ElectionService.createElection(id);
    },
    /*ProcessVote(id, Canadent_number) {
      this.$emit("Update");
      ElectionService.UpdateElection(id, Canadent_number);
      this.isOpen = false; // closes popup window
      alert("Your Vote was Counted");
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
