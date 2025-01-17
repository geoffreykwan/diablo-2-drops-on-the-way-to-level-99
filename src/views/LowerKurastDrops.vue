<template>
  <h1>Lower Kurast Drops</h1>
  <h4>I ran Lower Kurast 3000 times to obtain the runes for Infinity and recorded when I obtained a
    Lem or higher.</h4>
  <h3>Runs</h3>
  <div class="grid-container-2">
    <div>Run #</div>
    <div>Rune</div>
  </div>
  <div class="alternate-color-rows">
    <div v-for="lowerKurastDrop in lowerKurastDrops" class="grid-container-2">
      <div>{{ lowerKurastDrop.run }}</div>
      <div>{{ lowerKurastDrop.rune }}</div>
    </div>
  </div>
  <h3>Totals</h3>
  <div class="grid-container-2">
    <div>Rune</div>
    <div>Count</div>
  </div>
  <div class="alternate-color-rows">
    <div v-for="rune in significantRunes" class="grid-container-2">
      <div>{{ rune }}</div>
      <div>{{ runeCounts[rune] ?? 0 }}</div>
    </div>
  </div>
</template>

<script>
import '@/styles/lower-kurast-drops.css'
import runes from '@/data/runes.json'
import lowerKurastDrops from '@/data/lower-kurast-drops.json'
export default {
  name: 'Lower Kurast Drops',
  data() {
    return {
      lowerKurastDrops: lowerKurastDrops,
      runeCounts: {},
      significantRunes: []
    }
  },
  mounted() {
    this.getSignificantRunes()
    this.countRunes()
  },
  methods: {
    getSignificantRunes() {
      const runesLowToHigh = runes.toReversed()
      this.significantRunes = runesLowToHigh.slice(
        runesLowToHigh.indexOf(runesLowToHigh.find(rune => rune.name === "Lem Rune"))
      ).map(rune => rune.name.replace(" Rune", ""))
    },
    countRunes() {
      this.lowerKurastDrops.forEach(lowerKurastDrop => {
        if (lowerKurastDrop.rune in this.runeCounts) {
          this.runeCounts[lowerKurastDrop.rune]++
        } else {
          this.runeCounts[lowerKurastDrop.rune] = 1
        }
      })
    },
  }
}
</script>