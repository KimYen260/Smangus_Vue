<template>
  <div class="section_professional_team">
    <span>專業團隊</span>
    <div class="teamMember" v-for="(item, index) in guiderList" :key="index">
      <span>
        <p class="title1">{{ item.gName }}</p>
        <p class="content1">{{ item.records }}</p>
        <p class="subtitle1">{{ item.license }}</p>
        <p class="quote">{{item.quote}}</p>
      </span>
      <img class="guider-photo_1" :src="item.img" alt="guider-photo" />
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
  @import '../scss/main.scss';


.section_professional_team {
  width: 850px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 48px;

  &>span{
      /* box-sizing: border-box; */
  font-size: 24px;
  width: 660px;
  font-family: "Noto Serif TC", serif;
  }


  .teamMember {
    /* box-sizing: border-box; */
    /* width: 960px; */
    display: flex;
    margin: 95px 0;
    align-items: space-between;
    justify-content: space-between;
    vertical-align: middle;

    & span{
        text-align: left;
        /* line-height: 28px; */
        width: 400px;
    }

    & img{
      border-radius: 50%;
      margin: 0 48px;
      width: 300px;
      height: 300px;
    }
  }
}





.teamMember > span > p.subtitle1 {
  font-size: 2rem;
  /* box-sizing: border-box; */
  /* font-weight: 500; */
  letter-spacing: 6%;
  line-height: 1.4rem;
  margin-bottom: 1.5rem;
  margin-top: 0rem;
  font-family: "Noto Serif TC", serif;
}

.teamMember > span > p.title1 {
  font-size: 2rem;
  box-sizing: border-box;
  letter-spacing: 6%;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  margin-top: 0rem;
  font-family: "futura-pt", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.quote {
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: 0.07em;
  /* margin-top: 35px; */
  box-sizing: border-box;
}


</style>
