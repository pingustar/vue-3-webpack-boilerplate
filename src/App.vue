<template>
  <div class="p-5">
    <TheMainHeader />

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheMainHeader from '@/components/main/TheMainHeader.vue'

export default defineComponent({
  components: {
    TheMainHeader,
  },
})
</script>
