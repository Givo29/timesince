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
body {
  background: #22223B;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #F2E9E4;
  height: 90vh;
  width: 100%;
}

h1 {
  font-size: 2.5rem;
}

.container {
  width: 100%;
  height: 80%;
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>
