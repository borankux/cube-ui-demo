<template>
    <div class="component">
      <img class="avatar" src="../assets/imgs/nanny.jpg" alt="">
      <h3 class="label">高级月嫂</h3>
      <h3 class="name">张三三</h3>
    </div>
</template>

<script>
    export default {
        name: "nanny-box"
    }
</script>

<style scoped>
  .component {
    width: 80%;
    margin: 10px auto;
    box-shadow: 1px 1px 12px 1px #e3e3e3;
    border-radius: 5px;
    padding: 3px;
  }

  .avatar {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 3px rgba(15, 152, 142, 0.58) solid;
    margin: 10px auto;
  }

  .label {
    color: #555555;
    font-size: 0.8em;
    text-align: center;
  }

  .name {
    margin-top: 10px;
    text-align: center;
    font-weight: bolder;
    font-size: 1.2em;
  }
</style>
