<template>
  <div class="bg-indigo-200 p-5 rounded-lg">
    <h2>Blog Menu</h2>

    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="{ name: 'BlogArticle', params: { id: article.id } }"> {{ article.title }} </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useBlogStore } from '@/stores/blog.store'

export default defineComponent({
  name: 'BlogSidemenu',
  setup() {
    const blogStore = useBlogStore()

    const articles = computed(() => blogStore.articles)

    return { articles }
  },
})
</script>
