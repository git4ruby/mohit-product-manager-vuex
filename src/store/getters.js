export default {
  productList: (state,getters) => {
    return state.productList.filter(product => product)
  }
}