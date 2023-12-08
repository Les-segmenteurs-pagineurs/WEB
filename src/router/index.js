import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountViewVue from '../views/AccountView.vue'
import AddAccount from '../views/AddAccountView.vue'
import DelAccount from '../views/DelAccountView.vue';
import Login from '../views/AccountLoginView.vue';
import SourcesChecker from '../views/SourcesChecker.vue'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/user/account',
            name: 'account',
            component: AccountViewVue
        },
        {
            path: '/user/add_account',
            name: 'add_account',
            component: AddAccount
        },
        {
            path: '/user/del_account',
            name: 'del_account',
            component: DelAccount
        },
        {
            path: '/user/login',
            name: 'login ',
            component: Login
        },
        {
            path: '/sourceschecker',
            name: 'sourceschecker',
            component: SourcesChecker
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: QuizView
        }
    ]
})

export default router
