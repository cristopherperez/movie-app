<script setup>
import { useUserStore } from "./stores/user.js";

const userStore = useUserStore();
</script>

<template>
  <div>
    <h1>Samy entrega el marron asi me toman</h1>
    <nav v-if="!userStore.loadingSession">
      <router-link to="/" v-if="userStore.userData">Home</router-link> |
      <router-link to="/login" v-if="!userStore.userData">Login</router-link> |
      <router-link to="/Register" v-if="!userStore.userData"
        >Register</router-link
      >
      |
      <button v-if="userStore.userData" @click="userStore.logoutUser">
        Logout
      </button>
    </nav>
    <div v-else>loading user...</div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
