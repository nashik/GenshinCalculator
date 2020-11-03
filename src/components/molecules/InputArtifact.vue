<template>
  <v-container>
    <v-autocomplete
      v-model="selectedArtifact"
      :items="getArtifacts"
      item-text="name"
      :label="label"
      @change="changeArtifact"
    >
      <template v-slot:append-outer>
        <v-btn icon @click="clickDelete">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-autocomplete>
    <v-select v-model="selectedRarity" :items="getRarities" label="レアリティ" @change="changeRarity"></v-select>
    <v-select
      v-model="selectedMainStatus"
      :items="getMainStatuses"
      item-text="special_type"
      label="ステータス"
      return-object
      @change="changeMainStatus"
    ></v-select>
    <v-select
      v-model="selectedLevel"
      :items="getLevels"
      item-text="level"
      label="Lv."
      return-object
      @change="changeLevel"
    ></v-select>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">{{specialType}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{viewSpecialValue}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import artifact_json from "../../assets/artifacts.json";
import artifact_main_statuses_json from "../../assets/artifact_main_statuses.json";

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
      selectedArtifact: "",
      selectedRarity: "",
      selectedMainStatus: { special_type: "" },
      selectedLevel: "",

      specialType: "-",
      specialValue: 0
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
    },
    getMainStatuses() {
      let _a = artifact_main_statuses_json.find(d => d.type === this.type);
      if (_a) {
        let _b = _a.possible_specials.find(
          d => d.rarity === this.selectedRarity
        );
        if (_b) {
          return _b.special_values;
        }
      }
      return [];
    },
    getLevels() {
      if (this.selectedMainStatus) {
        return this.selectedMainStatus.values;
      }
      return [];
    },
    // special_typeが%値の場合、100を掛けて%表示する(小数点第1位まで)
    viewSpecialValue() {
      if (this.specialType.match(/%/)) {
        return (this.specialValue * 100).toFixed(1);
      } else {
        return this.specialValue;
      }
    }
  },
  methods: {
    changeArtifact() {
      // セット名を取得して保持する
      let _set_name = "";
      for (let _a in artifact_json) {
        if (
          artifact_json[_a].items.find(d => d.name === this.selectedArtifact)
        ) {
          _set_name = artifact_json[_a].set_name;
        }
      }
      this.setName = _set_name;

      // 聖遺物変更時に、同じレアリティのデータがあればそのままにする
      // 同じレアリティのデータがない場合は、最大レアリティを選択する
      let _rarityList = this.getRarities;
      let _sameRarity = this.selectedRarity;
      if (!_rarityList.includes(_sameRarity)) {
        this.selectedRarity = _rarityList[_rarityList.length - 1];
      } else {
        this.selectedRarity = _sameRarity;
      }

      this.changeRarity();
    },
    changeRarity() {
      let _mainStatusList = this.getMainStatuses;
      if (0 === _mainStatusList.length) {
        // リストが存在しない場合は、初期値を設定する
        this.selectedMainStatus = { special_type: "-", values: [] };
      } else {
        // レアリティ変更時に、同じステータスのデータがあればそのままにする
        // 同じステータスのデータがない場合は、1番目のステータスを選択する
        let _sameMainStatus = _mainStatusList.find(
          d => d.special_type === this.selectedMainStatus.special_type
        );
        if (typeof _sameMainStatus === "undefined") {
          this.selectedMainStatus = _mainStatusList[0];
        } else {
          this.selectedMainStatus = _sameMainStatus;
        }
      }

      this.changeMainStatus();
    },
    changeMainStatus() {
      this.specialType = this.selectedMainStatus.special_type;

      let _levelList = this.getLevels;
      if (0 === _levelList.length) {
        // リストが存在しない場合は、初期値を設定する
        this.selectedLevel = { value: 0 };
      } else {
        // ステータス変更時に、同じレベルのデータがあればそのままにする
        // 同じレベルのデータがない場合は、最大レベルを選択する
        let _sameLevel = _levelList.find(
          d => d.level === this.selectedLevel.level
        );
        if (typeof _sameLevel === "undefined") {
          this.selectedLevel = _levelList[_levelList.length - 1];
        } else {
          this.selectedLevel = _sameLevel;
        }
      }

      this.changeLevel();
    },
    changeLevel() {
      this.specialValue = this.selectedLevel.value;

      // Artifactsに変更を通知
      let _data = {
        special_type: this.specialType,
        special_value: this.specialValue
      };
      this.$emit("change:artifact", _data);
    },
    clickDelete() {
      this.selectedArtifact = "";
      this.changeArtifact();
    }
  }
};
</script>