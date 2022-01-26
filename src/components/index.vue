<template>
  <main>
    <div class="coverHome"></div>
    <div class="serviceWrap"><service></service></div>
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
  
          <label>活動類別：<br />
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
 
      <carousal></carousal>
      

  </main>
</template>

<script>
import carousal from './carousal.vue';
import service from './service.vue';

export default {
  components: { carousal, service },
 
  name: "index",
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped> 
@import '../scss/main.scss';

  .serviceWrap{
    width: 460px;
    padding: 25px;
    background-color: $tertiary-color;
    color: $content-color;
    box-sizing: border-box;
  }
</style>
