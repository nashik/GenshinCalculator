<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <Header />
    </v-app-bar>
    <v-main>
      <CharacterAndWeapon />
      <!--
      <Input
        @change:total_attack="total_attack=$event"
        @change:critical_rate="critical_rate=$event"
        @change:critical_damage="critical_damage=$event"
        @change:damage_bonus="damage_bonus=$event"
      />
      <Output
        :total_attack="total_attack"
        :critical_rate="critical_rate"
        :critical_damage="critical_damage"
        :damage_bonus="damage_bonus"
      />
      -->
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
// import Output from "../organisms/Output";
import CharacterAndWeapon from "../organisms/CharacterAndWeapon";

export default {
  name: "GenshinCalc",

  components: {
    Header,
    Footer,
    // Input,
    // Output,
    CharacterAndWeapon
  },
  data() {
    return {
      total_attack: 0,
      critical_rate: 0,
      critical_damage: 0,
      damage_bonus: 0
    };
  }
};
</script>