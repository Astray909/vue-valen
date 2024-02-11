import { createRouter, createWebHistory } from 'vue-router'
import Balda from '../components/Balda.vue'
import HelloWorld from '../components/HelloWorld.vue'
import HubWorld from '../components/Hub.vue'

const routes = [
    {
        path: '/',
        redirect: '/balda'
    },
    {
        path: '/balda',
        name: 'Balda',
        component: Balda
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/hub',
        name: 'HubWorld',
        component: HubWorld
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
