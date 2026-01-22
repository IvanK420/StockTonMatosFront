<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

// Définition des options pour les menus déroulants
const categories = ['Cannes Casting', 'Cannes Spinning', 'Cannes Traîne', 'Cannes Télescopique']
const emplacements = ['Garage', 'Cave', 'Placard', 'Boîte à pêche']

// 1. Schéma de validation Zod
const schema = z.object({
  nom: z.string().min(2, 'Le nom est requis'),
  marque: z.string().min(1, 'La marque est requise'),
  image: z.string().url('Lien de l\'image invalide (URL requise)'),
  categorie: z.string().min(1, 'Veuillez choisir une catégorie'),
  emplacement: z.string().min(1, 'Veuillez choisir un emplacement')
})

type Schema = z.output<typeof schema>

// 2. État initial
const state = reactive({
  nom: undefined,
  marque: undefined,
  image: undefined,
  categorie: undefined,
  emplacement: undefined
})

// 3. Action de soumission
async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log('Données envoyées :', event.data)
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
      <UFileUpload v-model="state.image" class="w-full min-h-10" icon="i-lucide-image" />
    </UFormField>

    <div class="grid grid-cols-2 gap-4">
      <UFormField label="Catégorie" name="categorie">
        <USelect v-model="state.categorie" :items="categories" placeholder="Sélectionner" />
      </UFormField>

      <UFormField label="Emplacement" name="emplacement">
        <USelect v-model="state.emplacement" :items="emplacements" placeholder="Sélectionner" />
      </UFormField>
    </div>

    <UButton type="submit" block color="primary" class="mt-4">
      Enregistrer l'article
    </UButton>
    
  </UForm>
</template>