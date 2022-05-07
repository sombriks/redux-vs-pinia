<template>
  <div>
    <input v-model="val" @keyup="(e) => $emit('onQuery', val)" />
    <button @click="(e) => $emit('onLogin', !logged)">
      {{ logged ? "Logout" : "Login" }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps(["query", "logged"]);
const val = ref(props.query);
</script>

<style></style>
