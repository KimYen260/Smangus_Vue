<template>
<section class="searching-result" >
    <span class="main title">所有行程</span>
        <div class="list-descriptions mb-95" v-for="(item, index) in tripList" :key="index">
            <img class="left-img" :src="item.img">
            <div class="aList">
                <ul class="descriptionUl">
                    <li class="title">{{ item.title }}</li>
                    <li class="description">{{ item.description }}</li>
                    <li>
                        <ul class="description-inside">
                            <li>遊玩天數 : {{ item.days }}</li>
                            <li>成行人數 : {{ item.party }} 人成行</li>
                            <li>{{ item.trans }}</li>
                        </ul>
                    </li>
                    <li class="price">
                        <div class="caption">NT$</div>
                        <div class="dollar">{{ item.price }}</div>
                    </li>
                    <li class="li_btn">
                        <a href="./trip_page.html" >
                            <button type="submit" class="btn_submit" >前往了解更多</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
       
        
    </section>
</template>

<script>
export default {
  name: 'classicTrip',
  data () {
    return {
     tripList: [
         {
          img: require("../assets/camen-lake.1.jpg"),
          title: "天使的眼淚 | 嘉明湖",
          description:"想一探台東秘境嘉明湖真實面貌，就必須爬上海拔3000多公尺的高山，三日裡背負重裝，由專業高山嚮導帶領從池上出發3天2夜，沿途中，不斷地與自己對話，行程提供代為申請山屋或營帳住宿",
          days: "3天",
          party: "7-10",
          price: "7,500",
          trans: "活動提供台東市區免費接送"
         },
         {
           img: require("../assets/花蓮翡翠谷.jpg"),
          title: "花蓮翡翠谷溯溪｜ 最新秘境",
          description: "花蓮翡翠谷位於慕谷慕魚的北邊，與銅門村隔著木瓜溪兩兩相對，彷彿是兩顆美麗的珍珠，讓人珍賞大自然的美麗，從翡翠谷步道進入後，舊坑道和山路一路指引，途經急流、巨石、瀑布，翡翠谷短巧的瀑布和深潭",
          days: "4-5小時",
          party: "5-10",
          price: "3,500",
          trans: "活動提供花蓮市區免費接送"
         },
         {
           img: require("../assets/CAROLSLAKE.jpg"),
          title: "天使的散落的珍珠｜ 伽蘿湖",
          description: "跟著高山嚮導走進藏身宜蘭山中秘境—加羅湖，紮營在群山包圍、無敵星空下的加羅湖湖畔露營。全程提供免背免備公器、公糧、帳篷及睡袋的服務，以2天2夜的步調行進，在森林中呼吸潮濕的泥土的空氣味道",
          days: "3天",
          party: "7-18",
          price: "7,800",
          trans: "活動提供宜蘭市區免費接送"
         },
         {
           img: require("../assets/奇萊南華登山2.jpg"),
          title: "奇萊南華登山｜ 高山大草原",
          description: "想看絕美金黃色廣闊草原嗎？從能高越嶺古道出發，經過雲海保線所、三層瀑布，並住宿最新豪華五星級天池山莊休息恢復體力，隔天清晨再輕裝前往奇萊南峰，欣賞眼前盡是一望無際的高山草原",
          days: "2天 2夜",
          party: "7-18",
          price: "7,960",
          trans: "活動提供南投市區免費接送"
         }
     ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
