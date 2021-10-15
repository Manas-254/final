<template>
  <button class="backbtn" @click="this.$router.back()">Back</button>
  <div class="container">
    
    <h1>
      <span> Profile User {{ individualDetails.id }}</span>
    </h1>
    <div class="card">
      <img :src="individualDetails.avatar" alt="images" />
      <div class="content">
        <p class="info" style="font-weight: 700">
         Name: {{ individualDetails.first_name }} {{ individualDetails.last_name }}
        </p>
        <p class="info" style="font-weight: 600">
          Email: {{ individualDetails.email }}
        </p>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      individualDetails: "",
    };
  },
  created() {
    console.log("route.params", JSON.parse(this.$route.params.details));
    this.individualDetails = this.$route.params.details
      ? JSON.parse(this.$route.params.details)
      : null;
    console.log("user", this.individualDetails);
  },
  // props:{
  //   userdetails:{
  //     type:Array,
  //     default:null
  //   },
  // }
};
</script>

<style scoped>
.container {
  /* background-color: aquamarine; */
  /* height: 600px; */
  width: 60%;
  margin: 0 auto;
  
}
h1 {
  color: black;
  margin: 10px;
}
span {
  padding: 8px 20px;
}
.card {
  margin: 30px auto;
  border: 3px solid black;
    display: inline-block;
    border-radius: 10%;
    width: 300px;
}
img {
  margin: 10px auto;
  /* width:100%;
  height: 100%; */
}
.content {
  margin: 0 auto;
}
.info {
  margin: 5px 0;
}
.backbtn {
  border: none;
  background-color:black;
  padding: 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin: 20px 0;
  float:left;
}
</style>
