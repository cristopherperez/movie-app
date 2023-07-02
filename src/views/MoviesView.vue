<script setup>
import { ref, computed } from "vue";
import { useDatabaseStore } from "../stores/database";
import { RouterLink } from "vue-router";
const databaseStore = useDatabaseStore();

const searchTerm = ref("");
const isSearched = ref(false);

const search = () => {
  databaseStore.getUrls(searchTerm.value);
  isSearched.value = true;
};

const types = ref(["movie", "series", "game"]);

const selectedTypes = ref([]);

const filteredPopcorns = computed(() => {
  if (selectedTypes.value.length > 0) {
    return databaseStore.documents.filter((movie) =>
      selectedTypes.value.includes(movie.Type)
    );
  }
  return databaseStore.documents;
});
</script>
<template>
  <v-container>
    <h1 class="font-weight-bold text-white">Porcorn's</h1>

    <div>
      <v-text-field
        v-model.trim="searchTerm"
        label="search your popcorn"
        variant="outlined"
        base-color="white"
        color="white"
        density="compact"
      ></v-text-field>
      <v-select
        v-model="selectedTypes"
        label="filters"
        base-color="white"
        color="white"
        density="compact"
        multiple
        :items="types"
        variant="outlined"
      ></v-select>
      <v-btn
        color="purple"
        class="font-weight-bold text-capitalize"
        variant="flat"
        @click="search"
        >Search</v-btn
      >
    </div>
    <v-card v-if="filteredPopcorns.length > 0" class="card-container mx-5 my-2 pa-5">
      <v-row>
        <v-col
          v-for="movie in filteredPopcorns"
          :key="movie.imdbID"
          cols="4"
          sm="3"
          md="3"
          lg="3"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
            style="background-color: transparent;"
              :elevation="isHovering ? 12 : 2"
              v-bind="props"
              @click="1 + 1"
            >
              <RouterLink :to="`/movies/${movie.Title}`">
                <v-img :src="movie.Poster" alt="movie poster">
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey-lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </RouterLink>
              <v-card-text>
                <p class="text-white font-weight-bold">
                  {{ movie.Title }}
                </p>
                <p class="text-blue-grey-lighten-2 font-weight-light">
                  {{ movie.Year }}
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.card-container {
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
