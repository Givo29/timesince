<template>
  <div id="main">
    <div
      class="category"
      v-for="(options, title) in settings"
      v-bind:key="title"
    >
      <h1 class="category-title">{{ capitalise(title) }}</h1>
      <div class="option" v-for="option in options" v-bind:key="option.label">
        <h2>{{ capitalise(option.label) }}</h2>
        <el-button-group v-if="option.type == 'bool'">
          <el-button
            size="mini"
            type="primary"
            :plain="!option.active"
            @click="() => (option.active = true)"
            >True</el-button
          >
          <el-button
            size="mini"
            type="primary"
            :plain="option.active"
            @click="() => (option.active = false)"
            >False</el-button
          >
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  components: {},
  props: ["settings"],
  methods: {
    capitalise: (title) => title.charAt(0).toUpperCase() + title.slice(1),
  },
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
