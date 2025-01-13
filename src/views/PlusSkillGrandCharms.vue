<template>
  <h1>+Skill Grand Charms</h1>
  <div v-for="plusSkillGrandCharm in plusSkillGrandCharms" :key="plusSkillGrandCharm.class"
    class="plus-skill-grand-charm-class">
    <div class="class-name">{{ plusSkillGrandCharm.class }}</div>
    <div v-for="skillTab in plusSkillGrandCharm.skillTabs" :key="skillTab.name" class="skill-tab">
      <div>{{ skillTab.name }}</div>
      <div>{{ skillTab.count }}</div>
    </div>
  </div>
</template>

<script>
import '@/styles/plus-skill-grand-charms.css'
import plusSkillGrandCharms from '@/data/plus-skill-grand-charms.json'
export default {
  name: 'PlusSkillGrandCharms',
  data() {
    return {
      plusSkillGrandCharms: plusSkillGrandCharms,
    }
  },
}
</script>