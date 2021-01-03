const app = Vue.createApp({
  data() {
    return {
      user1: false,
      user2: false,
      hidden: false,
      userText: "",
    };
  },
  methods: {
    selectUser(event) {
      if (event.target.value === "user1") {
        this.user1 = true;
      } else if (event.target.value === "user2") {
        this.user2 = true;
      }
    },
    hideClass() {
      this.hidden = !this.hidden;
    },
  },
  computed: {
    userClass() {
      if (this.user1) {
        return "user1";
      } else if (this.user2) {
        return "user2";
      }
    },
    returnClass() {
      if (!this.hidden) {
        return "hidden";
      }
    },
  },
});

app.mount("#assignment");
