import { createRouter, createWebHistory } from 'vue-router'
import Balda from '../components/Balda.vue'
import HelloWorld from '../components/HelloWorld.vue'
import HubWorld from '../components/Hub.vue'
import FoodWorld from '../components/Food.vue'

const routes = [
    {
        path: '/',
        redirect: '/hub'
    },
    {
        path: '/balda',
        name: 'Balda',
        component: Balda,
        meta: { title: 'Balda' }
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: { title: 'HelloWorld' }
    },
    {
        path: '/hub',
        name: 'HubWorld',
        component: HubWorld,
        meta: { title: 'Main Hub' }
    },
    {
        path: '/food',
        name: 'FoodWorld',
        component: FoodWorld,
        meta: { title: 'Eat what?' }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
