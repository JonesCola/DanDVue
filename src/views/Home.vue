<template>
  <div class="home">
    <CharacterSheet/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterSheet from '@/components/CharacterSheet.vue'; // @ is an alias to /src

@Component({
  components: {
  CharacterSheet,
  },
  })
export default class Home extends Vue {}
</script>
