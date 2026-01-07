<template>
    <div class="bebas">
    <div class="popular-items py-5">
      <div class="container">
        <h4 class="mb-4 fw-semibold">Popular Items</h4>
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-5">
          <div v-for="(item, index) in items" :key="index" class="col">
            <div class="card h-100">
              <img :src="item.image" class="card-img-top" :alt="item.name" />
              <div class="card-body p-2">
                <h6 class="card-title text-truncate">{{ item.name }}</h6>
                <p class="text-muted mb-1 small">{{ item.brand }}</p>
                <strong class="text-dark">{{ formatPrice(item.price) }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    </div>
  </template>
  
<script>
import { mapState } from "vuex"
import product from "../data/product";

export default {
  name: "ItemProduct",

  computed: {
    ...mapState("product", {
      items: state => state.product
    })
  },

  created() {
    this.$store.dispatch("product/getProductData")
  },

  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
      }).format(value)
    }
  }
}
</script>
