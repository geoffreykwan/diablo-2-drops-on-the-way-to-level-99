<template>
  <h1>Gheed's Fortunes</h1>
  Sort By
  <button @click="sortByExtraGold">+% Extra Gold</button>
  <button @click="sortByVendorPrices">+% Reduce Vendor Prices</button>
  <button @click="sortByMagicFind">+% Magic Find</button>
  <div class="annihilus-row">
    <div>+% Extra Gold</div>
    <div>+% Reduce Vendor Prices</div>
    <div>+% Magic Find</div>
  </div>
  <div class="annihilus-rows">
    <div v-for="gheedsFortune in gheedsFortunes" :key="gheedsFortune" class="gheeds-fortune-row">
      <div>{{ gheedsFortune.extraGold }}</div>
      <div>{{ gheedsFortune.vendorPrices }}</div>
      <div>{{ gheedsFortune.magicFind }}</div>
    </div>
  </div>
</template>

<script>
import '../styles/gheeds-fortunes.css'
import gheedsFortunes from '../data/gheeds-fortunes.json'
export default {
  name: "Gheed's Fortunes",
  data() {
    return {
      gheedsFortunes: gheedsFortunes,
    }
  },
  mounted() {
    this.sortByMagicFind()
  },
  methods: {
    sortByExtraGold() {
      this.gheedsFortunes.sort((a, b) => {
        if (a.extraGold === b.extraGold) {
          if (a.magicFind === b.magicFind) {
            return b.vendorPrices - a.vendorPrices
          } else {
            return b.magicFind - a.magicFind
          }
        } else {
          return b.extraGold - a.extraGold
        }
      })
    },
    sortByVendorPrices() {
      this.gheedsFortunes.sort((a, b) => {
        if (a.vendorPrices === b.vendorPrices) {
          if (a.magicFind === b.magicFind) {
            return b.extraGold - a.extraGold
          } else {
            return b.magicFind - a.magicFind
          }
        } else {
          return b.vendorPrices - a.vendorPrices
        }
      })
    },
    sortByMagicFind() {
      this.gheedsFortunes.sort((a, b) => {
        if (a.magicFind === b.magicFind) {
          if (a.extraGold === b.extraGold) {
            return b.vendorPrices - a.vendorPrices
          } else {
            return b.extraGold - a.extraGold
          }
        } else {
          return b.magicFind - a.magicFind
        }
      })
    },
  }
}
</script>