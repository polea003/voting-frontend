
<template>
  <div   class="w-full h-full">
    <div class="flex flex-col">
      <div class="flex items-center">
        
        <div id = "shpe" class=" w-64 h-64 border-blue-500 border-4 rounded m-5">
          <div class=" shadow hover:shadow-2xl">
          <router-link to="/SHPE"
            >
            <img :src="require('../assets/SHPE.png')"
            
          /></router-link>
        </div>
        </div>
        <div class="w-64 h-64 border-blue-500 border-4 rounded m-5" >

          <div class="flex h-full items-center">
            <router-link to="/SWE"
              ><img :src="require('../assets/swe.png')"
            /></router-link>
          </div>
        </div>
        <div class="w-64 h-64 border-blue-500 border-4 rounded m-5">
          <div class="flex h-full items-center">
            <router-link to="/AERO"
              ><img :src="require('../assets/aero.png')"
            /></router-link>
          </div>
        </div>
      </div>
      <div class="w-full h-full">
    <div class="flex flex-col">
      <div class="flex items-center">
          
        <div class="w-64 h-64 border-blue-500 border-4 rounded m-5">
          <div class="flex h-full items-center">
            <router-link to="/IEEE"
              ><img :src="require('../assets/IEEE.png')"
            /></router-link>
          </div>
        </div>
        <div class="w-64 h-64 border-blue-500 border-4 rounded m-5">
          <div class="flex h-full items-center">
            <router-link to="/ASCE"
              ><img :src="require('../assets/ASCE.png')"
            /></router-link>
          </div>
        </div>
        <div class="w-64 h-64 border-blue-500 border-4 rounded m-5">
          <div class="flex h-full items-center">
            <router-link to="/Motor"
              ><img :src="require('../assets/PMotor.png')"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
   
  </div>
</template>
