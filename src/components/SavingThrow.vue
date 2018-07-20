<template>
    <div><input type="checkbox" v-model="stat.isProficient"/>
    {{statType[stat.type]}} {{calcSavingThrow()}}</div>
</template>

<script>
module.exports = require('./SavingThrow.ts');
</script>
<style scoped>
  div {
      padding-bottom: 3px;
  }
</style>

