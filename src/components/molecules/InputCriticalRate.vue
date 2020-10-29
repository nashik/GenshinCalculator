<template>
  <v-text-field
    v-model.trim="critical_rate_val"
    label="会心率(%)"
    type="number"
    min="0"
    placeholder="12.3"
    @keypress="validateFloat"
  ></v-text-field>
</template>

<script>
export default {
  name: "InputCriticalRate",
  props: {
    critical_rate: {
      type: Number
    }
  },
  computed: {
    critical_rate_val: {
      get() {
        return this.critical_rate;
      },
      set(value) {
        this.$emit("change:critical_rate", value);
      }
    }
  },
  methods: {
    validateFloat(e) {
      const charCode = e.which ? e.which : e.keyCode;
      if (charCode > 31 && (charCode < 46 || charCode == 47 || charCode > 57)) {
        // 数字とドット入力のみ許可する
        e.preventDefault();
      } else {
        return true;
      }
    }
  }
};
</script>