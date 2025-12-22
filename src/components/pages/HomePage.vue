<template>
    <HomeHeader/>
    <Jumbotron />
    <div>
        <PopularProduct/>
        <NewProduct/>
    </div>
    <home-footer></home-footer>
</template>
<script setup>
import HomeHeader from '../sections/HomeHeader.vue';
import PopularProduct from '../sections/PopularProduct.vue';
import HomeFooter from '../sections/HomeFooter.vue';
import Jumbotron from '../sections/Jumbotron.vue';
import NewProduct from '../sections/NewProduct.vue';
</script>
<style scoped>
    body, html, #app{
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    #app {
        display: block;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
</style>