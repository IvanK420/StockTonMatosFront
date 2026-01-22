<template>
  <div class="  shadow-md hover:shadow-lg  shrink-0"
  
  >
    <img 
      :src="image" 
      :alt="title"
      class="w-full h-40 object-cover  rounded-lg"
    />
    <div class="">
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