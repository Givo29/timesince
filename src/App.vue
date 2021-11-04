<template>
  <div id="app">
    <h1>Time-Since</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Calculator,
  },
};
</script>

<style>
body {
  background: #22223b;
  height: 100vh;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f2e9e4;
  height: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  min-height: 100%;
}

#app > h1 {
  flex-basis: 100%;
  font-size: 2.5rem;
}
</style>
