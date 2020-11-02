<template>
  <v-card-text>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedCharacter"
          :items="characters"
          item-text="name"
          item-value="id"
          label="キャラクター"
          return-object
          @change="changeCharacter"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedLevel"
          :items="selectedCharacter.status"
          item-text="level"
          item-value="level"
          label="Lv. - 突破"
          return-object
          @change="changeLevel"
        ></v-select>
      </v-col>
    </v-row>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">HP</th>
            <th class="text-left">攻撃力</th>
            <th class="text-left">防御力</th>
            <th class="text-left">{{ selectedCharacter.special_type }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedLevel.hp }}</td>
            <td>{{ selectedLevel.atk }}</td>
            <td>{{ selectedLevel.def }}</td>
            <td>{{ viewSpecialValue }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card-text>
</template>
<script>
import characters_json from "../../assets/characters.json";

export default {
  name: "InputCharacter",
  data() {
    return {
      characters: characters_json,
      selectedCharacter: { special_type: "-" },
      selectedLevel: { hp: 0, atk: 0, def: 0, special_value: 0 }
    };
  },
  computed: {
    viewSpecialValue() {
      // special_typeが%値の場合、100を掛けて%表示する(小数点第1位まで)
      if (this.selectedCharacter.special_type.match(/%/)) {
        return (this.selectedLevel.special_value * 100).toFixed(1);
      } else {
        return this.selectedLevel.special_value;
      }
    }
  },
  methods: {
    changeCharacter() {
      // キャラクター変更時に、同じレベルのデータがあればそれを選択する
      let _sameLevel = this.selectedCharacter.status.filter(
        d => d.level == this.selectedLevel.level
      );
      if (_sameLevel.length != 0) {
        this.selectedLevel = _sameLevel[0];
      } else {
        // 同じレベルのデータがない場合は、最大レベルを選択する
        this.selectedLevel = this.selectedCharacter.status[
          this.selectedCharacter.status.length - 1
        ];
      }

      this.$emit("change:character", this.packData());
    },
    changeLevel() {
      this.$emit("change:character", this.packData());
    },
    packData() {
      let _data = {
        weapon_type: this.selectedCharacter.weapon_type,
        special_type: this.selectedCharacter.special_type,
        atk: this.selectedLevel.atk,
        special_value: this.selectedLevel.special_value
      };
      return _data;
    }
  }
};
</script>