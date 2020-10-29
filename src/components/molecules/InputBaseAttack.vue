<template>
  <v-text-field
    v-model.trim="base_attack_val"
    label="基礎攻撃力(キャラ+武器)"
    type="number"
    min="0"
    placeholder="1234"
    @keypress="validateInteger"
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
      get() {
        return this.base_attack;
      },
      set(value) {
        this.$emit("change:base_attack", value);
      }
    }
  },
  methods: {
    validateInteger(e) {
      const charCode = e.which ? e.which : e.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        // 数字入力のみ許可する
        e.preventDefault();
      } else {
        return true;
      }
    }
  }
};
</script>