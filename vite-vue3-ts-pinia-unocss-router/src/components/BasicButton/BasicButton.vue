<script setup lang="ts">
const emit = defineEmits<{
  (_e: 'click'): void;
}>()

function handleClick () {
  emit('click')
}
</script>

<template>
  <button @click.stop="handleClick"><slot /></button>
</template>
