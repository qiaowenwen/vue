<template>
    <div>
      <ul>
        <li class="listItem" v-for="item in links" :key="item.id">
          <a @click="$goRoute(item.route)">{{item.text}}</a>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      title: '好好学《小半》别闹',
      links: [
        {
          text: '圆白菜',
          route: '/page02/page01-a'
        },
        {
          text: '长白菜',
          route: '/page02/page01-b'
        }
      ]
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
 .listItem {
   list-style-type: none;
    margin-right: 10px;
    margin-top: 10px;
  }
</style>

