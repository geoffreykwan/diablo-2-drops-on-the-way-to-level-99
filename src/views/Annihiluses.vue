<template>
  <h1>Annihiluses</h1>
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
import annihiluses from '../data/annihiluses.json'
export default {
  name: 'Annihiluses',
  data() {
    return {
      annihiluses: annihiluses,
    }
  },
  mounted() {
    this.sort()
  },
  methods: {
    sort() {
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