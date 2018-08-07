<template>
  <div class="wrap-body">
    <div class="wrap-left">
      <ul>
        <li class="listItem" v-for="item in links" :key="item.id">
          <a @click="$goRoute(item.route)">{{item.text}}</a>
        </li>
      </ul>
    </div>
    <div class="wrap-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      home: '别看了这里啥也没有',
      links: [
        {
          text: '密码的强弱判断',
          route: '/page01'
        },
        {
          text: '水蜜桃',
          route: '/page02'
        },
        {
          text: '排序',
          route: '/page03'
        }
      ]
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.wrap-body {
  height: 100%;
  display: flex;
}
.wrap-left {
  height: 100%;
  width: 400px;
  margin-right: 20px;
  background-color: #e5ecec;

  .listItem {
    // display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
  }
  ul li a {
    display: inherit;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
  ul li a:hover {
    cursor: pointer;
    color: #fff;
    background-color: #138bec;
    border: 1px solid #138bec;
  }
}
.wrap-right {
  height: 100%;
  flex: 1;
  /* background-color: blanchedalmond; */
}
</style>
