<template>
<div class="box is-rounded">
    <div>{{stat.description}}</div>
    <div>{{stat.value}}</div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Stat from '@/models/stat';

@Component
export default class StatComponent extends Vue {
  constructor (){
    this.stat = new Stat();
    super();
  }

  @Prop()
  stat : Stat;
}
</script>
