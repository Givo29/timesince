<template>
  <div id="main">
    <div class="container">
      <div>
        <h2>Start Date</h2>
        <input
          class="datepicker"
          type="datetime-local"
          v-model="startDate"
          :max="this.endDate"
        />
      </div>
      <div>
        <h2>End Date</h2>
        <input
          class="datepicker"
          type="datetime-local"
          v-model="endDate"
          :min="this.startDate"
        />
      </div>
    </div>

    <div class="results">
      <h2 class="result" v-for="(value, unit) in units" v-bind:key="unit">
        {{ capitalisedLabel(unit) }}: {{ value }}
      </h2>
    </div>
  </div>
</template>

<script>
import { DateTime } from "luxon";

export default {
  name: "Calculator",
  props: ["settings"],
  data() {
    return {
      startDate: DateTime.local()
        .plus({ years: -1 })
        .set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
        .toJSDate()
        .toISOString()
        .substring(0, 16),
      endDate: DateTime.local()
        .set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
        .toJSDate()
        .toISOString()
        .substring(0, 16),
      concat: this.settings.general.concat,
    };
  },
  methods: {
    capitalisedLabel: (label) => label.charAt(0).toUpperCase() + label.slice(1),
  },
  computed: {
    filteredUnits: function () {
      return this.settings.units.filter((unit) => unit.active);
    },
    units: function () {
      const filteredUnitLabels = this.filteredUnits.map((unit) => unit.label);
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);
      if (this.concat.active === true) {
        const values = DateTime.fromJSDate(endDate).diff(
          DateTime.fromJSDate(startDate),
          filteredUnitLabels
        ).values;
        return filteredUnitLabels.reduce((obj, x) => {
          obj[x] = values[x];
          return obj;
        }, {});
      }

      return filteredUnitLabels.reduce((obj, x) => {
        obj[x] = Math.round(
          DateTime.fromJSDate(endDate).diff(DateTime.fromJSDate(startDate), x)
            .values[x]
        );
        return obj;
      }, {});
    },
  },
};
</script>

<style scoped>
#main {
  width: 90%;
  height: 100%;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 35%;
  column-gap: 8%;
  align-items: flex-end;
  margin: 0 auto 5rem auto;
}

.results {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0;
  text-align: center;
  margin: auto;
  width: 45%;
}

.results > * {
  flex: 1 1 50%;
}

.datepicker {
  padding: 0.5rem;
  border-radius: 0.5em;
  font-size: 1rem;
  border: none;
}

@media only screen and (max-width: 1550px) {
  .container {
    height: 25%;
  }
  .results {
    width: 60%;
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    height: 15%;
    margin-bottom: 8rem;
  }
  .results {
    width: 75%;
  }
}

@media only screen and (max-width: 950px) {
  .results > * {
    width: 100%;
    flex: 1 1 100%;
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
  display: flex;
  justify-content: center;
  line-height: 0.1em;
  font-size: 14px;
  font-family: cursive;
  margin: 10px auto 10px auto;
  border-bottom: 1px solid #c9184a;
}
</style>
