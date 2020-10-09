<template>
  <div class="home">
    <Search class="home__search" />
    <List class="home__list" />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import List from '@/components/List.vue'

export default {
  name: 'Home',
  components: {
    Search,
    List
  }
}
</script>

<style lang="less">
  .home {
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
