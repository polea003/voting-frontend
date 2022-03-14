<template>
   <div class="col-md-12 flex flex-col justify-center items-center mt-5 text-2xl font-bold">
      <h1 class="text-5xl underline mb-3">Register</h1>
    <div class="card card-container">
    
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username" class="flex flex-wrap justify-center font-bold px-6 mb-2">Name</label>
            <Field name="username" type="text" placeholder="JohnDoe@fiu.edu" class="form-control w-96 h-10 border-2 border-blue-800 rounded px-2" />
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="email" class="flex flex-wrap justify-center font-bold px-6 mb-2">Email</label>
            <Field name="email" type="email"  placeholder="JohnDoe@fiu.edu" class="form-control w-96 h-10 border-2 border-blue-800 rounded px-2" />
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password" class="flex flex-wrap justify-center font-bold px-6 mb-2">Password</label>
            <Field name="password" type="password" placeholder="JohnDoe@fiu.edu" class="form-control w-96 h-10 border-2 border-blue-800 rounded px-2" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>
          <div class="form-group">
           <button 
              type="submit"
              class="
              mt-9
                my-5
                bg-blue-500
                hover:bg-blue-800
                text-white
                hover:text-yellow-300
                font-bold
                py-2
                px-4
                border border-blue-700
                rounded
              "
            >
              Sign up
            </button>
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
  </div>
</template>
<script>
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
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
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
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
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
</style>