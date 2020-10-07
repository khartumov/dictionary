<template>
  <header class="header">
    <router-link to="/" class="header__link">Dictionary</router-link>
    <router-link to="/starred" class="header__link">Starred</router-link>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less">
  .header {
    background-color: #35495E;
    border-radius: 5px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    padding: 10px 30px;

    &__link {
      color: #fff;
      text-decoration: none;
    }
  }
</style>
