<template>
<h1>Home Page</h1>
<h2>Users</h2>
  <div class="container-main">
    <div class="box" v-for="(user, index) in apiData" :key="index">
      <img :src="user.avatar" @click="getDetails(user),scrollToTop()" :userdetails="user" />
    </div>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      apiData: [],
    };
  },

  methods: {
    getDetails(user) {
      this.$router.push({
        name: "details",
        params: { id: user.id, details: JSON.stringify(user) },
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  async created() {
    console.log("main");
    const response = await fetch("https://reqres.in/api/users/");
    const result = await response.json();
    console.log("result", result);
    this.apiData = result.data;
    console.log("apiData", this.apiData);
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.container-main{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  padding-left: 60px;
}
.box {
  margin: 10px;
  align-items: center;
}
img {
  border: 5px solid rgb(161, 216, 10);
  width: 160px;
  margin: 40px auto;
  border-radius: 50%;
  cursor: pointer;
}
h2{
  align-content: initial;
 
}
</style>
