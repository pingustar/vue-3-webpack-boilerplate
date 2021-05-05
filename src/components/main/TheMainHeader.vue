<template>
  <div class="flex justify-start items-center bg-indigo-500 rounded-lg p-5 mb-5 text-white">
    <div>
      <h1>App Title</h1>
    </div>

    <div class="ml-10">
      <router-link :to="{ name: 'Home' }"> Home </router-link>
      |
      <router-link :to="{ name: 'Blog' }"> Blog </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheMainHeader',
  setup() {
    return {}
  },
})
</script>
