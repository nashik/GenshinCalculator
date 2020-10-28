<template>
  <v-card width="500px" class="mx-auto my-10">
    <v-card-title>計算</v-card-title>
    <v-card-text>
      <InputBaseAttack @change:value="base_attack=$event" />
      基礎攻撃力 = {{base_attack}}
    </v-card-text>
  </v-card>
</template>

<script>
import InputBaseAttack from "../molecules/InputBaseAttack";

export default {
  name: "Main",
  components: {
    InputBaseAttack
  },
  data() {
    return {
      base_attack: ""
    };
  }
};
</script>