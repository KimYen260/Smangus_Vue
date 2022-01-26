<template>
      <div class="section_ourservice">
        <span class="title">{{msg}}</span>
        <div class="paragraph">
          <p class="knowledgeInfo">{{serviceText}}</p>
          
        </div>
      </div>
</template>

<script>
export default {
  name: 'service',
  data () {
    return {
      msg: 'Smangus Service',
      serviceText:'秉持著小而美的品質，採取1:6~8的指導員與夥伴比例，除了能更仔細的照顧參與的夥伴們外，同時也能有更充裕的時間與夥伴們交流戶外經驗。在從事戶外活動過程中，有許多未知的自然風'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped> 
@import '../scss/main.scss';
.section_ourservice{
  font-size: $font-s;

  .title{
    font-size: $font-sub;
  }
}
 
</style>
