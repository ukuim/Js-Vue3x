import * as router from 'vue-router'


const route=router.createRouter({
    history:router.createWebHistory(),
    routes:[
        {
            path:'/',
            component:()=>import('@/components/HelloVueX.vue')
        }
    ]
})
export default route

