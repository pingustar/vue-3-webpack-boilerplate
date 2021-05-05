import { defineStore } from 'pinia'

interface IArticle {
  id: number
  title: string
  content: string
}

export const useBlogStore = defineStore({
  id: 'blogStore',

  state: () => ({
    articles: [
      {
        id: 1,
        title: 'Article 1',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore, dolorem enim laborum laudantium molestia nam nobis possimus repellat reprehenderit rerum vel voluptas. A laborum magnam mollitia pariatur veniam vero.',
      },
      {
        id: 2,
        title: 'Article 2',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore, dolorem enim laborum laudantium molestia nam nobis possimus repellat reprehenderit rerum vel voluptas. A laborum magnam mollitia pariatur veniam vero.',
      },
      {
        id: 3,
        title: 'Article 3',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore, dolorem enim laborum laudantium molestia nam nobis possimus repellat reprehenderit rerum vel voluptas. A laborum magnam mollitia pariatur veniam vero.',
      },
    ] as IArticle[],
  }),

  actions: {
    findArticle(id: number): IArticle | null {
      const article = this.articles.find((a) => a.id === id)
      if (!article) return null

      return article
    },
  },
})
