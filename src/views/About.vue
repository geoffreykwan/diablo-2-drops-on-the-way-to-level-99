<template>
  <h1>About</h1>
  <div v-for="info in about" :key="info" class="align-left">
    <div class="question">{{ info.question }}</div>
    <div v-if="Array.isArray(info.answer)" v-for="answerLine in info.answer" :key="answerLine"
      class="answer">
      {{ answerLine }}
    </div>
    <div v-else class="answer">{{ info.answer }}</div>
    <div v-if="info.linkUrl != undefined" class="link">
      <a :href="info.linkUrl" target="_blank" :download="info.download">{{ info.linkText }}</a>
    </div>
    <br />
  </div>
</template>

<script>
import '@/styles/about.css'
import about from '@/data/about.json'
export default {
  name: 'About',
  data() {
    return {
      about: about
    }
  }
}
</script>