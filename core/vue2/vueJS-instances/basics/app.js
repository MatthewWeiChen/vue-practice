let vm1 = new Vue({
  el: "#app",
  data: {
    title: "The VueJS Instance",
    showParagraph: false,
  },
  methods: {
    show: function () {
      this.showParagraph = true;
      this.updateTitle("The VueJS Instance (Updated)");
    },
    updateTitle: function (title) {
      this.title = title;
    },
  },
  computed: {
    lowercaseTitle: function () {
      return this.title.toLowerCase();
    },
  },
  watch: {
    title: function (value) {
      alert("Title changed, new value: " + value);
    },
  },
});

setTimeout(function () {
  vm1.title = "Changed by Timer";
}, 3000);

let vm2 = new Vue({
  el: "#app2",
  data: {
    title: "The Second Instance",
  },
  methods: {
    onChange() {
      vm1.title = "Changed!";
    },
  },
});
