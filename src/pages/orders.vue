<template>
  <div class="page">
    <div style="padding: 10px;">
      <h3>订单列表</h3>
      <hr style="border-bottom: none; border-top: 1px solid #ededed;">
    </div>
    <order-item v-for="order in orders" v-bind:key="order.id" :data="order"/>
  </div>
</template>

<script>
    import OrderItem from '../widgets/order-item';
    import {getData} from '../apis/data';

    export default {
        name: "orders",
        components: {
            OrderItem
        },
        data () {
            return {
                orders:[]
            }
        },
        methods: {
            getData()
            {
                getData().then((res) => {
                    this.orders = res.data.orders;
                })
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped>

</style>
