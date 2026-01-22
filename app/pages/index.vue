<script setup lang="ts">
import QrButton from '~/components/qrButton .vue';

// definePageMeta({
//   middleware: ['auth'],
//   // or middleware: 'auth'
// })  

const { user, clear: clearSession,loggedIn } = useUserSession()
</script>

<template>
  <div class="flex flex-col  min-h-screen bg-gray-50 dark:bg-gray-900  px-4  pt-5 gap-2">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white ">
      Inventaire
    </h1>
    <div class="inline-flex items-center place-content-between">
      <SearchBar/>
      <div class="inline-flex gap-5">
        <AddButton/>
        <QrButton/>
      </div>
    </div>
    <div>
      <h2 class="text-2xl">
        Catégories
      </h2>
      <div class="flex gap-5 overflow-x-auto overflow-y-hidden pb-2 ">
     <ScrollCat/>
      </div>

    </div>
    <div>
      <h2 class="text-2xl">
        Matériels
      </h2>
      <div class="flex gap-5 overflow-x-auto overflow-y-hidden pb-2 ">
     <ScrollMat/>
      </div>
    </div>
    <div>
      <h2 class="text-2xl">
        Emplacements
      </h2>
    </div>
    <!-- <NuxtLink to="/login" class="mt-8 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-sm focus:ring-4 focus:outline-none focus:ring-indigo-300">Go to Login</NuxtLink> -->
  </div>
</template>
