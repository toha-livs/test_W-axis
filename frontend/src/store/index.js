import Vue from 'vue'
import Vuex from 'vuex'
import { Order } from '../api/orders'
import { ShoppingCash } from '../api/shopping_cash'
import {
  ADD_ORDER,
  REMOVE_ORDER,
  SET_ORDERS,
  SET_SHOPPINGS,
  ADD_SHOPPING,
  REMOVE_SHOPPING,
  SET_PRODUCTS
} from './mutation_types'

Vue.use(Vuex)

const state = {
  orders: [],
  shoppings: [],
  products: []
}

const getters = {
  orders: state => state.orders,
  shoppings: state => state.shoppings,
  products: state => state.products
}

const mutations = {
  [ADD_ORDER] (state, order) {
    state.orders = [...state.orders, order]
  },
  [REMOVE_ORDER] (state, order_id) {
    state.orders = state.orders.filter(order => {
      return order.id !== order_id
    })
  },
  [SET_ORDERS] (state, { orders }) {
    state.orders = orders.result
  },
  [SET_PRODUCTS] (state, { products }) {
    state.products = products.data
  },
  [ADD_SHOPPING] (state, shopping) {
    state.shoppings = [...state.shoppings, shopping.data]
  },
  [REMOVE_SHOPPING] (state, shopping_id) {
    state.shoppings = state.shoppings.filter(shopping => {
      return shopping.id !== shopping_id
    })
  },
  [SET_SHOPPINGS] (state, { shoppings }) {
    state.shoppings = shoppings.data
  },
}

const actions = {
  createOrder ({ commit }, orderData) {
    Order.create(orderData).then(order => {
      commit(ADD_ORDER, order)
    })
  },
  deleteOrder ({ commit }, OrderId) {
    Order.delete(OrderId).then(order => {
      commit(REMOVE_ORDER, OrderId)
    })
  },
  getOrders ({ commit }) {
    Order.list().then(orders => {
      commit(SET_ORDERS, { orders })
    })
  },
  getProducts ({commit}) {
    ShoppingCash.dict().then(products => {
      commit(SET_PRODUCTS, { products })
    })
  },
  createShopping ({ commit }, shoppingData) {
    ShoppingCash.add(shoppingData).then(shopping => {
      commit(ADD_SHOPPING, shopping)
    }).catch( error => {
      alert('этот товар уже добавлен!')
    })
  },
  deleteShopping ({ commit }, shoppingId) {
    ShoppingCash.delete(shoppingId).then(shopping => {
      commit(REMOVE_SHOPPING, shoppingId)
    })
  },
  getShoppings ({ commit }, OrderId) {
    ShoppingCash.list(OrderId).then(shoppings => {
      commit(SET_SHOPPINGS, { shoppings })
    })
  },
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
