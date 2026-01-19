<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="flex justify-around items-center h-16">
      <!-- Home -->
      <NuxtLink
        to="/"
        class="flex flex-col items-center justify-center w-full h-full transition-colors"
        :class="isActive('index') ? 'text-indigo-600 dark:text-indigo-400 border-t-2 border-indigo-600' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600'"
      >
        <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
        <span class="text-xs font-medium">Accueil</span>
      </NuxtLink>

      <!-- Users -->
      <NuxtLink
        to="/categories"
        class="flex flex-col items-center justify-center w-full h-full transition-colors"
        :class="isActive('users') ? 'text-indigo-600 dark:text-indigo-400 border-t-2 border-indigo-600' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600'"
      >
        <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
        <span class="text-xs font-medium">Catégories</span>
      </NuxtLink>

      <!-- Stats -->
      <NuxtLink
        to="/emplacements"
        class="flex flex-col items-center justify-center w-full h-full transition-colors"
        :class="isActive('stats') ? 'text-indigo-600 dark:text-indigo-400 border-t-2 border-indigo-600' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600'"
      >
        <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
        </svg>
        <span class="text-xs font-medium">Emplacements</span>
      </NuxtLink>

      <!-- Profil -->
      <NuxtLink
        to="/parametres"
        class="flex flex-col items-center justify-center w-full h-full transition-colors"
        :class="isActive('profile') ? 'text-indigo-600 dark:text-indigo-400 border-t-2 border-indigo-600' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600'"
      >
        <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
        </svg>
        <span class="text-xs font-medium">Paramètres</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()

const isActive = (pageName: string) => {
  if (pageName === 'index' && route.name === 'index') return true
  if (pageName === 'categories' && route.path.includes('/categories')) return true
  if (pageName === 'emplacements' && route.path.includes('/emplacements')) return true
  if (pageName === 'parametres' && route.path.includes('/parametres')) return true
  return false
}
</script>
