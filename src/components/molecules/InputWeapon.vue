<template>
  <v-card-text>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedWeapon"
          :items="weapons"
          item-text="name"
          label="武器"
          return-object
          @change="changeWeapon"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedLevel"
          :items="selectedWeapon.status"
          item-text="level"
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
            <th class="text-left">レアリティ</th>
            <th class="text-left">攻撃力</th>
            <th class="text-left">{{ selectedWeapon.special_type }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedWeapon.rarity }}</td>
            <td>{{ selectedLevel.atk }}</td>
            <td>{{ viewSpecialValue }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card-text>
</template>
<script>
import weapons_json from "../../assets/weapons.json";

export default {
  name: "InputWeapon",
  props: {
    weapon_type: {
      type: String
    }
  },
  data() {
    return {
      weapons: weapons_json,
      selectedWeapon: { rarity: "-", special_type: "-" },
      selectedLevel: { atk: 0, special_value: 0 }
    };
  },
  computed: {
    // special_typeが%値の場合、100を掛けて%表示する(小数点第1位まで)
    viewSpecialValue() {
      if (this.selectedWeapon.special_type.match(/%/)) {
        return (this.selectedLevel.special_value * 100).toFixed(1);
      } else {
        return this.selectedLevel.special_value;
      }
    }
  },
  methods: {
    selectWeaponType(value) {
      // キャラクター変更時に、変更前と変更後のキャラクターのweapon_typeが
      // 同じ場合は武器の選択状態をそのままにする
      // 違う場合は武器の選択リストをキャラクターのweapon_typeでフィルタリングして再設定する
      this.weapons = weapons_json.filter(d => d.weapon_type == value);
      let _w = this.weapons.filter(d => d.weapon_type == this.weapon_type);
      if (_w.length == 0) {
        this.selectedWeapon = this.weapons[0];
        this.selectedLevel = this.selectedWeapon.status[
          this.selectedWeapon.status.length - 1
        ];
      }

      this.$emit("change:weapon", this.packData());
    },
    changeWeapon() {
      // 武器変更時に、同じレベルのデータがあればそれを選択する
      let _sameLevel = this.selectedWeapon.status.filter(
        d => d.level == this.selectedLevel.level
      );
      if (_sameLevel.length != 0) {
        this.selectedLevel = _sameLevel[0];
      } else {
        // 同じレベルのデータがない場合は、最大レベルを選択する
        this.selectedLevel = this.selectedWeapon.status[
          this.selectedWeapon.status.length - 1
        ];
      }

      this.$emit("change:weapon", this.packData());
    },
    changeLevel() {
      this.$emit("change:weapon", this.packData());
    },
    packData() {
      let _data = {
        special_type: this.selectedWeapon.special_type,
        atk: this.selectedLevel.atk,
        special_value: this.selectedLevel.special_value
      };
      return _data;
    }
  }
};
</script>