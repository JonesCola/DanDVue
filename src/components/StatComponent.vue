<template>
<div class="box is-rounded">
    <div>{{statType[stat.type]}}<input type="number" v-model="stat.value"></div>
    <div>roll modifier: {{stat.value | rollModifier}} </div>
</div>
</template>

<script>
module.exports = require('./StatComponent.ts');
</script>
<style lang="scss" scoped>
</style>
