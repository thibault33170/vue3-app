import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue'),
        name: 'PropertyList'
    },
    {
        path: '/property/:id',
        component: () => import('@/pages/PropertyEdit.vue'),
        name: 'PropertyEdit'
    },
    {
        path: '/property/new',
        component: () => import('@/pages/PropertyCreate.vue'),
        name: 'PropertyCreate'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router 