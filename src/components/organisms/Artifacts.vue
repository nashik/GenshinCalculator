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
      <v-row>
        <v-col>
          <strong>セット効果</strong>
          <div v-for="g in aggregateSetName" :key="g.set_name">
            <ul v-if="g.set_name != '' && g.count >= 2">
              <li>{{ g.set_name }}</li>
              <ul v-if="g.set_name != '' && g.count >= 2">
                <li v-if="g.count >= 2">{{ getSetBonus(2, g.set_name) }}</li>
                <li v-if="g.count >= 4">{{ getSetBonus(4, g.set_name) }}</li>
              </ul>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <!-- <v-card-text>{{artifact_statuses}}</v-card-text> -->
  </v-card>
</template>
<script>
import artifacts_json from "../../assets/artifacts.json";
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
          set_name: "",
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
          set_name: "",
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
          set_name: "",
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
          set_name: "",
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
          set_name: "",
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
  computed: {
    aggregateSetName() {
      var group = this.artifact_statuses.reduce(function(result, current) {
        var element = result.find(function(p) {
          return p.set_name == current.set_name;
        });
        if (element) {
          element.count++;
        } else {
          result.push({
            set_name: current.set_name,
            count: 1
          });
        }
        return result;
      }, []);
      return group;
    },
    getSetBonus: function() {
      return function(n, set_name) {
        let _a = artifacts_json.find(d => d.set_name === set_name);
        if (n >= 4) return _a.four_piece_bonus;
        if (n >= 2) return _a.two_piece_bonus;
        return "";
      };
    }
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
      this.artifact_statuses[n].set_name = value.set_name;
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