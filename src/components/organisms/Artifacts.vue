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
    <!-- <v-card-text>{{artifact_statuses}}</v-card-text> -->
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
    return {
      artifact_statuses: [
        {
          // Flower
          type: "Flower",
          hp: 0,
          hp_bonus: 0,
          attack: 0,
          attack_bonus: 0,
          defense: 0,
          defense_bonus: 0,
          critical_rate: 0,
          critical_bonus: 0
        },
        {
          // Plume
          type: "Plume",
          hp: 0,
          hp_bonus: 0,
          attack: 0,
          attack_bonus: 0,
          defense: 0,
          defense_bonus: 0,
          critical_rate: 0,
          critical_bonus: 0
        },
        {
          // Sands
          type: "Sands",
          hp: 0,
          hp_bonus: 0,
          attack: 0,
          attack_bonus: 0,
          defense: 0,
          defense_bonus: 0,
          critical_rate: 0,
          critical_bonus: 0
        },
        {
          // Goblet
          type: "Goblet",
          hp: 0,
          hp_bonus: 0,
          attack: 0,
          attack_bonus: 0,
          defense: 0,
          defense_bonus: 0,
          critical_rate: 0,
          critical_bonus: 0
        },
        {
          // Circlet
          type: "Circlet",
          hp: 0,
          hp_bonus: 0,
          attack: 0,
          attack_bonus: 0,
          defense: 0,
          defense_bonus: 0,
          critical_rate: 0,
          critical_bonus: 0
        }
      ]
    };
  },
  methods: {
    changeFlower: function(value) {
      this.updateData(0, value);
      this.emitData();
    },
    changePlume: function(value) {
      this.updateData(1, value);
      this.emitData();
    },
    changeSands: function(value) {
      this.updateData(2, value);
      this.emitData();
    },
    changeGoblet: function(value) {
      this.updateData(3, value);
      this.emitData();
    },
    changeCirclet: function(value) {
      this.updateData(4, value);
      this.emitData();
    },
    updateData(n, value) {
      this.artifact_statuses[n].hp = 0;
      this.artifact_statuses[n].hp_bonus = 0;
      this.artifact_statuses[n].attack = 0;
      this.artifact_statuses[n].attack_bonus = 0;
      this.artifact_statuses[n].defense = 0;
      this.artifact_statuses[n].defense_bonus = 0;
      this.artifact_statuses[n].critical_rate = 0;
      this.artifact_statuses[n].critical_bonus = 0;

      switch (value.special_type) {
        case "HP":
          this.artifact_statuses[n].hp = value.special_value;
          break;
        case "HP(%)":
          this.artifact_statuses[n].hp_bonus = value.special_value;
          break;
        case "攻撃力":
          this.artifact_statuses[n].attack = value.special_value;
          break;
        case "攻撃力(%)":
          this.artifact_statuses[n].attack_bonus = value.special_value;
          break;
        case "防御力":
          this.artifact_statuses[n].defense = value.special_value;
          break;
        case "防御力(%)":
          this.artifact_statuses[n].defense_bonus = value.special_value;
          break;
        case "会心率(%)":
          this.artifact_statuses[n].critical_rate = value.special_value;
          break;
        case "会心ダメージ(%)":
          this.artifact_statuses[n].critical_bonus = value.special_value;
          break;
      }
    },
    emitData() {
      let _attack = 0;
      for (let _a in this.artifact_statuses) {
        _attack += Number(this.artifact_statuses[_a].attack);
      }
      this.$emit("change:artifacts_attack", _attack);

      let _attack_bonus = 0;
      for (let _a in this.artifact_statuses) {
        _attack_bonus += Number(this.artifact_statuses[_a].attack_bonus);
      }
      this.$emit("change:artifacts_attack_bonus", _attack_bonus);
    }
  }
};
</script>