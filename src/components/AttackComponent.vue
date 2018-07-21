<template>
    <div class="box is-rounded">
        <div class="columns">
          <div class="column">
            <div>Name</div>
            <div v-for="(a, i) in attacks" :key="i">
              <input type="text" v-model=a.description>
            </div>
          </div>
          <div class="column is-narrow">
            <div>bonus</div>
            <div v-for="(a, i) in attacks" :key="i">
              <input type="number" v-model=a.bonus>
            </div>
          </div>
          <div class="column is-narrow">
            <div>Damage</div>
            <div v-for="(a, i) in attacks" :key="i">
              <input type="number" v-model=a.damageDice>
            </div>
          </div>
          <div class="column">
            <div>Type</div>
            <div v-for="(a, i) in attacks" :key="i">
              <input type="text" v-model=a.damageType>
            </div>
          </div>
          <div class="column">
              <div>&nbsp;</div>
            <div v-for="(a, i) in attacks" :key="i">
              <a class="button is-small" @click="removeRow(a)"><i class="delete is-small"></i></a>
            </div>
          </div>
        </div>
        <a class="button" @click="addRow()">Add New Attack</a>
    </div>
</template>

<script>
module.exports = require('./AttackComponent.ts');
</script >
<style lang="scss" scoped>
input[type=text] {
    width:100px;
}
</style>

