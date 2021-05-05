import { RouteRecordRaw } from 'vue-router'
import PageHome from '@/pages/PageHome.vue'
import LayoutHome from '@/layouts/LayoutHome.vue'

export const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // Set Layout Component
    component: LayoutHome,
    // Set Pages using Layout
    children: [
      {
        path: '',
        name: 'Home',
        component: PageHome,
      },
    ],
  },
]
