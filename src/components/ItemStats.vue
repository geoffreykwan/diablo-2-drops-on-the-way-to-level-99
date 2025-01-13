<script setup lang="ts">
defineProps({ item: Object })
</script>
<template>
  <div v-if="item != null">
    <div v-if="item.category == 'Runes'">
      <li class="attribute-line align-left">Weapon:
        <span v-html="item.weaponStats"></span>
      </li>
      <li class="attribute-line align-left">Armor/Helms/Shields:
        <span v-html="item.armorStats"></span>
      </li>
      <li class="attribute-line align-left">Required Level: {{ item.levelRequirement }}</li>
    </div>
    <li v-else v-for="stat in item.stats" v-html="stat" class="attribute-line align-left"></li>
  </div>
</template>