<template>
  <div>
    <button
      :disabled="props.page < 2"
      @click="(e) => $emit('onPage', props.page - 1)"
    >
      prev
    </button>
    <span>{{ props.page }}</span>
    <button
      :disabled="props.products.length < props.pageSize"
      @click="(e) => $emit('onPage', props.page + 1)"
    >
      next
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["page", "products", "pageSize"]);
</script>

<style></style>
