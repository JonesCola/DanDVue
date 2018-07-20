import Vue from 'vue';
import Vuex from 'vuex';
import Character from '@/models/character';
import Stat from '@/models/stat';
import { statType } from '@/models/statType';
import Attack from '@/models/attack';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    // this would be a call to the rest service
    getCharacterData(): Character {
      const ret = new Character();
      ret.exp = 3250;
      ret.characterName = 'Balthasar';
      ret.playerName = 'Aaron';
      ret.race = 'Dwarf';
      ret.class = 'Barbarian';
      ret.alignment = 'lawful/good';
      ret.background = 'Soldier';

      const strengthStat = new Stat();
      strengthStat.type = statType.Strength;
      strengthStat.value = 15;
      strengthStat.isProficient = true;

      const dexStat = new Stat();
      dexStat.type = statType.Dexterity;
      dexStat.value = 11;

      const constStat = new Stat();
      constStat.type = statType.Constitution;
      constStat.value = 14;
      constStat.isProficient = true;

      const intStat = new Stat();
      intStat.type = statType.Intelligence;
      intStat.value = 9;

      const wisStat = new Stat();
      wisStat.type = statType.Wisdom;
      wisStat.value = 10;

      const charismaStat = new Stat();
      charismaStat.type = statType.Charisma;
      charismaStat.value = 10;

      const stats = [strengthStat, dexStat, constStat, intStat, wisStat, charismaStat];
      ret.stats = stats;
      const attack = new Attack();
      attack.damageDice = 12;
      attack.damageType = 'slicing';
      attack.description = 'Great Ax';
      ret.attacks = [attack];

      ret.flaws = 'not very bright, quick to anger';
      ret.ideals = 'crusader for truth and justice';
      ret.personalityTraits = 'doesn\'t back down from a challenge, loves a good fight';
      ret.bonds = 'self centered, wealth';
      ret.notes = 'on the way to the dungeon where we hope to find the evil sorcerer';
      return ret;
    },
  },
});
