import { Component, Vue, Prop } from 'vue-property-decorator';
import Character from '@/models/character';

@Component
export default class SavingThrow extends Vue {
  @Prop() character! : Character; 
}