import { Component, Vue, Prop } from 'vue-property-decorator';
import Attack from '@/models/attack';

@Component
export default class AttackComponent extends Vue {
  @Prop() attacks! : Attack[];

  removeRow(a : Attack) {
    this.attacks.forEach((item, index) => {
      if (item === a) this.attacks.splice(index, 1);
    });
  }

  addRow() {
    this.attacks.push(new Attack());
  }
}
