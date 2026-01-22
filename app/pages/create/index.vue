<template>
    <div class="flex-col min-h-dvh place-content-center">
        <h1 class="text-3xl font-bold mb-6">Ajout</h1>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <CatCard
            v-for="(imagePath, categoryName) in catAffiche"
             v-on:click=" navigateToForm(categoryName) "
            :key="categoryName"
            :image="imagePath"
            :title="categoryName"
          />
        </div>
    </div>
</template>

<script setup lang="ts">
const catAffiche = {
  'cannes': '/image-canne.png',
  'moulins': '/image-moulin.png',
  'montage': '/image-montage.png',
  'leurres': '/image-leurre.png',
}
</script>