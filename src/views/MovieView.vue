<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDatabaseStore } from "../stores/database";

const route = useRoute();
const router = useRouter();
const databaseStore = useDatabaseStore();
const movieSelected = ref(null);

watch( ()=> route.params.name, (newName) => {
    if(databaseStore.documents.length > 0) {
        movieSelected.value = databaseStore.documents.find((movie) => movie.Title === newName)
    }
}, {immediate: true})

const back = () => {
  router.back("/movies");
};
</script>
<template>
  <h1>Movie name: {{ $route.params.name }}</h1>
  <v-btn @click="back">Volver</v-btn>
  <div v-if="movieSelected">
    <p>
        {{ movieSelected.Title }}
    </p>
    <img :src="movieSelected.Poster" alt="">
  </div>
</template>
