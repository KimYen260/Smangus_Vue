<template>
  <div class="main-catagory">
    <div class="side-bar  ">
      <div class="side-block">
        <span>系列商品</span>
        <div class="catagory mt-95">
          <ul class="catagory-lists up">
            <li class="title">登山系列</li>
            <li>
              <a href="#" target="_blank" style="font-weight:bolder">鞋子</a>
            </li>
            <li><a href="#" target="_blank">背包</a></li>
            <li><a href="#" target="_blank">帳篷</a></li>
            <li><a href="#" target="_blank">上衣</a></li>
            <li><a href="#" target="_blank">其他</a></li>
          </ul>

          <ul class="catagory-lists dn">
            <li class="title">溯溪系列</li>
            <li><a href="#" target="_blank">背包</a></li>
            <li><a href="#" target="_blank">救生衣</a></li>
            <li><a href="#" target="_blank">安全帽</a></li>
            <li><a href="#" target="_blank">上衣</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="cell" v-for="(item, index) in productsList" :key="index">
        <a target="_blank">
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
        }
      ]
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
