import { RouteRecordRaw } from 'vue-router'
import LayoutBlog from '@/layouts/LayoutBlog.vue'
import BlogSidemenu from '@/components/main/BlogSidemenu.vue'
import PageBlog from '@/pages/blog/PageBlog.vue'
import PageBlogArticles from '@/pages/blog/PageBlogArticles.vue'

export const blogRoutes: Array<RouteRecordRaw> = [
  {
    path: '/blog',
    // Set Layout Component
    component: LayoutBlog,
    // Set Pages using Layout
    children: [
      {
        path: '',
        name: 'Blog',
        components: {
          default: PageBlog,
          menu: BlogSidemenu,
        },
      },
      {
        path: 'article/:id',
        name: 'BlogArticle',
        components: {
          default: PageBlogArticles,
          menu: BlogSidemenu,
        },
        props: true,
      },
    ],
  },
]
