<template>
  <div class="login">
    <!-- Local Title Header-->
    <h1 class="text-5xl font-bold m-5">Login Page</h1>
    <!-- Email Input, Password Input, Login Button -->
    <div class="justify-center">
      <div class="card">
        <div class="card-body">
          <!-- Makes POST request to /login route -->
          <form action="/login" method="POST">
            <div class="py-6 form-group">
              <label
                for="email"
                class="
                  flex flex-wrap
                  justify-center
                  text-3xl
                  font-bold
                  px-6
                  mb-2
                "
                >Email</label
              >
              <input
                type="name"
                v-model="name"
                placeholder="JohnDoe@fiu.edu"
                class="w-80 h-10 border-2 border-blue-800 rounded px-2"
              />
            </div>
            <div class="form-group">
              <label
                for="password"
                class="
                  flex flex-wrap
                  justify-center
                  text-3xl
                  px-2
                  font-bold
                  mb-2
                "
                >Password</label
              >
              <input
                type="name"
                v-model="name"
                placeholder="Password123"
                class="w-80 h-10 border-2 border-blue-800 rounded px-2"
              />
            </div>
            <!-- Admin CheckBox -->
            <div class="flex justify-center pt-10 pb-3">
              <form @submit.prevent="handleSubmit">
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    v-model="user.accept"
                    id="accept"
                    class="form-check-input"
                  />
                  <label class="form-check-label text-lg underline pl-3" for="accept"
                    >Check Box for Admin Access</label
                  >
                  <div>{{user.accept}} {{adminFlag}}</div>
                </div>
              </form>
            </div>
            <!-- Login Button -->
            <div class="flex justify-center">
              <div class="flex h-full justify-center">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-white
                    w-80
                    h-16
                    mt-2
                    mb-10
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
                >
                  <!------------- ROUTER LINK IS NOT ACTIVE YET, TODO ---------------------------------->
                  <div class="font-bold text-3xl">
                    <button @click="adminAccess(user.accept)">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- SIGN IN BUTTONS: Google, Github, and Facebook (Gross)-->
      <div class="mb-6">
        <!--Google Button -->
        <div class="flex flex-wrap justify-center">
          <div
            class="
              bg-blue-600
              text-white
              hover:text-yellow-300 hover:shadow-lg
              shadow
              font-bold
              text-sm
              py-3
              px-4
              rounded
              flex
              justify-start
              items-center
              cursor-pointer
              w-64
              h-14
              my-4
              mx-4
            "
          >
            <svg
              viewBox="0 0 24 24"
              class="fill-current mr-3 w-6 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
              />
            </svg>
            <span class="border-l border-blue-500 h-6 w-1 block"></span>
            <span class="pl-3">Sign up with Google</span>
          </div>

          <!--Github Button -->
          <div
            class="
              bg-gray-900
              text-white
              hover:text-yellow-300
              shadow
              font-bold
              text-sm
              py-3
              px-4
              rounded
              flex
              justify-start
              items-center
              cursor-pointer
              w-64
              h-14
              my-4
              mx-4
            "
          >
            <svg
              viewBox="0 0 24 24"
              class="fill-current mr-3 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            <span class="border-l border-gray-800 h-6 w-1 block mr-1"></span>
            <span class="pl-3">Sign up with Github</span>
          </div>

          <!--Facebook Button -->
          <div
            class="
              bg-indigo-600
              text-white
              hover:text-yellow-300
              shadow
              text-sm
              font-bold
              py-3
              px-4
              rounded
              flex
              justify-start
              items-center
              cursor-pointer
              w-64
              h-14
              my-4
              mx-4
            "
          >
            <svg
              viewBox="0 0 24 24"
              class="fill-current mr-3 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"
              />
            </svg>
            <span class="border-l border-indigo-500 h-6 w-1 block mr-1"></span>
            <span class="pl-3">Sign up with Facebook</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
input.form-check-input {
  width: 25px/*preferred width*/;
  height: 25px/*preferred height*/;
}

</style>

<script>

export default {


  data() {
    return {

      user: {
        accept: false,

      },
    };
  },
  methods: {
    adminAccess(flag) {
      this.adminFlag = flag;
     /* if (accept){

      }
      else{
        
      }*/
    },
  },
};
/* <div class=" col-sm-4">
        <div class=" border border-red-500 card">
        <div class="card-body">
            <a class=" btn btn-block btn-social btn-google " href="/auth/google" role="button">
            <i class="fab fa-google"></i>
            Sign In with Google
            </a>
        </div>
        </div>
    </div> */
//min-h-screen
</script>

 