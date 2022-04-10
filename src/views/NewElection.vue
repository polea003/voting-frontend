<!-- TODO: Delete Candiate Button. Logic to make sure First and Last Name Entered in Input -->
<template>
  <div id="app">
    <form v-on:submit="addProduct">
      <div class="flex flex-col items-center">
        <h1 class="text-5xl font-extrabold m-5">New Election</h1>
        <span class="font-bold font-sans text-5xl m-2"> {{ club }}</span>
        <div class="pt-2 text-xl font-extrabold underline">Election Name</div>
        <input
          type="name"
          v-model="text"
          placeholder="Election Name"
          class="w-64 h-8 border-2 border-blue-900 rounded px-2"
        />
        <div class="pt-4 text-xl font-extrabold underline">Position</div>
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

      <div class="pt-4 text-xl font-extrabold underline">Candidates</div>
      <!-- <component v-bind:is="NewElectionForm"></component> -->
      <div class="flex flex-wrap justify-center ">
      <div class="flex flex-col justify-center ">
        <div
          v-for="(FirstName, index) in FirstName"
          v-bind:key="FirstName"
          class="canCard mb-6 mt-2 py-2 border-8 border-gray-200 rounded-2xl w-96 
          hover:shadow-xl hover:border-yellow-300 font-medium"
        >
        <div class="font-bold text-xl pb-2">Candidate: {{index + 1}}</div> 
          <div class="flex flex-row justify-center">
            <Form :validation-schema="schema">
              <div v-if="!successful">
                <div class="mb-6 mx-2">
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

            <Form :validation-schema="schema">
              <div v-if="!successful">
                <div class="mb-6 mx-2">
                  <div>
                    <label for="LastName" class="font-bold">Last Name</label>
                  </div>
                  <Field
                    name="LastName"
                    type="text"
                    v-model="LastName[index].value"
                    class="form-control border-2 border-blue-900 rounded w-36"
                  />
                  <div>
                    <ErrorMessage name="LastName" class="error-feedback" />
                  </div>
                </div>
              </div>
            </Form>
          </div>
          <!-- Text Input -->
          <!--<div>
                <p class="mb-2 text-gray-600">Enter text for the candidate in the box below.<br>
                  Only 305 characters can be entered.<br>
                  When completed click the Submit button.
                </p>
              </div>-->
          <div class="flex felx-wrap justify-center">
            <div class="">
              <div class="">
                <div>
                  <label class="font-bold">Description Profile</label>
                </div>
                <div class="flex flex-wrap">
                  <textarea
                    v-model="UserProfile[index].value"
                    placeholder="Maximum 305 characters"
                    class="textInput border-2 rounded border-blue-900 resize-y"
                    v-on:keyup="check(index)"
                  >
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <button
        type="button"
        class="
          bg-blue-600
          border-8 border-gray-200
          hover:border-blue-400 hover:bg-blue-900

          text-white
          font-bold
          py-2
          px-4
          rounded-full
          mb-3
        "
        @click="add()"
      >
        Add Candidate
      </button>
      <div class="pt-4 text-xl font-extrabold underline">Date/Time</div>
      <div class="pt-2 font-bold">Election Starts:</div>
      <div class="flex justify-center">
        <datepicker
          class="picker z-0 border-2 border-blue-900 rounded"
          v-model="startTime"
        />
      </div>
      <div class="pt-4 font-bold">Election Ends</div>
      <div class="flex justify-center">
        <datepicker
          class="picker z-0 border-2 border-blue-900 rounded"
          v-model="endTime"
        />
      </div>
      <div class="flex flex-wrap justify-center">
        <button
          @click="
            goback(
              text,
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
          <span v-show="loading" class="animate-spin"></span>
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
      text: "",
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
    imageSrc(index) {
      if (!this.profileImageId[index]) {
        //|| typeof index === 'undefined'
        return "//ssl.gstatic.com/accounts/ui/avatar_2x.png";
      }
      return `http://localhost:5000/api/upload/files/${this.profileImageId[index]}`;
    },
  },
  methods: {
    check: function (i) {
      this.UserProfile[i].value = this.UserProfile[i].value.substring(0, 306);
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
      text,
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
        if (UserProfile[i].value == "") {
          UserProfile[i].value = "Candidate Description was NOT Entered.";
        }
        i++;
      }

      ElectionService.createElection(
        text,
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
    submitProfile(UserProfile, i) {
      this.UserProfile[i].value = UserProfile.value;
      this.popUpOpen = false;
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
.textInput {
  width: 325px;
  height: 60px;
  max-height: 388px;
  min-height: 30px;
}
.file-look {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 69%;
}
.picker{
  width: 325px;
}
.hover\:shadow-xl:hover {
    --tw-shadow: 0 25px 50px 0px rgba(251, 191, 36, 0.95);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.canCard{ 
  background: linear-gradient(
    45deg,
    rgb(180, 180, 180) 0%,
    rgba(230, 230, 230) 10%,
    rgba(255, 255, 255) 20%,
    rgba(230, 230, 230) 30%,
    rgb(180, 180, 180) 40%,
    rgb(205, 205, 205) 50%,
    rgba(180, 180, 180) 60%,
    rgb(220, 220, 220) 70%,
    rgba(235, 235, 235) 80%,
    rgb(230, 230, 230) 90%,
    rgb(160, 160, 160) 100%
    
        /*rgba(4, 6, 56, 0.50) 50%,
    rgb(250, 204, 21, 0.50) 100%*/
  );
  border-width: 11px;
}
</style>
