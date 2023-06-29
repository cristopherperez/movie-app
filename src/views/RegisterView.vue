<script setup>
import { ref } from "vue";
import Login from "../components/LogIn.vue";


const loginDialog = ref(false);
const signinDialog = ref(false);

const openLogin = () => {
  loginDialog.value = true;
};
const openSigIn = () => {
  signinDialog.value = true;
};

const closeLogin = () => {
  loginDialog.value = false
}

const closeSignin = () => {
  signinDialog.value = false
}
</script>
<template>
  <div>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-toolbar-title>Movie App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="openLogin"> Login </v-btn>
      <v-btn @click="openSigIn"> Sign In </v-btn>
    </v-toolbar>
    <div class="bg-login">
      <h1>Register</h1>
    </div>

    <!-- dialogs -->
    <Login v-model:open="loginDialog" @closeDialog="closeLogin" text="Login" :is-login="true" />
    <Login v-model:open="signinDialog" @closeDialog="closeSignin" text="Sign In" :is-login="false" />
  </div>
</template>

<style scoped>
.bg-login {
  height: 200px;
  background-image: -moz-element("https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg","Ratings");
}
</style>
