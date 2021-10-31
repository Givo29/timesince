<template>
  <div class="main-container">
    <div class="container">
      <div>
        <h2>Start Date</h2>
        <date-picker
          v-model="startDate"
          :clearable="false"
          :disabled-date="startDisable"
        ></date-picker>
      </div>
      <div>
        <h2>End Date</h2>
        <date-picker
          v-model="endDate"
          :clearable="false"
          :disabled-date="endDisable"
        ></date-picker>
      </div>
    </div>
    <el-button type="primary" v-on:click="calculateTime">Go!</el-button>
    <p id="result">{{ timeSince }} days!</p>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "Calculator",
  components: {
    DatePicker,
  },
  data() {
    let currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 1);

    return {
      startDate: currentDate,
      endDate: new Date(),
      timeSince: 365,
    };
  },
  methods: {
    calculateTime: function () {
      const MS_PER_DAY = 1000 * 60 * 60 * 24;

      let date1 = Date.UTC(
        this.startDate.getFullYear(),
        this.startDate.getMonth(),
        this.startDate.getDate()
      );
      let date2 = Date.UTC(
        this.endDate.getFullYear(),
        this.endDate.getMonth(),
        this.endDate.getDate()
      );
      this.timeSince = Math.floor((date2 - date1) / MS_PER_DAY);
    },
    startDisable: function (date) {
      return date > this.endDate;
    },
    endDisable: function (date) {
      return date < this.startDate;
    },
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10%;
  align-items: center;
  width: 90%;
  margin: 0 auto 2rem auto;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
