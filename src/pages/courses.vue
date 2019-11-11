<template>
  <div class="page">
    <search-bar/>
    <ul>
      <li v-for="course in courses" v-bind:key>
        <div class="person">
          <div class="cover">
            <img :src="course.cover" alt="">
          </div>
          <div class="body">
            <h3 class="title">
              {{course.title}}
            </h3>
            <p class="brief">
              {{course.brief}}
            </p>
          </div>
          <div style="clear: both;"></div>
          <div class="info">
            <span class="time">{{course.updated_at}}</span>
            <span class="visit">访问：{{course.visit}}</span>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
    import SearchBar from '../widgets/search-bar'
    import {getData} from "../apis/data";
    export default {
        name: "courses",
        components:{
            SearchBar
        },
        data () {
            return {
                courses:[]
            }
        },
        methods: {
            getData()
            {
                getData().then((res) => {
                    let data = res.data;
                    this.courses = data.courses;
                })
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>

<style scoped>
  .person {
    margin: 10px;
    box-shadow: 1px 1px 12px 1px #e3e3e3;
    padding: 5px;
  }

  .person .body {
    float: left;
    padding-left: 5px;
  }

  .person .title {
    font-weight: bolder;
    font-size: 1.2em;
  }

  .person .brief {
    margin-top: 5px;
  }

  .person .cover {
    float: left;
  }

  .person .info {
    height: 30px;
    line-height: 30px;
  }

  .info .time {
    font-size: 0.8em;
    color: #777;
  }

  .info .visit {
    font-size: 0.8em;
    color: #777;
    float: right;
    margin-right: 30px;
  }

  .person .cover img {
    display: block;
    width: 80px;
    height: 80px;
  }
</style>
