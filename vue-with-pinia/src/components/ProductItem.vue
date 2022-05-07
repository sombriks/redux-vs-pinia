<template>
  <div>{{product.name}}</div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["product"]);
</script>

<style></style>
