<script setup>
import { ref } from "vue";
import { useDatabaseStore } from "../stores/database";
import { RouterLink } from "vue-router";
const databaseStore = useDatabaseStore();

const searchTerm = ref("");
const isSearched = ref(false)

const search = () => {
  databaseStore.getUrls(searchTerm.value);
  isSearched.value = true
};
</script>
<template>
  <div>
    <h1>Movies</h1>

    <div>
      <v-text-field
        v-model.trim="searchTerm"
        label="Buscar película"
      ></v-text-field>
      <v-btn @click="search">Buscar</v-btn>
    </div>

    <ul>
      <li v-for="movie in databaseStore.documents" :key="movie.imdbID">
        <RouterLink :to="`/movies/${movie.Title}`">
          <img :src="movie.Poster" alt="movie poster" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
