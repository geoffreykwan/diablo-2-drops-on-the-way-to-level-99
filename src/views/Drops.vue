<template>
  <h1>Drops</h1>
  <div v-for="item in items" :key="item.name">
    <div>{{ item.name }}</div>
  </div>
</template>

<script>
import uniques from '../data/uniques.ts'
import runes from '../data/runes.ts'
import setBonuses from '../data/set-bonuses.ts'
console.log(uniques)
console.log(runes)
console.log(setBonuses)
const items = [...uniques, ...runes]
export default {
  name: 'Drops',
  data() {
    return {
      items: items,
      uniques: uniques,
      runes: runes,
      setBonuses: setBonuses
    }
  }
}
</script>