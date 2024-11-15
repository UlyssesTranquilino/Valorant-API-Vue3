<template>
  <div
    class="card"
    @mouseover="hoverImage"
    @mouseleave="hoverOutImage"
    @click="showInfo"
    ref="card"
  >
    <div class="background-image" ref="bgImage"></div>
    <div class="img-agent">
      <img :src="data.fullPortrait" class="agentImage" ref="agentImage" />
    </div>

    <div class="agent-name">
      <h1 ref="agentName">{{ data.displayName.toUpperCase() }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import gsap from "gsap";

interface AgentData {
  name: string;
  imageUrl: string;
}

export default defineComponent({
  props: {
    data: {
      type: Object as () => AgentData,
      required: true,
    },
  },
  data() {
    return {
      currentBg: "../assets/Background/VALORANT_TEXT-bg.png",
    };
  },
  methods: {
    hoverImage() {
      gsap.to(this.$refs.agentImage as HTMLElement, {
        duration: 0.3,
        scale: 1.1,
        ease: "power2.inOut",
      });
      gsap.to(this.$refs.agentName as HTMLElement, {
        duration: 0.3,
        scale: 1.2,
        ease: "power2.inOut",
      });
      gsap.to(this.$refs.bgImage as HTMLElement, {
        duration: 0.3,
        filter: "none",
        ease: "power2.inOut",
      });
    },
    hoverOutImage() {
      gsap.to(this.$refs.agentImage as HTMLElement, {
        duration: 0.3,
        scale: 1,
        ease: "power2.inOut",
      });
      gsap.to(this.$refs.agentName as HTMLElement, {
        duration: 0.3,
        scale: 1,
        ease: "power2.inOut",
      });
      gsap.to(this.$refs.bgImage as HTMLElement, {
        duration: 0.3,
        filter: "contrast(0)",
        ease: "power2.inOut",
      });
    },
    showInfo() {
      this.$emit("open", this.data);
    },
  },
});
</script>

<style>
.card {
  background-color: #19222d;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("../assets/Background/VALORANT_TEXT-bg.png");
  background-size: 55%;
  background-repeat: no-repeat;
  background-position: center;
  filter: contrast(0);
  z-index: 1; /* Place the background behind other elements */
}
.img-agent {
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.agentImage {
  width: 300%;
  margin: 0;
  padding: 0;
  z-index: 2;
}

.agent-name {
  position: absolute;
  top: 70%;
  height: 40%;
  font-family: "Tungsten";
  width: 100%;
  background: rgb(244, 67, 78);
  background: linear-gradient(
    0deg,
    rgba(244, 67, 78, 1) 0%,
    rgba(244, 67, 78, 0) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.agent-name h1 {
  font-size: 30px;
  letter-spacing: 1px;
  z-index: 2;
}

@media (min-width: 576px) {
  .agent-name h1 {
    font-size: 40px;
  }
}

@media (min-width: 768px) {
  .agent-name h1 {
    font-size: 55px;
  }
}

@media (min-width: 992px) {
  .agent-name h1 {
    font-size: 45px;
  }
}
</style>
