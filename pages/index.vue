<template>
  <div>
    <h1 class="text-4xl text-primary">
      {{ msg }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const msg = ref("Hello World!")
</script>
