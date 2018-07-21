import Vue from 'vue';

function rollModifier(stat: number) {
  return Math.round((stat - 1) / 2) - 5;
}
Vue.filter('rollModifier', rollModifier);
