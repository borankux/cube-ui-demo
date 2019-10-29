<template>
    <div class="crown" v-bind:class="{crown_1:level ===1, crown_2:level===2, crown_3:level>=3}">
      <h3 class="number">{{level}}</h3>
    </div>
</template>

<script>
    export default {
        name: "crown",
        props:{
            level:{
                default: 1
            }
        }
    }
</script>

<style scoped>
  .crown {
    width: 50px;
    height: 50px;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    padding: 1px;
  }

  .crown_1 {
    background-image: url("../assets/imgs/ic_crown_1.png");
  }

  .crown_2 {
    background-image: url("../assets/imgs/ic_crown_2.png");

  }

  .crown_3 {
    background-image: url("../assets/imgs/ic_crown_3.png");
  }

  .crown .number{
    text-align: center;
    line-height: 30px;
    margin-top: 20px;
    color: white;
    font-size: 0.8em;
  }
</style>
