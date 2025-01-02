<template>
  <h1>Hellfire Torches</h1>
  Sort By
  <button @click="sortByClass">+ 3 Class Skills</button>
  <button @click="sortByAttributes">+ All Attributes</button>
  <button @click="sortByResistances">+ All Resistances</button>
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
import hellfireTorches from '../data/hellfire-torches.json'
export default {
  name: 'HellfireTorches',
  data() {
    return {
      hellfireTorches: hellfireTorches,
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
    },
  }
}
</script>