<template>
  <div class="home">
    <Search
      class="home__search"
      @find-word="fetchWord"
    />
    <div class="home__content">
      <Message
        v-if="errorText"
        :text="errorText"
        type="error"
      />
      <List
        v-if="!errorText"
        class="home__list"
        :part-of-word="searchData"
        :words="words"
      />
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import List from '@/components/List.vue'
import Message from '@/components/Message.vue'
import axios from 'axios'
import { APIKEY } from '../apiKey'

export default {
  name: 'Home',
  components: {
    Search,
    List,
    Message
  },

  data () {
    return {
      searchData: '',
      words: [],
      errorText: null
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

          this.errorText = null
        })
        .catch(error => {
          this.errorText = 'Word not found. Please type another word and try again.'
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

    &__content {
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    .home {
      flex-direction: column;

      &__search {
        width: 100%;
      }

      &__content {
        width: 100%;
        margin-top: 15px;
      }
    }
  }
</style>
