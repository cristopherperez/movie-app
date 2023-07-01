<script setup>
import { watchEffect, defineProps } from "vue";
import { ref, computed } from "vue";
import { useUserStore } from "../stores/user.js";

const props = defineProps({
  open: Boolean,
  text: String,
  isLogin: Boolean,
});

const userStore = useUserStore();
const email = ref("cristo@mail.com");
const password = ref("samyzorra");

const buttonLabel = computed(() => {
  return props.isLogin ? "Access" : "Create user";
});

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
  }

  if (props.isLogin) {
    await userStore.loginUser(email.value, password.value);
  } else {
    await userStore.registerUser(email.value, password.value);
  }
};

watchEffect(() => {
  if (userStore.loadingUser.value) {
    console.log("El usuario está cargando...");
  } else {
    console.log("El usuario ha iniciado sesión");
  }
});
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="props.open" persistent max-width="500">
      <v-card :loading="userStore.loadingUser">
        <v-card-title>
          <p class="text-h5 font-weight-bold text-white">{{ props.text }}</p>
        </v-card-title>
        <v-form @submit.prevent="handleSubmit">
          <v-container>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model.trim="email"
                    class="log-input"
                    label="Ingrese email"
                    variant="outlined"
                    clearable
                    base-color="white"
                    color="white"
                    required
                    density="compact"
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    class="log-input"
                    v-model.trim="password"
                    label="Ingrese contraseña"
                    counter
                    variant="outlined"
                    clearable
                    base-color="white"
                    color="white"
                    required
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn
                color="white"
                class="font-weight-bold text-capitalize"
                variant="outlined"
                @click="$emit('closeDialog')"
              >
                Close
              </v-btn>
              <v-btn
                color="purple"
                class="font-weight-bold text-capitalize"
                variant="flat"
                type="submit"
                :disabled="userStore.loadingUser"
              >
                {{ buttonLabel }}
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>
.v-card {
  background-color: transparent;
  backdrop-filter: blur(8px);
}
</style>
