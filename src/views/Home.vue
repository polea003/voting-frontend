<template>
  <div class="election-Dashboard">
    <div class="text-3xl font-bold m-6">Welcome to Panther Votes!</div>
    <div class="text-lg font-bold mb-6">
      Please login to vote or create elections.
    </div>
    <div class="flex justify-center">
      <div class="flex h-full justify-center">
        <div
          class="
            flex
            items-center
            justify-center
            font-bold
            text-white
            w-64
            h-16
            m-4
            cursor-pointer
            rounded-full
            border-8 border-inherit
            bg-gradient-to-r
            from-blue-400
            to-blue-800
            hover:from-yellow-300 hover:to-yellow-600
            hover:border-black 
            hover:text-black
          "
        >
          <div class="font-bold text-3xl">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



