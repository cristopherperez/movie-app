<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const colors = ref([
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
]);

const carouselImg = ref([
  {
    src: "src/assets/img/carousel/hbo-max-logo.webp",
  },
  {
    src: "src/assets/img/carousel/netflix-logo.png",
  },
  {
    src: "src/assets/img/carousel/disney-logo.png",
  },
  {
    src: "src/assets/img/carousel/amazon-prime-logo.png",
  },
]);

const slides = ref([
  "Disney +",
  "Netflix",
  "Paramount",
  "HBO max",
  "Prime Video",
]);
</script>
<template>
  <v-container>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="(image, i) in carouselImg"
        :key="i"
        :src="image.src"
        cover
      >
      </v-carousel-item>
    </v-carousel>
    <div class="mt-5 d-flex fill-height justify-center align-center">
      <h3 class="text-white fade-in">
        all the content you are looking for in one place, 
        <RouterLink to="/movies">
          <span class="text-purple-darken-2 fade-in-after">Popcorn NOW!</span>
        </RouterLink>
      </h3>
    </div>
  </v-container>
</template>
<style scoped>
.fade-in {
  opacity: 0;
  animation: fade-in 3s ease-in-out forwards;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in-after {
  opacity: 0;
  animation: fade-in-after 5s ease-in-out forwards;
}

@keyframes fade-in-after {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
