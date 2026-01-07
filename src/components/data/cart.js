import axios from "axios";
import Cookies from "js-cookie";
export default {
    namespaced: true,
    state() {
        return {
            wishlist: [],
        }
    },
    mutations: {
        setWishlist(state, wishlist) {
            state.wishlist = wishlist;
        },

    },
    actions: {
        actions: {
  async addToWishlist({ state }, product) {
    if (!state.user) return;

    const userId = state.user.localId;
    const token = state.idToken;

    await axios.put(
      `${DB_URL}/wishlist/${userId}/${product.id}.json?auth=${token}`,
      product
    );
  },

  async fetchWishlist({ commit, state }) {
    const userId = state.user.localId;
    const token = state.idToken;

    const res = await axios.get(
      `${DB_URL}/wishlist/${userId}.json?auth=${token}`
    );

    const data = res.data || {};
    const wishlistArray = Object.keys(data).map(key => ({
      id: key,
      ...data[key],
    }));
    commit('setWishlist', wishlistArray);
  },

  async removeFromWishlist({ state }, productId) {
    const userId = state.user.localId;
    const token = state.idToken;

    await axios.delete(
      `${DB_URL}/wishlist/${userId}/${productId}.json?auth=${token}`
    );
  },
},
methods: {
  addWishlist(item) {
    this.$store.dispatch('addToWishlist', item);
  },
    },
    methods: {
        addWishlist(item) {
            this.$store.dispatch('addToWishlist', item);
        },
    },
}
}