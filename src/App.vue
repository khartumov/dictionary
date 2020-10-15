<template>
  <div id="app" class="app">
    <Header />
    <h1 class="app__title">{{ capitalisedWord || $route.name }}</h1>
    <Layout />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Layout from '@/components/Layout.vue'

export default {
  components: {
    Header,
    Layout
  },

  computed: {
    capitalisedWord () {
      return this.$route.params.title
        ? this.$route.params.title[0].toUpperCase() + this.$route.params.title.slice(1)
        : null
    }
  },

  methods: {
    getStarredWords () {
      const starredWords = localStorage.getItem('dictionaryStarredWords')

      if (starredWords) {
        this.$store.commit('setStarredWordsFromLS', JSON.parse(starredWords))
      }
    }
  },

  mounted () {
    this.getStarredWords()
  }
}
</script>

<style lang="less">
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #F8F4F4;
    border-radius: 5px;
    padding: 15px;
    max-width: 1200px;
    margin: 0 auto;

    &__title {
      margin: 40px 0;
    }
  }

  @media (max-width: 560px) {
    .app {
      &__title {
        margin: 20px 0;
      }
    }
  }
</style>
