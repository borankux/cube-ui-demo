<template>
    <div class="page">
      <div class="profile-box">
        <img class="avatar" src="../../assets/imgs/ic_user.png" alt="">
        <h2 class="name">كىرىش/تىزىملاش</h2>

        <div class="badge-holder">
          <div class="badge">
            <h1>125</h1>
            <h3>جۇغلانما</h3>
          </div>

          <div class="badge">
            <h1>320</h1>
            <h3>كۆرۈش</h3>
          </div>

          <div class="badge">
            <h1>22</h1>
            <h3>ساقلاش</h3>
          </div>
        </div>
        <div class="row-list">
          <div class="row">
            <i class="start cubeic-mall"></i>
            <span>زاكاسلىرىم</span>
            <i class="end cubeic-arrow"></i>
          </div>

          <div class="row">
            <i class="start cubeic-person"></i>
            <span>ئارخىپلىرىم</span>
            <i class="end cubeic-arrow"></i>
          </div>

          <div class="row">
            <i class="start cubeic-camera"></i>
            <span>شەخسى</span>
            <i class="end cubeic-arrow"></i>
          </div>

          <div class="row">
            <i class="start cubeic-setting"></i>
            <span>تەڭشەك</span>
            <i class="end cubeic-arrow"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Crown from '../../widgets/crown'
    export default {
        components: {
            Crown
        },
        name: "mine"
    }
</script>

<style scoped>
  .page {
    font-family: "ALKATIP Tor Tom";
  }
  .avatar {
    display: block;
    margin: 20px auto;
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 100px;
    padding: 10px;
  }

  .name {
    text-align: center;
    margin-top: 20px;
    font-size: 1.5em;
    font-weight: bolder;
  }

  .row-list {
    margin-top: 20px;
  }

  .row {
    height: 50px;
    line-height: 50px;
  }

  .row .start {
    margin:0 20px;
    float: left;
    font-size: 1.5em;
  }

  .row .end {
    float: right;
    margin-right: 20px;
  }

  .badge-holder {
    margin: 20px;
    display: flex;
    justify-content: center;
  }


  .badge {
    margin: 10px 20px;
  }

  .badge h1 {
    text-align: center;
    font-size: 2em;
  }

  .badge h3 {
    text-align: center;
    margin-top: 5px;
  }
</style>
