<template>
  <v-text-field
    v-model.trim="base_attack_val"
    label="基礎攻撃力(キャラ+武器)"
    type="number"
    min="0"
    placeholder="1234"
  ></v-text-field>
</template>

<script>
export default {
  name: "InputBaseAttack",
  props: {
    base_attack: {
      type: Number
    }
  },
  computed: {
    base_attack_val: {
      // get() {
      //   return this.base_attack;
      // },
      set(value) {
        this.$emit("change:base_attack", value);
      }
    }
  }
};
</script>