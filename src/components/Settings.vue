<template>
  <div id="main">
    <div class="category">
      <h1 class="category-title">Units</h1>
      <div
        class="options"
        v-for="unit in settings.units"
        v-bind:key="unit.label"
      >
        <div class="option">
          <h2>{{ unit.label }}</h2>
          <el-button-group>
            <el-button
              size="mini"
              type="primary"
              :plain="!unit.active"
              @click="() => (unit.active = true)"
              >True</el-button
            >
            <el-button
              size="mini"
              type="primary"
              :plain="unit.active"
              @click="() => (unit.active = false)"
              >False</el-button
            >
          </el-button-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  components: {},
  props: ["settings"],
};
</script>

<style scoped>
#main {
  width: 50%;
}

@media only screen and (max-width: 800px) {
  #main {
    width: 100%;
  }
  .option > h2 {
    font-size: 1rem;
  }
}

.category {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.category-title:after {
  content: "";
  width: 100%;
  display: flex;
  justify-content: center;
  line-height: 0.1em;
  font-size: 14px;
  font-family: cursive;
  margin: 10px auto 10px auto;
  border-bottom: 1px solid #c9184a;
}

.options {
  margin: auto;
  width: 100%;
}

.option {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.option > h2 {
  text-align: left;
  width: 25%;
}

.el-button-group,
.el-button {
  height: 10%;
}
</style>
