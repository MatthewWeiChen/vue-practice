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
  },
  computed: {
    showButton() {
      return this.show ? "Hide" : "Show List";
    },
  },
});

app.mount("#assignment");
