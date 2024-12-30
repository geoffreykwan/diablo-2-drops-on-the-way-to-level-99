<script setup lang="ts">
</script>

<template>
  <div>
    <router-link to="/drops"><button>Drops</button></router-link>
    <router-link to="/hellfire-torches"><button>Hellfire Torches</button></router-link>
    <router-link to="/annihiluses"><button>Annihiluses</button></router-link>
    <router-link to="/rainbow-facets"><button>Rainbow Facets</button></router-link>
    <router-link to="/plus-skill-grand-charms"><button>+Skill Grand Charms</button></router-link>
    <router-link to="/character"><button>Character</button></router-link>
    <router-link to="/about"><button>About</button></router-link>
  </div>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
