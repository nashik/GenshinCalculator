<template>
  <v-card>
    <v-card-title>聖遺物</v-card-title>
    <InputArtifact type="生の花" @change:artifact="changeFlower" />
    <InputArtifact type="死の羽" @change:artifact="changePlume" />
    <InputArtifact type="時の砂" @change:artifact="changeSands" />
    <InputArtifact type="空の杯" @change:artifact="changeGoblet" />
    <InputArtifact type="理の冠" @change:artifact="changeCirclet" />
  </v-card>
</template>
<script>
import InputArtifact from "../molecules/InputArtifact";

export default {
  name: "Artifacts",
  components: {
    InputArtifact,
  },
  data() {
    return {};
  },
  methods: {
    changeFlower: function (value) {
      this.$emit("change:base_attack", value);
    },
    changePlume: function (value) {
      this.$emit("change:base_attack", value);
    },
    changeSands: function (value) {
      this.$emit("change:base_attack", value);
    },
    changeGoblet: function (value) {
      this.$emit("change:base_attack", value);
    },
    changeCirclet: function (value) {
      this.$emit("change:base_attack", value);
    }
  },
};
</script>