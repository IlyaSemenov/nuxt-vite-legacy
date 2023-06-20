<script setup>
const counter = ref(0)

function add() {
  counter.value++
}
</script>

<template>
  <button @click="add">Click me ({{ counter }})</button>
</template>
