import { Component, Vue, Prop } from 'vue-property-decorator';
import Stat from '@/models/stat';
import { statType } from '@/models/statType';
import '@/filters';

@Component
export default class SavingThrow extends Vue {
  @Prop() stat! : Stat;
  @Prop() proficiency! : number;
  statType = statType;
  calcSavingThrow() {
    return this.getRollModifier() + (this.stat.isProficient ? +this.proficiency : 0);
  }

  public getRollModifier(): number {
    if (this.$options && this.$options.filters) {
      return +(this.$options.filters.rollModifier(this.stat.value));
    }
    return 0;
  }
}
