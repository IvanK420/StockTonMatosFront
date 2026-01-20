<template>
  <div 
  v-if="categories.length > 0"
  class="flex gap-5 overflow-x-auto overflow-y-hidden pb-2">
    <CatCard
      v-on:click=" navigateToCategory(value.id) "
      v-for="value in categories"
      :key="value.id"
      :title="value.nom || 'Catégorie Sans Nom'"
      :image="value.image || 'https://placehold.co/150'"
    />
  </div>
  <div v-else class="text-gray-500 dark:text-gray-400">
    Chargement des catégories...
  </div>
</template>

<script setup lang="ts">
    const session = useUserSession();
    const token = session.session.value?.token || '';

type Category = {
  id: number;
  nom: string;
  image: string;
}

interface ApiResponse {
  member: Category[];
}


const { data: response } = await useAsyncData<ApiResponse>('categories', () => 
  $fetch('/api/categories',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
)
const categories = computed(() => response.value?.member || [])
</script>