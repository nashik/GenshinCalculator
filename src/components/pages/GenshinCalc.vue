<template>
  <v-app>
    <v-app-bar color="primary" dark app>
      <Header />
    </v-app-bar>
    <v-content>
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
                <td>{{ total_attack }}</td>
              </tr>
              <tr>
                <td>会心率(%)</td>
                <td>{{ critical_rate }}</td>
              </tr>
              <tr>
                <td>会心ダメージ(%)</td>
                <td>{{ critical_damage }}</td>
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