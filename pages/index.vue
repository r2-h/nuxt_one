<script setup>
useSeoMeta({
  title: "Main",
  ogTitle: "Main",
  description: "This is Main",
  ogDescription: "This is Main",
})
</script>

<template>
  <h1>Home page</h1>
  <p>sdfsdsdsdfs</p>
</template>

<style scoped lang="scss">
p {
  font-family: "Roboto", "sans-serif";
}
h1 {
  @include Title;
  color: $primary;
}
</style>
