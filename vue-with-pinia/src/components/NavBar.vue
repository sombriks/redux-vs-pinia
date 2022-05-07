<template>
  <div>
    <input v-model="query" @keyup="filterStore.updateQuery(query)" />
    <button @click="userStore.setLogged(!userStore.logged)">
      {{ userStore.logged ? "Logout" : "Login" }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUser, useFilter } from "../store";

const userStore = useUser();
const filterStore = useFilter();
const query = ref(filterStore.query);
</script>

<style></style>
