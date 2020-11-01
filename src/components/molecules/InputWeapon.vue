<template>
  <v-card-text>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedWeapon"
          :items="weapons"
          item-text="name"
          item-value="id"
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
          item-value="level"
          label="Lv"
          return-object
        ></v-select>
      </v-col>
    </v-row>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Rarity</th>
            <th class="text-left">Atk</th>
            <th class="text-left">{{ selectedWeapon.special_type }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedWeapon.rarity }}</td>
            <td>{{ selectedLevel.atk }}</td>
            <td>{{ selectedLevel.special_value }}</td>
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
      selectedWeapon: { rarity: "-", special_type: "xxx" },
      selectedLevel: { atk: 0, special_value: 0 }
    };
  },
  methods: {
    selectWeaponType(value) {
      this.weapons = weapons_json.filter(d => d.weapon_type == value);
      this.selectedWeapon = this.weapons[0];
      this.selectedLevel = this.selectedWeapon.status[0];
    },
    changeWeapon() {
      let l = this.selectedWeapon.status.filter(
        d => d.level == this.selectedLevel.level
      );
      if (l.length != 0) {
        this.selectedLevel = l[0];
      } else {
        this.selectedLevel = this.selectedWeapon.status[0];
      }
    }
  }
};
</script>