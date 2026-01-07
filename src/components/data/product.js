import axios from "axios"
import products from "@/components/data/data"

const baseURL = "https://vintage-project-41597-default-rtdb.firebaseio.com/"

export default {
  namespaced: true,

  state() {
    return {
      products: [],
      productDetail: {}
    }
  },

  mutations: {
    setProductData(state, payload) {
      state.products = payload
    },
    setProductDetail(state, payload) {
      state.productDetail = payload
    }
  },

  actions: {
    async uploadProductData({ dispatch }) {
      try {
        for (const product of products) {
          const payload = {
            ...product,
            createdAt: Date.now() //
          }
          await axios.post(`${baseURL}/products.json`, payload)
        }
        await dispatch("getProductData")
      } catch (err) {
        console.log(err)
      }
    },

    async getProductData({ commit }) {
      try {
        const { data } = await axios.get(`${baseURL}/products.json`)
        const arr = []

        for (let key in data) {
          arr.push({ id: key, ...data[key] })
        }

        commit("setProductData", arr)
      } catch (err) {
        console.log(err)
      }
    },

    async getProductDetail({ commit }, payload) {
      try {
        const { data } = await axios.get(
          `${baseURL}/products/${payload}.json`
        )
        commit("setProductDetail", data)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
