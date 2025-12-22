<template>
    <div class="container-fluid" style="width: 80vw;">
        <h4>Shop By Brand</h4>
        <div style="display: flex;justify-content: space-between;">
            <div v-for="(value, index) in items" :key="index" style="border: solid 1px grey" class=" px-2">
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'ShopBrand',
    data() {
      return {
        items: [
            "Vans", "Bohoo", "Mango", "Reebok", "Converse", "Sandro", "Nike", "Adidas", "Dior", "Puma", "Zara", "Bershka", "American Eagle"
        ],
      };
    },
    methods: {
    },
  };
</script>