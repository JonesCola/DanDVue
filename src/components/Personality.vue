<template>
  <div class="container">
    <div class="box is-rounded">
      <textarea class="textarea" v-model="character.personalityTraits"/>
      <label class="label">Personality Traits</label>
    </div>
    <div class="box is-rounded">
      <textarea class="textarea" v-model="character.ideals"/>
      <label class="label">Ideals</label>
    </div>
    <div class="box is-rounded">
      <textarea class="textarea" v-model="character.bonds"/>
      <label class="label">Bonds</label>
    </div>
    <div class="box is-rounded">
      <textarea class="textarea" v-model="character.flaws"/>
      <label class="label">Flaws</label>
    </div>
    <div class="box is-rounded">
      <textarea class="textarea" v-model="character.notes"/>
      <label class="label">Features &amp; Traits</label>
    </div>
  </div>
</template>

<script>
module.exports = require('./Personality.ts');
</script>
