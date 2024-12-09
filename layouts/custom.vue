<script lang="ts" setup>
definePageMeta({
  layout: "custom",
})
useSeoMeta({
  title: "About",
  ogTitle: "About2",
  description: "This is About",
  ogDescription: "This is About2",
})
</script>

<template>
  <header>
    <NuxtLink to="/">Back to main</NuxtLink>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped></style>
