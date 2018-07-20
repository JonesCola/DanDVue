import { Component, Vue, Prop } from 'vue-property-decorator';
import Stat from '@/models/stat';

@Component({filters: {
  rollModifier(stat: number){
  return Math.round((stat - 1) / 2) - 5; }
  }
  })
export default class StatComponent extends Vue {
  @Prop() stat! : Stat;
}
