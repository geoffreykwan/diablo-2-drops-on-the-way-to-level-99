<template>
  <h1>Drops</h1>
  <input v-model="searchText" v-on:input="filterDrops"
    placeholder="Search by name or count, use the | character (vertical bar) to search for multiple things at once" />
  <button @click="searchText = ''; filterDrops()">Clear</button>
  <br />
  <button @click="toggleStats" :class="{ 'active-button': showAttributes }">
    Toggle Item Attributes
  </button>
  Sort By
  <button @click="sortAlphabetically" :class="{ 'active-button': sortBy == 'alphabetically' }">
    Name
  </button>
  <button @click="sortCountIncreasing" :class="{ 'active-button': sortBy == 'countIncreasing' }">
    Count Increasing
  </button>
  <button @click="sortCountDecreasing" :class="{ 'active-button': sortBy == 'countDecreasing' }">
    Count Decreasing
  </button>
  <div :class="{ 'grid-container-2': !showAttributes, 'grid-container-3': showAttributes }">
    <div :class="{ 'align-left': !showAttributes, 'align-center': showAttributes }"
      @click="sortByName">
      Name
    </div>
    <div v-if="showAttributes" class="align-left">Stats</div>
    <div :class="{ 'align-right': !showAttributes, 'align-center': showAttributes }"
      @click="sortByCount">
      Count
    </div>
  </div>
  <div :class="{ 'items': !showAttributes, 'items-with-stats': showAttributes }">
    <div v-for="item in filteredItems" :key="item.name"
      :class="{ 'grid-container-2': !showAttributes, 'grid-container-3': showAttributes }">
      <div :class="{ 'align-left': !showAttributes, 'align-center': showAttributes }">
        <Item :item="item" :showAttributes="showAttributes" />
      </div>
      <div v-if="showAttributes">
        <ItemStats :item="item" />
      </div>
      <div :class="{ 'align-right': !showAttributes, 'align-center': showAttributes }">
        {{ dropCounts[item.name] ?? 0 }}
      </div>
    </div>
  </div>
</template>

<script>
import '../styles/drops.css'
import Item from '../components/Item.vue'
import ItemStats from '../components/ItemStats.vue'
import dropCounts from '../data/drop-counts.json'
import uniques from '../data/uniques.json'
import runes from '../data/runes.json'
import setBonuses from '../data/set-bonuses.json'
const items = [...uniques, ...runes]
const filteredItems = items
export default {
  name: 'Drops',
  components: {
    Item,
    ItemStats
  },
  data() {
    return {
      countSortDirection: '',
      dropCounts: dropCounts,
      filteredItems: filteredItems,
      items: items,
      nameSortDirection: 'asc',
      runes: runes,
      searchText: '',
      setBonuses: setBonuses,
      showAttributes: false,
      sortBy: '',
      uniques: uniques,
    }
  },
  mounted() {
    this.sortAlphabetically()
  },
  methods: {
    toggleStats() {
      this.showAttributes = !this.showAttributes
    },
    filterDrops() {
      const searchTexts = this.searchText.split('|');
      this.filteredItems = this.items.filter((item) => {
        return searchTexts.some((searchText) => {
          if (/^\d+$/.test(searchText)) {
            return (dropCounts[item.name] ?? 0) === parseInt(searchText)
          } else {
            searchText = searchText.toLowerCase()
            return item.name.toLowerCase().includes(searchText) ||
              item.category?.toLowerCase().includes(searchText) ||
              item.type?.toLowerCase().includes(searchText) ||
              item.treasureClass == searchText
          }
        })
      })
    },
    sortAlphabetically() {
      this.filteredItems.sort((a, b) => a.name.localeCompare(b.name))
      this.sortBy = 'alphabetically'
    },
    sortCountIncreasing() {
      this.sortAlphabetically()
      this.filteredItems.sort((a, b) => (dropCounts[a.name] ?? 0) - (dropCounts[b.name] ?? 0))
      this.sortBy = 'countIncreasing'
    },
    sortCountDecreasing() {
      this.sortAlphabetically()
      this.filteredItems.sort((a, b) => (dropCounts[b.name] ?? 0) - (dropCounts[a.name] ?? 0))
      this.sortBy = 'countDecreasing'
    },
  }
}
</script>