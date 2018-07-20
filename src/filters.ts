import Vue from 'vue';

Vue.filter('rollModifier', rollModifier);

function rollModifier(stat: number) {
  return Math.round((stat - 1) / 2) - 5;
}
