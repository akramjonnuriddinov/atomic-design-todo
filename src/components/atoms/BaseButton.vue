<template>
  <button
    :class="classes"
    class="flex items-center justify-center px-5 py-3 text-white bg-blue-400 rounded cursor-pointer"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  classes?: string
}>()
</script>
