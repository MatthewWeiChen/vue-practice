const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    increaseCounter(num) {
      this.counter = this.counter + num;
    },
    decreaseCounter(num) {
      this.counter = this.counter - num;
    },
    updateName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    submitForm() {
      alert("submitted");
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
