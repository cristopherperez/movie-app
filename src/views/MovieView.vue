<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useDatabaseStore } from "../stores/database";

const route = useRoute();
const router = useRouter();
const databaseStore = useDatabaseStore();
const movieSelected = ref(null);

watch(
  () => route.params.name,
  async (newName) => {
    if (databaseStore.documents.length > 0) {
      const movie = databaseStore.documents.find(
        (movie) => movie.Title === newName
      );
      if (movie) {
        const data = await databaseStore.fetchMovieDetails(movie.Title);
        movieSelected.value = data;
      }
    }
  },
  { immediate: true }
);

const back = () => {
  router.back("/movies");
};

const getChipColor = (rating) => {
  if (rating >= 0 && rating <= 3) {
    return "red";
  } else if (rating >= 4 && rating <= 7) {
    return "yellow";
  } else {
    return "green";
  }
};
</script>

<template>
  <v-container v-if="movieSelected">
    <h2 class="mb-5 font-weight-bold text-white">
      Popcorn:
      <span class="text-blue-grey-lighten-2 font-weight-light">
        {{ movieSelected.Title }}
      </span>
    </h2>
    <v-card class="mx-5 my-2 pa-5">
      <v-row>
        <v-col cols="4" sm="3" md="3" lg="3">
          <v-img :src="movieSelected.Poster" alt="Movie Poster">
            <v-chip
              style="position: absolute; right: 0"
              class="ma-1"
              variant="elevated"
              :color="getChipColor(movieSelected.imdbRating)"
              size="x-small"
              text-color="white"
            >
              {{ movieSelected.imdbRating }}
              <v-icon end size="x-small" icon="mdi-star"></v-icon>
            </v-chip>
          </v-img>
        </v-col>
        <v-col cols="8" sm="9" md="9" lg="8">
          <v-card-text class="pa-0">
            <p class="text-white font-weight-bold">
              Year:
              <span class="text-blue-grey-lighten-2 font-weight-light">{{
                movieSelected.Year
              }}</span>
            </p>
            <p class="text-white font-weight-bold">
              Rated:
              <span class="text-blue-grey-lighten-2 font-weight-light">{{
                movieSelected.Rated
              }}</span>
            </p>
            <p class="text-white font-weight-bold">
              Genre:
              <span class="text-blue-grey-lighten-2 font-weight-light">{{
                movieSelected.Genre
              }}</span>
            </p>
            <p class="text-white font-weight-bold">
              Actors:
              <span class="text-blue-grey-lighten-2 font-weight-light">{{
                movieSelected.Actors
              }}</span>
            </p>
            <p class="text-white font-weight-bold">
              Awards:
              <span class="text-blue-grey-lighten-2 font-weight-light">{{
                movieSelected.Awards
              }}</span>
            </p>
            <p class="text-white font-weight-bold">
              Runtime:
              <span class="text-blue-grey-lighten-2 font-weight-light">{{
                movieSelected.Runtime
              }}</span>
            </p>
            <p class="text-white font-weight-bold">
              Plot:
              <span class="text-blue-grey-lighten-2 font-weight-light">{{
                movieSelected.Plot
              }}</span>
            </p>
          </v-card-text>
          <v-card-actions class="mt-5">
            <v-btn variant="outlined" color="white" @click="back">Volver</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-card {
  background-image: radial-gradient(
    circle at 95.45% 104.17%,
    #664968 0,
    #583b63 16.67%,
    #472d5e 33.33%,
    #321f59 50%,
    #121355 66.67%,
    #000a51 83.33%,
    #00004e 100%
  );
}
</style>
