<template>
  <div class="main-catagory">
    <!-- <div class="product-cover"></div> -->
    <div class="product-bottom">
      <div class="side-bar">
        <div class="side-block">
          <span>系列商品</span>
          <div class="catagory mt-95">
            <ul class="catagory-lists up">
              <li><a href="#">鞋子</a></li>
              <li><a href="#">上衣</a></li>
              <li><a href="#">背包</a></li>
              <li><a href="#">帳篷</a></li>
              <li><a href="#">其他</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="products" style="justify-content:flex-start">
        <div class="cell" v-for="(item, index) in productsList" :key="index">
          <a href="#">
            <img class="shoesC" :src="item.img" />
            <img class="shoesH" :src="item.hoverImg" />
            <ul class="description">
              <li>
                <div class="line"></div>
              </li>
              <li class="title">{{ item.title }}</li>
              <li class="price">
                <div class="unit">NT$</div>
                <div class="dollar">{{ item.price }}</div>
              </li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
      productsList: [
        {
          img: require("../assets/aku1.jpg"),
          hoverImg: require("../assets/aku-pilgrim-ds-hiking-boots.jpeg"),
          title: "Aku Pilgrim Ds Boots",
          price: "4,700"
        },
        {
          img: require("../assets/aku1.jpg"),
          hoverImg: require("../assets/aku-pilgrim-ds-hiking-boots.jpeg"),
          title: "Aku Pilgrim Ds Boots",
          price: "4,700"
        },
        {
          img: require("../assets/aku1.jpg"),
          hoverImg: require("../assets/aku-pilgrim-ds-hiking-boots.jpeg"),
          title: "Aku Pilgrim Ds Boots",
          price: "4,700"
        },
        {
          img: require("../assets/aku1.jpg"),
          hoverImg: require("../assets/aku-pilgrim-ds-hiking-boots.jpeg"),
          title: "Aku Pilgrim Ds Boots",
          price: "4,700"
        },
        {
          img: require("../assets/aku1.jpg"),
          hoverImg: require("../assets/aku-pilgrim-ds-hiking-boots.jpeg"),
          title: "Aku Pilgrim Ds Boots",
          price: "4,700"
        },
        {
          img: require("../assets/aku1.jpg"),
          hoverImg: require("../assets/aku-pilgrim-ds-hiking-boots.jpeg"),
          title: "Aku Pilgrim Ds Boots",
          price: "4,700"
        },
        {
          img: require("../assets/aku1.jpg"),
          hoverImg: require("../assets/aku-pilgrim-ds-hiking-boots.jpeg"),
          title: "Aku Pilgrim Ds Boots",
          price: "4,700"
        },
        {
          img: require("../assets/aku1.jpg"),
          hoverImg: require("../assets/aku-pilgrim-ds-hiking-boots.jpeg"),
          title: "Aku Pilgrim Ds Boots",
          price: "4,700"
        },
        {
          img: require("../assets/aku1.jpg"),
          hoverImg: require("../assets/aku-pilgrim-ds-hiking-boots.jpeg"),
          title: "Aku Pilgrim Ds Boots",
          price: "4,700"
        },
        {
          img: require("../assets/aku1.jpg"),
          hoverImg: require("../assets/aku-pilgrim-ds-hiking-boots.jpeg"),
          title: "Aku Pilgrim Ds Boots",
          price: "4,700"
        }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
