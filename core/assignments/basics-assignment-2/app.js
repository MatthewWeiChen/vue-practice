const app = Vue.createApp({
  data() {
    return {
      word: "",
      keydownWord: "",
    };
  },
  methods: {
    showAlert() {
      alert("you pressed the red button!");
    },
    updateWord(event) {
      this.word = event.target.value;
    },
    updateKeydown(event) {
      this.keydownWord = event.target.value;
    },
  },
});

app.mount("#assignment");
