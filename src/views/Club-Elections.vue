
<template>
<div class="w-full h-full">
      <div class="flex flex-col">
          <div class="flex justify-center">
  <div class="w-64 h-64 border-blue-500 border-4 rounded m-5">
      <router-link to="/SHPE"><img :src="require('../assets/SHPE.png')"/></router-link>
      
            <div class='flex flex-col h-full items-center'>
              <div class='font-bold my-2'></div>
              <div class='flex flex-col text-small font-bold flex-1'>
                
              </div>
            </div>
  </div>
    <div class="w-60 h-64 border-blue-500 border-4 rounded m-5">
            <div class='flex h-full items-center'>
             <router-link to="/election"><img :src="require('../assets/swe.png')"/></router-link>
            </div> 
           
  </div>
    <div class="w-60 h-64 border-blue-500 border-4 rounded m-5" >
            <div class='flex h-full items-center'>
                 <router-link to="/election"><img :src="require('../assets/aero.png')"/></router-link>
            </div>
  </div>
      </div>
        </div>
            </div>
</template>