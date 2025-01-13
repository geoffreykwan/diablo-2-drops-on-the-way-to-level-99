<template>
  <h1>Gheed's Fortunes</h1>
  <div class="align-center">
    <div class="grid-container-2">
      <div class="align-center">
        <Item :item="gheedsFortuneUnique" :showAttributes="true" />
      </div>
      <ItemStats :item="gheedsFortuneUnique" />
    </div>
  </div>
  Sort By
  <button @click="sortByExtraGold" :class="{ 'active-button': sortBy == 'goldFind' }">
    +% Extra Gold
  </button>
  <button @click="sortByVendorPrices" :class="{ 'active-button': sortBy == 'vendorPrices' }">
    +% Reduce Vendor Prices
  </button>
  <button @click="sortByMagicFind" :class="{ 'active-button': sortBy == 'magicFind' }">
    +% Magic Find
  </button>
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
import '@/styles/gheeds-fortunes.css'
import Item from '@/components/Item.vue'
import ItemStats from '@/components/ItemStats.vue'
import uniques from '@/data/uniques.json'
import gheedsFortunes from '@/data/gheeds-fortunes.json'
export default {
  name: "Gheed's Fortunes",
  components: {
    Item,
    ItemStats
  },
  data() {
    return {
      gheedsFortunes: gheedsFortunes,
      gheedsFortuneUnique: uniques.find(unique => unique.name === "Gheed's Fortune"),
      sortBy: ''
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
      this.sortBy = 'goldFind'
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
      this.sortBy = 'vendorPrices'
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
      this.sortBy = 'magicFind'
    },
  }
}
</script>