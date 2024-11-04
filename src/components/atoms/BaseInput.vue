<template>
  <input
    v-model="inputValue"
    @input="$emit('update: modelValue', inputValue)"
    class="border rounded p-3 max-w-72 w-full"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
  modelValue: { type: String, default: "" },
  placeholder: { type: String, default: "Enter text..." },
})

const inputValue = ref(props.modelValue)
</script>
