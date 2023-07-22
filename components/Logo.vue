<template>
  <img v-if="colorMode.preference === 'light'" src="/img/dev-gathering-logo-light.svg">
  <img v-else src="/img/dev-gathering-logo-dark.svg">
</template>

<script setup>
const colorMode = useColorMode()
</script>