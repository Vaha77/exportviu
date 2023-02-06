<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

</style>
