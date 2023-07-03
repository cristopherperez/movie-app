<script setup>
import { ref, computed } from "vue";
import { useUserStore } from "../stores/user.js";

const userStore = useUserStore();

const emailRules = ref([
  (value) => {
    if (value) return true;
    return "email is required";
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true;
    return "email format must be valid";
  },
]);

const passwordRules = ref([
  (value) => {
    if (value) return true;
    return "password is required";
  },
  (value) => {
    if (value?.length >= 6) return true;
    return "password must be more than 6 characters";
  },
]);

const props = defineProps({
  open: Boolean,
  text: String,
  isLogin: Boolean,
});

const email = ref("");
const password = ref("");

const buttonLabel = computed(() => {
  return props.isLogin ? "Login" : "Create user";
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
                    class="mb-5"
                    :rules="emailRules"
                    label="Enter email"
                    variant="outlined"
                    clearable
                    base-color="white"
                    color="white"
                    required
                    density="compact"
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    class="mb-5"
                    :rules="passwordRules"
                    v-model.trim="password"
                    label="Enter password"
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
            <v-card-text v-if="userStore.loginError" class="error-notification">
              <v-icon color="#EF5350" icon="mdi-alert-outline"></v-icon>
              <span class="ml-2 text-red-lighten-1"
                >login error, check the data entered</span
              >
            </v-card-text>
            <v-card-text
              v-if="userStore.registerError"
              class="error-notification"
            >
              <v-icon color="#EF5350" icon="mdi-alert-outline"></v-icon>
              <span class="ml-2 text-red-lighten-1"
                >that email already exists, enter another</span
              >
            </v-card-text>
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
.error-notification {
  padding: 10px;
  background-color: #ffcdd2;
  border: solid 2.5px #ef5350;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
