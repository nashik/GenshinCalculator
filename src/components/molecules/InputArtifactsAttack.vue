<template>
  <v-text-field
    v-model.trim="artifacts_attack_val"
    label="聖遺物攻撃力"
    type="number"
    min="0"
    placeholder="1234"
    @keypress="validateInteger"
  ></v-text-field>
</template>

<script>
export default {
  name: "InputArtifactsAttack",
  props: {
    artifacts_attack: {
      type: Number
    }
  },
  computed: {
    artifacts_attack_val: {
      get() {
        return this.artifacts_attack;
      },
      set(value) {
        this.$emit("change:artifacts_attack", value);
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