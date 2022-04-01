
<template>
  <div id="shpe">
    <div class="about">
      <div class="wrap-auto text-2xl text-center font-bold my-5">
        Society of Hispanic Professional Engineers
      </div>
      <div class="flex justify-center">
        <div class="flex h-full justify-center">
          <div
            class="
              flex
              text-white
              items-center
              justify-center
              w-64
              h-16
              m-4
              bg-gradient-to-r
              from-blue-600
              to-blue-900
              hover:from-yellow-300 hover:to-yellow-600
              font-bold
              cursor-pointer
              rounded-full
              border-8 border-inherit
            "
          >
            <div class="font-bold text-3xl">
              <router-link :to="{ name: 'NewElection', params: { club: Name } }"
                >New Election</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <div class="home">
        <div class="flex flex-col text-3xl font-bold mt-4">
          Active Elections
        </div>
        <div class="flex justify-center m-2">
          <div class="flex flex-wrap justify-center">
            <div v-for="election in elections" :key="election.club">
              <div v-if="election.club === Name">
                <ElectionComponent @Update="refresh()" :election="election" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <form @submit.prevent="submitForm"></form>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import ElectionComponent from "@/components/ElectionComponent.vue";
import ElectionService from "../services/ElectionService";

export default {
  name: "SHPE",
  components: {
    ElectionComponent,
  },
  data() {
    return {
      elections: undefined,
      error: undefined,
      Name: "SHPE",
      color: "#673AB7",
    };
  },
  async created() {
    try {
      this.elections = await ElectionService.getElections();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async refresh() {
      try {
        this.elections = await ElectionService.getElections();
       // window.location.reload();
        this.$mount
        //this.$forceUpdate

      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>
