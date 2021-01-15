function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      this.monsterHealth -= getRandomValue(5, 12);
      this.monsterAttack();
    },
    monsterAttack() {
      this.playerHealth -= getRandomValue(8, 15);
    },
    heal() {
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.monsterAttack();
    },
    specialAttack() {
      this.monsterHealth -= getRandomValue(8, 20);
      this.monsterAttack();
    },
    giveUp() {},
  },
  computed: {
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
  },
});
