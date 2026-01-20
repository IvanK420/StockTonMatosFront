<template>
<div class="mt-8">
    <h1 class="text-3xl font-bold mb-6">Materiels</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CatCard
            v-on:click="navigateToCategory(value.id)"
            v-for="value in categories"
            :key="value.id"
            :image="value.image"
            :title="value.nom"
        />
        </div>

</div>

</template>
<script setup lang="ts">    
    const session = useUserSession();
    const token = session.session.value?.token || '';

type Materiel = {
  id: number;
  nom: string;
  image: string;
}

interface ApiResponse {
  member: Materiel[];
}
const { data: response } = await useAsyncData<ApiResponse>('materiels', () => 
  $fetch('/api/materiels',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
)
const categories = computed(() => response.value?.member || [])

</script>