<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <Header />
    </v-app-bar>
    <v-content>
      <Main
        @change:base_attack="base_attack=$event"
        @change:artifacts_attack="artifacts_attack=$event"
      />
      <v-card width="500px" class="mx-auto my-10">
        <v-card-title>値の受け渡し確認(Pages)</v-card-title>
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>基礎攻撃力</td>
                <td>{{ base_attack }}</td>
              </tr>
              <tr>
                <td>聖遺物攻撃力</td>
                <td>{{ artifacts_attack }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
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
  },
  data() {
    return {
      base_attack: 0,
      artifacts_attack: 0
    };
  }
};
</script>