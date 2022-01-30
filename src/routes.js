import Calculator from "./components/Calculator.vue";
import Settings from "./components/Settings.vue";

export default [
  { name: "home", path: "/", component: Calculator },
  { name: "settings", path: "/settings", component: Settings },
]