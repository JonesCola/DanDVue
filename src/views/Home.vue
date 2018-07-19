<template>
  <div class="home">
    <CharacterSheet/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterSheet from '@/components/CharacterSheet.vue'; // @ is an alias to /src
import StatComponent from '@/components/StatComponent.vue';

@Component({
  components: {
  CharacterSheet, StatComponent
  },
  })
export default class Home extends Vue {}
</script>
