<template>
  <button
    :class="classes"
    @click="$emit('click')"
    class="flex items-center justify-center px-5 py-3 rounded cursor-pointer text-white"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
// withDefaults(
//   defineProps<{
//     classes: string
//   }>(),
//   {
//     classes: "bg-blue-400",
//   }
// )
defineProps({
  classes: {
    type: String,
    default: "bg-blue-400",
  },
})
</script>
