<template>
  <div style="width: 80%;margin: 10px auto;background-color: red">
    <cube-input class="input" placeholder="请输入关键字"  type="text">
      <template slot="append">
        <i style="margin-right: 10px;" class="cubeic-search"></i>
      </template>
    </cube-input>
  </div>
</template>

<script>
    export default {
        name: "search-bar"
    }
</script>

<style scoped>
  .input {
    width: 100%;
  }
</style>
