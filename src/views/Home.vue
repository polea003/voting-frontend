<template>
  <div class="h-fit">
    <!-- Local Title Header-->
    <h1 class="text-5xl font-extrabold p-5">Home Page</h1>
    <!-- Welcome Message -->
    <h3 class="text-3xl font-bold m-6">Welcome to Panther Votes!</h3>
    <!-- Action Message -->
    <p class="text-2xl font-bold pb-4">
      Please 'Login' to vote.<br>If this is your first time here<br>please visit 'How It Works'
    </p>
    <!-- Login Button -->
    <div class="flex justify-center" v-if="!currentUser">
      <div class="flex h-full justify-center">
        <div
          class="
            PVbutton
            flex
            items-center
            justify-center
            font-bold
            text-white
            w-72
            h-16
            m-4
            cursor-pointer
            rounded-full
            border-8 border-inherit
            bg-gradient-to-r
            from-blue-600
            to-blue-900
            hover:from-yellow-300 hover:to-yellow-600
            hover:border-black
            hover:text-black
          "
        >
          <div class="font-bold text-3xl" >
            <router-link :to="{ name: 'login' }">Login Page</router-link>
          </div>
        </div>
      </div>
    </div>
        <div class="flex justify-center">
      <div class="flex h-full justify-center">
        <div
          class="
            PVbutton
            flex
            items-center
            justify-center
            font-bold
            text-white
            w-72
            h-16
            m-4
            mb-8
            cursor-pointer
            rounded-full
            border-8 border-inherit
            bg-gradient-to-r
            from-blue-600
            to-blue-900
            hover:from-yellow-300 hover:to-yellow-600
            hover:border-black 
            hover:text-black
          "
        >
          <div class="font-bold text-3xl">
            <router-link :to="{ name: 'How' }">How It Works</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
};
</script>
