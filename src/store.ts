import Vue from 'vue';
import Vuex from 'vuex';
import Character from '@/models/character';

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
      return ret;
    },
  },
});
