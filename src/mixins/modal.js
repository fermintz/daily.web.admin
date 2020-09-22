export default {
  data() {
    return {
      visible: false,
    };
  },
  watch: {
    visible(newValue) {
      this.$emit(newValue ? 'on:open' : 'on:dismiss');
    },
  },
  methods: {
    show(state) {
      this.visible = state;
    },
  },
};
