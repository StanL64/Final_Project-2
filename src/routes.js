import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./components/pages/HomePage.vue"
import SignupPage from "./components/pages/SignupPage.vue"
import LoginPage from "./components/pages/LoginPage.vue"
import AllProduct from './components/pages/AllProduct.vue'
const routes=[
    {path:"/", name:"homepage", component:HomePage},
    {path:"/signup", name:"signup", component:SignupPage},
    {path:"/login", name:"login", component:LoginPage},
    {path:"/all-item", name:"allitem", component:AllProduct},
    {
        path: '/product/:id',
        name: 'ProductDetail',
        component: () => import('@/views/product/ProductDetail.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  
})

export default router;