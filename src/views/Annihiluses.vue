<template>
  <h1>Annihiluses</h1>
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
  },
}
</script>