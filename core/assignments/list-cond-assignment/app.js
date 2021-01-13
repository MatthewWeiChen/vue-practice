const app = Vue.createApp({
  data() {
    return {
      inputEnteredValue: "",
      tasks: [],
      show: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputEnteredValue);
    },
    changeView() {
      this.show = !this.show;
    },
    changeHideOrShow() {
      if (this.show) {
        return "Hide";
      } else {
        return "Show List";
      }
    },
  },
});

app.mount("#assignment");
