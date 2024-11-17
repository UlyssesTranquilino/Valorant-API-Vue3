<template>
  <div class="bg-primary q-mt-xl q-pa-lg">
    <div class="row">
      <h1 class="text-title text-white">MAP</h1>
      <P class="text-white text-left" style="font-size: 16px">
        Each map is a playground to showcase your creative thinking.
        Purpose-built for team strategies, spectacular plays, and clutch
        moments. Make the play others will imitate for years to come
      </P>
    </div>
    <div v-for="map in data" :key="map.uuid">
      <h1>{{ map.displayName }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Quasar } from "quasar";
import { defineComponent, ref, onMounted } from "vue";
import "quasar/src/css/index.sass";

const data = ref(null);

const fetchData = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/maps");
    const datas = await response.json();
    data.value = datas.data || []; // Safely assign an empty array if `data` is not available
    console.log(data.value);
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.text-title {
  font-family: "Tungsten";
}
</style>
