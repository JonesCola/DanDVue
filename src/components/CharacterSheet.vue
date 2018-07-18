<template>
    <section class="section">
    <div class="container">
      <h1 class="title">{{character.name}}</h1>

    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Character } from '@/models/character.ts';

@Component
export default class CharacterSheet extends Vue {
  data() {
    return { character: getCharacterData() };
  }
}

function getCharacterData(): Character {
  return new Character('Balthasar the god killer', 1, 'Aaron');
}
</script>
