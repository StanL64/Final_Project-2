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

</script>

<template>
  <div>
    <RouterView/>
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
