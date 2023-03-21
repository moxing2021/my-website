import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/',
        name:'Home',
        component:()=>import('@/views/Home/index.vue'),
        redirect:'/understand',
        meta:{
            title:'首页'
        },
        children:[
            {
            path:'/understand',
            name:'understand',
            component:()=>import('@/views/Understand/index.vue'),
            meta:{
                title:'了解我们'
            }
            },
            {
                path:'/contact',
                name:'contact',
                component:()=>import('@/views/Contact/index.vue'),
                meta:{
                    title:'联系我们'
                }
            }
        ]
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router