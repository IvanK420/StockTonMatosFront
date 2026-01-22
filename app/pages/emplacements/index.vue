<template>
<div class="mt-8">
    <h1 class="text-3xl font-bold mb-6">Emplacements</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <EmpCard
            v-on:click="navigateToEmplacement(value.id)"
            v-for="value in emplacements"
            :key="value.id"
            :image="value.image"
            :title="value.nom"
        />
        </div>

</div>
</template>
<script setup lang="ts">
import EmpCard from '~/components/empCard.vue';
import type { Materiel } from '~/components/scrollEmp.vue';

    
    const session = useUserSession();
    const token = session.session.value?.token || '';

export type Emplacement = {
    id : number;
    nom : string;
    qr_code_data : string;
    image : string;
    materiels : Materiel[]
}

interface ApiResponse {
  member: Emplacement[];
}
const { data: response } = await useAsyncData<ApiResponse>('emplacements1', () => 
  $fetch('/api/proxy/emplacements',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
)
const emplacements = computed(() => response.value?.member || [])

</script>