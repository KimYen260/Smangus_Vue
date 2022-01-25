<template>
  <main>
    <div class="coverHome"></div>
    <div class="section_planning ">
      <div class="sectionBox"><span class="planText">開始計劃</span></div>
      <form class="planForm " action="#" method="post">
        <div class="typeSelection">
          <label>地點：<br />
            <select name="country" class="selection">
              <option value="1" selected>花蓮</option>
              <option value="2">台東</option>
              <option value="3">宜蘭</option>
            </select></label>
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
    <div class="logo_belt mb-95 mt-95">
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
