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
    base_attack: {
      type: Number
    },
    artifacts_attack: {
      type: Number
    }
  },
  methods: {
    changeBaseAttack: function(value) {
      this.$emit("change:base_attack", value);
    },
    changeArtifactsAttack: function(value) {
      this.$emit("change:artifacts_attack", value);
    }
  }
};
</script>