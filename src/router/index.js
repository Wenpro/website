import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
        title: 'Wenpro',
        metaTags: [
            {
                name: 'description',
                content: 'Wenpro'
            },
            {
                property: 'og:description',
                content: 'Wenpro'
            }
        ]
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
