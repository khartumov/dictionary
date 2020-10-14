<template>
  <aside class="search">
    <form
      action=""
      @submit.prevent="submitHandler"
    >
      <input
        type="text"
        class="search__field"
        placeholder="Type text..."
        v-model.trim="searchParams.text"
        @input="$emit('search-event', searchParams)"
      >
      <div
        v-if="isStarredPage"
        class="search__parts-of-speech"
      >
        <div
          v-for="(item,index) in getPartsOfSpeech"
          :key="`${item}_${index}`"
          class="search__parts-of-speech-item"
        >
          <input
            type="checkbox"
            :id="item"
            :value="item"
            v-model="searchParams.partsOfSpeech"
            @input="$emit('search-event', searchParams)"
          >
          <label :for="item">{{item}}</label>
        </div>
      </div>
    </form>
  </aside>
</template>

<script>
export default {
  name: 'Search',

  data () {
    return {
      searchParams: {
        text: '',
        partsOfSpeech: []
      }
    }
  },

  computed: {
    isStarredPage () {
      return this.$route.path === '/starred'
    },

    starredWords () {
      return this.$store.state.starredWords
    },

    getPartsOfSpeech () {
      const partsOfSpeech = this.starredWords.map(word => word.partOfSpeech)

      return [...new Set(partsOfSpeech)]
    }
  },

  methods: {
    submitHandler (e) {
      if (this.$route.path === '/starred') {
        return false
      }

      if (this.$route.path === '/') {
        this.$emit('find-word', this.searchParams.text)
      }
    }
  }
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

    &__parts-of-speech {
      margin-top: 10px;
    }
  }
</style>
