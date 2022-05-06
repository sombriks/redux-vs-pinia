<template>
  <div>{{ props.product.name }}</div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["product"]);
</script>

<style></style>
