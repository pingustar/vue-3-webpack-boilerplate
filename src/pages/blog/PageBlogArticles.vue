<template>
  <h2 v-if="!article">404 - Article not found</h2>
  <div v-else>
    <h2>{{ article.title }}</h2>
    <p>
      {{ article.content }}
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useBlogStore } from '@/stores/blog.store'

export default defineComponent({
  name: 'PageBlogArticle',
  props: {
    id: { type: String, required: true },
  },
  setup(props) {
    const blogStore = useBlogStore()

    const article = computed(() => blogStore.findArticle(Number(props.id)))

    return { article }
  },
})
</script>
