<template>
  <h1>Character</h1>
  <div>
    <h3>Character Gear</h3>
    <div class="gear-row">
      <div class="grid-container-2">
        <div>Helm</div>
        <div>Griffon's Eye (-15 Enemy Lightning Resistance/+13 Lightning Damage, Perfect Topaz)
        </div>
      </div>
      <div class="grid-container-2">
        <div>Armor</div>
        <div>Skin of the Vipermagi (30 All Resistances, Perfect Topaz)</div>
      </div>
      <div class="grid-container-2">
        <div>Weapon 1</div>
        <div>Crescent Moon Runeword in Broad Sword</div>
      </div>
      <div class="grid-container-2">
        <div>Shield 1</div>
        <div>Spirit Runeword in Monarch Shield (35 Faster Cast Rate)</div>
      </div>
      <div class="grid-container-2">
        <div>Weapon 2</div>
        <div>Call to Arms Runeword in Crystal Sword (5 Battle Orders)</div>
      </div>
      <div class="grid-container-2">
        <div>Shield 2</div>
        <div>Spirit Runeword in Monarch Shield (35 Faster Cast Rate)</div>
      </div>
      <div class="grid-container-2">
        <div>Amulet</div>
        <div>Mara's Kaleidoscope (29 All Resistances)</div>
      </div>
      <div class="grid-container-2">
        <div>Ring 1</div>
        <div>Stone of Jordan</div>
      </div>
      <div class="grid-container-2">
        <div>Ring 2</div>
        <div>Rare Ring (10 Faster Cast Rate, 26 Cold Resistance, 10 Lightning
          Resistance, 10 Fire
          Resistance, 10 Poison Resistance)</div>
      </div>
      <div class="grid-container-2">
        <div>Gloves</div>
        <div>Chance Guards (39 Magic Find)</div>
      </div>
      <div class="grid-container-2">
        <div>Belt</div>
        <div>Arachnid Mesh</div>
      </div>
      <div class="grid-container-2">
        <div>Boots</div>
        <div>War Traveler (49 Magic Find)</div>
      </div>
      <div class="grid-container-2">
        <div>Unique Small Charm</div>
        <div>Annihilus (15 All Attributes, 17 All Resistances, 10 Experience)
        </div>
      </div>
      <div class="grid-container-2">
        <div>Unique Large Charm</div>
        <div>Hellfire Torch (3 Sorceress Skills, 14 All Attributes, 17 All Resistances)</div>
      </div>
      <div class="grid-container-2">
        <div>Unique Grand Charm</div>
        <div>Gheed's Fortune (114 Gold Find, 40 Magic Find, 15 Vendor Prices)</div>
      </div>
      <div class="grid-container-2">
        <div>Inventory</div>
        <div>5x Lightning Skill Grand Charms</div>
      </div>
    </div>
  </div>
  <h3>Mercenary Gear</h3>
  <div class="gear-row">
    <div class="grid-container-2">
      <div>Helm</div>
      <div>Vampire Gaze (6 Mana Leech, 7 Life Leech, 20 Damage
        Reduction, 10 Magic Reduction, 15
        Increased Attack Speed Jewel)</div>
    </div>
    <div class="grid-container-2">
      <div>Armor</div>
      <div>Fortitude Runeword in Ethereal Dusk Shroud</div>
    </div>
    <div class="grid-container-2">
      <div>Weapon</div>
      <div>Infinity Runeword in Ethereal Thresher</div>
    </div>
  </div>
  <br />
  <br />
  <h3>Screenshots</h3>
  <div v-for="index in 41">
    <img :src="'../src/assets/character/character-' + index.toString().padStart(2, '0') + '.jpg'" />
    <br />
    <br />
  </div>
</template>

<script>
import '../styles/character.css'
</script>