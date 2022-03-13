<template>
  <div class="register">
    <h1 class="text-5xl font-bold m-5">Sign Up </h1>
    <img
      id="profile-img"
      src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
      class="profile-img-card"
    />
    <Form @submit="handleRegister" :validation-schema="schema">
      <div v-if="!successful">
        <div class="form-group mb-6">
          <div>
          <label for="username">Username</label>
          </div>
          <Field name="username" type="text" class="form-control border-2" />
          <div>
            <ErrorMessage name="username" class="error-feedback" />
          </div>
        </div>
        <div class="form-group mb-6">
          <div>
          <label for="email">Email</label>
          </div>
          <Field name="email" type="email" class="form-control border-2" />
          <div>
            <ErrorMessage name="email" class="error-feedback" />
          </div>
        </div>
        <div class="form-group mb-6">
          <div>
          <label for="password">Password</label>
          </div>
          <Field name="password" type="password" class="form-control border-2" />
          <div>
            <ErrorMessage name="password" class="error-feedback" />
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
img {
  padding-top: 20px;
  padding-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
}
.error-feedback{
  color:red;
}
</style>