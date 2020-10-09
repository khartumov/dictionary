<template>
  <div class="list">
      <ListItem
        v-for="(word,index) in words"
        :key="`${word.title}_${index}`"
        :title="word.title"
        :part-of-speech="word.partOfSpeech"
        :description="word.description"
        :is-starred="word.isStarred"
        :is-sortable="true"
        @change-star-status="word.isStarred = !word.isStarred"
      />
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'

export default {
  name: 'List',

  components: {
    ListItem
  },

  data () {
    return {
      words: [
        {
          title: 'apple',
          partOfSpeech: 'noun',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          isStarred: false
        },
        {
          title: 'dog',
          partOfSpeech: 'noun',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          isStarred: true
        },
        {
          title: 'international',
          partOfSpeech: 'noun',
          description: 'the quality or state of being free: such as',
          isStarred: false
        }
      ]
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
