<template>
  <div class="bg-primary q-mt-xl q-pa-lg">
    <div class="row">
      <h1 class="text-title text-white">MAPS</h1>
      <P class="text-white text-left" style="font-size: 16px">
        Each map is a playground to showcase your creative thinking.
        Purpose-built for team strategies, spectacular plays, and clutch
        moments. Make the play others will imitate for years to come
      </P>
    </div>

    <div v-for="map in data" :key="map.uuid" class="row maps-container">
      <div class="q-mb-lg map-container">
        <div class="flex justify-start row">
          <h1 class="map-title q-mb-xs q-mt-xs col-12 text-left">
            {{ map.displayName }}
          </h1>
          <p class="map-coordinates">{{ map.coordinates }}</p>
        </div>
        <div class="flex justify-center items-center">
          <img :src="map.splash" :alt="map.displayName" class="map-img" />
          <!-- <q-carousel
            v-model="slide"
            transition-prev="jump-right"
            transition-next="jump-left"
            swipeable
            animated
            control-color="white"
            prev-icon="arrow_left"
            next-icon="arrow_right"
            navigation-icon="radion_button_unchecked"
            navigation
            padding
            arrows
            height="500px"
            class="bg-purple text-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="splash" class="column no-wrap flex-center">
              <div>
                <img :src="map.splash" :alt="map.displayName" class="map-img" />
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="icon" class="column no-wrap flex-center">
              <div>
                <img
                  :src="map.displayIcon"
                  :alt="map.displayName"
                  class="map-img"
                />
              </div>
            </q-carousel-slide>
          </q-carousel> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QCarouselSlide, Quasar } from "quasar";
import { defineComponent, ref, onMounted } from "vue";
import "quasar/src/css/index.sass";

const data = ref(null);

let slide = ref("style");

const fetchData = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/maps");
    let datas = await response.json();
    datas = datas.data.filter(
      (data: any) =>
        data.coordinates != null &&
        data.uuid != "5914d1e0-40c4-cfdd-6b88-eba06347686c"
    );
    data.value = datas || []; // Safely assign an empty array if `data` is not available
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.text-title,
.map-title {
  font-family: "Tungsten";
  color: white;
  letter-spacing: 1px;
}

.map-title {
  font-size: 60px;
}

.map-img {
  width: 100%;
}

.map-coordinates {
  font-size: 15px;
  color: white;
}

.maps-container {
}

.map-container {
}
</style>
