<template>
 <div >
    <!-- <div class="home text-center">{{home}}</div> -->
    <div >
      <ul>
        <li v-for="item in links">
          <a @click="$goRoute(item.route)">{{item.text}}</a>
        </li>
      </ul>
    </div>
    <div >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page01',
  data () {
    return {
      title: '这里是第一个页面',
      links: [
        {
          text: '圆白菜',
          route: '/page01/page01-a'
        },
        {
          text: '长白菜',
          route: '/page01/page01-b'
        }
      ]
    }
  }
}
</script>
