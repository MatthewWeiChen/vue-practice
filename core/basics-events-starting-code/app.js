const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Chen";
    },
    increaseCounter(num) {
      this.counter = this.counter + num;
    },
    decreaseCounter(num) {
      this.counter = this.counter - num;
    },
    updateName(event, lastname) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("submitted");
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
  computed: {
    fullname() {
      console.log("again");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Chen";
    },
  },
});

app.mount("#events");
