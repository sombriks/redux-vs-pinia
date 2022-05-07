import { createStore, combineReducers } from "redux"

const userReducer = (state = {}, action) => {
  return state
}
const filterReducer = (state = {}, action) => {
  return state
}
const productsReducer = (state = {}, action) => {
  return state
}

export const store = createStore(combineReducers({ userReducer, filterReducer, productsReducer }))