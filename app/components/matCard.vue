<template>
  <div class=" overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow shrink-0"
  
  >
    <img 
      :src="image" 
      :alt="title"
      class="w-full h-40 object-cover"
    />
    <div class="  p-4">
      <h3 class="light:text-black text-white  font-semibold text-sm capitalize ">{{ title }}</h3>
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