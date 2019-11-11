<template>
    <div class="page">
      <div class="slide-holder">
        <cube-slide :data="items" :loop="true" class="slider-image"/>
      </div>

      <div class="box-holder">
        <div class="box">
          <div class="image">
            <img src="../assets/imgs/ic_baby.png" alt="">
          </div>
          <h3>月搜</h3>
        </div>

        <div class="box">
          <div class="image">
            <img src="../assets/imgs/ic_clean.png" alt="">
          </div>
          <h3>清洁</h3>
        </div>

        <div class="box">
          <div class="image">
            <img src="../assets/imgs/ic_repair.png" alt="">
          </div>
          <h3>维修</h3>
        </div>
      </div>

      <div class="box-holder">
        <div class="box">
          <div class="image">
            <img src="../assets/imgs/ic_exam.png" alt="">
          </div>
          <h3>考试评级</h3>
        </div>

        <div class="box">
          <div class="image">
            <img src="../assets/imgs/ic_sign.png" alt="">
          </div>
          <h3>签到有礼</h3>
        </div>

        <div class="box">
          <div class="image">
            <img src="../assets/imgs/ic_share.png" alt="">
          </div>
          <h3>邀请有奖</h3>
        </div>
      </div>

      <div class="nanny-list">
        <hr style="margin: 20px auto;width: 80%;border: 0.5px solid #a8a2ae;">
        <h3 class="title" style="font-size: 1.5em;text-align: center;margin: 30px 10px 10px;">月嫂排名</h3>
        <nanny-box v-for="id in nannies" :key="id" :level="id"></nanny-box>
      </div>
    </div>
</template>

<script>
    import NannyBox from '../widgets/nanny-box'
    export default {
        name: "index",
        components:{
            NannyBox
        },
        data () {
            return {
                nannies: [1,2,3,4,5,6],
                items: [
                    {
                        url: 'https://mp.weixin.qq.com/s/XyVYoQJSkSB6QXFDZ_tFdg',
                        image: './static/slide_2.jpg'
                    },
                    {
                        url: 'https://mp.weixin.qq.com/s/XyVYoQJSkSB6QXFDZ_tFdg',
                        image: './static/slide_2.jpg'
                    },
                    {
                        url: 'https://mp.weixin.qq.com/s/XyVYoQJSkSB6QXFDZ_tFdg',
                        image: './static/slide_2.jpg'
                    },
                    {
                        url: 'https://mp.weixin.qq.com/s/XyVYoQJSkSB6QXFDZ_tFdg',
                        image: './static/slide_2.jpg'
                    },
                    {
                        url: 'https://mp.weixin.qq.com/s/XyVYoQJSkSB6QXFDZ_tFdg',
                        image: './static/slide_2.jpg'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
  .slide-holder {
    height: 10rem;
    width: 100%;
  }

  .box-holder {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }

  .box img{
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: 3px solid #e5bc69;
    box-sizing: border-box;
    padding: 5px;
  }

  .box h3 {
    font-size: 0.8em;
    margin: 5px;
    color: #555555;
    text-align: center;
  }

  .box {
    margin: 0 20px;
  }
</style>
