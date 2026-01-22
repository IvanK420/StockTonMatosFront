<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import type { ApiResponseEmplacement } from '~/pages/emplacements/index.vue';
import type { ApiResponseCategory } from '~/pages/categories/index.vue';

const session = useUserSession();
const token = session.session.value?.token || '';

// Définition des options pour les menus déroulants
const { data: categoriesResponse } = await useAsyncData<ApiResponseCategory>('categories', () => 
  $fetch('/api/proxy/categories',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
)

const categories = computed(() => categoriesResponse.value?.member || [])
const categoriesNames = computed(() => categories.value.map(c => c.nom));
const categoryOptions = computed(() => {
  return categories.value.map(c => ({
    label: c.nom,    // Ce que l'utilisateur voit
    value: c["@id"]   // Ce qui est stocké dans state.category
  }))
});
console.log(categoriesNames.value);

  
const { data: response } = await useAsyncData<ApiResponseEmplacement>('emplacements1', () => 
  $fetch('/api/proxy/emplacements',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
)
const emplacements = computed(() => response.value?.member || [])
const emplacementOptions = computed(() => {
  return emplacements.value.map(e => ({
    label: e.nom,    // Ce que l'utilisateur voit
    value: e["@id"]   // Ce qui est stocké dans state.emplacement
  }))
});
console.log(emplacementOptions.value);
// 1. Schéma de validation Zod
const schema = z.object({
  nom: z.string().min(2, 'Le nom est requis'),
  marque: z.string().min(1, 'La marque est requise'),
  // image: z.file(),
  category: z.string().min(1, 'Veuillez choisir une catégorie'),
  emplacement: z.string().min(1, 'Veuillez choisir un emplacement')
})

type Schema = z.output<typeof schema>

const toast = useToast()
const state = reactive({
  nom: undefined,
  marque: undefined,
  image: undefined,
  category: undefined,
  emplacement: undefined,
  "@type": 'canne'  // Champ fixe pour cette forme spécifique
})

const loading = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true
  
  try {
    // Connexion à API Platform
    await $fetch('/api/proxy/materiels', {
      method: 'POST',
      body: state, 
      headers: {
      "Authorization": `Bearer ${token}` ,
      "Content-Type" : 'application/ld+json'}
    }
    )
    
    // Notification de succès (Nuxt UI)
    
    toast.add({ title: 'Succès', description: 'Article ajouté avec succès', color: 'success' })
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4 max-w-mdw-full" @submit="onSubmit">
    
    <UFormField label="Nom de l'article" name="nom" >
      <UInput v-model="state.nom" placeholder="Ex: crostage lsj" />
    </UFormField>

    <UFormField label="Marque" name="marque">
      <UInput v-model="state.marque" placeholder="Ex: shimano,daiwa,bearking..." />
    </UFormField>

    <UFormField label="Image" name="image">
      <!-- <UFileUpload v-model="state.image" class="w-full min-h-10" icon="i-lucide-image" /> -->
       <UInput v-model="state.image" placeholder="url d'une image" />
    </UFormField>

    <div class="grid grid-cols-2 gap-4">
      <UFormField label="Catégorie" name="categorie">
        <USelect v-model="state.category" :items="categoryOptions" placeholder="Sélectionner" />
      </UFormField>

      <UFormField label="Emplacement" name="emplacement">
        <USelect v-model="state.emplacement" :items="emplacementOptions"  placeholder="Sélectionner" />
      </UFormField>
    </div>

    <UButton type="submit" block color="primary" class="mt-4">
      Enregistrer l'article
    </UButton>
    
  </UForm>
</template>