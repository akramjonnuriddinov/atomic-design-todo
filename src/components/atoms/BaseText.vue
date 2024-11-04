<template>
  <p>{{ text }}</p>
</template>

<script setup lang="ts">
defineProps({
  text: { type: String, required: true },
})
</script>
