import { InitModule } from '@/types/app'
import { initRouter } from '@/modules/router'
import { initPinia } from './pinia'

export const initModules: InitModule = (app) => {
  initRouter(app)
  initPinia(app)
}
