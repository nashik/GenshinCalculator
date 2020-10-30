<template>
  <v-text-field
    v-model.trim="attack_val"
    :label="attack_label"
    type="number"
    min="0"
    placeholder="1234"
    @keypress="validateInteger"
  ></v-text-field>
</template>

<script>
export default {
  name: "InputAttack",
  props: {
    attack_label: {
      type: String
    },
    attack: {
      type: Number
    }
  },
  computed: {
    attack_val: {
      get() {
        return this.attack;
      },
      set(value) {
        this.$emit("change:attack", value);
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