import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
  state: () => ({ logged: false }),
  actions: {
    setLogged(logged) {
      this.logged = logged
    },
  },
})

export const useFilter = defineStore('filter', {
  state() {
    return {
      query: "",
      page: 1,
      pageSize: 5
    }
  },
  getters: {
    canPrev() {
      return this.page > 1

    },
    canNext() {
      const products = useProducts()
      return products.list.length >= this.pageSize
    }
  },
  actions: {
    setPage(page) {
      this.page = page
    },
    setQuery(query) {
      this.query = query
    },
    updateQuery(query) {
      const products = useProducts()
      products.queryProducts(query)
    },
    updatePage(page) {
      const products = useProducts()
      products.queryProducts(this.query, page)
    }
  }
})

export const useProducts = defineStore('products', {
  state() {
    return {
      list: [..._products.slice(0, 5)],
    }
  },
  actions: {
    queryProducts(query, page) {
      const filter = useFilter();
      let products = _products;
      if (query != "") products = products.filter((p) => p.name.includes(query));
      if (!page || page <= 0) page = 1;
      this.list = products.slice((page - 1) * filter.pageSize, filter.pageSize * page);
      filter.setPage(page)
      filter.setQuery(query)
    }
  }
})

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
