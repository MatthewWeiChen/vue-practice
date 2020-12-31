const app = Vue.createApp({
  data() {
    return {
      name: "Matthew Chen",
      age: "30 years old",
      futureAge: "In 5 years I will be 35 years old",
      vueLink: "https://cdn.bulbagarden.net/upload/4/49/Ash_Pikachu.png",
    };
  },
  methods: {
    outputFavNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
