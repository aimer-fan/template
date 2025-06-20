<script setup lang="ts">
function send () {
  apiBaseInfo()
}
</script>

<template>
  <div>
    <h1>HomeView</h1>
    <BasicButton @click="send">BasicButton</BasicButton>
  </div>
</template>
