const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    increaseBy5() {
      this.result += 5;
      console.log(this.result);
    },
    increaseBy1() {
      this.result += 1;
      console.log(this.result);
    },
  },
  computed: {
    yourResult() {
      if (this.result < 37) {
        return "Not there yet!";
      } else if (this.result > 37) {
        return "too much!";
      } else {
        return "you got it!";
      }
    },
  },
  watch: {
    result(value) {
      if (value > 0) {
        const that = this;
        setTimeout(function () {
          that.result = 0;
        }, 5000);
      }
    },
  },
});

app.mount("#assignment");
