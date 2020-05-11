export default {
  productList: (state) => {
    return state.productList.filter(product => product)
  }
}