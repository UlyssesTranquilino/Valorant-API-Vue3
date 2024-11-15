<template>
  <div class="container">
    <div class="info-container">
      <div class="mainInfo-container">
        <div class="mainInfo-text">
          <p class="role-title">{{ data.role.displayName.toUpperCase() }}</p>
          <h1>{{ data.displayName.toUpperCase() }}</h1>
          <div class="horizontal-line">
            <hr class="name-line" />
          </div>
          <p class="desc">{{ data.description }}</p>
        </div>

        <div
          class="mainInfo-img"
          :style="{ backgroundImage: `url(${data.background})` }"
        >
          <img
            class="agentImg"
            :alt="data.displayName"
            :src="data.fullPortraitV2"
          />
        </div>
      </div>

      <div class="abilities-container">
        <h1 class="special-abilities">SPECIAL ABILITIES</h1>
        <hr class="line-abilities" />
        <div class="abilities">
          <div
            class="ability-1"
            @click="toggleAbility(1)"
            @mouseover="hoverSkill(1)"
            @mouseleave="removeHover(1)"
          >
            <div class="key" :style="abilitiesBG[0]" ref="key1">C</div>
            <div class="skillImg" ref="ability1" :style="skillImgBg">
              <img
                :src="data.abilities[0].displayIcon"
                :alt="data.abilities[0].displayName"
                class="ability-image1"
                ref="abilityImage1"
              />
            </div>
          </div>

          <div
            class="ability-2"
            @click="toggleAbility(2)"
            @mouseover="hoverSkill(2)"
            @mouseleave="removeHover(2)"
          >
            <div class="key" :style="abilitiesBG[1]" ref="key2">Q</div>
            <div class="skillImg" ref="ability2" :style="skillImgBg">
              <img
                :src="data.abilities[1].displayIcon"
                :alt="data.abilities[1].displayName"
                class="ability-image2"
                ref="abilityImage2"
              />
            </div>
          </div>

          <div
            class="ability-3"
            @click="toggleAbility(3)"
            @mouseover="hoverSkill(3)"
            @mouseleave="removeHover(3)"
          >
            <div class="key" :style="abilitiesBG[2]" ref="key3">E</div>
            <div class="skillImg" ref="ability3" :style="skillImgBg">
              <img
                :src="data.abilities[2].displayIcon"
                :alt="data.abilities[2].displayName"
                class="ability-image3"
                ref="abilityImage3"
              />
            </div>
          </div>

          <div
            class="ability-4"
            @click="toggleAbility(4)"
            @mouseover="hoverSkill(4)"
            @mouseleave="removeHover(4)"
          >
            <div class="key" :style="abilitiesBG[3]" ref="key4">X</div>
            <div class="skillImg" ref="ability4" :style="skillImgBg">
              <img
                :src="data.abilities[3].displayIcon"
                :alt="data.abilities[3].displayName"
                class="ability-image4"
                ref="abilityImage4"
              />
            </div>
          </div>
        </div>

        <div class="ability-detail">
          <h2>{{ skillData.displayName.toUpperCase() }}</h2>
          <p>{{ skillData.description }}</p>
        </div>
      </div>

      <div class="agent-role">
        <div class="role-text">
          <h1>{{ data.role.displayName.toUpperCase() }}</h1>
          <hr class="role-line" />
          <p>{{ data.role.description }}</p>
        </div>

        <div class="role-img">
          <img :src="data.role.displayIcon" :alt="data.role.displayName" />
        </div>
      </div>
    </div>

    <div class="desktop-container">
      <div class="desktop-agentInfos-container">
        <div class="mainInfo-text">
          <p class="role-title-desktop">
            {{ data.role.displayName.toUpperCase() }}
          </p>
          <h1>{{ data.displayName.toUpperCase() }}</h1>
          <hr class="name-line" />
          <p class="desc">{{ data.description }}</p>
        </div>

        <div class="abilities-container">
          <div class="special-abilities">
            <div>
              <h1 class="ability-title">SPECIAL ABILITIES</h1>
              <hr class="line-abilities" />
            </div>

            <div class="abilities">
              <div
                class="ability-1"
                @click="toggleAbility(1)"
                @mouseover="hoverSkill(1)"
                @mouseleave="removeHover(1)"
              >
                <div class="key" :style="abilitiesBG[0]" ref="key1">C</div>
                <div class="skillImg" ref="ability1" :style="skillImgBg">
                  <img
                    :src="data.abilities[0].displayIcon"
                    :alt="data.abilities[0].displayName"
                    class="ability-image1"
                    ref="abilityImage1"
                  />
                </div>
              </div>

              <div
                class="ability-2"
                @click="toggleAbility(2)"
                @mouseover="hoverSkill(2)"
                @mouseleave="removeHover(2)"
              >
                <div class="key" :style="abilitiesBG[1]" ref="key2">Q</div>
                <div class="skillImg" ref="ability2" :style="skillImgBg">
                  <img
                    :src="data.abilities[1].displayIcon"
                    :alt="data.abilities[1].displayName"
                    class="ability-image2"
                    ref="abilityImage2"
                  />
                </div>
              </div>

              <div
                class="ability-3"
                @click="toggleAbility(3)"
                @mouseover="hoverSkill(3)"
                @mouseleave="removeHover(3)"
              >
                <div class="key" :style="abilitiesBG[2]" ref="key3">E</div>
                <div class="skillImg" ref="ability3" :style="skillImgBg">
                  <img
                    :src="data.abilities[2].displayIcon"
                    :alt="data.abilities[2].displayName"
                    class="ability-image3"
                    ref="abilityImage3"
                  />
                </div>
              </div>

              <div
                class="ability-4"
                @click="toggleAbility(4)"
                @mouseover="hoverSkill(4)"
                @mouseleave="removeHover(4)"
              >
                <div class="key" :style="abilitiesBG[3]" ref="key4">X</div>
                <div class="skillImg" ref="ability4" :style="skillImgBg">
                  <img
                    :src="data.abilities[3].displayIcon"
                    :alt="data.abilities[3].displayName"
                    class="ability-image4"
                    ref="abilityImage4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="ability-detail">
            <h2>{{ skillData.displayName.toUpperCase() }}</h2>
            <p>{{ skillData.description }}</p>
          </div>
        </div>

        <div class="agent-role">
          <div class="role-text">
            <h1>{{ data.role.displayName.toUpperCase() }}</h1>
            <hr class="role-line" />
            <p>{{ data.role.description }}</p>
          </div>

          <div class="role-img">
            <img :src="data.role.displayIcon" :alt="data.role.displayName" />
          </div>
        </div>
      </div>

      <div
        class="desktop-agentImg-container"
        :style="{ backgroundImage: `url(${data.background})` }"
      >
        <img
          class="desktop-agentImg"
          :alt="data.displayName"
          :src="data.fullPortraitV2"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import gsap from "gsap";
