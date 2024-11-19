<template class="template-map">
  <div class="bg-primary q-pt-xl">
    <div class="bg-primary q-mt-xl q-pa-lg q-pa-lg-xl all-maps">
      <div class="row">
        <h1 class="text-title text-white main-map-title">MAPS</h1>
        <P class="text-white text-left main-map-desc" style="font-size: 16px">
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
          </div>
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

let slide = ref(1);

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
.carousel-container {
  width: 100%;
  height: 200px;
}
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
@media (min-width: 768px) {
  .main-map-title {
    font-size: 100px;
    margin-bottom: 20px;
  }

  .main-map-desc {
    font-size: 30px;
    margin-bottom: 70px;
  }
  .map-title {
    font-size: 80px;
  }

  .map-coordinates {
    font-size: 20px;
    margin-bottom: 40px;
  }

  .map-container {
    margin-bottom: 100px;
  }
}

@media (min-width: 992px) {
  .all-maps {
    padding: 45px;
  }
}

@media (min-width: 1250px) {
  .all-maps {
    width: 1200px;
    margin: auto;
    padding: 0;
  }
}
</style>
