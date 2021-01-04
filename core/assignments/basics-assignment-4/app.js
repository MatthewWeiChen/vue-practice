const app = Vue.createApp({
  data() {
    return {
      paragraphIsVisible: true,
      userText: "",
    };
  },
  methods: {
    hideClass() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userText === "user1",
        user2: this.userText === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
});

app.mount("#assignment");
