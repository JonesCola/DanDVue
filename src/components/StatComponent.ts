import { Component, Vue, Prop } from 'vue-property-decorator';
import Stat from '@/models/stat';
import { statType } from '@/models/statType';

@Component
export default class StatComponent extends Vue {
  @Prop() stat! : Stat;
  statType = statType;
  savingThrowValue : number = 0;
}
