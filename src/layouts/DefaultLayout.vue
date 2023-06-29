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
    <v-navigation-drawer
      style="height: 100vh"
      class="position-fixed"
      rail-width="78"
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item title="John Leider" nav>
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <RouterLink to="/">
          <v-list-item
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
        </RouterLink>
        <RouterLink to="/movies">
          <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
          ></v-list-item>
        </RouterLink>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn v-if="userStore.userData" @click="userStore.logoutUser" block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
  </v-layout>
</template>

<style scoped></style>
