<template>
  <div>
    <Search @search="searchAgent" :isFound="agentFound" />
    <div class="agents-card-container">
      <div v-if="showAgentInfo" ref="agentInfoContainer">
        <AgentInfo :data="agentInfo" v-if="showAgentInfo" />
      </div>

      <div class="agents">
        <h1 class="agentsText">AGENTS</h1>
        <div class="grid-container">
          <div v-for="agent in agents" :key="agent.uuid">
            <div class="card-holder">
              <AgentCard :data="agent" @open="showInfo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AgentCard from "./AgentCard.vue";
import AgentInfo from "./AgentInfo.vue";
import Search from "./Search.vue";

// Define the type for agent data
interface Agent {
  displayName: string;
  isPlayableCharacter: boolean;
  [key: string]: any; // Allow dynamic properties for other agent-related data
}

export default defineComponent({
  components: {
    AgentCard,
    AgentInfo,
    Search,
  },
  data() {
    return {
      agents: [] as Agent[], // Type the agents array
      agentInfo: null as Agent | null, // agentInfo will either be an Agent or null
      showAgentInfo: false,
      agentFound: true,
    };
  },
  methods: {
    // Method to show detailed info of an agent
    showInfo(agent: Agent) {
      this.showAgentInfo = true;
      this.agentInfo = agent;

      // Wait for DOM updates before scrolling
      this.$nextTick(() => {
        const agentInfoElement = this.$refs.agentInfoContainer as
          | HTMLElement
          | undefined;
        if (agentInfoElement) {
          agentInfoElement.scrollIntoView({
            behavior: "smooth", // Smooth scrolling
            block: "start", // Align to the top of the viewport
          });
        }
      });
    },

    // Method to search an agent by name
    searchAgent(agentName: string) {
      this.agentFound = false;
      this.agents.forEach((agent) => {
        if (agent.displayName.toUpperCase() === agentName.toUpperCase()) {
          this.showInfo(agent);
          this.agentFound = true;
        }
      });
    },
  },
  mounted() {
    // Fetch agents from the API
    fetch("https://valorant-api.com/v1/agents")
      .then((res) => res.json())
      .then((data) => {
        this.agents = data.data.filter(
          (agent: Agent) => agent.isPlayableCharacter
        ); // Filter out non-playable agents
      })
      .catch((err) => console.log(err.message));
  },
});
</script>

<style>
@font-face {
  font-family: "Tungsten";
  src: url("../assets/Fonts/Tungsten-Bold.ttf");
}

.agents-card-container {
  padding-bottom: 40px;
}
.agents {
  background-color: #01061e;
  height: auto;
  color: white;
  padding: 50px 25px 0 25px;
}

.agents .agentsText {
  margin: 0 0 50px 0;
  text-align: left;
  font-family: "Tungsten";
  font-size: 45px;
  letter-spacing: 1px;
}

.card-holder {
  position: relative;
  width: 100%; /* Allow the card to fill the container's width */
  padding-top: 170%; /* This creates a 16:9 aspect ratio (height/width = 9/16) */
}

.card-holder > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

@media (min-width: 576px) {
  .grid-container {
    gap: 20px;
  }
  .agents .agentsText {
    font-size: 55px;
    margin: 0 0 70px 0;
  }
}

@media (min-width: 768px) {
  .agents {
    padding: 50px 30px 0 30px;
  }
  .agents .agentsText {
    font-size: 65px;
    margin: 0 0 80px 0;
  }
}

@media (min-width: 992px) {
  .grid-container {
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
  }
  .agents {
    padding: 50px 50px 0 50px;
  }
  .agents .agentsText {
    font-size: 70px;
    margin: 0 0 90px 0;
  }
}

@media (min-width: 1250px) {
  .agents {
    width: 1200px !important;
    padding: 0;
    margin: auto;
    margin-top: 100px;
  }
  .grid-container {
    width: 1200px;
    margin: auto;
  }
}
</style>
