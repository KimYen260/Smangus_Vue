<template>
  <main>
    <div class="coverHome"></div>
    <div class="section_planning ">
      <div class="sectionBox mt-95"><span>開始計劃</span></div>
      <form class="planForm " action="#" method="post">
        <div class="typeSelection">
          <label
            >地點：<br />
            <select name="country" class="selection">
              <option value="1" selected>花蓮</option>
              <option value="2">台東</option>
              <option value="3">宜蘭</option>
            </select></label
          >
        </div>

        <div class="typeSelection">
          <label
            >活動類別：<br />
            <select name="activity" class="selection">
              <option value="1" selected>登山</option>
              <option value="2">溯溪</option>
            </select>
          </label>
        </div>
        <div class="largeSelection">
          <div class="smallSelection">
            <label class="time"
              >計劃時間：
              <input
                type="date"
                name="trip-start"
                value="2021-10-24"
                min="2021-10-01"
                max="2022-12-31"
              />
            </label>
          </div>

          <div class="smallSelection ">
            <label class="people"
              >人數：<br />
              <select name="party" class="selection">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">與客服預定其他人數</option>
              </select></label
            >
          </div>
        </div>
        <button type="submit" class="btn_submit">
          <p>尋找行程</p>
        </button>
      </form>
    </div>
    <!-- -----------------------------表格--------------------------------------- -->
    <!-- <div class="logo_belt mb-95 mt-95">
        <img class="logo" src="#" alt="SmangusLogo" />
        <span>smangus</span>
      </div>
      <div class="section_attractive_rental">
        <div class="description">裝備租借</div>
        <div class="viewPanel">
          <div class="wrap">
            <div class="products">
              <a href="#"
                ><img class="att-products" data-lazy="#" alt="rental_pic"
              /></a>
            </div>
            <div class="products">
              <a href="#"
                ><img class="att-products" data-lazy="#" alt="rental_pic"
              /></a>
            </div>
            <div class="products">
              <a href="#"
                ><img class="att-products" data-lazy="#" alt="rental_pic"
              /></a>
            </div>
            <div class="products">
              <a href="#"
                ><img class="att-products" data-lazy="#" alt="rental_pic" />
              </a>
            </div>
            <div class="products">
              <a href="#"
                ><img class="att-products" data-lazy="#" alt="rental_pic"
              /></a>
            </div>
            <div class="products">
              <a href="#"
                ><img class="att-products" data-lazy="#" alt="rental_pic"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="section_ourservice">
        <span class="title">Our Service</span>
        <div class="paragraph">
          <p class="knowledgeInfo">
            smangus秉持著小而美的品質，採取1:6~8的嚮導/指導員與夥伴比例，除了能更仔細的照顧參與的夥伴們外，同時也能有更充裕的時間與夥伴們交流戶外經驗。在從事戶外活動過程中，有許多未知的自然風
          </p>
          <a class="knowledgeInfo" href="#">read more</a>
        </div>
      </div>
      <div class="section_classic_itinrary">
        <div class="river-tracing"><span>溯溪</span></div>
        <div class="mountain-hiking"><span>登山</span></div>
        <span class="triangle1"></span>
      </div>
      <div class="section_professional_team">
        <span>專業團隊</span>
        <div class="teamMember">
          <span>
            <p class="title1">Schaw Tsuei</p>
            <p class="content1">成功攻頂南美6000m級高峰</p>
            <p class="subtitle1">具有交通部核發之專業領隊執照</p>
            <p class="content">
              喜愛和同好朋友們一起探索台灣山林之美，專找沒人見過的風景，尋訪地圖裡浮現的悠境
              ; 若能引領大家進山野景色是件快樂且富有意義的事。
            </p>
          </span>
          <img class="guider-photo_1" src="#" alt="guider-photo" />
        </div>
        <div class="teamMember">
          <img class="guider-photo_2" src="#" alt="guider-photo" />
          <span>
            <p class="title1">Jane Hu</p>
            <p class="content1">完成歐洲最高峰攀登</p>
            <p class="subtitle1">具有交通部核發之專業領隊執照</p>
            <p class="content">
              攀登台灣近七十座百岳，並持續參與國內長城登山活動。
              近年來邁向海外擔任登山及旅遊團領隊，踏足尼泊爾、日本、紐西蘭等國山區。
            </p>
          </span>
        </div>
        <div class="teamMember">
          <span>
            <p class="title1">Joyce Liu</p>
            <p class="content1">完成非洲及歐洲最高峰攀登</p>
            <p class="subtitle1">具有交通部核發之專業領隊執照</p>
            <p class="content">
              我們走入山林，費盡力氣，只為一瞬間的寧靜與永恆的記憶。
              在山丘行，我們遠離塵囂，放空自我，走遍世界，體驗人生之路。曾踏足於日本、美西、坦尚尼雅等山區。
            </p>
          </span>
          <img class="guider-photo_3" src="#" alt="guider-photo" />
        </div>
      </div> -->
  </main>
</template>

<script>

export default {
  name: "index",
  data() {
    return {};
  }
};
</script>

<style> 

</style>
