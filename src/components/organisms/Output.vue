<template>
  <v-card>
    <v-card-title>結果</v-card-title>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">基礎攻撃力</th>
            <th class="text-left">攻撃力(%)</th>
            <th class="text-left">会心率(%)</th>
            <th class="text-left">会心ダメージ(%)</th>
            <th class="text-left">ダメージバフ(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ base_attack }}</td>
            <td>{{ attack_bonus * 100 }}</td>
            <td>{{ critical_rate * 100 }}</td>
            <td>{{ critical_damage * 100 }}</td>
            <td>{{ damage_bonus * 100 }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-simple-table dense>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">種別</th>
            <th class="text-left">値</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>通常ダメージ</td>
            <td>{{ normalDamage.toFixed(2) }}</td>
          </tr>
          <tr>
            <td>会心ダメージ</td>
            <td>{{ criticalDamage.toFixed(2) }}</td>
          </tr>
          <tr>
            <td>期待値</td>
            <td>{{ expectedDamage.toFixed(2) }}</td>
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
    base_attack: {
      type: Number
    },
    attack_bonus: {
      type: Number
    },
    critical_rate: {
      type: Number
    },
    critical_damage: {
      type: Number
    },
    damage_bonus: {
      type: Number
    }
  },
  computed: {
    normalDamage() {
      return this.calcNormalDamage();
    },
    criticalDamage() {
      return this.calcCriticalDamage();
    },
    expectedDamage() {
      return this.calcExpectedDamage();
    }
  },
  methods: {
    calcNormalDamage() {
      return this.base_attack * (1 + this.attack_bonus + this.damage_bonus);
    },
    calcCriticalDamage() {
      return this.calcNormalDamage() * (1 + this.critical_damage);
    },
    calcExpectedDamage() {
      return (
        this.calcNormalDamage() * (1 - this.critical_rate) +
        this.calcCriticalDamage() * this.critical_rate
      );
    }
  }
};
</script>