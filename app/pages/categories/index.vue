<template>
<div class="mt-8">
    <h1 class="text-3xl font-bold mb-6">Categories</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CatCard
            v-on:click="navigateToCategory(value.id)"
            v-for="value in categories2"
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

type Category = {
  id: number;
  nom: string;
  image: string;
  "@id" : string;
}

export interface ApiResponseCategory {
  member: Category[];
}
const { data: response2 } = await useAsyncData<ApiResponseCategory>('categories', () => 
  $fetch('/api/proxy/categories',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
)
const categories2 = computed(() => response2.value?.member || [])

</script>