<template>
  <div>
    <Navbar />
    <Agents />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Navbar from "./components/Navbar.vue";
import Agents from "./components/Agents.vue";
export default {
  components: {
    Search,
    Navbar,
    Agents,
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
  background-color: #01061e;
}
</style>
