import { createRouter, createWebHistory } from 'vue-router';
import Drops from '../views/Drops.vue';
import HellfireTorches from '../views/HellfireTorches.vue';
import Annihiluses from '../views/Annihiluses.vue';
import RainbowFacets from '../views/RainbowFacets.vue';
import PlusSkillGrandCharms from '../views/PlusSkillGrandCharms.vue';
import Character from '../views/Character.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', redirect: '/drops' },
  { path: '/drops', name: 'Drops', component: Drops },
  { path: '/hellfire-torches', name: 'Hellfire Torches', component: HellfireTorches },
  { path: '/annihiluses', name: 'Annihiluses', component: Annihiluses },
  { path: '/rainbow-facets', name: 'Rainbow Facets', component: RainbowFacets },
  {
    path: '/plus-skill-grand-charms',
    name: '+Skill Grand Charms',
    component: PlusSkillGrandCharms
  },
  { path: '/character', name: 'Character', component: Character },
  { path: '/about', name: 'About', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router;
