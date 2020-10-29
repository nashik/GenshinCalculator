<template>
  <v-card width="500px" class="mx-auto my-10">
    <v-card-title>Input</v-card-title>
    <v-card-text>
      <InputBaseAttack @change:base_attack="changeBaseAttack" />
      <InputArtifactsAttack @change:artifacts_attack="changeArtifactsAttack" />
    </v-card-text>
  </v-card>
</template>

<script>
import InputBaseAttack from "../molecules/InputBaseAttack";
import InputArtifactsAttack from "../molecules/InputArtifactsAttack";

export default {
  name: "Main",
  components: {
    InputBaseAttack,
    InputArtifactsAttack
  },
  props: {
    total_attack: {
      type: Number
    }
  },
  methods: {
    changeBaseAttack: function(value) {
      this.base_attack = value;
      this.$emit("change:total_attack", Number(this.base_attack) + Number(this.artifacts_attack));
    },
    changeArtifactsAttack: function(value) {
      this.artifacts_attack = value;
      this.$emit("change:total_attack", Number(this.base_attack) + Number(this.artifacts_attack));
    }
  },
  data() {
    return {
      base_attack: 0,
      artifacts_attack: 0
    }
  }
};
</script>