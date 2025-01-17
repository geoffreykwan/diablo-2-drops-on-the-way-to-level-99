<template>
  <h1>Character</h1>
  <div>
    <h3>Character Gear</h3>
    <div class="alternate-color-rows">
      <div v-for="characterSlot in character.character" :key="character" class="grid-container-2">
        <div>{{ characterSlot.slot }}</div>
        <div>{{ characterSlot.gear }}</div>
      </div>
    </div>
  </div>
  <h3>Mercenary Gear</h3>
  <div class="alternate-color-rows">
    <div v-for="mercenarySlot in character.mercenary" :key="mercenarySlot" class="grid-container-2">
      <div>{{ mercenarySlot.slot }}</div>
      <div>{{ mercenarySlot.gear }}</div>
    </div>
  </div>
  <br />
  <br />
  <h3>Screenshots</h3>
  <div v-for="index in 41">
    <img :src="'../src/assets/character/character-' + index.toString().padStart(2, '0') + '.jpg'"
      class="character-image" />
    <br />
    <br />
  </div>
</template>

<script>
import '@/styles/character.css'
import character from '@/data/character.json'
export default {
  name: 'Character',
  data() {
    return {
      character: character
    }
  }
}
</script>