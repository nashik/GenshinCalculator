<template>
  <v-main>
    <v-card max-width="500" class="mx-auto my-10">
      <v-card-title>キャラクター</v-card-title>
      <InputCharacter @change:character="changeCharacter" />
      <v-divider class="mx-4"></v-divider>
      <v-card-title>武器</v-card-title>
      <InputWeapon ref="weapon" :weapon_type="weapon_type" />
    </v-card>
  </v-main>
</template>
<script>
import InputCharacter from "../molecules/InputCharacter";
import InputWeapon from "../molecules/InputWeapon";

export default {
  name: "CharacterAndWeapon",
  components: {
    InputCharacter,
    InputWeapon
  },
  data() {
    return {
      weapon_type: ""
    };
  },
  methods: {
    changeCharacter: function(value) {
      this.weapon_type = value.weapon_type;
      this.$refs.weapon.selectWeaponType(value.weapon_type);
    }
  }
};
</script>