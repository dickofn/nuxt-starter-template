<template>
  <div>
    <h1 class="text-primary text-4xl">
      {{ msg }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const msg = ref("Hello World!")
</script>
