import Vue from "vue"

Vue.filter('rollModifier', function(stat: number){
    return Math.round((stat - 1) / 2) - 5; 
});