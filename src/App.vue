<template>
  <div id="app">
    <div class="header">
      <h1>Time-Since</h1>
      <div>
        <router-link to="/">
          <v-icon
            name="calculator"
            scale="1.1"
            @click="display = 'calculator'"
            class="icon-button"
            color="white"
          />
        </router-link>
        <router-link to="/settings">
          <v-icon
            name="cog"
            scale="1.1"
            @click="display = 'settings'"
            class="icon-button"
            color="white"
          />
        </router-link>
      </div>
    </div>

    <router-view :settings=settings></router-view>
  </div>
</template>

<script>
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/cog";
import "vue-awesome/icons/calculator";

export default {
  name: "App",
  components: {
    "v-icon": Icon,
  },
  data() {
    return {
      display: "calculator",
      settings: {
        units: [
          {
            type: "bool",
            active: false,
            label: "milliseconds",
            value: 0,
            multiplier: 1,
          },
          {
            type: "bool",
            active: false,
            label: "seconds",
            value: 0,
            multiplier: 1000,
          },
          {
            type: "bool",
            active: true,
            label: "minutes",
            value: 0,
            multiplier: 1000 * 60,
          },
          {
            type: "bool",
            active: true,
            label: "hours",
            value: 0,
            multiplier: 1000 * 60 * 60,
          },
          {
            type: "bool",
            active: true,
            label: "days",
            value: 0,
            multiplier: 1000 * 60 * 60 * 24,
          },
          {
            type: "bool",
            active: true,
            label: "weeks",
            value: 0,
            multiplier: 1000 * 60 * 60 * 24,
          },
          {
            type: "bool",
            active: true,
            label: "months",
            value: 0,
          },
          {
            type: "bool",
            active: true,
            label: "years",
            value: 0,
          },
        ],
        general: {
          concat: {
            type: "bool",
            active: false,
            label: "concatenate units",
          },
        },
      },
    };
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
  flex-direction: column;
  row-gap: 00%;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  min-height: 100%;
}

#app > .header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.header .icon-button {
  user-select: none;
  transition: all 0.01s ease-in-out;
  margin-left: 20px;
}

.header .icon-button:hover {
  color: #c9184a;
  cursor: pointer;
}

.header .icon-button:active {
  color: white;
}
</style>
