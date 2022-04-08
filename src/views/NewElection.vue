<!-- TODO: Delete Candiate Button. Logic to make sure First and Last Name Entered in Input -->
<template>
  <div id="app">
    <form v-on:submit="addProduct">
      <div class="flex flex-col items-center">
        <h1 class="text-5xl font-extrabold m-5">New Election</h1>
        <span class="font-bold text-3xl m-2"> Club: {{ club }}</span>
        <div class="pt-2 text-lg font-bold">Election Name</div>
        <input
          type="name"
          v-model="name"
          placeholder="Election Name"
          class="w-64 h-8 border-2 border-blue-900 rounded px-2"
        />
        <div class="pt-4 text-lg font-bold">Position</div>
        <div id="Drop">
          <select
            v-model="Position"
            class="
              form-select form-control
              border-2 border-blue-900
              w-72
              h-10
              px-2
              rounded
            "
          >
            <option value="undefined" disabled>Positions</option>
            <option value="President">President</option>
            <option value="Vice president">Vice president</option>
            <option value="Secretary">Secretary</option>
            <option value="Treasurer">Treasurer</option>
          </select>
        </div>
      </div>
      <div class="pt-4 text-lg font-bold">Candidates</div>
      <!-- Area to enter first and lastname -->
      <div class="flex justify-center">
        <!-- <component v-bind:is="NewElectionForm"></component> -->
        <div>
          <div
            v-for="FirstName in FirstName"
            v-bind:key="FirstName"
            class="mb-6 mr-2"
          >
            <Form :validation-schema="schema">
              <div v-if="!successful">
                <div class="form-group mb-6">
                  <div>
                    <label for="FirstName" class="font-bold">First Name</label>
                  </div>
                  <Field
                    name="FirstName"
                    type="text"
                    v-model="FirstName.value"
                    class="form-control border-2 border-blue-900 rounded w-36"
                  />
                  <div>
                    <ErrorMessage name="FirstName" class="error-feedback" />
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div>
          <div
            v-for="LastName in LastName"
            v-bind:key="LastName"
            class="mb-6 mr-2"
          >
            <Form :validation-schema="schema">
              <div v-if="!successful">
                <div class="form-group mb-6">
                  <div>
                    <label for="LastName" class="font-bold">Last Name</label>
                  </div>
                  <Field
                    name="LastName"
                    type="text"
                    v-model="LastName.value"
                    class="form-control border-2 border-blue-900 rounded w-36"
                  />
                  <div>
                    <ErrorMessage name="LastName" class="error-feedback" />
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div>
          <div
            v-for="(UserProfile, index) in UserProfile"
            v-bind:key="UserProfile"
            class="mb-6"
          >
            <div class="form-group mb-6">
              <div>
                <label class="font-bold">Profile</label>
              </div>
              <button
                @click="profilePopUp(index)"
                class="
                  addPro
                  bg-blue-600
                  hover:underline
                  hover:bg-blue-900
                  text-white
                  font-bold
                  rounded
                "
              >
                Add
              </button>

              <!-- Profile PopUp -->
              <div
                v-show="popUpOpen && profileToDisplay === index"
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
                <div class="w-96 p-6 mx-4 bg-white border-2 border-gray-300 rounded-md shadow-lg">
                  <!--Header for Popup-->
                  <div class="flex flex-col justify-center">
                    <h2 class="text-3xl font-extrabold mb-2 text-gray-600">Candidate Profile</h2>
                  </div>
                   <!-- <img
                      [src]="imageSrc(index)"
                      class="profile-img-card"
                    />-->
                  <div class="flex flex-col justify-center">
                  </div>
                  <!--<div>{{popUpOpen}} {{profileToDisplay}} {{index}}</div>-->
                  <!-- Text Input -->
                  <div>
                    <p class="mb-2 text-gray-600">Enter text for the candidate in the box below.<br>
                      Only 305 characters can be entered.<br>
                      When completed click the Submit button.</p>
                  </div>
                  <div class="control">
                    <textarea v-model="UserProfile.value" placeholder="Text box" 
                    class="textInput border-2 border-gray-300" v-on:keyup="check(index)">
                    </textarea>
                  </div>
                  <!-- Image Upload -->
                  <div class="flex flex-wrap justify-center mb-6 mt-6">
                    <div class="custom-file flex flex-col mb-3">
                      <label for="file" class="custom-file-label font-bold text-xl mb-1">Choose Profile Picture</label>
                      <input type="file" name="pic" id="upload" class="file-look" ref="input">
                    </div>
                  </div>
                  <!-- Submit Button -->
                  <div>
                    <button  
                      @click="submitProfile(UserProfile, index)"
                      class="
                      submit
                      mt-4
                      bg-blue-600
                      hover:bg-blue-900
                      border-4
                      border-blue-600
                      hover:border-blue-300
                      text-white
                      text-xl
                      font-bold
                      rounded
                    ">Submit
                    </button>
                  </div>
                  <!-- Close Popup-->
                  <button
                    @click="popUpOpen = false"
                    class="
                      font-bold
                      text-2xl
                      text-red-700
                      w-12
                      mx-6
                      mt-4
                      bg-red-100
                      border-4 border-red-700
                      rounded-full
                      hover:bg-red-500 hover:text-black hover:border-black
                    "
                    >X
                  </button>
                </div>
              </div>
              <!--^^^End of Popup -->
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="
          bg-blue-600
          border-4
          border-blue-600
          hover:border-blue-400
          hover:bg-blue-900
          hover:underline
          text-white
          font-bold
          py-2
          px-4
          rounded
          mb-3
        "
        @click="add()"
      >
        Add Candidate
      </button>

      <div class="pt-2 font-bold">Date/Time Voting Starts:</div>
      <div class="flex justify-center">
        <datepicker class="picker w-72 z-0 border-2 border-blue-900 rounded" v-model="startTime" />
      </div>
      <div class="pt-4 font-bold">Date/Time Voting Ends:</div>
      <div class="flex justify-center">
        <datepicker class="picker w-72 z-0 border-2 border-blue-900 rounded" v-model="endTime" />
      </div>
      <div class="flex flex-wrap justify-center">
        <button
          @click="
            goback(
              name,
              club,
              Candidate1FirstName,
              Candidate1LastName,
              Candidate2FirstName,
              Candidate2LastName,
              Position,
              Vote1,
              Vote2,
              FirstName,
              LastName,
              FullName,
              NumberOfCandidates,
              Vote,
              startTime,
              endTime,
              UserProfile
            )
          "
          class="
            flex
            items-center
            justify-center
            font-bold
            text-white text-3xl
            w-72
            h-16
            m-6
            mt-8
            cursor-pointer
            rounded-full
            border-8 border-inherit
            bg-gradient-to-r
            from-blue-600
            to-blue-900
            hover:from-yellow-300
            hover:to-yellow-600
            hover:border-black
            hover:text-black
          "
          :disabled="loading"
        >
          <span
            v-show="loading"
            class="animate-spin"
          ></span>
          Create Election
        </button>
      </div>
    </form>

    <!-- <p>Message is: {{ club }}</p>         -->

    <!-- <navbar />  -->
  </div>
