<script setup lang="ts">
function send () {
  apiBaseInfo()
}
</script>

<template>
  <div>
    <div>HomeView</div>
    <BasicButton @click="send">BasicButton</BasicButton>
  </div>
</template>
