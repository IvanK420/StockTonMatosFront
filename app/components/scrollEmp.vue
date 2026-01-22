<template>
  <div 
  v-if="emplacements.length > 0"
  class="flex gap-5 overflow-x-auto overflow-y-hidden pb-2">
    <EmpCard
      v-on:click=" navigateToEmplacement(value.id) "
      v-for="value in emplacements"
      :key="value.id"
      :title="value.nom || 'Catégorie Sans Nom'"
      :image="value.image || 'https://placehold.co/150'"
    />
  </div>
  <div v-else class="text-gray-500 dark:text-gray-400">
    Chargement du matos...
  </div>
</template>

<script setup lang="ts">
import type { Emplacement } from '~/pages/emplacements/index.vue';

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
  member: Emplacement[];
}


const { data: response } = await useAsyncData<ApiResponse>('emplacements2', () => 
  $fetch('/api/proxy/emplacements',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
)
const emplacements = computed(() => response.value?.member || [])
</script>