<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />
</template>

<style lang="stylus">
@import "../node_modules/reset-css/reset.css"
@import "./assets/base"

body
  font-family 'Roboto', sans-serif
  background-color color-dark-02
  color color-light
  a
      text-decoration none
      color color-light
</style>
