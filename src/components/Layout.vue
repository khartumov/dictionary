<template>
  <main class="layout">
    <Search class="layout__search" />
    <div class="layout__list">
      <router-view />
    </div>
  </main>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'Layout',
  components: {
    Search
  }
}
</script>

<style lang="less">
  .layout {
    display: flex;
    justify-content: space-between;

    &__search {
      width: 26%;
    }

    &__list {
      width: 70%;
    }
  }
</style>
