<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const drawer = ref(true);
const rail = ref(true);
</script>
<template>
  <v-layout>
    <v-app-bar color="black" prominent>
      <RouterLink to="/">
        <v-btn variant="text" color="white" icon="mdi-home"></v-btn>
      </RouterLink>
      <RouterLink to="/movies">
        <v-btn variant="text" color="white" icon="mdi-magnify"></v-btn>
      </RouterLink>
      <v-spacer></v-spacer>
      <v-btn
        color="white"
        class="font-weight-bold text-capitalize"
        @click="userStore.logoutUser"
      >
        Logout
      </v-btn>
    </v-app-bar>
    <v-main class="bg-login">
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped>
.bg-login {
  background-color: black;
}
</style>
