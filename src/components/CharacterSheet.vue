<template>
<div>
  <section class="section">
    <div class="container">
      <div style="padding-bottom: 12px">
        <span :class="{ disabledInput: nameIsBeingEdited }" class="charName padRight">{{character.characterName}}</span>
        <input :class="{ disabledInput: !nameIsBeingEdited }" class="charName" v-model="character.characterName"/>
        <button class="button" @click="toggleNameEdit"><i class="icon-edit"></i></button>
      </div>
      <div class=columns>
        <div class="column">
            played by: <input v-model="character.playerName"/>
        </div>
        <div>
          Experience: <input v-model="character.exp">
        </div>
        <div class="column">
            Level: {{character.exp | getLevel}}
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="columns">
      <div class="column is-1">
        <StatComponent v-for="(s, i) in character.stats" :key="i" :stat=s></StatComponent>
      </div>
      <div class="column is-2">
        proficiency, saving throws, skills
      </div>
      <div class="column is-3">
       <div> Life component </div>
       <div> Attacks and spell casting</div>
       <div> equipment</div>
      </div>
      <div class="column is-3">
        personality traits
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
</style>
