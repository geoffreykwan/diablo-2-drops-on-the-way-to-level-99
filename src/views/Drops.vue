<template>
  <h1>Drops</h1>
  <input v-model="searchText" v-on:input="filterDrops"
    placeholder="Search, use the | character (vertical bar) to search for multiple things at once" />
  <button @click="searchText = ''; filterDrops()">Clear</button>
  <button @click="sortAlphabetically">Sort A > Z</button>
  <button @click="sortAlphabeticallyReverse">Sort Z > A</button>
  <button @click="sortNumerically">Count Increasing</button>
  <button @click="sortNumericallyReverse">Count Decreasing</button>
  <div class="grid-container">
    <div class="align-left" @click="sortByName">Name
      <span v-if="nameSortDirection === 'asc'">&uarr;</span>
      <span v-if="nameSortDirection === 'desc'">&darr;</span>
    </div>
    <div class="align-right" @click="sortByCount">Count
      <span v-if="countSortDirection === 'asc'">&uarr;</span>
      <span v-if="countSortDirection === 'desc'">&darr;</span>
    </div>
  </div>
  <div class="items">
    <div v-for="item in filteredItems" :key="item.name" class="grid-container">
      <div class="align-left">{{ item.name }}</div>
      <div class="align-right">{{ drops[item.name] ?? 0 }}</div>
    </div>
  </div>
</template>

<script>
import drops from '../data/drops.json'
import uniques from '../data/uniques.ts'
import runes from '../data/runes.ts'
import setBonuses from '../data/set-bonuses.ts'
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
      uniques: uniques,
    }
  },
  mounted() {
    // console.log('mounted')
    // this.filterDrops()
    // this.sortNumerically()
    this.sortAlphabetically()
    // this.sortNumericallyReverse()
  },
  methods: {
    filterDrops() {
      const searchTexts = this.searchText.split('|');
      this.filteredItems = this.items.filter((item) => {
        return searchTexts.some((searchText) => {
          if (/\d/.test(searchText)) {
            return (drops[item.name] ?? 0) === parseInt(searchText)
          } else {
            return item.name.toLowerCase().includes(searchText.toLowerCase())
          }
        })
      })
    },
    sortAlphabetically() {
      this.filteredItems.sort((a, b) => a.name.localeCompare(b.name))
      this.nameSortDirection = 'asc'
      this.countSortDirection = ''
    },
    sortAlphabeticallyReverse() {
      this.filteredItems.sort((a, b) => b.name.localeCompare(a.name))
      this.nameSortDirection = 'desc'
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