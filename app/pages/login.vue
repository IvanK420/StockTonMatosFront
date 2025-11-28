<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto md:h-screen lg:py-0 bg-[url('/background.png')] bg-contain bg-top bg-no-repeat">
      <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800/75 dark:border-gray-700 bg-white/75">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white justify-self-center">
            Connexion
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="login">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                class="  border-b-2 text-gray-900 sm:text-sm block w-full p-2.5  dark:border-white dark:placeholder-gray-300 dark:text-white "
                placeholder="johndoe@hotmail.fr"
                required
              />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
              <input
                id="password"
                v-model="password"
                type="password"
                name="password"
                placeholder="••••••••"
                class=" border-b-2 text-gray-900 sm:text-sm   block w-full p-2.5  dark:border-white dark:placeholder-gray-300 dark:text-white "
                required
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blumine-800 hover:bg-blumine-950 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blumine-600 dark:hover:bg-blumine-500 dark:focus:ring-blumine-800"
            >
              Sign in
            </button>
          </form>
          <div v-if="responseMessage" class="pt-4 text-center">
            <span :class="{'text-green-600 dark:text-green-500': isSuccess, 'text-red-600 dark:text-red-500': !isSuccess}">{{ responseMessage }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const responseMessage = ref('');
const isSuccess = ref(false);

const login = async () => {
  try {
    const response = await $fetch('/api/auth', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    });

    if (response.token) {
      responseMessage.value = `Login successful! Token: ${response.token}`;
      isSuccess.value = true;
      // localStorage.setItem('token', response.token);
      window.location.href = '/api/api/categories';
    } else {
      responseMessage.value = 'Login successful, but no token received.';
      isSuccess.value = false;
    }
  } catch (error) {
    responseMessage.value = 'Login failed: ' + (error.data?.message || 'Une erreur inconnue c\'est produite.');
    isSuccess.value = false;
  }
};
</script>
