<template>
  <ProductItem
    v-for="product in productStore.list"
    :key="product.id"
    :product="product"
  />
</template>

<script setup>
import ProductItem from "./ProductItem.vue";
import { useProducts } from "../store";

const productStore = useProducts();
</script>

<style></style>
