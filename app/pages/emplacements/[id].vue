<template >
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6 capitalize">{{ emplacement.nom }}</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <EmpCard
            v-for="value in emplacement.materiels "
            :key="value.id"
            :image="value.image"
            :title="value.nom"
        />
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Materiel } from '~/components/scrollMat.vue';

// import type { Emplacement } from './index.vue';

const route = useRoute()
const id = route.params.id as string

const session = useUserSession();
const token = session.session.value?.token || '';
type Emplacement = {
    id : number;
    nom : string;
    qr_code_data : string;
    image : string;
    materiels : Materiel[]
}

const { data: emplacement } = await useAsyncData<Emplacement>(
  `emplacement-${id}`,
  () =>
    $fetch(`/api/proxy/emplacements/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }),
  {
    default:() => ({
      id: 0,
      nom: 'Emplacement inconnu',
      image: '',
      qr_code_data: '',
      materiels: [] as Materiel[]
    })
   
  }
)

</script>