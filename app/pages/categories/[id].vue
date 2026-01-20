<template >
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6 capitalize">{{ category.nom }}</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CatCard
            v-for="value in category.materiels"
            :key="value.id"
            :image="value.image"
            :title="value.nom"
        />
        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string

const session = useUserSession();
const token = session.session.value?.token || '';

type Materiel = {
  id: number
  nom: string
  image: string
}

type Category = {
  id: number
  nom: string
  image: string
  materiels: Materiel[]
}

const { data: category } = await useAsyncData<Category>(
  `category-${id}`,
  () =>
    $fetch(`/api/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }),
  {
    default: () => ({
      id: 0,
      nom: 'Catégorie inconnue',
      image: '',
      materiels: []
    })
  }
)

</script>