</template>

<script>
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";
import ElectionService from "../services/ElectionService";
import router from "../router";
//import PictureService from "../services/Picture.Service"
// import Navbar from '../components/Navbar.vue';
//const Comp = {template: '<div>Hello world</div>'}
/* const Form = {

  render(){return(`<form @submit.prevent="submitForm">
     <span>Candidate 3:      </span>    
    <input type="Candidate2FirstName" v-model="Candidate2FirstName" placeholder="First Name">
    <input type="Candidate2LastName" v-model="Candidate2LastName" placeholder="Last Name">
  </form>`)
}}; */
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "NewElection",
  components: {
    // Form
    Datepicker,

    Form,
    Field,
    ErrorMessage,
  },
  el: "#app",
  data: function () {

    const schema = yup.object().shape({
      FirstName: yup
        .string()
        .required("Username is required!")
        .max(20, "Must be maximum 20 characters!"),
      LastName: yup
        .string()
        .required("Username is required!")
        .max(20, "Must be maximum 20 characters!"),
    });
    return {
      name: "",
      Candidate1FirstName: "",
      Candidate1LastName: "",
      Candidate2FirstName: "",
      Candidate2LastName: "",
      Position: "",
      Vote1: 0,
      Vote2: 0,
      NumberOfCandidates: 0,
      FirstName: [],
      LastName: [],
      FullName: [],
      Vote: [],
      startTime: new Date(),
      endTime: null,
      successful: false,
      loading: false,
      message: "",
      schema,
      UserProfile: [],
      popUpOpen: false,
      profileToDisplay: undefined,
      profileImageId: [],
    };
  },
  computed: {
    imageSrc (index) {
      if (!this.profileImageId[index] ) { //|| typeof index === 'undefined'
        return '//ssl.gstatic.com/accounts/ui/avatar_2x.png'
      }
      return `http://localhost:5000/api/upload/files/${this.profileImageId[index]}`
    }
  },
  methods: {
    check: function(i){
      this.UserProfile[i].value = this.UserProfile[i].value.substring(0,306);
      //console.log(this.UserProfile[i].value)
    },
    add() {
      //console.log(this.components)
      //this.components.push(Comp)
      this.NumberOfCandidates++;
      this.Vote.push({ value: 0 });
      this.FirstName.push({ value: "" });
      this.LastName.push({ value: "" });
      this.FullName.push({ value: "" });
      this.UserProfile.push({ value: "" });
    },
    /* sub(){
      this.NumberOfCandidates--
      this.Vote.pop({value: 0})
      this.FirstName.pop({ value: '' });
      this.LastName.pop({value: ''});
    },*/
    goback(
      name,
      club,
      Candidate1FirstName,
      Candidate1LastName,
      Candidate2FirstName,
      Candidate2LastName,
      Position,
      Vote1,
      Vote2,
      FirstName,
      LastName,
      FullName,
      NumberOfCandidates,
      Vote,
      startTime,
      endTime,
      UserProfile
    ) {

      console.log(NumberOfCandidates);
      var i = 0;

      while (i < NumberOfCandidates) {
        if (FirstName[i].value == "" || LastName[i].value == "") {
          throw Error;
        } else {
          //Used to pass first and last name as a string into a arrray
          let str = FirstName[i].value.concat(" ", LastName[i].value);
          console.log(str);
          FullName[i].value = str;
          //console.log(FullName[i].value)
        }
        if (UserProfile[i].value == ""){
          UserProfile[i].value = "Candidate Description was NOT Entered.";
        }
        i++;
      }

      ElectionService.createElection(
        name,
        this.club,
        Candidate1FirstName,
        Candidate1LastName,
        Candidate2FirstName,
        Candidate2LastName,
        Position,
        Vote1,
        Vote2,
        FirstName,
        LastName,
        FullName,
        NumberOfCandidates,
        Vote,
        startTime,
        endTime,
        UserProfile
      );
      this.$router.push({
        name: "Club-Election-Dashboard",
        params: { club: club },
      });
    },
    profilePopUp(i) {
      this.profileToDisplay = i;
      this.popUpOpen = true;
      //console.log(this.profileToDisplay);
      //console.log(this.popUpOpen);
    },
    submitProfile(UserProfile,i){
      this.UserProfile[i].value = UserProfile.value
      this.popUpOpen = false
    },
  },
  //end of methods
  created() {
    this.club = router.currentRoute.value.params.club;
  },
  handleinput() {},
};

/*
    <form @submit.prevent="submitForm">
     <span>Candidate 1:      </span>    
    <!-- username input -->
    <input type="Candidate1FirstName" v-model="Candidate1FirstName" placeholder="First Name">

    <!-- email input -->
    <input type="Candidate1LastName" v-model="Candidate1LastName" placeholder="Last Name">

    
    

  </form>
  <form @submit.prevent="submitForm">
     <span>Candidate 2:      </span>    
    <!-- username input -->
    <input type="Candidate2FirstName" v-model="Candidate2FirstName" placeholder="First Name">

    <!-- email input -->
    <input type="Candidate2LastName" v-model="Candidate2LastName" placeholder="Last Name">

    
    

  </form>
    */
</script>

<style scoped>
.error-feedback {
  color: red;
}
.form-control {
  width: 150px;
  height: 25px;
}
input {
  text-align: center;
}
.addPro {
  width: 100px;
  height: 25px;
}
.submit {
  width: 100px;
  height: 35px;
}
.textInput{
  width: 300px;
  height: 300px;
}
.file-look{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 69%;
}
</style>
