<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
  // or middleware: 'auth'
})  

const { user, clear: clearSession,loggedIn } = useUserSession()
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-center px-4">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white">
      Bienvenue à StockTonMatos
    </h1>
    <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
      Gère ton matos comme un vrai pro de la peche
    </p>
    <NuxtLink to="/login" class="mt-8 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm focus:ring-4 focus:outline-none focus:ring-indigo-300">Go to Login</NuxtLink>
  </div>
</template>
