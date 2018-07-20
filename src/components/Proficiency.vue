<template>
<div class="box is-rounded">
    <div>{{statType[stat.type]}} <input style="width: 22px" type="text" v-model="stat.value"></div>
</div>
</template>

<script>
module.exports = require('./Proficiency.ts');
</script>
