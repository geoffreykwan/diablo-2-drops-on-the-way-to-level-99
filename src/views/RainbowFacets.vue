<template>
  <h1>Rainbow Facets</h1>
  <div class="align-center">
    <div class="grid-container-2 no-padding-top">
      <div class="align-center">
        <div>
          <li class="attribute-line"><img :src="'items/jewel06.gif'" /></li>
          <li class="attribute-line">Rainbow Facet</li>
          <li class="attribute-line">Jewel</li>
        </div>
      </div>
      <div>
        <li class="attribute-line align-left">
          <span>Required Level: 49</span>
        </li>
        <li class="attribute-line align-left">
          <span class="rainbow-facet-attribute">
            100% Chance To Cast Level X Y When you (Die/Level)
          </span>
        </li>
        <li class="attribute-line align-left">
          <span class="rainbow-facet-attribute" color="#4850B8">Adds X Damage</span>
        </li>
        <li class="attribute-line align-left">
          <span class="rainbow-facet-attribute" color="#4850B8">
            +3-5% To (Element) Skill Damage
          </span>
          <span>(varies)</span>
        </li>
        <li class="attribute-line align-left">
          <span class="rainbow-facet-attribute" color="#4850B8">
            -(3-5)% To Enemy (Element) Resistance
          </span>
          <span>(varies)</span>
        </li>
        <li class="attribute-line align-left">
          <span>(Only Spawns In Patch 1.10 or later)</span>
        </li>
      </div>
    </div>
  </div>
  <h4 class="sort-by-text">Sort By</h4>
  <button @click="sortByElement" :class="{ 'active-button': sortBy == 'element' }">
    Element
  </button>
  <button @click="sortBySkillDamage" :class="{ 'active-button': sortBy == 'skillDamage' }">
    +% Skill Damage
  </button>
  <button @click="sortByEnemyResistance" :class="{ 'active-button': sortBy == 'enemyResistance' }">
    +% Enemy Resistance
  </button>
  <div class="rainbow-facet-row">
    <div>Element</div>
    <div>+% Skill Damage</div>
    <div>-% Enemy Resistance</div>
    <div>When</div>
  </div>
  <div class="alternate-color-rows">
    <div v-for="rainbowFacet in rainbowFacets" :key="rainbowFacet" class="rainbow-facet-row">
      <div>{{ rainbowFacet.element }}</div>
      <div>{{ rainbowFacet.skillDamage }}</div>
      <div>{{ rainbowFacet.enemyResistance }}</div>
      <div>{{ rainbowFacet.when }}</div>
    </div>
  </div>
</template>

<script>
import '@/styles/rainbow-facets.css'
import rainbowFacets from '@/data/rainbow-facets.json'
export default {
  name: 'RainbowFacets',
  data() {
    return {
      rainbowFacets: rainbowFacets,
      sortBy: ''
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
      this.sortBy = 'element'
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
      this.sortBy = 'skillDamage'
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
      this.sortBy = 'enemyResistance'
    },
  }
}
</script>