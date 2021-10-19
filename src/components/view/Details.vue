<template>
  <!-- <button class="backbtn" @click="this.$router.back()">Back</button> -->
  <div class="container">
    <h1>
      <span> Item {{ individualDetails.id }}</span>
    </h1>
    <div class="card">
      <img :src="individualDetails.image" alt="images" />
      <div class="content">
        <p class="info" style="font-weight: 700">
          Name: {{ individualDetails.title }}
        </p>
        <p class="info" style="font-weight: 600">
          Price: {{ individualDetails.price }}
        </p>
        <p class="info" style="font-weight: 600">
          Desc: {{ individualDetails.description }}
        </p>
        <p class="info" style="font-weight: 600">
          Category: {{ individualDetails.category }}
        </p>
        <!-- <p class="info" style="font-weight: 600">
          Rating: {{ individualDetails.rating }}
        </p> -->
        <!-- <button class="product_btn" @click="addToCart">Quick add</button> -->
        <div class="butt">
          <button
            @click="removeFromCart(individualDetails.id)"
            v-if="isInCart(individualDetails.id)"
          >
            remove from cart
          </button>
          <button @click="addToCart()" v-else>add to cart</button>
        </div>
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
      cart: [],
      items: [],
    };
  },
  created() {
    var id1;
    this.individualDetails = this.$route.params.details
      ? JSON.parse(this.$route.params.details)
      : null;
    console.log("userdetails||", this.individualDetails);
    id1 = this.individualDetails.id;
    this.items = Object.freeze(this.individualDetails);
    console.log("items||", this.items);
    console.log("id||", id1);
  },
  methods: {
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      console.log(itemId);
      const cartItem = this.cart.find(({ id }) => id == itemId);
      return Boolean(cartItem);
    },
    addToCart() {
      const item = this.items.id;
      const itemname = this.items.title;
      const itemimage = this.items.image;
      const itemprice = this.items.price;
      console.log(localStorage.getItem("cart"));
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push({
        "id": item,
        "name": itemname,
        "image": itemimage,
        "total":0, 
        "price": itemprice, 
        "quantity":0,
      });
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
      console.log("cart||", this.cart);
    },
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex((id) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
};
</script>

<style scoped>
.container {
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
  border: 5px solid black;
  display: flex;
  border-radius: 10px;
  align-items: center;
  text-align: left;
}
img {
  margin: 20px auto;
  margin-left: 20px;
  border: outset;
  height: 300px;
}
.content {
  margin-left: 20px;
}
.info {
  margin: 5px 0;
  color: navy;
  font-stretch: semi-condensed;
  padding: 5px;
}
.backbtn {
  border: none;
  background-color: black;
  padding: 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin: 20px 0;
  float: left;
}
.product_btn {
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(85, 206, 15);
  color: white;
  border-radius: 20px;
}
.butt1 {
  position: relative;
  transform: translate(-280px, 450px);
}
</style>
