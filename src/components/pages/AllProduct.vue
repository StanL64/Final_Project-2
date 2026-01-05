<template>
    <HomeHeader/>
    <div>
        <AllProduct1></AllProduct1>
        <AllProduct2></AllProduct2>
        <AllProduct3></AllProduct3>
    </div>
    <home-footer></home-footer>
</template>
<script setup>
import HomeHeader from '../sections/HomeHeader.vue';
import AllProduct1 from '../sections/AllProduct1.vue';
import HomeFooter from '../sections/HomeFooter.vue';
import AllProduct2 from '../sections/AllProduct2.vue';
import AllProduct3 from '../sections/AllProduct3.vue';
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