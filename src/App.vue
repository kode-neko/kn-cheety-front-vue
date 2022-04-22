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
  font-size 18px
  a
      text-decoration none
      color color-light
  button
    border none
    font-size 18px
  input
    &:focus
      outline none

.trans-color
  transition color 0.3s

.trans-elevation
  transform translate(0, 0)
  transition transform 0.3s
  &:hover
      transform translate(-2px, -2px)

.disapear-enter-active,
.disapear-leave-active
  transition all 0.3s ease
.disapear-enter-from,
.disapear-leave-to
  opacity: 0

.a
    background-color color-main
.b
    background-color color-second

.icon-xs
  set-size(icon-xs)
.icon-sm
  set-size(icon-sm)
.icon-md
  set-size(icon-md)
.icon-lg
  set-size(icon-lg)
</style>
