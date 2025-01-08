<template>
  <h1>Character</h1>
  <div v-for="index in 41">
    <img :src="'../src/assets/character/character-' + index.toString().padStart(2, '0') + '.jpg'" />
    <br />
    <br />
  </div>
</template>