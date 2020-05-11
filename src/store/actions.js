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
  }

}