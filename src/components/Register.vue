<template>
  <div class="register mt-5 text-2xl font-bold">
    <h1 class="text-5xl font-bold m-5">Sign Up </h1>
    <img
      id="profile-img"
      :src="imageSrc"
      class="profile-img-card"
    />
    <Form @submit="handleRegister" :validation-schema="schema">
      <div v-if="!successful">
        
        <div class="form-group mb-6">
          <div>
          <label for="username" class="font-bold">Name</label>
          </div>
          <Field name="username" type="text" placeholder="NameName" class="form-control w-96 h-10 border-2 border-blue-800 rounded px-2" />
          <div>
            <ErrorMessage name="username" class="error-feedback" />
          </div>
        </div>
        <div class="form-group mb-6">
          <div>
          <label for="email" class="font-bold">Email</label>
          </div>
          <Field name="email" type="email" placeholder="JohnDoe@fiu.edu" class="form-control w-96 h-10 border-2 border-blue-800 rounded px-2" />
          <div>
            <ErrorMessage name="email" class="error-feedback" />
          </div>
        </div>
        <div class="form-group mb-6">
          <div>
          <label for="password" class="font-bold">Password</label>
          </div>
          <Field name="password" type="password" placeholder="Password123" class="form-control w-96 h-10 border-2 border-blue-800 rounded px-2" />
          <div>
            <ErrorMessage name="password" class="error-feedback" />
          </div>
        </div>

        <div class="form-group mb-6 flex w-full justify-center">
          <div class="custom-file flex flex-col mb-3">
            <label for="file" class="custom-file-label font-bold">Choose Profile Picture</label>
            <input type="file" name="pic" id="upload" class="w-60 pl-4 mt-2" ref="input">
          </div>
        </div>



        <div class="form-group">
          <div class="flex justify-center">
            <div class="flex h-full justify-center">
              <button
                class="
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-white text-3xl
                  w-64
                  h-16
                  m-4
                  cursor-pointer
                  rounded-full
                  border-8 border-inherit
                  bg-gradient-to-r
                  from-blue-400
                  to-blue-800
                  hover:from-yellow-300
                  hover:to-yellow-600
                  hover:border-black
                  hover:text-black
                "
                :disabled="loading"
              >
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Form>
    <div
      v-if="message"
      class="alert"
      :class="successful ? 'alert-success' : 'alert-danger'"
    >
      {{ message }}
    </div>
  </div>
</template>
<script>
import PictureService from "../services/Picture.Service"
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),

      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
        
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
      profileImageId: undefined
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    imageSrc () {
      if (!this.profileImageId) {
        return '//ssl.gstatic.com/accounts/ui/avatar_2x.png'
      }
      return `http://localhost:5000/api/upload/files/${this.profileImageId}`
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        async (data) => {
          console.log(data)
          const myRenamedFile = new File([this.$refs.input.files[0]], data._id, { type: this.$refs.input.files[0].type  });
          let formData = new FormData()
          formData.append('file', myRenamedFile)
          await PictureService.uploadPicture(formData)
          this.message = data.message;
          this.successful = true;
          this.loading = false;
          this.profileImageId = data._id
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
<style scoped>
img {
  padding-top: 6px;
  padding-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 11%;
}
.error-feedback{
  color:red;
}
</style>