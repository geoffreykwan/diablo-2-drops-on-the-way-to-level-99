<template>
  <h1>Hellfire Torches</h1>
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
}
</script>