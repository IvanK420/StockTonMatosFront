<template>
  <div 
  v-if="materiels.length > 0"
  class="flex gap-5 overflow-x-auto overflow-y-hidden pb-2">
    <MatCard
      v-on:click=" navigateToMateriel(value.id) "
      v-for="value in materiels"
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

export type Materiel = {
  id: number;
  marque:string;
  nom: string;
  category:string;
  image: string;
}

interface ApiResponse {
  member: Materiel[];
}


const { data: response } = await useAsyncData<ApiResponse>('materiels', () => 
  $fetch('/api/proxy/materiels',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
)
const materiels = computed(() => response.value?.member || [])
</script>