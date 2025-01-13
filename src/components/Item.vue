<script setup lang="ts">
defineProps({ item: Object, showAttributes: Boolean })
</script>
<template>
  <div v-if="item != null">
    <li v-if="showAttributes" class="attribute-line"><img
        :src="'../src/assets/items/' + item.image" />
    </li>
    <li class="attribute-line" :class="{
      'set-item': item.setName != undefined,
      'rune': item.type == 'Rune',
      'unique-item': item.setName == undefined && item.type != 'Rune'
    }">
      {{ item.name }}
    </li>
    <li v-if="showAttributes" class="attribute-line">{{ item.type }}</li>
  </div>
</template>