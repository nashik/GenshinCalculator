<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <Header />
    </v-app-bar>
    <v-content>
      <Main />
    </v-content>
    <v-footer color="primary" dark app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Main from "../organisms/Main";

export default {
  name: "GenshinCalc",

  components: {
    Header,
    Footer,
    Main
  }
};
</script>