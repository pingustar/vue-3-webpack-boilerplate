<template>
  <h2>Home Page</h2>
  <HelloWorld :msg="helloWorld"></HelloWorld>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/common/HelloWorld.vue'

export default defineComponent({
  name: 'PageHome',
  components: { HelloWorld },
  setup() {
    const helloWorld = ref<string>('Hello World! Lorem Ipsum...')

    return { helloWorld }
  },
})
</script>
