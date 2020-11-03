<template>
  <v-card>
    <v-card-title>聖遺物</v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          <InputArtifact type="Flower" label="生の花" @change:artifact="changeFlower" />
        </v-col>
        <v-col>
          <InputArtifact type="Plume" label="死の羽" @change:artifact="changePlume" />
        </v-col>
        <v-col>
          <InputArtifact type="Sands" label="時の砂" @change:artifact="changeSands" />
        </v-col>
        <v-col>
          <InputArtifact type="Goblet" label="空の杯" @change:artifact="changeGoblet" />
        </v-col>
        <v-col>
          <InputArtifact type="Circlet" label="理の冠" @change:artifact="changeCirclet" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import InputArtifact from "../molecules/InputArtifact";

export default {
  name: "Artifacts",
  components: {
    InputArtifact
  },
  data() {
    return {};
  },
  methods: {
    changeFlower: function(value) {
      this.$emit("change:base_attack", value);
    },
    changePlume: function(value) {
      this.$emit("change:base_attack", value);
    },
    changeSands: function(value) {
      this.$emit("change:base_attack", value);
    },
    changeGoblet: function(value) {
      this.$emit("change:base_attack", value);
    },
    changeCirclet: function(value) {
      this.$emit("change:base_attack", value);
    }
  }
};
</script>