<template>
  <div class="success-main">
    <div class="success-img">
      <SuccessImg />
    </div>
    <div class="success-info">
      {{text}}
    </div>
    <p class="hi">Name: {{name}}</p>
    <p class="hi">Address: {{address}}</p>
    <p>{{text1}}</p>
  </div>
</template>

<script>
//import { mapGetters } from "vuex";
import SuccessImg from "../success/SuccessImg.vue";
export default {
name:"checkout",

data(){
    // var name=localStorage.getItem('name');
    // console.log(name);
    return{
        text: "ORDER PLACED SUCCESSFULLY",
        name: localStorage.getItem('name'),
        address: localStorage.getItem('address'),
        text1: "Thank You!!"

    };
    
},
components: {
    SuccessImg,
  },
}
</script>

<style>

</style>
