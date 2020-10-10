<template>
  <div class="single">
    <div class="single__part-of-speech">{{ $route.params.partOfSpeech }}</div>
    <div class="single__description">
      {{ $route.params.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Single'
}
</script>

<style lang="less">
  .single {
    background: #EFEFEF;
    border-radius: 5px;
    padding: 15px;

    &__part-of-speech {
      font-style: italic;
      margin-bottom: 15px;
    }
  }
</style>
