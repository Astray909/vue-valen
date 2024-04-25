import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Balda from '../components/Balda.vue'
import HelloWorld from '../components/HelloWorld.vue'
import HubWorld from '../components/Hub.vue'
import FoodWorld from '../components/Food.vue'
import BdayWorld from '../components/BDay.vue'
import Profile from '../components/Profile.vue'
import NotFound from '../components/NotFound.vue'

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
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { title: 'Profile', header: 'User Profile', icon: 'mdi-home-circle', hidden: true }
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
        path: '/bday',
        name: 'BdayWorld',
        component: BdayWorld,
        meta: { title: 'Happy Birthday!!!!!', header: 'You are the birthday boy!!!', icon: 'mdi-party-popper', hidden: false }
    },
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: { title: 'HelloWorld', header: 'Test World', icon: 'mdi-test-tube', hidden: true }
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
        meta: { title: '404 Not Found', header: 'Page Not Found', icon: 'mdi-test-tube', hidden: true }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = store.state.user.loggedIn;

    if (loggedIn || to.path === '/hub') {
        next();
    } else {
        next('/hub');
    }
});

export default router
