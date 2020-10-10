<template>
  <div>
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
    partOfWord: {
      type: String,
      default: ''
    }
  },

  computed: {
    filteredWords () {
      return this.words
        .filter(({ title }) => this.partOfWord === '' ? title : title.toLowerCase().includes(this.partOfWord))
    }
  },

  data () {
    return {
      words: [
        {
          title: 'apple',
          partOfSpeech: 'noun',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          isStarred: true
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
          isStarred: true
        },
        {
          title: 'freedom',
          partOfSpeech: 'adjective',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, the quality or state of being free: such as. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          isStarred: true
        },
        {
          title: 'freequency',
          partOfSpeech: 'noun',
          description: 'the ddd or state of being free: such as',
          isStarred: true
        },
        {
          title: 'move',
          partOfSpeech: 'verb',
          description: 'Lorem ipsum dolor sit amet the ddd or state of being free: such as. Lorem ipsum dolor sit amet the ddd or state of being free: such asthe ddd or state of being free: such as',
          isStarred: true
        },
        {
          title: 'fight',
          partOfSpeech: 'verb',
          description: 'Lorem ipsum dolor sit amet the ddd or state of being free: such as. Lorem ipsum dolor sit amet the ddd or state of being free: such as',
          isStarred: true
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
