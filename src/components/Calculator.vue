<template>
  <div id="main">
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

    <div class="results">
      <h2 class="result" v-for="unit in filteredUnits" v-bind:key="unit.label">
        {{ capitalizedLabel(unit.label) }}: {{ unit.value }}
      </h2>
    </div>
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
  mounted() {
    let startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);
    startDate.setHours(0, 0, 0, 0);

    let endDate = new Date();
    endDate.setHours(0, 0, 0, 0);

    this.startDate = startDate;
    this.endDate = endDate;
  },
  data() {
    return {
      startDate: 0,
      endDate: 0,
      timeSince: 365,
      dateShortcuts: [
        {
          text: "Today",
          onClick: () => new Date(new Date().setHours(0, 0, 0, 0)),
        },
      ],
      units: [
        {
          active: true,
          label: "minutes",
          value: 0,
          multiplier: 1000 * 60,
        },
        {
          active: true,
          label: "hours",
          value: 0,
          multiplier: 1000 * 60 * 60,
        },
        {
          active: true,
          label: "days",
          value: 0,
          multiplier: 1000 * 60 * 60 * 24,
        },
        {
          active: true,
          label: "weeks",
          value: 0,
          multiplier: 1000 * 60 * 60 * 24,
        },
        {
          active: true,
          label: "months",
          value: 0,
        },
        {
          active: true,
          label: "years",
          value: 0,
        },
      ],
    };
  },
  methods: {
    startDisable: function (date) {
      return date > this.endDate;
    },
    endDisable: function (date) {
      return date < this.startDate;
    },
    getUTCDates: function () {
      return {
        start: Date.UTC(
          this.startDate.getFullYear(),
          this.startDate.getMonth(),
          this.startDate.getDate(),
          this.startDate.getHours(),
          this.startDate.getMinutes(),
          this.startDate.getSeconds(),
          this.startDate.getMilliseconds()
        ),
        end: Date.UTC(
          this.endDate.getFullYear(),
          this.endDate.getMonth(),
          this.endDate.getDate(),
          this.endDate.getHours(),
          this.endDate.getMinutes(),
          this.endDate.getSeconds(),
          this.endDate.getMilliseconds()
        ),
      };
    },
    calculateMonths: function () {
      return Math.round(
        (this.endDate.getFullYear() - this.startDate.getFullYear()) * 12 +
          this.endDate.getMonth() -
          this.startDate.getMonth()
      );
    },
    calculateYears: function () {
      return Math.round(
        this.endDate.getFullYear() - this.startDate.getFullYear()
      );
    },
    capitalizedLabel: (label) => label.charAt(0).toUpperCase() + label.slice(1),
  },
  computed: {
    filteredUnits: function () {
      return this.units.filter((unit) => unit.active);
    },
  },
  watch: {
    endDate: function () {
      this.units.forEach((unit) => {
        if (unit.label === "months") return this.calculateMonths();
        if (unit.label === "years") return this.calculateYears();

        let UTCDates = this.getUTCDates();
        unit.value = Math.round(
          (UTCDates.end - UTCDates.start) / unit.multiplier
        );
      });
    },
    startDate: function () {
      this.units.forEach((unit) => {
        if (unit.label === "months")
          return (unit.value = this.calculateMonths());
        if (unit.label === "years") return (unit.value = this.calculateYears());

        let UTCDates = this.getUTCDates();
        unit.value = Math.round(
          (UTCDates.end - UTCDates.start) / unit.multiplier
        );
      });
    },
  },
};
</script>

<style scoped>
#main {
  width: 90%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 8%;
  align-items: bottom;
  margin: 0 auto 5rem auto;
}

.results {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0;
  text-align: center;
  margin: auto;
  width: 30%;
}

.results > * {
  flex: 1 1 50%;
}

@media only screen and (max-width: 1500px) {
  .results {
    width: 50%;
  }
}

@media only screen and (max-width: 1200px) {
  .results {
    width: 75%;
  }
}

@media only screen and (max-width: 800px) {
  .results > * {
    width: 100%;
  }
}

@media only screen and (max-width: 650px) {
  .results > * {
    flex: 1 1 100%;
  }
}

.result {
  margin: 0 auto 1em auto;
}

.result:after {
  content: "";
  width: 30%;
  color: #c9184a;
  display: flex;
  justify-content: center;
  line-height: 0.1em;
  font-size: 14px;
  font-family: cursive;
  margin: 10px auto 10px auto;
  border-bottom: 1px solid #c9184a;
}
</style>
