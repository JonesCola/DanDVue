<template>
<div class="box is-rounded">
    <div>{{stat.description}} <input style="width: 22px" type="text" v-model="stat.value"></div>
    <div>roll modifier: {{stat.value | rollModifier}} </div>
</div>
</template>

<script>
module.exports = require('./StatComponent.ts');
</script>
