<template>
  <div class="order-box">
    <h3 class="title">{{data.title}}</h3>
    <div class="id">1028910239u09u20912</div>
    <div class="info">
      <span class="date-from">{{data.from}}</span>
      <span class="date-to">{{data.to}}</span>
    </div>
    <div class="amount-holder">
      <h3 class="amount">{{data.amount}}</h3>
      <span class="append">元</span>
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
    export default {
        name: "order-item",
        props: {
            data: {
                type: Object,
                default(){
                    return {
                        title:"default title",
                        from:"2019-11-12",
                        to: "2019-12-12",
                        amount:0
                    }
                }
            }
        }
    }
</script>

<style scoped>
  .order-box {
    box-shadow: 1px 1px 12px 1px #e3e3e3;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }

  .id {
    clear: both;
    padding: 8px 0;
    color: #999;
    font-size: 0.9em;
  }

  .info {
    margin-top: 10px;
    float: left;
  }
  .date-from {
    color: #777777;
    font-size: 0.8em;
  }

  .date-to {
    color: #777777;
    font-size: 0.8em;
  }

  .amount-holder {
    float: right;
    width: 80px;
  }

  .amount-holder .append {
    color: #fc9153;
    font-size: 0.9em;
  }

  .amount {
    font-size: 1.5em;
    color: #fc9153;
    display: inline-block;
  }
</style>
