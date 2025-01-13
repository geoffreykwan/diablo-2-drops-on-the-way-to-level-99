<template>
  <h1>Hellfire Torches</h1>
  <div class="align-center">
    <div class="grid-container-2">
      <div class="align-center">
        <Item :item="hellfireTorchUnique" :showAttributes="true" />
      </div>
      <ItemStats :item="hellfireTorchUnique" />
    </div>
  </div>
  Sort By
  <button @click="sortByClass" :class="{ 'active-button': sortBy == 'class' }">
    + 3 Class Skills
  </button>
  <button @click="sortByAttributes" :class="{ 'active-button': sortBy == 'attributes' }">
    + All Attributes
  </button>
  <button @click="sortByResistances" :class="{ 'active-button': sortBy == 'resistances' }">
    + All Resistances
  </button>
  <div class="torch-row">
    <div>+ 3 Class Skills</div>
    <div>+ All Attributes</div>
    <div>+ All Resistances</div>
  </div>
  <div class="torch-rows">
    <div v-for="hellfireTorch in hellfireTorches" :key="hellfireTorch" class="torch-row">
      <div>{{ hellfireTorch.class }}</div>
      <div>{{ hellfireTorch.attributes }}</div>
      <div>{{ hellfireTorch.resistances }}</div>
    </div>
  </div>
</template>

<script>
import '../styles/hellfire-torches.css'
import Item from '../components/Item.vue'
import ItemStats from '../components/ItemStats.vue'
import uniques from '../data/uniques.json'
import hellfireTorches from '../data/hellfire-torches.json'
export default {
  name: 'HellfireTorches',
  components: {
    Item,
    ItemStats
  },
  data() {
    return {
      hellfireTorches: hellfireTorches,
      hellfireTorchUnique: uniques.find(unique => unique.name === 'Hellfire Torch'),
      sortBy: ''
    }
  },
  mounted() {
    this.sortByClass()
  },
  methods: {
    sortByClass() {
      this.hellfireTorches.sort((a, b) => {
        if (a.class === b.class) {
          if (a.attributes === b.attributes) {
            return b.resistances - a.resistances
          } else {
            return b.attributes - a.attributes
          }
        } else {
          return a.class.localeCompare(b.class)
        }
      })
      this.sortBy = 'class'
    },
    sortByAttributes() {
      this.hellfireTorches.sort((a, b) => {
        if (a.attributes === b.attributes) {
          if (a.resistances === b.resistances) {
            return a.class.localeCompare(b.class)
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
      this.hellfireTorches.sort((a, b) => {
        if (a.resistances === b.resistances) {
          if (a.attributes === b.attributes) {
            return a.class.localeCompare(b.class)
          } else {
            return b.attributes - a.attributes
          }
        } else {
          return b.resistances - a.resistances
        }
      })
      this.sortBy = 'resistances'
    },
  }
}
</script>