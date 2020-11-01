<template>
  <v-card max-width="500" class="mx-auto my-10">
    <v-card-title>キャラクター</v-card-title>
    <InputCharacter @change:character="changeCharacter" />
    <v-divider class="mx-4"></v-divider>
    <v-card-title>武器</v-card-title>
    <InputWeapon ref="weapon" :weapon_type="weapon_type" @change:weapon="changeWeapon" />
  </v-card>
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
      weapon_type: "",
      character_attack: 0,
      character_attack_bonus: 0,
      weapon_attak: 0,
      weapon_attack_bonus: 0
    };
  },
  methods: {
    changeCharacter: function(value) {
      this.weapon_type = value.weapon_type;
      this.$refs.weapon.selectWeaponType(value.weapon_type);

      this.character_attack = value.atk;
      if (value.special_type == "攻撃力(%)") {
        this.character_attack_bonus = value.special_value;
      }

      this.$emit(
        "change:base_attack",
        this.character_attack + this.weapon_attak
      );
      this.$emit(
        "change:attack_bonus",
        this.character_attack_bonus + this.weapon_attack_bonus
      );
    },
    changeWeapon: function(value) {
      this.weapon_attak = value.atk;
      if (value.special_type == "攻撃力(%)") {
        this.weapon_attack_bonus = value.special_value;
      }

      this.$emit(
        "change:base_attack",
        this.character_attack + this.weapon_attak
      );
      this.$emit(
        "change:attack_bonus",
        this.character_attack_bonus + this.weapon_attack_bonus
      );
    }
  }
};
</script>