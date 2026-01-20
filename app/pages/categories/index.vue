<template>
<div class="mt-8">
    <h1 class="text-3xl font-bold mb-6">Categories</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CatCard
            :onclick="navigateToCategory(value.id)"
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