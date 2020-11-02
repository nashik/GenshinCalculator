<template>
  <v-card-text>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedArtifact"
          :items="artifacts"
          item-text="name"
          :label="type"
          @change="changeArtifact"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedLevel"
          :items="levels"
          label="Lv."
          @change="changeLevel"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedRarity"
          :items="rarity"
          item-text="label"
          item-value="value"
          label="レアリティ"
          @change="changeRarity"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedMainStatus"
          :items="mainStatus"
          label="ステータス"
          @change="changeMainStatus"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
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
      </v-col>
    </v-row>
  </v-card-text>
</template>
<script>
import artifact_json from "../../assets/weapons.json";

export default {
  name: "InputArtifact",
  props: {
    type: {
      type: String,
    },
  },
  data() {
    return {
      levels: [...Array(20).keys()].map((i) => ++i),
      rarity: [
        { label: "◆◇◇◇◇", value: 1 },
        { label: "◆◆◇◇◇", value: 2 },
        { label: "◆◆◆◇◇", value: 3 },
        { label: "◆◆◆◆◇", value: 4 },
        { label: "◆◆◆◆◆", value: 5 },
      ],
      artifact: artifact_json,
      mainStatus: ["HP","攻撃力%","会心率"],
      selectedArtifact: "",
      selectedLevel: 0,
      selectedRarity: 0,
    };
  },
  computed: {},
  methods: {},
};
</script>