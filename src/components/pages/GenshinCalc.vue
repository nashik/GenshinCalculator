<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <Header/>
    </v-app-bar>
    <v-main></v-main>
    <v-footer color="primary" dark app>
      <Footer/>
    </v-footer>
  </v-app>
</template>


<script>
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>