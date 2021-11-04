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
          :shortcuts="dateShortcuts"
        ></date-picker>
      </div>
    </div>
    <!-- <el-select v-model="value.selected" placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.label"
      >
      </el-option>
    </el-select>
    <el-button id="go-button" type="primary" v-on:click="calculateTime"
      >Go!</el-button
    >
    <h2>{{ timeSince }} {{ value.display }}</h2> -->
    <h1>Results:</h1>
    <h2>Hours: {{ calculateHours() }}</h2>
    <h2>Days: {{ calculateDays() }}</h2>
    <h2>Weeks: {{ calculateWeeks() }}</h2>
    <h2>Months: {{ calculateMonths() }}</h2>
    <h2>Years: {{ calculateYears() }}</h2>
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
      dateShortcuts: [
        {
          text: "Today",
          onClick: () => new Date(),
        },
      ],
    };
  },
  methods: {
    calculateHours: function () {
      return Math.floor((this.endDate - this.startDate) / (1000 * 60 * 60));
    },
    calculateDays: function () {
      return Math.floor(
        (this.endDate - this.startDate) / (1000 * 60 * 60 * 24)
      );
    },
    calculateWeeks: function () {
      return Math.round(
        (this.endDate - this.startDate) / (1000 * 60 * 60 * 24 * 7)
      );
    },
    calculateMonths: function () {
      return Math.round(
        (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12 +
          this.endDate.getMonth() -
          this.startDate.getMonth()
      );
    },
    calculateYears: function () {
      return Math.round(this.endDate.getFullYear() - this.startDate.getFullYear());
    },
    calculateTime: function () {
      let date1 = Date.UTC(
        this.startDate.getFullYear(),
        this.startDate.getMonth(),
        this.startDate.getDate(),
        this.startDate.getHours(),
        this.startDate.getMinutes()
      );
      let date2 = Date.UTC(
        this.endDate.getFullYear(),
        this.endDate.getMonth(),
        this.endDate.getDate(),
        this.endDate.getHours(),
        this.endDate.getMinutes()
      );
      this.value.display = this.value.selected;

      if (this.value.selected === "months") {
        this.timeSince = Math.floor(
          (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12 +
            (this.endDate.getMonth() - this.startDate.getMonth())
        );
        return;
      }
      if (this.value.selected === "years") {
        this.timeSince = Math.floor(
          this.endDate.getFullYear() - this.startDate.getFullYear()
        );
        return;
      }

      this.timeSince = Math.floor(
        (date2 - date1) /
          this.options.find((option) => option.label === this.value.selected)
            .value
      );
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
  column-gap: 8%;
  align-items: center;
  width: 90%;
  margin: 0 auto 2rem auto;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
