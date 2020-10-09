<template>
  <div class="starred">
    <Search class="starred__search" />
    <List class="starred__list" />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import List from '@/components/List.vue'

export default {
  name: 'Starred',
  components: {
    Search,
    List
  }
}
</script>

<style lang="less">
  .starred {
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
