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
      this.weapons = weapons_json.filter(d => d.weapon_type == value);
      this.selectedWeapon = this.weapons[0];
      this.selectedLevel = this.selectedWeapon.status[
        this.selectedWeapon.status.length - 1
      ];

      this.$emit("change:weapon", this.packData());
    },
    changeWeapon() {
      let l = this.selectedWeapon.status.filter(
        d => d.level == this.selectedLevel.level
      );
      if (l.length != 0) {
        this.selectedLevel = l[0];
      } else {
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
      let value = {
        special_type: this.selectedWeapon.special_type,
        atk: this.selectedLevel.atk,
        special_value: this.selectedLevel.special_value
      };
      return value;
    }
  }
};
</script>