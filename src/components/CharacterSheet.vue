<template>
<div>
  <section class="section">
    <div class="container">
      <h1 class="title is-active">{{character.characterName}}</h1>
      <div class=columns>
        <div class="column">
            played by: {{ character.playerName }}
        </div>
        <div class="column">
            Level: {{character.level}}
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="columns is-multiline">
      <div class="column is-one-quarter">
        <!-- this needs to be a component with a prop that take an array of stat  -->
         <div>stats text</div>
         <div>stats text</div>
         <div>stats text</div>
         <div>stats text</div>
         <div>stats text</div>
      </div>
      <div class="column">
       <div> some text</div>
      </div>
    </div>
  </section>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Character from '@/models/character';

@Component
export default class CharacterSheet extends Vue {
    character = new Character();
    async created() {
      this.character = await this.$store.dispatch('getCharacterData');
    }
}
</script>

<style lang="scss">

</style>
