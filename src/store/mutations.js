export default {
  SET_PRODUCTS:(state, payload) => {
    state.productList = payload
  },
  ADD_PRODUCT:(state, payload) => {
    state.productList.push(payload)
  }
}