import { defineComponent, PropType } from "vue";

// Define the interface for the AbilityData
interface AbilityData {
  abilities: { [key: string]: any }[]; // Define the structure of abilities
}

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<AbilityData>, // Ensure data is typed correctly
      required: true,
    },
  },
  data() {
    return {
      abilitiesBG: [
        "background-color: #FF4654;",
        "background-color: #757575;",
        "background-color: #757575;",
        "background-color: #757575;",
      ],
      skillData: this.data.abilities[0], // Initialize skillData with the first ability
      skillImgBg: "background-color: #1D1D1D",
    };
  },
  watch: {
    data: {
      handler(newData: AbilityData) {
        this.abilitiesBG = [
          "background-color: #FF4654;",
          "background-color: #757575;",
          "background-color: #757575;",
          "background-color: #757575;",
        ];
        this.skillData = newData.abilities[0]; // Update skillData when data changes
      },
      immediate: true,
    },
  },
  methods: {
    // Type the num parameter as number for type safety
    toggleAbility(num: number) {
      this.skillImgBg = "background-color: #1D1D1D";
      this.abilitiesBG = this.abilitiesBG.map((_, index) =>
        index === num - 1
          ? "background-color: #FF4654;"
          : "background-color: #757575;"
      );
      this.skillData = this.data.abilities[num - 1];
      this.removeHover(num);
    },

    // Type the num parameter as number
    hoverSkill(num: number) {
      if (this.abilitiesBG[num - 1] !== "background-color: #FF4654;") {
        // Type $refs to ensure correct types
        const abilityImage = this.$refs[`abilityImage${num}`] as HTMLElement;
        gsap.to(abilityImage, {
          duration: 0.2,
          scale: 1.2,
          ease: "power2.inOut",
        });
      }
    },

    // Type the num parameter as number
    removeHover(num: number) {
      const abilityImage = this.$refs[`abilityImage${num}`] as HTMLElement;
      gsap.to(abilityImage, {
        duration: 0.2,
        scale: 1,
        ease: "power2.inOut",
      });
    },
  },
});
</script>

<style>
.desktop-container {
  display: none;
}
h1 {
  letter-spacing: 1px;
}
.info-container {
  background-color: #01061e;
  width: 100%;
  height: 1250px;
  background-image: url("../assets/Background/SideBG.png");
  background-repeat: no-repeat;
  color: white;
}

.mainInfo-container {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 10% 0 10%;
  padding: 70px 0 0 0;
  height: 450px;
}

.mainInfo-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mainInfo-text p:nth-child(1) {
  font-size: 13px;
  margin: 0;
}

