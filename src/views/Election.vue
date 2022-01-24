<template>
  <div class="election">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App test"/> -->

    <div id="nav">
      <router-link to="/results">Results</router-link>
    </div>
    <router-view />

    <div class="w-full h-full">
      <div class="flex flex-col">
        <div class="text-xl font-bold">Active Elections</div>
        <div class="flex justify-center">

          <div class="w-48 h-64 border-green-500 border-4 rounded m-5">
            <div class='flex flex-col h-full items-center'>
              <div class='font-bold my-2'>UPE General Election</div>
              <div class='flex flex-col text-small font-bold flex-1'>
                <div>- 6 positions</div>
                <div>- 18 canidates</div>
                <div>- 2 proposals</div>
              </div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>More Info</div>
              <router-link to="/election" class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>Vote</router-link>
            </div>
          </div>

          <div class="w-48 h-64 border-green-500 border-4 rounded m-5">
            <div class='flex flex-col h-full items-center'>
              <div class='font-bold my-2'>Student Government</div>
              <div class='flex flex-col text-small font-bold flex-1'>
                <div>- 9 positions</div>
                <div>- 21 canidates</div>
                <div>- 3 proposals</div>
              </div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>More Info</div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>Vote</div>
            </div>
          </div>

          <div class="w-48 h-64 border-green-500 border-4 rounded m-5">
            <div class='flex flex-col h-full items-center'>
              <div class='font-bold my-2'>School Survey</div>
              <div class='flex flex-col text-small font-bold flex-1'>
                <div>- 8 proposals</div>
              </div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>More Info</div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>Vote</div>
            </div>
          </div>

        </div>
        <div class="text-xl font-bold">Upcoming Elections</div>
        <div class="flex justify-center">

          <div class="w-48 h-64 border-green-500 border-4 rounded m-5">
            <div class='flex flex-col h-full items-center'>
              <div class='font-bold my-2'>Club Special Election</div>
              <div class='flex flex-col text-small font-bold flex-1'>
                <div>- 1 position</div>
                <div>- 2 canidates</div>
              </div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>More Info</div>
              <div class='w-32 rounded text-center font-bold py-2 mb-4'>Vote on 12/15</div>
            </div>
          </div>

          <div class="w-48 h-64 border-green-500 border-4 rounded m-5">
            <div class='flex flex-col h-full items-center'>
              <div class='font-bold my-2'>School Initiatives</div>
              <div class='flex flex-col text-small font-bold flex-1'>
                <div>- 9 proposals</div>
              </div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>More Info</div>
              <div class='w-32 rounded text-center font-bold py-2 mb-4'>Vote on 12/15</div>
            </div>
          </div>

          <div class="w-48 h-64 border-green-500 border-4 rounded m-5">
            <div class='flex flex-col h-full items-center'>
              <div class='font-bold my-2'>Student Survey</div>
              <div class='flex flex-col text-small font-bold flex-1'>
                <div>- 9 proposals</div>
              </div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>More Info</div>
              <div class='w-32 rounded text-center font-bold py-2 mb-4'>Vote on 12/18</div>
            </div>
          </div>

        </div>
        <div class="text-xl font-bold">Election Results</div>
        <div class="flex justify-center">

          <div class="w-48 h-64 border-green-500 border-4 rounded m-5">
            <div class='flex flex-col h-full items-center'>
              <div class='font-bold my-2'>Team Captain</div>
              <div class='flex flex-col text-small font-bold flex-1'>
                <div>- 1 position</div>
                <div>- 21 canidates</div>
              </div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>More Info</div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>View Results</div>
            </div>
          </div>
          
          <div class="w-48 h-64 border-green-500 border-4 rounded m-5">
            <div class='flex flex-col h-full items-center'>
              <div class='font-bold my-2'>Club Election</div>
              <div class='flex flex-col text-small font-bold flex-1'>
                <div>- 9 positions</div>
                <div>- 21 canidates</div>
                <div>- 3 proposals</div>
              </div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>More Info</div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>View Results</div>
            </div>
          </div>

          <div class="w-48 h-64 border-green-500 border-4 rounded m-5">
            <div class='flex flex-col h-full items-center'>
              <div class='font-bold my-2'>Class Questionaire</div>
              <div class='flex flex-col text-small font-bold flex-1'>
                <div>- 3 proposals</div>
              </div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>More Info</div>
              <div class='w-32 border-2 border-green-500 rounded text-center font-bold py-2 mb-4 cursor-pointer'>View Results</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

