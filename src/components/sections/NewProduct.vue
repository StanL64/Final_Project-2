<template>
    <div class="container-fluid" style="width: 99vw;">
        <div class="upper-part">
            <h4>New Items</h4>
            <a class="ijo">See All</a>
        </div>
        <div class="product-container row g-5 mx-2">
              <div v-for="(value, index) in items" :key="index" class="col">
                  <img :src="value.image" alt="Product Image" style="width: 180px; height: 210px;"></img>
                  <h4 class="ijo">{{ value.price }}</h4>
                  <p style="white-space: pre-line;">{{ value.name }}</p>
                  <div style="margin-top: auto;display: flex;justify-content: space-between;">
                      <span style="margin: 0;">8/M</span>
                      <span style="margin: 0;"><i class="bi bi-heart"></i>12</span>
                  </div>
              </div>
              <div style="border: 2px solid teal;border-radius: 9px;background-color: aquamarine;width: 100px" class="col">
                <p class="ijo" style="text-align: center;align-items: center;margin: auto;">See All New Product</p>
              </div>
        </div>
    </div>
</template>
<script>
  import image1 from '@/assets/productImage/9.png'
  import image2 from '@/assets/productImage/1.png'
  import image3 from '@/assets/productImage/4.png'
  import image4 from '@/assets/productImage/8.png'
  import image5 from '@/assets/productImage/2.png'
 export default {
    name: 'PopularItem',
    data() {
      return {
        items: [
          { name: 'Vintage chicago cubs \nwhite crewneck', brand: 'Zara', price: 80000, image: image1 },
          { name: 'Red Crewneck', brand: 'H&M', price: 95000, image: image2 },
          { name: 'Necklace', brand: 'Uniqlo', price: 50000, image: image3 },
          { name: 'Necklace', brand: 'Pull&Bear', price: 70000, image: image4 },
          { name: 'Necklace', brand: 'Pull&Bear', price: 70000, image: image5 },
        ],
      };
    },
    methods: {
      formatPrice(value) {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        }).format(value);
      },
    },
  };
</script>
<style scoped>
    .upper-part {
        display: flex;
        justify-content: space-between;
    }
    /* .product-container {
      display: flex;
      justify-content: space-around;
    } */
    .ijo {
      color: teal;
      text-decoration: none;
    }
</style>