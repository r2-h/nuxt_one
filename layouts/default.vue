<template>
  <header>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contacts">Contacts</NuxtLink>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
a {
  padding: 0 10px;
}
</style>
