<template>
  <h2>Home Blog</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore, dolorem enim laborum laudantium molestias
    nam nobis possimus repellat reprehenderit rerum vel voluptas. A laborum magnam mollitia pariatur veniam vero.
  </p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageBlog',
  components: {},
  setup() {
    const helloWorld = ref<string>('Hello World!')

    return { helloWorld }
  },
})
</script>
