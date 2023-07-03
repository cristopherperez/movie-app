<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const carouselImg = ref([
  {
    src: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/04/hbo-max-logo-1922879.jpg?tf=1200x",
  },
  {
    src: "https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-6-1024x576.png",
  },
  {
    src: "https://logodownload.org/wp-content/uploads/2020/11/disney-plus-logo-0.png",
  },
  {
    src: "https://logodownload.org/wp-content/uploads/2019/10/amazon-prime-logo-0.png",
  },
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
