<template>
  <div class="list-item">
    <div class="list-item__word-info">
      <div
        v-if="isSortable"
        class="list-item__sort">
      </div>
      <router-link
        :to="{
          name: 'Single',
          params: {
            title,
            partOfSpeech,
            description
          }
        }"
        class="list-item__title"
      >
        {{ title }}
      </router-link>
      <div class="list-item__part-of-speech">
        {{ partOfSpeech }}
      </div>
      <div class="list-item__description">
        {{ description }}
      </div>
    </div>
    <a
      href="#"
      class="list-item__star"
      :class="{ 'list-item__star--filled' : isStarred }"
      @click="$emit('change-star-status')"
    />
  </div>
</template>

<script>
export default {
  name: 'ListItem',

  props: {
    title: {
      type: String,
      required: true
    },
    partOfSpeech: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    isStarred: {
      type: Boolean,
      default: false
    },
    isSortable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
  .list-item {
    background: #fff;
    border-radius: 5px;
    padding: 10px 15px;
    color: #444;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    &__word-info {
      display: flex;
      max-width: 95%;
    }

    &__sort {
      position: relative;
      min-width: 20px;
      height: 20px;
      margin-right: 15px;
      cursor: move;

      &:before {
        content: '\2630';
        top: -2px;
        position: absolute;
      }
    }

    &__title {
      font-weight: bold;
      margin-right: 20px;
      text-decoration: none;
      color: #444;
    }

    &__part-of-speech {
      margin-right: 20px;
    }

    &__description {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 615px;
    }

    &__star {
      width: 20px;
      height: 20px;
      background: url('../assets/star.svg') no-repeat center / cover;

      &--filled {
        background: url('../assets/star--filled.svg') no-repeat center / cover;
      }
    }
  }
</style>
