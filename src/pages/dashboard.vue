<template>
    <div class="dashboard">
      <router-view class="view"></router-view>
      <cube-tab-bar
        class="tab-bar"
        v-model="selectedLabelDefault"
        :data="tabs"
        @change="changeHandler">
      </cube-tab-bar>
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        data () {
            return {
                selectedLabelDefault: '主页',
                tabs: [{
                    label: '主页',
                    icon: 'cubeic-home'
                }, {
                    label: '课程',
                    icon: 'cubeic-picture'
                }, {
                    label: '订单',
                    icon: 'cubeic-mall'
                }, {
                    label: '我的',
                    icon: 'cubeic-person'
                }]
            }
        },
        methods: {
            changeHandler (label) {
                switch (label) {
                    case '主页':{
                        this.$router.push({
                            name:'home'
                        });
                    }break;
                    case '课程':{
                        this.$router.push({
                            name:'courses'
                        });
                    };break;
                    case '订单':{
                        this.$router.push({
                            name:'orders'
                        });
                    };break;
                    case '我的':{
                        this.$router.push({
                            name:'mine'
                        });
                    };break;
                    default:{

                    }
                }
            }
        }
    }
</script>

<style scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: #f4f4f4;
  }

  .view {
    position: absolute;
    width: 100%;
    height: calc(100% - 60px);
    overflow-y: scroll;
  }
</style>
