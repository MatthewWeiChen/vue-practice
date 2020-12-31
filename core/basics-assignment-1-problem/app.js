const app = Vue.createApp({
  data() {
    return {
      name: "Matthew Chen",
      age: 30,
      vueLink: "https://cdn.bulbagarden.net/upload/4/49/Ash_Pikachu.png",
    };
  },
  methods: {
    outputFavNumber() {
      return Math.random();
    },
    calculateAge() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
