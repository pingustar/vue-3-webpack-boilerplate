import { InitModule } from '@/types/app'
import { createPinia } from 'pinia'

export const initPinia: InitModule = (app) => {
  app.use(createPinia())
}
