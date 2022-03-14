<!-- Display Election History TODO doesn't do anything Yet, probably should make new file with better name -->
<template>
  <div class="voting-History">
    <!-- Local Title Header-->
    <h1 class="text-5xl font-bold m-5">Voting History</h1>

    <div class='flex flex-col mx-64'>

      <div class='flex w-full justify-between border-b py-1'>
        <div>Date</div>
        <div>Election Title</div>
        <div class='w-16'></div>
      </div>

      <div class='flex w-full justify-between border-b py-1'>
        <div>11/10/21</div>
        <div>UPE Special Election</div>
        <div class='border-2 border-green-500 rounded px-1'> View Results</div>
      </div>

      <div class='flex w-full justify-between border-b py-1'>
        <div>11/08/21</div>
        <div>Student Government</div>
        <div class='border-2 border-green-500 rounded px-1'> View Results</div>
      </div>

      <div class='flex w-full justify-between border-b py-1'>
        <div>11/02/21</div>
        <div>Class Survey</div>
        <button class='border-2 border-green-500 rounded px-1' @click="sayhello"> View Results</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
         methods: {
           sayhello(){
              alert('Go away');
              
           }
         }
    }
</script>