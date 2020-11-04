<template>
  <v-card>
    <v-card-title>結果</v-card-title>
    <v-card-text>
      <strong>ステータス</strong>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th></th>
              <th class="text-left">攻撃力</th>
              <th class="text-left">攻撃力(%)</th>
              <th class="text-left">会心率(%)</th>
              <th class="text-left">会心ダメージ(%)</th>
              <th class="text-left">ダメージバフ(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>キャラクター＋武器</th>
              <td>{{ base_attack }}</td>
              <td>{{ attack_bonus * 100 }}</td>
              <td>{{ critical_rate * 100 }}</td>
              <td>{{ critical_damage * 100 }}</td>
              <td>{{ damage_bonus * 100 }}</td>
            </tr>
            <tr>
              <th>聖遺物</th>
              <td>{{ artifacts_attack }}</td>
              <td>{{ artifacts_attack_bonus * 100 }}</td>
              <td>{{ artifacts_critical_rate * 100 }}</td>
              <td>{{ artifacts_critical_damage * 100 }}</td>
              <td>{{ artifacts_damage_bonus * 100 }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
    <v-card-text>
      <strong>計算結果</strong>
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
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Output",
  props: {
    // キャラクター＋武器
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
    },
    // 聖遺物
    artifacts_attack: {
      type: Number
    },
    artifacts_attack_bonus: {
      type: Number
    },
    artifacts_critical_rate: {
      type: Number
    },
    artifacts_critical_damage: {
      type: Number
    },
    artifacts_damage_bonus: {
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
      // ATK Power
      // = [(Character's Base ATK + Weapon ATK)
      //   × (1 + Weapon ATK% bonuses + Artifact ATK% bonuses)]
      //   + Artifact ATK flat bonuses
      return (
        (this.base_attack *
          (1 + this.attack_bonus + this.artifacts_attack_bonus) +
          this.artifacts_attack) *
        (1 + this.damage_bonus)
      );
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