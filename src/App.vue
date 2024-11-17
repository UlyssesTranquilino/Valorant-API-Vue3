<template>
  <div>
    <Navbar />
    <Agents />
    <!-- <Maps /> -->
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Navbar from "./components/Navbar.vue";
import Agents from "./components/Agents.vue";
import Maps from "./components/Maps.vue";
export default {
  components: {
    Search,
    Navbar,
    Agents,
    Maps,
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
