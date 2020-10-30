<template>
  <v-text-field
    v-model.trim="percentage_val"
    :label="label"
    type="number"
    min="0"
    placeholder="12.3"
    @keypress="validateFloat"
  ></v-text-field>
</template>

<script>
export default {
  name: "InputPercentage",
  props: {
    label: {
      type: String
    },
    percentage: {
      type: Number
    }
  },
  computed: {
    percentage_val: {
      get() {
        return this.percentage;
      },
      set(value) {
        this.$emit("change:percentage", value);
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