<template>
   <div class="flex flex-wrap justify-center">
        <div class="flex flex-wrap justify-center">
            <h1 class="text-5xl font-extrabold p-5">How It Works</h1>
        </div>
        <div class="flex flex-wrap justify-center">
        <div class="p-3 w-72 h-72 bg-white border-gray-300 hover:border-yellow-400 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
            <div class = "font-bold text-lg">Tyler Jas Salzberg 
              <img class =" object-cover w-48" :src="require(`../assets/Tyler.png`)">
            </div>
        </div>
           <div class="p-3 w-72 h-72 bg-white border-gray-300 hover:border-yellow-400 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
              <div class = "font-bold text-lg"> Karl Urban
              <img class =" object-cover w-48" :src="require(`../assets/Karl.jpg`)">
          </div>
          </div>
           <div class="p-3 w-72 h-72 bg-white border-gray-300 hover:border-yellow-400 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
              <div class = "font-bold text-lg"> Luis Hernandez
              <img class =" object-cover w-48" :src="require(`../assets/Luis.jpeg`)">
          </div>
          </div>
           <div class="p-3 w-72 h-72 bg-white border-gray-300 hover:border-yellow-400 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
              <div class = "font-bold text-lg"> Patrick O'Leary
              <img class =" object-cover w-48" :src="require(`../assets/Pat.png`)">
          </div>
          </div>
           <div class="p-3 w-72 h-72 bg-white border-gray-300 hover:border-yellow-400 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
              <div class = "font-bold text-lg"> Isabela Fernandez
              <img class =" object-cover w-48" :src="require(`../assets/Isa.jpeg`)">
          </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
.hover\:shadow-2xl:hover {
    --tw-shadow: 0 25px 50px 10px rgba(251, 191, 36, 0.95);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

</style>