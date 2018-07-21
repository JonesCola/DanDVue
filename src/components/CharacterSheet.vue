<template>
<div>
  <section class="section">
    <div class="container">
      <div style="padding-bottom: 12px">
        <span
        :class="{ disabledInput: nameIsBeingEdited }"
        class="charName padRight">{{character.characterName}}
        </span>
        <input
        :class="{ disabledInput: !nameIsBeingEdited }"
        class="charName" v-model="character.characterName"/>
        <button class="button" @click="toggleNameEdit"><i class="icon-edit"></i></button>
      </div>
      <div class=columns>
        <div class="column">
            <div>played by:<input class="control" v-model="character.playerName"/></div>
            <div>Background:<input v-model="character.background"/></div>
        </div>
        <div>
          <div>Race:<input v-model="character.race"/></div>
          <div>Experience:<input v-model="character.exp"></div>
        </div>
        <div class="column">
          <div>Class:<input v-model="character.class"/></div>
          <div>Level {{character.exp | getLevel}}</div>
        </div>
      </div>
    </div>
  </section>
  <section class="body">
    <div class="columns">
      <div class="column is-2">
        <StatComponent v-for="(s, i) in character.stats" :key="i" :stat=s></StatComponent>
      </div>
      <div class="column is-2">
        <div class="box">Proficiency Bonus:
          <input class="numberWidth" type="number" v-model="character.proficiencyBonus"/>
        </div>
        <div class="box is-rounded">
          <div> Saving Throws </div>
          <SavingThrow
          v-for="(s, i) in character.stats" :key="i"
          :stat=s
          :proficiency="character.proficiencyBonus">
          </SavingThrow>
        </div>
      </div>
      <div class="column is-3">
       <div> Life component </div>
       <div> <AttackComponent :attacks="character.attacks"></AttackComponent></div>
       <div> equipment</div>
      </div>
      <div class="column is-3">
        <Personality :character="character"></Personality>
      </div>
    </div>
  </section>
  <button @click="saveCharacter" class="button">Save</button>
</div>
</template>

<script>
module.exports = require('./CharacterSheet.ts');
</script>
<style lang="scss" scoped>
.charName{
  font-size: 28px;
  height: 32px;
  }
.disabledInput {
  display: none;
  }
  .padRight {
    padding-right: 8px
  }
  .numberWidth {
    width: 22px;
  }
  .body {
    margin-top: 6px;
  }
</style>
