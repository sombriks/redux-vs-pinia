<template>
  <ProductItem v-for="i in [1,2,3,4,5]" :key="i"/>
</template>

<script setup>
import ProductItem from "./ProductItem.vue"
</script>

<style></style>
