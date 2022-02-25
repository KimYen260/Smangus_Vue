<template>
  <div class="section_professional_team">
    <span class="team title">專業團隊</span>
    <div class="teamMember" v-for="(item, index) in guiderList" :key="index">
      <template v-if="index % 2 == 0">
        <span class="guider-content">
          <p class="title1">{{ item.gName }}</p>
          <p class="content1">{{ item.records }}</p>
          <p class="subtitle1">{{ item.license }}</p>
          <p class="quote">{{ item.quote }}</p>
        </span>
        <img class="guider-photo_1" :src="item.img" alt="guider-photo" />
      </template>
      <template v-else>
        <img class="guider-photo_1" :src="item.img" alt="guider-photo" />
        <span class="guider-content">
          <p class="title1">{{ item.gName }}</p>
          <p class="content1">{{ item.records }}</p>
          <p class="subtitle1">{{ item.license }}</p>
          <p class="quote">{{ item.quote }}</p>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "team",
  data() {
    return {
      guiderList: [
        {
          img: require("../assets/崔宏力.jpg"),
          gName: "Schaw Tsuei",
          records: "成功攻頂南美6000m級高峰",
          license: "具有交通部核發之專業領隊執照",
          quote:
            "喜愛和同好朋友們一起探索台灣山林之美，專找沒人見過的風景，尋訪地圖裡浮現的悠境；若能引領大家進山野景色是件快樂且富有意義的事。"
        },
        {
          img: require("../assets/胡嘉穎.jpg"),
          gName: "Jane Hu",
          records: "完成歐洲最高峰攀登",
          license: "具有交通部核發之專業領隊執照",
          quote:
            "攀登台灣近七十座百岳，並持續參與國內長城登山活動。近年來邁向海外擔任登山及旅遊團領隊，踏足尼泊爾、日本、紐西蘭等國山區。"
        },
        {
          img: require("../assets/劉毓欣.jpg"),
          gName: "Joyce Liu",
          records: "完成非洲及歐洲最高峰攀登",
          license: "具有交通部核發之專業領隊執照",
          quote:
            "我們走入山林，費盡力氣，只為一瞬間的寧靜與永恆的記憶。在山丘行，我們遠離塵囂，放空自我，走遍世界，體驗人生之路。曾踏足於日本、美西、坦尚尼雅等山區。"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/main.scss";

</style>
