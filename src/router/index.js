import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/productsList.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/category.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/productDetails/:id',
    name: 'productDetails',
    component: () => import('../views/productDetails.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        next('/login');
      } else {
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
