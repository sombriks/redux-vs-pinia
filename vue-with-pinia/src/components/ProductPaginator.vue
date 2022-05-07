<template>
  <div>
    <button
      :disabled="!filterStore.canPrev"
      @click="filterStore.updatePage(filterStore.page - 1)"
    >
      prev
    </button>
    <span>{{ filterStore.page }}</span>
    <button
      :disabled="!filterStore.canNext"
      @click="filterStore.updatePage(filterStore.page + 1)"
    >
      next
    </button>
  </div>
</template>

<script setup>
import { useFilter } from "../store";

const filterStore = useFilter();
</script>

<style></style>
