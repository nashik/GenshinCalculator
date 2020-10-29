<template>
  <v-card width="500px" class="mx-auto my-10">
    <v-card-title>Input</v-card-title>
    <v-card-text>
      <InputBaseAttack @change:base_attack="changeBaseAttack" />
      <InputArtifactsAttack @change:artifacts_attack="changeArtifactsAttack" />
      <InputCriticalRate @change:critical_rate="changeCriticalRate" />
      <InputCriticalDamage @change:critical_damage="changeCriticalDamage" />
    </v-card-text>
  </v-card>
</template>

<script>
import InputBaseAttack from "../molecules/InputBaseAttack";
import InputArtifactsAttack from "../molecules/InputArtifactsAttack";
import InputCriticalRate from "../molecules/InputCriticalRate";
import InputCriticalDamage from "../molecules/InputCriticalDamage";

export default {
  name: "Main",
  components: {
    InputBaseAttack,
    InputArtifactsAttack,
    InputCriticalRate,
    InputCriticalDamage
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
      this.$emit("change:critical_damage", Number(value));
    }
  }
};
</script>