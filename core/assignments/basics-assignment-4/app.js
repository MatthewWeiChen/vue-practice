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

///**
 * @param {string} text
 * @return {number}
 */

//input is a string
//output is a number
//counter for each letter
//loop through the string, count each time a letter in the data structure is found
//return the lowest counter
//if one letter counter = 0; return 0
