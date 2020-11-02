<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <Header />
    </v-app-bar>
    <v-main>
      <v-row>
        <v-col offset="1" cols="5">
          <CharacterAndWeapon
            @change:base_attack="base_attack = $event"
            @change:attack_bonus="attack_bonus = $event"
            @change:critical_rate="critical_rate = $event"
            @change:critical_damage="critical_damage = $event"
            @change:damage_bonus="damage_bonus = $event"
          />
        </v-col>
        <v-col cols="5">
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
          <Output
            :base_attack="base_attack"
            :attack_bonus="attack_bonus"
            :critical_rate="critical_rate"
            :critical_damage="critical_damage"
            :damage_bonus="damage_bonus"
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
// import Input from "../organisms/Input";
import Output from "../organisms/Output";
import CharacterAndWeapon from "../organisms/CharacterAndWeapon";

export default {
  name: "GenshinCalc",

  components: {
    Header,
    Footer,
    // Input,
    Output,
    CharacterAndWeapon,
  },
  data() {
    return {
      base_attack: 0,
      attack_bonus: 0,
      // artifacts_attack_bonus: 0,
      // atrifacts_attack_flat_bonus: 0,
      critical_rate: 0,
      critical_damage: 0,
      damage_bonus: 0,
    };
  },
};
</script>