<template>
  <v-card max-width="500" class="mx-auto my-10">
    <v-card-title>キャラクター</v-card-title>
    <InputCharacter />
  </v-card>
</template>
<script>
import InputCharacter from "../molecules/InputCharacter";

export default {
  name: "CharacterAndWeapon",
  components: {
    InputCharacter
  }
};
</script>