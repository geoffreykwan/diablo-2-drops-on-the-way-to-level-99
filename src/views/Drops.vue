<template>
  <h1>Drops</h1>
  <input v-model="searchText" v-on:input="filterDrops" />
  <button @click="searchText = ''; filterDrops()">Clear</button>
  <div v-for="item in filteredItems" :key="item.name">
    <div>{{ item.name }} = {{ drops[item.name] ?? 0 }}</div>
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
      drops: drops,
      filteredItems: filteredItems,
      items: items,
      runes: runes,
      searchText: '',
      setBonuses: setBonuses,
      uniques: uniques,
    }
  },
  methods: {
    filterDrops() {
      if (/\d/.test(this.searchText)) {
        this.filterByNumber()
      } else {
        this.filterByText()
      }
    },
    filterByNumber() {
      const searchNumbers = this.searchText.split('|').map(searchText => parseInt(searchText));
      this.filteredItems = this.items.filter((item) => {
        return searchNumbers.some((searchNumber) => {
          return (drops[item.name] ?? 0) === searchNumber
        })
      })
    },
    filterByText() {
      const searchTexts = this.searchText.split('|');
      this.filteredItems = this.items.filter((item) => {
        return searchTexts.some((searchText) => {
          return item.name.toLowerCase().includes(searchText.toLowerCase())
        })
      })
    },
  }
}
</script>