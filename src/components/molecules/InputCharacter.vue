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
          label="Lv"
          return-object
        ></v-select>
      </v-col>
    </v-row>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">HP</th>
            <th class="text-left">ATK</th>
            <th class="text-left">DEF</th>
            <th class="text-left">{{ selectedLevel.special.type }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedLevel.hp }}</td>
            <td>{{ selectedLevel.atk }}</td>
            <td>{{ selectedLevel.def }}</td>
            <td>{{ selectedLevel.special.value }}</td>
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
      selectedCharacter: characters_json[0],
      selectedLevel: characters_json[0].status[0]
    };
  },
  methods: {
    changeCharacter() {
      let l = this.selectedCharacter.status.filter(
        d => d.level == this.selectedLevel.level
      );
      if (l.length != 0) {
        this.selectedLevel = l[0];
      } else {
        this.selectedLevel = this.selectedCharacter.status[0];
      }
    }
  }
};
</script>