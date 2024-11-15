<template>
  <nav>
    <a
      href="https://playvalorant.com/en-sg/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="../assets/Logo/riotLogo.png" class="riotLogo"
    /></a>
    <a
      href="https://playvalorant.com/en-sg/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="../assets/Logo/valorantLogo.png" class="valoLogo"
    /></a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {} as Record<string, any>; // You can type this as an object or more specific types if needed
  },
});
</script>

<style>
nav {
  height: 80px;
  width: 100%;
  background-color: #0f0e0e;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  position: sticky;
}

.riotLogo {
  width: 85px;
  margin: 0 0 0 10px;
}

.valoLogo {
  width: 75px;
}

@media (min-width: 1000px) {
  .riotLogo {
    margin-left: 30px;
  }
}
</style>
