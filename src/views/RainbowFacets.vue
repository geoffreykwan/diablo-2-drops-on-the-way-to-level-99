<template>
  <h1>Rainbow Facets</h1>
  Sort By
  <button @click="sortByElement">Element</button>
  <button @click="sortBySkillDamage">+% Skill Damage</button>
  <button @click="sortByEnemyResistance">+% Enemy Resistance</button>
  <div class="rainbow-facet-row">
    <div>Element</div>
    <div>+% Skill Damage</div>
    <div>-% Enemy Resistance</div>
    <div>When</div>
  </div>
  <div class="rainbow-facet-rows">
    <div v-for="rainbowFacet in rainbowFacets" :key="rainbowFacet" class="rainbow-facet-row">
      <div>{{ rainbowFacet.element }}</div>
      <div>{{ rainbowFacet.skillDamage }}</div>
      <div>{{ rainbowFacet.enemyResistance }}</div>
      <div>{{ rainbowFacet.when }}</div>
    </div>
  </div>
</template>

<script>
import '../styles/rainbow-facets.css'
import rainbowFacets from '../data/rainbow-facets.json'
export default {
  name: 'RainbowFacets',
  data() {
    return {
      rainbowFacets: rainbowFacets,
    }
  },
  mounted() {
    this.sortByElement()
  },
  methods: {
    sortByElement() {
      this.rainbowFacets.sort((a, b) => {
        if (a.element === b.element) {
          if (a.skillDamage === b.skillDamage) {
            return b.enemyResistance - a.enemyResistance
          } else {
            return b.skillDamage - a.skillDamage
          }
        } else {
          return a.element.localeCompare(b.element)
        }
      })
    },
    sortBySkillDamage() {
      this.rainbowFacets.sort((a, b) => {
        if (a.skillDamage === b.skillDamage) {
          if (a.enemyResistance === b.enemyResistance) {
            return a.element.localeCompare(b.element)
          } else {
            return b.enemyResistance - a.enemyResistance
          }
        } else {
          return b.skillDamage - a.skillDamage
        }
      })
    },
    sortByEnemyResistance() {
      this.rainbowFacets.sort((a, b) => {
        if (a.enemyResistance === b.enemyResistance) {
          if (a.skillDamage === b.skillDamage) {
            return a.element.localeCompare(b.element)
          } else {
            return b.skillDamage - a.skillDamage
          }
        } else {
          return b.enemyResistance - a.enemyResistance
        }
      })
    },
  }
}
</script>