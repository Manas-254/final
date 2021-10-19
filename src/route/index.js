import { createRouter,createWebHistory} from "vue-router";
import MainFile from '../components/mainfile/MainFile.vue'
import Login from '../components/login/Login.vue'
import Cart from '../components/cart/Cart.vue'
import User  from '../components/user/User.vue'
import Checkout from '../components/checkout/Checkout.vue'
const routes=[
    { path: '/:pathMatch(.*)*',  component: MainFile },
    {
        path:'/',
        name:'login',
        component:Login
    },
    {
        path:'/details/:id',
        name:'details',
        component:()=>import(/*webpackChunkName="Details"*/"@/components/view/Details.vue")
    },
    {
        path: '/main',
        name: 'main',
        component:MainFile
    },
    {
        path: '/cart',
        name: 'cart',
        component:Cart
    },
    {
        path: '/user',
        name: 'user',
        component:User
    },
    {
        path: '/checkout',
        name: 'checkout',
        component:Checkout
    },
    
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  export default router;
