import { Component, Vue } from 'vue-property-decorator';
import Character from '@/models/character';
import StatComponent from './StatComponent.vue';
import SavingThrow from '@/components/SavingThrow';

@Component({
  components : { StatComponent, SavingThrow },
  filters: { getLevel(exp: number): number{ return Math.round(exp / 1000) } },
  })
export default class CharacterSheet extends Vue {
    character = new Character();
    nameIsBeingEdited = false;
    async created() {
      this.character = await this.$store.dispatch('getCharacterData');
    }
    saveCharacter() {
      console.log(this.character);
    }

    toggleNameEdit() {
      this.nameIsBeingEdited = !this.nameIsBeingEdited;
    }
}