.mainInfo-text .desc {
  font-size: 13px;
  margin: 30px 0 0 0;
  text-align: center;
  padding: 0 10% 0 10%;
  line-height: 18px;
}

.mainInfo-text p {
  text-align: left;
}

.mainInfo-text h1 {
  font-family: "Tungsten";
  margin: 0;
  font-size: 70px;
}

.name-line {
  width: 110px;
  margin: auto;
  height: 3px;
  background-color: #ff4654;
  border: 0;
}

.horizontal-line {
  width: 100%;
  display: flex;
  justify-content: start;
}

.mainInfo-img {
  overflow: hidden;
  display: flex;
  align-items: start;
  justify-content: center;
  margin: 50px 0 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.agentImg {
  width: 850px;
  object-fit: fill;
  transform: translateY(-80px);
}

.abilities-container {
  font-family: "Tungsten";
  font-size: 22px;
  letter-spacing: 1px;
  height: auto;
  width: 80%;
  margin: 10% 5% 0 10%;
}

.abilities {
  width: 100%;
  height: 100px;
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(4, 1fr);
}

.ability-1,
.ability-2,
.ability-3,
.ability-4 {
  height: 80px;
  cursor: pointer;
}

.key {
  background-color: #757575;
  margin: 0 0 7px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
}
.skillImg {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d1d1d;
  height: 60px;
}

.ability-image1,
.ability-image2,
.ability-image3,
.ability-image4 {
  width: 35px;
  padding: 5px;
}

.ability-detail h2 {
  font-size: 35px;
}
.ability-detail p {
  font-size: 11px;
  line-height: 15px;
}

.agent-role {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 50px 0;
}

.role-text {
  text-align: left;
}

.role-text h1 {
  font-family: "Tungsten";
  font-size: 44px;
  margin: 0;
}

.role-text p {
  margin: 30px 20% 0 0;
  line-height: 18px;
}
.role-line {
  width: 120px;
  height: 3px;
  background-color: #ff4654;
  border: 0;
  float: left;
  margin: 1px 0 0 0;
}

.role-img img {
  width: 90px;
}

.special-abilities {
  margin-bottom: 3px;
}

.line-abilities {
  width: 220px;
  margin: auto auto 25px auto;
  height: 3px;
  background-color: #ff4654;
  border: 0;
}

@media (min-width: 576px) {
  .mainInfo-container {
    height: 500px;
  }
  .mainInfo-img {
    background-size: 450px;
  }

  .agentImg {
    width: 1000px;
    object-fit: fill;
    transform: translateY(-100px);
  }

  .key {
    font-size: 23px;
  }
  .abilities {
    width: 100%;
    height: 110px;
    display: grid;
    gap: 4px;
    grid-template-columns: repeat(4, 1fr);
    margin: 30px 0 50px 0;
  }

  .skillImg {
    height: 70px;
  }
  .ability-image1,
  .ability-image2,
  .ability-image3,
  .ability-image4 {
    width: 45px;
    padding: 5px;
  }

  .role-line {
    width: 160px;
  }
  .role-text h1 {
    font-family: "Tungsten";
    font-size: 55px;
    margin: 0;
  }
  .name-line {
    width: 130px;
  }

  .mainInfo-text p:nth-child(1) {
    font-size: 15px;
  }
  .mainInfo-text h1 {
    font-size: 80px;
  }

  .special-abilities {
    font-size: 55px;
  }
  .line-abilities {
    width: 280px;
  }

  .ability-detail h2 {
    font-size: 45px;
  }
  .ability-detail p {
    padding: 0 70px 0 70px;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 1100px) {
  .container {
    background-color: #01061e;
  }
  .info-container {
    display: none;
  }

  .desktop-agentInfos-container {
    width: 100%;
    background-image: url("../assets/Background/SideBG.png");
    background-repeat: no-repeat;
    color: white;
    padding: 0 50px;
  }

  .desktop-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: #01061e;
    color: white;
    padding: 0 5%;
    margin: auto auto 50px auto;
    background-image: url("../assets/Background/EffectsBG.png");
  }

  .desktop-container .agentImg-container {
    overflow: hidden;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 50px 0 0 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .desktop-agentInfos-container .role-title {
    font-size: 24px;
  }
  .desktop-agentInfos-container .mainInfo-text {
    justify-content: left;
    align-items: start;
    width: 700px;
    margin: 50px 0 0 0;
  }

  .desktop-agentInfos-container .mainInfo-text h1 {
    font-size: 128px;
  }

  .role-title-desktop {
    font-size: 20px !important;
  }

  .desktop-agentInfos-container .mainInfo-text p {
    text-align: left;
    padding: 0 85px 0 0;
  }

  .desc {
    margin-bottom: 30px !important;
  }

  .desktop-agentInfos-container .mainInfo-text .name-line {
    float: left;
    margin: 5px 20px 0 0;
    width: 180px;
  }

  .desktop-agentInfos-container .abilities-container {
    margin: 0;
    width: 700px;
  }

  .desktop-agentInfos-container .ability-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .desktop-agentInfos-container .ability-detail p {
    width: 500px;
  }

  .desktop-agentInfos-container .ability-detail .special-abilities {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ability-title {
    font-size: 50px;
  }

  .special-abilities {
    display: flex;
    justify-content: space-between;
    padding: 0 70px 0 0;
  }

  .special-abilities h1 {
    text-align: left;
    font-size: 50px;
  }

  .line-abilities {
    margin: 10px 0;
  }

  .abilities {
    width: 500px;
  }
  .desktop-agentInfos-container .ability-detail h2,
  .desktop-agentInfos-container .ability-detail p {
    margin: 0;
  }

  .ability-title {
    padding: 0 50px 0 0;
    margin: 20px 0 0 0;
    line-height: normal;
  }

  .line-abilities {
    width: 140px;
  }

  .ability-detail h2 {
    width: 230px;
    font-size: 35px;
  }
  .desktop-agentImg-container {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
    margin: 50px 0 0 0;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    width: 400px;
    right: 0;
  }
  .desktop-agentImg {
    width: 730px;
    z-index: 1;
    position: relative;
  }

  .agent-role {
    margin: 0;
  }
}

@media (min-width: 1250px) {
  .abilities-container {
  }

  .special-abilities {
  }
  .mainInfo-text .desc {
    font-size: 15px;
  }

  .desktop-container p {
    font-size: 15px;
  }
  .container {
    width: 1200px;
    overflow: hidden;
    margin: auto;
  }

  .desktop-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: #01061e;
    color: white;
    margin: auto 0 0 0;
    width: 1200px;
    padding: 0;
  }

  .desktop-agentInfos-container {
    padding: 0 50px;
    font-size: 10px;
  }
  .desktop-agentImg-container {
    width: 400px;
    height: 500px;
    margin: 0;
  }

  .desktop-agentImg-container {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 110%;
    margin: 50px 0 0 0;
    height: 750px;
    display: flex;
    position: inherit;
    overflow: hidden;
  }
  .desktop-agentImg {
    width: 830px;
    position: relative;
  }

  .agent-role {
    margin: 0;
  }
}
/* @media (min-width: 1200px) {
  .desktop-agentInfos-container {
    border: 2px solid white;
  }

  .desktop-agentImg-container {
    border: 2px solid cyan;
  }
  .desktop-container {
    width: 1200px;
    border: 2px solid red;
    padding: 0;
    overflow: hidden;
  }
  .desktop-container .agentImg-container {
    overflow: hidden;
    display: flex;
    align-items: start;
    justify-content: center;
    margin: 50px 0 0 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .desktop-agentInfos-container .role-title {
    font-size: 24px;
  }
  .desktop-agentInfos-container .mainInfo-text {
    justify-content: left;
    align-items: start;
    width: 700px;
    margin: 50px 0 0 0;
  }

  .desktop-agentInfos-container .mainInfo-text h1 {
    font-size: 128px;
  }

  .role-title-desktop {
    font-size: 20px !important;
  }

  .desktop-agentInfos-container .mainInfo-text p {
    text-align: left;
    padding: 0 85px 0 0;
  }

  .desc {
    margin-bottom: 30px !important;
  }

  .desktop-agentInfos-container .mainInfo-text .name-line {
    float: left;
    margin: 5px 20px 0 0;
    width: 180px;
  }

  .desktop-agentInfos-container .abilities-container {
    margin: 0;
    width: 700px;
  }

  .desktop-agentInfos-container .ability-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .desktop-agentInfos-container .ability-detail p {
    width: 500px;
  }

  .desktop-agentInfos-container .ability-detail .special-abilities {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ability-title {
    font-size: 50px;
  }

  .special-abilities {
    display: flex;
    justify-content: space-between;
    padding: 0 70px 0 0;
  }

  .special-abilities h1 {
    text-align: left;
    font-size: 50px;
  }

  .line-abilities {
    margin: 10px 0;
  }

  .abilities {
    width: 500px;
  }
  .desktop-agentInfos-container .ability-detail h2,
  .desktop-agentInfos-container .ability-detail p {
    margin: 0;
  }

  .ability-title {
    padding: 0 50px 0 0;
    margin: 20px 0 0 0;
    line-height: normal;
  }

  .line-abilities {
    width: 140px;
  }

  .ability-detail h2 {
    width: 230px;
    font-size: 35px;
  }
  .desktop-agentImg-container {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
    margin: 50px 0 0 0;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    width: 400px;
    right: 0;
  }
  .desktop-agentImg {
    width: 730px;
    z-index: 1;
    position: relative;
  }
} */
</style>
