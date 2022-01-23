<template>
  <header class="main_nav">
    <ul class="nav_list">
      <li><img class="nav_logo" src="../assets/logoB.png" alt="logo"/></li>
      <li>News</li>
      <li>所有行程</li>
      <li>裝備租借</li>
      <li>系列商品</li>
      <li><i class="fas fa-suitcase-rolling"></i></li>
      <li><i class="fas fa-user-alt"></i></li>
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
  color: #42b983;
}
</style>
