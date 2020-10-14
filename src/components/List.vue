<template>
  <div>
    <template v-if="isStarredPage">
      <draggable
        v-if="filteredWords.length !== 0"
        tag="div"
        :list="words"
        class="list"
        handle=".list-item__sort"
      >
          <ListItem
            v-for="(word,index) in filteredWords"
            :key="`${word.title}_${index}`"
            :title="word.title"
            :part-of-speech="word.partOfSpeech"
            :description="word.description"
            :is-starred="word.isStarred"
            :is-sortable="true"
            @change-star-status="word.isStarred = !word.isStarred"
          />
      </draggable>
      <div
        v-else
        class="list"
      >
        Words not found
      </div>
    </template>

    <template v-if="!isStarredPage">
      <div
        v-if="words.length !== 0"
        class="list"
      >
        <ListItem
          :title="words[0].title"
          :part-of-speech="words[0].partOfSpeech"
          :description="words[0].description"
          :is-starred="false"
        />
      </div>
      <div
        v-else
        class="list"
      >
        Type word in search input and press Enter
      </div>
    </template>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
import draggable from 'vuedraggable'

export default {
  name: 'List',

  components: {
    ListItem,
    draggable
  },

  props: {
    filterParams: {
      type: Object,
      default: () => {}
    },
    words: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    filteredWords () {
      return this.words
        .filter(({ title }) => this.filterParams.text === '' ? true : title.toLowerCase().includes(this.filterParams.text))
        .filter(({ partOfSpeech }) => {
          return this.filterParams.partsOfSpeech.length === 0
            ? true
            : this.filterParams.partsOfSpeech.includes(partOfSpeech)
        })
    },

    isStarredPage () {
      return this.$route.path === '/starred'
    }
  }
}
</script>

<style lang="less">
  .list {
    background: #EFEFEF;
    border-radius: 5px;
    padding: 15px;
  }
</style>
