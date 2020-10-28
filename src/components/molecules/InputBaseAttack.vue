<template>
  <v-text-field v-model="base_attack_val" label="基礎攻撃力(キャラ+武器)" placeholder="1234"></v-text-field>
</template>

<script>
export default {
  props: {
    base_attack: {
      type: String
    }
  },
  computed: {
    base_attack_val: {
      get() {
        return this.base_attack;
      },
      set(value) {
        this.$emit("change:value", value);
      }
    }
  }
};
</script>