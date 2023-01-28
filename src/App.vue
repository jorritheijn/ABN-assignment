<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
</script>

<template>
  <header class="pt-4">
    <router-link to="/">
      <img
        class="mx-auto"
        src="https://static.tvmaze.com/images/tvm-header-logo.png"
        alt=""
      />
    </router-link>
  </header>
  <main class="mx-4">
    <RouterView />
  </main>
</template>

<style scoped></style>
