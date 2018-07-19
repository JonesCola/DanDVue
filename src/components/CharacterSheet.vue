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
        <StatComponent v-for="(s, i) in character.stats" :key="i" :stat=s></StatComponent>
      </div>
      <div class="column">
       <div> Life component </div>
      </div>
    </div>
  </section>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Character from '@/models/character';
import StatComponent from './StatComponent.vue';

@Component({
  components : { StatComponent },
  })
export default class CharacterSheet extends Vue {
    character = new Character();
    async created() {
      this.character = await this.$store.dispatch('getCharacterData');
    }
}
</script>

<style lang="scss" scoped>

</style>
