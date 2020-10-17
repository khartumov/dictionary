<template>
  <div class="home">
    <Search
      class="home__search"
      @find-word="fetchWord"
    />
    <List
      class="home__list"
      :part-of-word="searchData"
      :words="words"
    />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import List from '@/components/List.vue'
import axios from 'axios'
import { APIKEY } from '../apiKey'

export default {
  name: 'Home',
  components: {
    Search,
    List
  },

  data () {
    return {
      searchData: '',
      words: []
    }
  },

  methods: {
    fetchWord (searchData) {
      axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchData}?key=${APIKEY}`)
        .then(({ data }) => {
          const title = data[0].hwi.hw.replace('*', '')

          this.words = [{
            title,
            partOfSpeech: data[0].fl,
            description: data[0].shortdef[0],
            isStarred: this.getWordfromStarred(title) ? true : false // eslint-disable-line
          }]
        })
        .catch(error => {
          // TODO: show error
          this.words = []
          console.error(error)
        })
    },

    getWordfromStarred (title) {
      return this.$store.getters.getWordByTitle(title)
    }
  }
}
</script>

<style lang="less">
  .home {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    &__search {
      width: 27%;
    }

    &__list {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    .home {
      flex-direction: column;

      &__search {
        width: 100%;
      }

      &__list {
        width: 100%;
        margin-top: 15px;
      }
    }
  }
</style>
