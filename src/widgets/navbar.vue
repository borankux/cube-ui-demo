<template>
  <div class="navbar" @click="triggerBack">
    <i  class="cubeic-back back"></i>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
    export default {
        name: "navbar",
        props: {
            title: {
                type: String,
                default: ""
            },
            showBack:{
                type: Boolean,
                default: true
            }
        },
        methods: {
            triggerBack()
            {
                this.$emit('back');
            }
        }
    }
</script>

<style scoped>
  .navbar {
    text-align: center;
    background-color: #fc9153;
    height: 40px;
    line-height: 40px;
  }

  .navbar .title {
    text-align: center;
    color: white;
    font-weight: bolder;
    font-size: 1.1em;
  }

  .navbar .back {
    color: white;
    float: left;
    width: 50px;
  }
  </style>
