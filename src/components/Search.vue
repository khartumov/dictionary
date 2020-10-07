<template>
  <aside class="search">
    <input type="text" class="search__field">
  </aside>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="less">
  .search {
    background: #EFEFEF;
    border-radius: 5px;
    padding: 15px;
    min-height: 100px;

    &__field {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #2c3e50;
      width: 100%;
      box-sizing: border-box;
      font-size: 17px;

      &:focus {
        outline:none;
        box-shadow: 0 0 10px 0px rgba(50, 50, 50, 0.3);
      }
    }
  }
</style>
