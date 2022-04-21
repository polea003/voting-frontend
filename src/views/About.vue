<template>
   <div class="flex flex-wrap justify-center">
        <div class="flex flex-wrap justify-center">
            <h1 class="text-5xl font-extrabold p-5">How It Works</h1>
        </div>
        <div class="flex flex-wrap justify-center">
        <div @click="clickTyler();" class="p-3 w-72 h-72 bg-white border-gray-300 hover:border-yellow-400 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
            <div class = "font-bold text-lg text-black">Tyler Jas Salzberg 
              <img class =" object-cover w-48" :src="require(`../assets/Tyler.png`)">
            </div>
        </div>
           <div class="p-3 w-72 h-72 bg-white border-gray-300 hover:border-yellow-400 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
              <div class = "font-bold text-lg text-black"> Karl Urban
              <img class =" object-cover w-48" :src="require(`../assets/Karl.jpg`)">
          </div>
          </div>
           <div class="p-3 w-72 h-72 bg-white border-gray-300 hover:border-yellow-400 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
              <div class = "font-bold text-lg text-black"> Luis Hernandez
              <img class =" object-cover w-48" :src="require(`../assets/Luis.jpeg`)">
          </div>
          </div>
           <div class="p-3 w-72 h-72 bg-white border-gray-300 hover:border-yellow-400 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
              <div class = "font-bold text-lg text-black"> Patrick O'Leary
              <img class =" object-cover w-48" :src="require(`../assets/Pat.png`)">
          </div>
          </div>
           <div class="p-3 w-72 h-72 bg-white border-gray-300 hover:border-yellow-400 border-4 rounded-3xl m-5 shadow hover:shadow-2xl cursor-pointer flex flex-col justify-center items-center">
              <div class = "font-bold text-lg text-black"> Isabela Fernandez
              <img class =" object-cover w-48" :src="require(`../assets/Isa.jpeg`)">
          </div>
          </div>
        </div>
        <div
                v-show="popUp"
                class="
                  z-10
                  fixed
                  inset-0
                  w-screen
                  h-screen
                  flex
                  items-center
                  justify-center
                  bg-gray-700 bg-opacity-80
                "
              >
                <!-- Confirmation PopUp -->
                <div v-show="popUpText" class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-lg">
                  <!--Header for PopUp-->
                  <div class="flex justify-center">
                    <h3 class="text-2xl text-black">{{popUpText.name}}</h3>
                  </div>
                  <!-- Body for PopUp-->
                  <div class="my-4 text-black">
                    <!-- Display Name of Selection with message -->
                    <!-- Cancel vote selection button -->
                    <div>{{popUpText.degree}}</div>
                    <div>{{popUpText.concentrations}}</div>
                    <div>{{popUpText.email}}</div>
                    <div>{{popUpText.bio}}</div>
                    <div>{{popUpText.future}}</div>
                  </div>
                  <!-- Cancel vote selection button -->
                  <button
                    @click="popUp = false"
                    class="
                      font-bold
                      font-sans
                      text-xl
                      w-32
                      px-6
                      py-2
                      mx-6
                      mb-6
                      text-black
                      bg-red-100
                      border-4 border-red-400
                      rounded-full
                      hover:bg-red-600 hover:text-black hover:border-black
                      
                      
                    "
                  >
                    exit
                  </button>
                  <!-- Vote confirmation Button, Calls ProcessVote() function: updates vote count in mongoDB and blockchain -->
                </div>
              </div>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
  components: {
  },
  data() {
    return {
      popUp: false,
      popUpText: false,
    };
  },
  async created() {
  },
  methods: {
      clickTyler () {
          this.popUpText = {
              name: 'Tyler Salzberg',
              degree: 'Degree: BS Computer Engineering',
              concentrations: 'Concentrations: Cybersecurity, Embedded Systems',
              email: 'Email: lhern266@fiu.edu',
              bio: 'Bio: I will be graduating with my bachelors in computer engineering this spring. Music, running and video games are some of my favorite things to do outside of being an engineer.',
              future: 'Future Endeavors:  After graduation I will continue to search for a full-time position within Cybersecurity as well as working towards attaining the Security+ Certification'
          }
          this.popUp = true
      }
  }
};
</script>

<style scoped>
.hover\:shadow-2xl:hover {
    --tw-shadow: 0 25px 50px 10px rgba(251, 191, 36, 0.95);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

</style>