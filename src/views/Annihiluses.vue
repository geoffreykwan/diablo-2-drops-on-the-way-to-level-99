<template>
  <h1>Annihiluses</h1>
  <div class="align-center">
    <div class="grid-container-2">
      <div class="align-center">
        <Item :item="annihilusUnique" :showStats="true" />
      </div>
      <ItemStats :item="annihilusUnique" />
    </div>
  </div>
  Sort By
  <button @click="sortByAttributes">+ All Attributes</button>
  <button @click="sortByResistances">+ All Resistances</button>
  <button @click="sortByExperience">+ Experience Gain</button>
  <div class="annihilus-row">
    <div>+ All Attributes</div>
    <div>+ All Resistances</div>
    <div>+ Experience Gain</div>
  </div>
  <div class="annihilus-rows">
    <div v-for="annihilus in annihiluses" :key="annihilus" class="annihilus-row">
      <div>{{ annihilus.attributes }}</div>
      <div>{{ annihilus.resistances }}</div>
      <div>{{ annihilus.experience }}</div>
    </div>
  </div>
</template>

<script>
import '../styles/annihiluses.css'
import Item from '../components/Item.vue'
import ItemStats from '../components/ItemStats.vue'
import uniques from '../data/uniques.json'
import annihiluses from '../data/annihiluses.json'
export default {
  name: 'Annihiluses',
  components: {
    Item,
    ItemStats
  },
  data() {
    return {
      annihiluses: annihiluses,
      annihilusUnique: uniques.find(unique => unique.name === 'Annihilus')
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
    },
  }
}
</script>