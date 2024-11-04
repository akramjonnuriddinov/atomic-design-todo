<template>
  <input
    class="cursor-pointer w-4 h-4 border-2 border-blue-500 rounded-sm bg-white"
    type="checkbox"
    :checked="checked"
    @change="$emit('change', !checked)"
  />
</template>

<script setup lang="ts">
defineProps({
  checked: { type: Boolean, default: false },
})
</script>
