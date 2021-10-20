<template>
<h2>Online Shopping Cart</h2>
  <div class="container-main">
    <div class="box" v-for="(user, index) in apiData" :key="index">
      <img :src="user.image" @click="getDetails(user),scrollToTop()" :userdetails="user" />
    <p class="info" v-html="user.title"></p>
    <p class="info" style="font-weight: 700">Price:{{user.price}}</p>
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
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    console.log("result", result);
    this.apiData = result;
    console.log("apiData", this.apiData);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container-main{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  padding-left: 60px;
 background-color: currentcolor;
 
}
.box {
  margin: 10px;
    align-items: center;
    width: auto;
    height: auto;
    border: ridge;
    background-color: lightgoldenrodyellow;
}
img {
  border: 5px solid  rgb(34 127 119);
  width: 250px;
  margin: 40px auto;
  cursor: pointer;
}
h2{
  align-content: initial;
      font-size: 40px;
    color: #2c3e50;
}
.info{
  color:#2c3e50;
    font-size: larger;
}
</style>
