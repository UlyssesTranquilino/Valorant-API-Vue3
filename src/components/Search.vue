<template>
  <div class="bg">
    <p>A 5v5 character-based tactical shooter</p>
    <h1 class="title">VALORANT</h1>
    <input
      type="text"
      placeholder="Enter agent name(eg. Chamber)"
      v-model="agentName"
      @keydown.enter="searchAgent"
    />
    <div v-if="!isFound" class="notFound">
      <p>Agent Not Found</p>
    </div>
    <div class="buttonContainer">
      <button class="search" @click="searchAgent">SEARCH AGENT</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ["isFound"],
  data() {
    return {
      agentName: "",
    };
  },
  methods: {
    searchAgent() {
      this.$emit("search", this.agentName);
      this.agentName = "";
    },
  },
};
</script>

<style>
@import url("https://fonts.cdnfonts.com/css/valorant");
.bg {
  background-image: url("../assets/Background/SearchBg.png");
  height: 50vh;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin-bottom: 100px;
}

.title {
  font-size: 45px;
  font-family: "VALORANT", sans-serif;
  font-weight: 100;
  margin: 0 0 5px;
}

p {
  font-size: 80%;
  font-family: "Arial";
  font-weight: 300;
}

input {
  margin: 5px 0 0 0;
  height: 30px;
  width: 230px;
  padding: 3px 3px 3px 10px;
  border: 0;
  padding: 0 0 0 10px;
  font-weight: bold;
}
input::placeholder {
  font-family: "Arial";
  padding: 0 0 0 5px;
}

.search {
  font-family: "Arial";
  font-weight: 550;
  margin: 20px 0;
  width: 150px;
  background-color: #f64450;
  color: #ece8e1;
  padding: 5px;
  border: 0;
  height: 45px;
  cursor: pointer;
}

.notFound {
  width: 230px;
}
.notFound p {
  text-align: left;
  font-weight: bold;
  color: #f64450;
}

.buttonContainer {
  border: 1px solid white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 155px;
  margin: 25px 0 0 0;
}

@media (min-width: 576px) {
  .title {
    font-size: 55px;
    font-weight: 100;
    margin: 0 0 5px;
  }

  p {
    font-size: 13px;
  }

  input {
    margin: 5px 0 0 0;
    height: 25px;
    width: 260px;
    padding: 3px;
  }
  .bg {
    height: 60vh;
  }
}

@media (min-width: 768px) {
  .title {
    font-size: 55px;
    font-weight: 100;
    margin: 0 0 5px;
  }

  p {
    font-size: 13px;
  }

  input {
    margin: 5px 0 0 0;
    height: 25px;
    width: 280px;
    padding: 3px;
  }
  .notFound {
    width: 280px;
  }

  .bg {
    height: 65vh;
    background-position: bottom;
  }
}

@media (min-width: 992px) {
  .title {
    font-size: 75px;
    font-weight: 100;
    margin: 0 0 5px;
  }

  p {
    font-size: 15px;
  }

  input {
    margin: 5px 0 0 0;
    height: 30px;
    width: 500px;
    padding: 3px;
  }
  .notFound {
    width: 500px;
  }

  .bg {
    height: 65vh;
    background-position: bottom;
  }

  .search {
    font-family: "Arial";
    font-weight: 550;
    margin: 20px 0;
    width: 170px;
    background-color: #f64450;
    color: #ece8e1;
    padding: 5px;
    border: 0;
    height: 45px;
    cursor: pointer;
  }

  .buttonContainer {
    border: 1px solid white;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 175px;
    margin: 25px 0 0 0;
  }
}
</style>
