<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="sayHi">Say Hi!</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sayHi() {
      this.message = 'Hi!';
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
