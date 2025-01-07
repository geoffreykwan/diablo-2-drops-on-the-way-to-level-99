<template>
  <h1>Drops</h1>
  <input v-model="searchText" v-on:input="filterDrops"
    placeholder="Search, use the | character (vertical bar) to search for multiple things at once" />
  <button @click="searchText = ''; filterDrops()">Clear</button>
  <br />
  <button @click="toggleStats">Toggle Stats</button>
  Sort By
  <button @click="sortAlphabetically">Name</button>
  <button @click="sortNumerically">Count Increasing</button>
  <button @click="sortNumericallyReverse">Count Decreasing</button>
  <div :class="{ 'grid-container-2': !showStats, 'grid-container-3': showStats }">
    <div :class="{ 'align-left': !showStats, 'align-center': showStats }" @click="sortByName">Name
      <!-- <span v-if="nameSortDirection === 'asc'">&uarr;</span>
      <span v-if="nameSortDirection === 'desc'">&darr;</span> -->
    </div>
    <div v-if="showStats" class="align-left">Stats</div>
    <div :class="{ 'align-right': !showStats, 'align-center': showStats }" @click="sortByCount">
      Count
      <!-- <span v-if="countSortDirection === 'asc'">&uarr;</span>
      <span v-if="countSortDirection === 'desc'">&darr;</span> -->
    </div>
  </div>
  <div :class="{ 'items': !showStats, 'items-with-stats': showStats }">
    <div v-for="item in filteredItems" :key="item.name"
      :class="{ 'grid-container-2': !showStats, 'grid-container-3': showStats }">
      <div :class="{ 'align-left': !showStats, 'align-center': showStats }">
        <div>
          <li class="stat-line"><img v-if="showStats" :src="'../src/assets/' + item.image" /></li>
          <li class="stat-line">{{ item.name }}</li>
          <li v-if="showStats" class="stat-line">{{ item.type }}</li>
        </div>
      </div>
      <div v-if="showStats">
        <li v-for="stat in item.stats" v-html="stat" class="stat-line align-left"></li>
        <div v-if="item.category == 'Runes'">
          <li class="stat-line align-left">Weapon: {{ item.weaponStats }}</li>
          <br />
          <li class="stat-line align-left">Armor/Helms/Shields: {{ item.armorStats }}</li>
          <br />
          <li class="stat-line align-left">Required Level: {{ item.levelRequirement }}</li>
        </div>
      </div>
      <div :class="{ 'align-right': !showStats, 'align-center': showStats }">
        {{ drops[item.name] ?? 0 }}
      </div>
    </div>
  </div>
</template>

<script>
import '../styles/drops.css'
import drops from '../data/drops.json'
import uniques from '../data/uniques.json'
import runes from '../data/runes.json'
import setBonuses from '../data/set-bonuses.json'
const items = [...uniques, ...runes]
const filteredItems = items
export default {
  name: 'Drops',
  data() {
    return {
      countSortDirection: '',
      drops: drops,
      filteredItems: filteredItems,
      items: items,
      nameSortDirection: 'asc',
      runes: runes,
      searchText: '',
      setBonuses: setBonuses,
      showStats: false,
      uniques: uniques,
    }
  },
  mounted() {
    this.sortAlphabetically()
  },
  methods: {
    toggleStats() {
      this.showStats = !this.showStats
    },
    filterDrops() {
      const searchTexts = this.searchText.split('|');
      this.filteredItems = this.items.filter((item) => {
        return searchTexts.some((searchText) => {
          if (/\d/.test(searchText)) {
            return (drops[item.name] ?? 0) === parseInt(searchText)
          } else {
            searchText = searchText.toLowerCase()
            return item.name.toLowerCase().includes(searchText) ||
              item.category?.toLowerCase().includes(searchText) ||
              item.type?.toLowerCase().includes(searchText)
          }
        })
      })
    },
    sortAlphabetically() {
      this.filteredItems.sort((a, b) => a.name.localeCompare(b.name))
      this.nameSortDirection = 'asc'
      this.countSortDirection = ''
    },
    sortNumerically() {
      this.sortAlphabetically()
      this.filteredItems.sort((a, b) => (drops[a.name] ?? 0) - (drops[b.name] ?? 0))
      this.nameSortDirection = '';
      this.countSortDirection = 'asc'
    },
    sortNumericallyReverse() {
      this.sortAlphabetically()
      this.filteredItems.sort((a, b) => (drops[b.name] ?? 0) - (drops[a.name] ?? 0))
      this.nameSortDirection = '';
      this.countSortDirection = 'desc'
    },
    sortByName() {
      this.countSortDirection = '';
      if (this.nameSortDirection == 'asc') {
        this.sortAlphabeticallyReverse()
        this.nameSortDirection = 'desc'
      } else {
        this.sortAlphabetically()
        this.nameSortDirection = 'asc'
      }
    },
    sortByCount() {
      this.nameSortDirection = '';
      if (this.countSortDirection == 'desc') {
        this.sortNumerically()
        this.countSortDirection = 'asc'
      } else {
        this.sortNumericallyReverse()
        this.countSortDirection = 'desc'
      }
    },
  }
}
</script>