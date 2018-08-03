<template>
  <div class="wrap-body">
    <!-- <div class="home text-center">{{home}}</div> -->
    <div class="wrap-left">
      <ul>
        <li v-for="item in links">
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
          text: '胡萝卜',
          route: '/home'
        },
        {
          text: '大白菜',
          route: '/page01'
        },
        {
          text: '水蜜桃',
          route: '/page02'
        }
      ]
    }
  },
  components: {}
}
</script>

<style>
.wrap-body {
  height: 100%;
  display: flex;
}
.wrap-left {
  height: 100%;
  width: 400px;
  margin-right: 20px;
  background-color: aqua;
}
.wrap-right {
  height: 100%;
  flex: 1;
  background-color: blanchedalmond;
}
</style>
