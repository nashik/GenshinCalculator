<template>
  <v-container>
    <v-select
      v-model="selectedArtifact"
      :items="getArtifacts"
      item-text="name"
      :label="label"
      @change="changeArtifact"
    ></v-select>
    <v-select v-model="selectedRarity" :items="getRarities" label="レアリティ"></v-select>
    <v-select v-model="selectedMainStatus" :items="mainStatus" label="ステータス"></v-select>
    <v-select v-model="selectedLevel" :items="levels" label="Lv."></v-select>

    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">攻撃力</th>
            <th class="text-left">aaa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>111</td>
            <td>111</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import artifact_json from "../../assets/artifacts.json";
// import artifact_main_statuses_json from "../../assets/artifact_main_statuses.json";

export default {
  name: "InputArtifact",
  props: {
    label: {
      type: String
    },
    type: {
      type: String
    }
  },
  data() {
    return {
      setName: "",
      levels: [...Array(20).keys()].map(i => ++i),
      mainStatus: ["HP", "攻撃力%", "会心率"],
      selectedArtifact: "",
      selectedMainStatus: "",
      selectedLevel: 0,
      selectedRarity: 0
    };
  },
  computed: {
    getArtifacts() {
      let _items = [];
      for (let a in artifact_json) {
        _items = _items.concat(
          artifact_json[a].items.filter(d => d.type === this.type)
        );
      }
      return _items;
    },
    getRarities() {
      let _a = artifact_json.find(d => d.set_name === this.setName);
      if (_a) {
        return _a.rarities;
      }
      return [];
    }
  },
  methods: {
    changeArtifact() {
      let _set_name = "";
      for (let _a in artifact_json) {
        if (
          artifact_json[_a].items.find(d => d.name === this.selectedArtifact)
        ) {
          _set_name = artifact_json[_a].set_name;
        }
      }
      this.setName = _set_name;
    }
  }
};
</script>