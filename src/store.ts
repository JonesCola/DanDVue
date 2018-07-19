import Vue from 'vue';
import Vuex from 'vuex';
import Character from '@/models/character';
import Stat from '@/models/stat';

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
      ret.level = 1;
      ret.characterName = 'Balthasar';
      ret.playerName = 'Aaron';

      const strengthStat = new Stat();
      strengthStat.description = 'Strength';
      strengthStat.value = 15;

      const dexStat = new Stat();
      dexStat.description = 'Dexterity';
      dexStat.value = 11;

      const constStat = new Stat();
      constStat.description = 'Constitution';
      constStat.value = 14;

      const intStat = new Stat();
      intStat.description = 'Inteligence';
      intStat.value = 9;

      const wisStat = new Stat();
      wisStat.description = 'Wisdom';
      wisStat.value = 10;

      const charismaStat = new Stat();
      charismaStat.description = 'Charisma';
      charismaStat.value = 10;

      const stats = [strengthStat, dexStat, constStat, intStat, wisStat, charismaStat];
      ret.stats = stats;
      return ret;
    },
  },
});
