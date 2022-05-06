<template>
  <ProductItem
    v-for="product in props.products"
    :key="product.id"
    :product="product"
  />
</template>

<script setup>
import { defineProps } from "vue";

import ProductItem from "./ProductItem.vue";

const props = defineProps(["products"]);
</script>

<style></style>
