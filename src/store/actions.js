import axios from 'axios'

export default {
  setProducts: async ({commit},payload) => {
    try {
      let result = await axios.get('http://localhost:3000/products')
      console.log(result.data)
      commit('SET_PRODUCTS', result.data)
    } catch (error) {
      throw new Error(error)
    }
  },
  addProduct: async ({commit}, payload) => {
    try {
      let result = await axios.post('http://localhost:3000/products', payload)
      console.log(result.data)
      commit('ADD_PRODUCT', result.data)
    } catch (error) {
      throw new Error(error)
    }
  }

}