<template>
  <v-card max-width="500" class="mx-auto my-10">
    <v-card-title>Input</v-card-title>
    <v-card-text>
      <InputAttack label="基礎攻撃力" @change:attack="changeBaseAttack" />
      <InputAttack label="聖遺物攻撃力" @change:attack="changeArtifactsAttack" />
      <InputPercentage label="会心率(%)" @change:percentage="changeCriticalRate" />
      <InputPercentage label="会心ダメージ(%)" @change:percentage="changeCriticalDamage" />
      <InputPercentage label="ダメージバフ(%)" @change:percentage="changeDamageBonus" />
    </v-card-text>
  </v-card>
</template>

<script>
import InputAttack from "../molecules/InputAttack";
import InputPercentage from "../molecules/InputPercentage";

export default {
  name: "Main",
  components: {
    InputAttack,
    InputPercentage
  },
  data() {
    return {
      base_attack: 0,
      artifacts_attack: 0
    };
  },
  props: {
    total_attack: {
      type: Number
    },
    critical_rate: {
      type: Number
    },
    critical_damage: {
      type: Number
    }
  },
  methods: {
    changeBaseAttack: function(value) {
      this.base_attack = value;
      this.$emit(
        "change:total_attack",
        Number(this.base_attack) + Number(this.artifacts_attack)
      );
    },
    changeArtifactsAttack: function(value) {
      this.artifacts_attack = value;
      this.$emit(
        "change:total_attack",
        Number(this.base_attack) + Number(this.artifacts_attack)
      );
    },
    changeCriticalRate: function(value) {
      this.$emit("change:critical_rate", Number(value));
    },
    changeCriticalDamage: function(value) {
      // 倍率に変換して戻す
      let _late = (100 + Number(value)) / 100;
      this.$emit("change:critical_damage", _late);
    },
    changeDamageBonus: function(value) {
      // 倍率に変換して戻す
      let _late = (100 + Number(value)) / 100;
      this.$emit("change:damage_bonus", _late);
    }
  }
};
</script>