<template>
  <div class="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow shrink-0">
    <img 
      :src="image" 
      :alt="title"
      class="w-full h-40 object-cover"
    />
    <div class="absolute bottom-0 left-0 bg-linear-to-t from-black/70 to-transparent w-full p-4">
      <h3 class="text-white font-semibold text-sm capitalize ">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>