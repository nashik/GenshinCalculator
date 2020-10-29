<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <Header />
    </v-app-bar>
    <v-main>
      <Input
        @change:total_attack="total_attack=$event"
        @change:critical_rate="critical_rate=$event"
        @change:critical_damage="critical_damage=$event"
      />
      <Output
        :total_attack="total_attack"
        :critical_rate="critical_rate"
        :critical_damage="critical_damage"
      />
    </v-main>
    <v-footer color="primary" dark app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Input from "../organisms/Input";
import Output from "../organisms/Output";

export default {
  name: "GenshinCalc",

  components: {
    Header,
    Footer,
    Input,
    Output
  },
  data() {
    return {
      total_attack: 0,
      critical_rate: 0,
      critical_damage: 0
    };
  }
};
</script>