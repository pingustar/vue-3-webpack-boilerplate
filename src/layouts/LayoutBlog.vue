<template>
  <div class="mb-5">[ Layout - Blog ]</div>
  <div class="grid grid-cols-12 gap-10">
    <div class="hidden md:block md:col-span-4 lg:col-span-3 xl:col-span-3 2xl:col-span-2">
      <router-view name="menu" />
    </div>
    <div class="col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-9 2xl:col-span-10">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LayoutBlog',
  setup() {
    const count = ref<number>(0)

    return { count }
  },
})
</script>
