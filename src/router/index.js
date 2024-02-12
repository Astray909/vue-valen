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
        path: '/hub',
        name: 'HubWorld',
        component: HubWorld,
        meta: { title: 'Main Hub', header: 'Hub World', icon: 'mdi-home-circle', hidden: false }
    },
    {
        path: '/balda',
        name: 'Balda',
        component: Balda,
        meta: { title: 'Balda', header: 'Will you be my balda?', icon: 'mdi-hand-heart', hidden: false }
    },
    {
        path: '/food',
        name: 'FoodWorld',
        component: FoodWorld,
        meta: { title: 'Eat what?', header: 'What for dinner?', icon: 'mdi-food-croissant', hidden: false }
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: { title: 'HelloWorld', header: 'Test World', icon: 'mdi-test-tube', hidden: true }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
