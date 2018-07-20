<template>
<div class="box is-rounded">
    <div>{{stat.description}} <input type="text" v-model="stat.value"></div>
    <div>roll modifier: {{stat.value | rollModifier}} </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Stat from '@/models/stat';

@Component({filters: {rollModifier(stat: number){ return Math.round((stat - 1) / 2) - 5; } }
  })
export default class StatComponent extends Vue {
  @Prop() stat! : Stat;
}
</script>
