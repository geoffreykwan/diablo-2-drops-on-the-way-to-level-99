<script setup lang="ts">
defineProps({ item: Object, showStats: Boolean })
</script>
<template>
  <div v-if="item != null">
    <li v-if="showStats" class="stat-line"><img :src="'../src/assets/items/' + item.image" /></li>
    <li class="stat-line">{{ item.name }}</li>
    <li v-if="showStats" class="stat-line">{{ item.type }}</li>
  </div>
</template>