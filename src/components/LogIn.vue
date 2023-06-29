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
  return props.isLogin ? "Acceso" : "Crear usuario";
});

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert("llena los campos");
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
    <v-dialog v-model="props.open" persistent>
      <v-card
      :loading="userStore.loadingUser"
      >
        <v-card-title>
          <span class="text-h5">{{ props.text }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <form @submit.prevent="handleSubmit">
                  <v-text-field
                    v-model.trim="email"
                    label="Ingrese email"
                    required
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    v-model.trim="password"
                    label="Ingrese contraseña"
                    required
                  ></v-text-field>
                  <v-btn
                    color="green-darken-1"
                    variant="text"
                    @click="$emit('closeDialog')"
                  >
                    Close
                  </v-btn>
                  <v-btn type="submit" :disabled="userStore.loadingUser">
                    {{ buttonLabel }}
                  </v-btn>
                </form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
