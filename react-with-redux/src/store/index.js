import { createStore, combineReducers } from "redux"

// sample data

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


// constants

export const QUERY_PRODUCTS = "QUERY_PRODUCTS";
export const UPDATE_PAGE = "UPDATE_PAGE";
export const UPDATE_QUERY = "UPDATE_QUERY";
export const SET_QUERY = "SET_QUERY";
export const SET_PAGE = "SET_PAGE";
export const SET_LOGGED = "SET_LOGGED";

// actions to dispatch

export const userActions = {
  setLogged(logged) {
    return { type: SET_LOGGED, payload: logged }
  }
}

export const filterActions = {
  setPage(page) {
    return { type: SET_PAGE, payload: page }
  },
  setQuery(query) {
    return { type: SET_QUERY, payload: query }
  },
  // // Uncaught Error: Reducers may not dispatch actions.
  // updatePage(page) {
  //   return { type: UPDATE_PAGE, payload: page }
  // },
  // updateQuery(query) {
  //   return { type: UPDATE_QUERY, payload: query }
  // },
}

export const productActions = {
  queryProducts(query, page) {
    return { type: QUERY_PRODUCTS, payload: { query, page } }
  }
}

// reducers

const userReducer = (state = { logged: false }, action) => {
  switch (action.type) {
    case SET_LOGGED:
      return { ...state, logged: action.payload }
    default:
      return state
  }
}

const filterReducer = (state = { query: "", page: 1 }, action) => {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.payload }
    case SET_QUERY:
      return { ...state, query: action.payload }
    // Uncaught Error: Reducers may not dispatch actions.
    // case UPDATE_PAGE:
    //   store.dispatch(productActions.queryProducts(state.query, action.payload))
    //   return { ...state, page: action.payload }
    // case UPDATE_QUERY:
    //   store.dispatch(productActions.queryProducts(action.payload))
    //   return { ...state, query: action.payload }
    default:
      return state
  }
}

const productsReducer = (state = { list: _products.slice(0, 5), pageSize: 5 }, action) => {
  switch (action.type) {
    case QUERY_PRODUCTS:
      // Uncaught Error: You may not call store.getState() while the reducer is executing.
      // const filter = store.getState().filterReducer;
      let { query, page } = action.payload
      let products = _products;
      if (query !== "") products = products.filter((p) => p.name.includes(query));
      if (!page || page <= 0) page = 1;
      products = products.slice((page - 1) * state.pageSize, state.pageSize * page);
      // store.dispatch(filterActions.setPage(page))
      // store.dispatch(filterActions.setQuery(query))
      return { ...state, list: products }
    default:
      return state
  }
}

// creating store with combined reducers

export const store = createStore(
  combineReducers({ userReducer, filterReducer, productsReducer }),
  // https://github.com/reduxjs/redux-devtools/tree/main/extension#1-with-redux
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
