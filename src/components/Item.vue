<script setup lang="ts">
defineProps({ item: Object, showStats: Boolean })
</script>
<template>
  <div v-if="item != null">
    <li v-if="showStats" class="stat-line"><img :src="'../src/assets/items/' + item.image" /></li>
    <li class="stat-line" :class="{
      'set-item': item.setName != undefined,
      'rune': item.type == 'Rune',
      'unique-item': item.setName == undefined && item.type != 'Rune'
    }">
      {{ item.name }}
    </li>
    <li v-if="showStats" class="stat-line">{{ item.type }}</li>
  </div>
</template>