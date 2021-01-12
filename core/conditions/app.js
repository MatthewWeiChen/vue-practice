const app = Vue.createApp({
  data() {
    return { goals: [0.1, 3] };
  },
});

app.mount("#user-goals");
