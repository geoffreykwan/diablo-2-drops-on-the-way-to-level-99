<template>
  <h1>Annihiluses</h1>
  <div class="align-center">
    <div class="grid-container-2 no-padding-top">
      <div class="align-center">
        <Item :item="annihilusUnique" :showAttributes="true" />
      </div>
      <ItemStats :item="annihilusUnique" />
    </div>
  </div>
  <h4 class="sort-by-text">Sort By</h4>
  <button @click="sortByAttributes" :class="{ 'active-button': sortBy == 'attributes' }">
    +All Attributes
  </button>
  <button @click="sortByResistances" :class="{ 'active-button': sortBy == 'resistances' }">
    +All Resistances
  </button>
  <button @click="sortByExperience" :class="{ 'active-button': sortBy == 'experience' }">
    +Experience Gain
  </button>
  <div class="grid-container-3">
    <div>+All Attributes</div>
    <div>+All Resistances</div>
    <div>+Experience Gain</div>
  </div>
  <div class="alternate-color-rows">
    <div v-for="annihilus in annihiluses" :key="annihilus" class="grid-container-3">
      <div>{{ annihilus.attributes }}</div>
      <div>{{ annihilus.resistances }}</div>
      <div>{{ annihilus.experience }}</div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
import ItemStats from '@/components/ItemStats.vue'
import uniques from '@/data/uniques.json'
import annihiluses from '@/data/annihiluses.json'
export default {
  name: 'Annihiluses',
  components: {
    Item,
    ItemStats
  },
  data() {
    return {
      annihiluses: annihiluses,
      annihilusUnique: uniques.find(unique => unique.name === 'Annihilus'),
      sortBy: ''
    }
  },
  mounted() {
    this.sortByAttributes()
  },
  methods: {
    sortByAttributes() {
      this.annihiluses.sort((a, b) => {
        if (a.attributes === b.attributes) {
          if (a.resistances === b.resistances) {
            return b.experience - a.experience
          } else {
            return b.resistances - a.resistances
          }
        } else {
          return b.attributes - a.attributes
        }
      })
      this.sortBy = 'attributes'
    },
    sortByResistances() {
      this.annihiluses.sort((a, b) => {
        if (a.resistances === b.resistances) {
          if (a.attributes === b.attributes) {
            return b.experience - a.experience
          } else {
            return b.attributes - a.attributes
          }
        } else {
          return b.resistances - a.resistances
        }
      })
      this.sortBy = 'resistances'
    },
    sortByExperience() {
      this.annihiluses.sort((a, b) => {
        if (a.experience === b.experience) {
          if (a.attributes === b.attributes) {
            return b.resistances - a.resistances
          } else {
            return b.attributes - a.attributes
          }
        } else {
          return b.experience - a.experience
        }
      })
      this.sortBy = 'experience'
    },
  }
}
</script>