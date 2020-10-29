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
            <td>通常ダメージ</td>
            <td>{{ normalDamage }}</td>
          </tr>
          <tr>
            <td>会心ダメージ</td>
            <td>{{ criticalDamage }}</td>
          </tr>
          <tr>
            <td>期待値</td>
            <td>{{ expectedDamage }}</td>
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
  },
  computed: {
    normalDamage() {
      return this.total_attack;
    },
    criticalDamage() {
      return this.total_attack * (1 + this.critical_damage / 100);
    },
    expectedDamage() {
      return (
        this.total_attack * (1 - this.critical_rate / 100) +
        this.criticalDamage * (this.critical_rate / 100)
      );
    }
  }
};
</script>