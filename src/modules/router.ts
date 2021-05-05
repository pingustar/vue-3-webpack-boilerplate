import { InitModule } from '@/types/app'
import { createRouter, createWebHistory, RouteRecordRaw, RouterHistory, RouterScrollBehavior } from 'vue-router'
import { homeRoutes } from '@/routes/home.routes'
import { blogRoutes } from '@/routes/blog.routes'

export const initRouter: InitModule = (app) => {
  const history: RouterHistory = createWebHistory(process.env.BASE_URL)

  const routes: Array<RouteRecordRaw> = [...homeRoutes, ...blogRoutes]

  const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) return { top: savedPosition.top }
    return { top: 0 }
  }

  const router = createRouter({
    scrollBehavior,
    history,
    routes,
  })

  app.use(router)
}
