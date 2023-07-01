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
  loginDialog.value = false;
};

const closeSignin = () => {
  signinDialog.value = false;
};
</script>
<template>
  <v-layout>
    <v-app-bar elevation="0" style="background-color: rgba(0, 0, 0, 0)">
      <v-app-bar-title class="font-weight-bold text-white"
        >Popcorn Now</v-app-bar-title
      >
      <v-spacer></v-spacer>
      <v-btn
        @click="openLogin"
        color="white"
        class="font-weight-bold text-capitalize"
      >
        Sign in
      </v-btn>
      <v-btn
        @click="openSigIn"
        color="white"
        class="font-weight-bold text-capitalize"
        variant="outlined"
      >
        Subscribe
      </v-btn>
    </v-app-bar>
    <v-main class="bg-login">
      <v-container>
        <div>
          <h1 class="font-weight-bold text-white">
            Unlimited movies and series
          </h1>
          <p class="font-weight-bold text-white">
            All the information whenever you want, for free!
          </p>
        </div>
      </v-container>
    </v-main>

    <!-- dialogs -->
    <Login
      v-model:open="loginDialog"
      @closeDialog="closeLogin"
      text="Do you have an account?"
      :is-login="true"
    />
    <Login
      v-model:open="signinDialog"
      @closeDialog="closeSignin"
      text="Subscribe"
      :is-login="false"
    />
  </v-layout>
</template>

<style scoped>
.bg-login {
  background-image: url("../assets/img/bg-popcorn3.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}
</style>
