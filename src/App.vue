<template>
  <div id="app">
    <h1>Time-Since</h1>
    <div class="container">
      <Calculator />
    </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 90vh;
  width: 100%;
}

.container {
  width: 100%;
  height: 80%;
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>
