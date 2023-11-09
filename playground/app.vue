<script setup>
const counter = ref(0)

function add() {
  counter.value++
}

const loading = ref(true)

onMounted(() => {
  loading.value = false
})
</script>

<template>
  <div>{{ loading ? "Loading..." : "Loaded" }}</div>
  <button @click="add">Click me ({{ counter }})</button>
</template>
