<template>
  <header class="main_nav">
    <ul class="nav_list">
      <li>
        <router-link :to="'/'">
          <img class="nav_logo" src="../assets/logoB.png" alt="logo"
        /></router-link>
      </li>

      <li>
        <router-link :to="'/'">
        News
        </router-link>
        </li>
      <li><router-link :to="'/'">所有行程</router-link></li>
      <li><router-link :to="'/'">裝備租借</router-link></li>
      <li><router-link :to="'/'">系列商品</router-link></li>
      <li><router-link :to="'/'"><i class="fas fa-suitcase-rolling"></i></router-link></li>
      <li><router-link :to="'/'"><i class="fas fa-user-alt"></i></router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  }
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
  color: #000000;
  text-decoration: none;
}
</style>
