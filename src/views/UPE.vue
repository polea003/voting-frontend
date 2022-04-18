<template>
  <div>
    <div class="flex flex-col mx-64">
      <div class="text-xl font-bold my-5">UPE</div>
    </div>
    <div class="flex justify-center">
      <div
        class="
          w-64
          border-2 border-green-500
          rounded
          text-center
          font-bold
          py-2
          mb-4
          cursor-pointer
        "
      >
        <div class="flex h-full justify-center">
          <router-link :to="{ name: 'NewElection', params: { club: Name } }"
            >New Election</router-link
          >
        </div>
      </div>
    </div>
    <div class="home">
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App test"/> -->
      <div class="w-full h-full">
        <div class="flex flex-col">
          <div class="text-xl font-bold">Active Elections</div>
          <div class="flex justify-center">
            <div class="flex flex-wrap">
              <div v-for="election in elections" :key="election.club">
                <div v-if="election.club === Name">
                  <ElectionComponent :election="election" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import ElectionComponent from "@/components/ElectionComponent.vue";
import ElectionService from "../services/ElectionService";

export default {
  name: "UPE",
  components: {
    ElectionComponent,
  },
  data() {
    return {
      elections: undefined,
      error: undefined,
      Name: "UPE",
    };
  },
  async created() {
    try {
      this.elections = await ElectionService.getElections();
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>