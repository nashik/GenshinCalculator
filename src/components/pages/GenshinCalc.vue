<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <Header />
    </v-app-bar>
    <v-main>
      <v-row>
        <v-col offset="1" cols="10">
          <CharacterAndWeapon
            @change:base_attack="base_attack = $event"
            @change:attack_bonus="attack_bonus = $event"
            @change:critical_rate="critical_rate = $event"
            @change:critical_damage="critical_damage = $event"
            @change:damage_bonus="damage_bonus = $event"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="1" cols="10">
          <Artifacts
            @change:artifacts_attack="artifacts_attack = $event"
            @change:artifacts_attack_bonus="artifacts_attack_bonus = $event"
            @change:artifacts_critical_rate="artifacts_critical_rate = $event"
            @change:artifacts_critical_damage="artifacts_critical_damage = $event"
            @change:artifacts_damage_bonus="artifacts_damage_bonus = $event"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="1" cols="10">
          <Output
            :base_attack="base_attack"
            :attack_bonus="attack_bonus"
            :critical_rate="critical_rate"
            :critical_damage="critical_damage"
            :damage_bonus="damage_bonus"
            :artifacts_attack="artifacts_attack"
            :artifacts_attack_bonus="artifacts_attack_bonus"
            :artifacts_critical_rate="artifacts_critical_rate"
            :artifacts_critical_damage="artifacts_critical_damage"
            :artifacts_damage_bonus="artifacts_damage_bonus"
          />
        </v-col>
      </v-row>
    </v-main>
    <v-footer color="primary" dark app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Output from "../organisms/Output";
import CharacterAndWeapon from "../organisms/CharacterAndWeapon";
import Artifacts from "../organisms/Artifacts";

export default {
  name: "GenshinCalc",

  components: {
    Header,
    Footer,
    // Input,
    Output,
    CharacterAndWeapon,
    Artifacts
  },
  data() {
    return {
      // キャラクター＋武器
      base_attack: 0,
      attack_bonus: 0,
      critical_rate: 0,
      critical_damage: 0,
      damage_bonus: 0,
      // 聖遺物
      artifacts_attack: 0,
      artifacts_attack_bonus: 0,
      artifacts_critical_rate: 0,
      artifacts_critical_damage: 0,
      artifacts_damage_bonus: 0
    };
  }
};
</script>