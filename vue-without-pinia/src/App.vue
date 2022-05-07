<template>
  <NavBar
    :query="query"
    :logged="logged"
    @onQuery="doQuery"
    @onLogin="(v) => (logged = v)"
  />
  <ProductListing :products="products" />
  <ProductPaginator
    :page="page"
    :products="products"
    :pageSize="pageSize"
    @onPage="doPage"
  />
</template>

<script setup>
import { ref } from "vue";

import NavBar from "./components/NavBar.vue";
import ProductListing from "./components/ProductListing.vue";
import ProductPaginator from "./components/ProductPaginator.vue";

const _products = [
  { id: 1, name: "coca cola" },
  { id: 2, name: "pepsi" },
  { id: 3, name: "sprite" },
  { id: 4, name: "shweppes" },
  { id: 5, name: "dolly" },
  { id: 6, name: "kwat" },
  { id: 7, name: "mirinda" },
  { id: 8, name: "soda" },
  { id: 9, name: "7 up" },
  { id: 10, name: "gatorade" },
  { id: 11, name: "i9" },
  { id: 12, name: "h2oh!" },
];

const query = ref("a");
const page = ref(1);
const pageSize = ref(5);
const logged = ref(false);
const products = ref(getProducts(""));

function getProducts(query, page) {
  let products = _products;
  if (query != "") products = products.filter((p) => p.name.includes(query));
  if (!page || page <= 0) page = 1;
  return products.slice((page - 1) * pageSize.value, pageSize.value * page);
}

function doQuery(q) {
  query.value = q;
  page.value = 1;
  products.value = getProducts(query.value);
}

function doPage(p) {
  page.value = p;
  products.value = getProducts(query.value, page.value);
}
</script>

<style></style>
