<template>
    <div class="flex flex-col min-h-dvh place-content-center max-w-3xl mx-auto p-4">
        <NuxtLink to="/create" class="text-blue-500 hover:underline">
            ← Retour à la sélection des catégories
        </NuxtLink>
        <h1 class="text-2xl font-bold mb-6 ">
            Formulaire d'ajout de {{ name }}
        </h1>
        <FormCanne />
    </div>
</template>
<script lang="ts" setup>
import FormCanne from '~/components/formCanne.vue';

const route = useRoute()
const name = route.params.name as string

const session = useUserSession();
const token = session.session.value?.token || '';

</script>