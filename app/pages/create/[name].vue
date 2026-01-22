<template>
    <h1>
        Formulaire d'ajout de {{ name }}
    </h1>
</template>
<script lang="ts" setup>
const route = useRoute()
const name = route.params.name as string

const session = useUserSession();
const token = session.session.value?.token || '';

</script>