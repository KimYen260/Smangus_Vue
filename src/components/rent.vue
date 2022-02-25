<template>
  <div class="main-catagory">
    <!-- <div class="product-cover"></div> -->
    <div class="product-bottom">
      <div class="side-bar">
        <div class="side-block">
          <span>裝備租借</span>
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
      <div class="products">
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
/* .product-cover {
  background: url("~@/assets/cover2.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 700px;
} */

div.side-bar {
  border: 1px solid rgb(58, 184, 19);
}

div.side-bar div.side-block {
  box-sizing: border-box;
  color: white;
  width: 330px;
  height: 220px;
  /* font-size: 40px; */
  background-color: #1d2601;
  padding: 45px 28px 75px 180px;
}

div.side-block span {
  box-sizing: border-box;
  height: 100px;
  width: 100px;
  font-size: 40px;
  line-height: 65px;
  color: white;
  letter-spacing: 18px;
  font-family: "Noto Serif TC", serif;
}

/* -----------------greenBlock---------------- */

div.catagory {
  box-sizing: border-box;
  height: 500px;
  color: black;
  font-size: 16px;
}

ul.catagory-lists {
  list-style: none;
}

ul.up {
  margin-bottom: 40px;
}

li.title {
  font-size: 18px;
  padding: 15px 0;
  font-weight: 900;
}

ul.catagory-lists > li {
  line-height: 28px;
  padding: 8;
  width: 80px;
  height: 30px;
  color: black;
}

ul.catagory-lists > li > a {
  display: block;
  width: 70px;
  height: 24px;
  /* border:1px solid black; */
  text-decoration: none;
  color: black;
}

ul.catagory-lists > li > a:hover {
  display: block;
  width: 70px;
  height: 10px;
  border-bottom: 10px solid #1c82c29a;
  transition: 0.2s;
}

/* -------------catagory------------------ */

div.products {
  /* box-sizing: border-box; */
  width: 100%;
  max-width: 1200px;
  min-height: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 40px 35px;
  position: relative;
  transform: translateX(calc(100%-425px));
  border: 1px solid black;
  overflow: hidden;
}
/* ----------------parentContainer------------- */
</style>
