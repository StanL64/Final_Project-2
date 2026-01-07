<script setup>
import { RouterView } from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import LoginPage from './components/pages/LoginPage.vue';
import SignupPage from './components/pages/SignupPage.vue';
import HomeHeader from './components/sections/HomeHeader.vue';
import PopularProduct from './components/sections/PopularProduct.vue';
import Jumbotron from './components/sections/Jumbotron.vue';
import HomeFooter from './components/sections/HomeFooter.vue';
import NewProduct from './components/sections/NewProduct.vue';
import ShopByBrand from './components/sections/ShopByBrand.vue';
import DetailProduct from './components/pages/DetailProduct.vue';
import PopularProduct2 from './components/sections/PopularProduct2.vue';

</script>

<template>
  <div>
    <PopularProduct2/>
  </div>
  
</template>

<style>
  body, html, #app{
    margin:0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
</style>
