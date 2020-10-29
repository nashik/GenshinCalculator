<template>
  <v-card width="500px" class="mx-auto my-10">
    <v-card-title>Output</v-card-title>
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
            <td>会心率</td>
            <td>{{ critical_rate }}</td>
          </tr>
          <tr>
            <td>会心ダメージ</td>
            <td>{{ critical_damage }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "Output",
  props: {
    total_attack: {
      type: Number
    },
    critical_rate: {
      type: Number
    },
    critical_damage: {
      type: Number
    }
  }
};
</script>