import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'favoritos', component: () => import('pages/FavoritesPage.vue') },
      { path: 'categorias', component: () => import('pages/CategoriesPage.vue') },
      { path: 'sobre', component: () => import('pages/AboutPage.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router