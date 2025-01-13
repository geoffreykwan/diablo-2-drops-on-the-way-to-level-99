<template>
  <div>
    <router-link to="/drops">
      <button :class="{ 'active-button': currentRouteName == 'Drops' }">Drops</button>
    </router-link>
    <router-link to="/hellfire-torches">
      <button :class="{ 'active-button': currentRouteName == 'Hellfire Torches' }">Hellfire
        Torches</button>
    </router-link>
    <router-link to="/annihiluses">
      <button :class="{ 'active-button': currentRouteName == 'Annihiluses' }">Annihiluses</button>
    </router-link>
    <router-link to="/gheeds-fortunes">
      <button :class="{ 'active-button': currentRouteName == 'Gheed\'s Fortunes' }">Gheed's
        Fortunes</button>
    </router-link>
    <router-link to="/rainbow-facets">
      <button :class="{ 'active-button': currentRouteName == 'Rainbow Facets' }">
        Rainbow Facets
      </button>
    </router-link>
    <router-link to="/plus-skill-grand-charms">
      <button :class="{ 'active-button': currentRouteName == '+Skill Grand Charms' }">
        +Skill Grand Charms
      </button>
    </router-link>
    <router-link to="/lower-kurast-drops">
      <button :class="{ 'active-button': currentRouteName == 'Lower Kurast Drops' }">
        Lower Kurast Drops
      </button>
    </router-link>
    <router-link to="/character">
      <button :class="{ 'active-button': currentRouteName == 'Character' }">Character</button>
    </router-link>
    <router-link to="/about">
      <button :class="{ 'active-button': currentRouteName == 'About' }">About</button>
    </router-link>
  </div>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const currentRouteName = computed(() => router.currentRoute.value.name)
</script>
