<template>
  <div class='passwordWrap'>
    <el-input v-model="passWord" placeholder="请输入内容" @input="inputChange(passWord)"></el-input>
    <div class="passwordBar">
      <span class="barList"></span>
      <span class="barList"></span>
      <span class="barList"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page01',
  data () {
    return {
      flag: 0,
      Hcolor: '#9595a8',
      Mcolor: '#9595a8',
      Lcolor: '#9595a8',
      passWord: '',
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
  },
  methods: {
    checkStrong (password) {
      // 只含有一种特殊字符等一种或者长度小于8
      let levelWeak = password.match(/^((\d+)|([A-Za-z]+)|(W+))$/)
      // 有两种数字字母特殊字符等任意两种组合
      let levelMiddle = password.match(
        /([0-9]+(\W+|\+|[A-Za-z]))+|([A-Za-z]+(\W+|\+|\d+))+|((\W+|\+)+(\d+|\w+))+/
      )
      // 有三种或者三种以上的字符
      let levelHeight = password.match(
        /^(?![^a-zA-Z]+$)(?!\D+$)(?![a-zA-Z0-9]+$).{8,}$/
      )
      if (password.length < 8 || levelWeak) {
        this.flag = 1
      }
      if (password.length >= 8 && levelMiddle) {
        this.flag = 2
      }
      if (password.length >= 8 && levelHeight) {
        this.flag = 3
      }
      console.log(this.flag)
    },
    inputChange (value) {
      this.flag = 0
      if (value) {
        this.checkStrong(value)
      }
      console.log(this.flag)
      const OColor = '#9595a8'
      const LColor = '#FF4B47'
      const MColor = '#F9AE35'
      const HColor = '#2DAF7D'
      switch (this.flag) {
        case 0:
          this.Hcolor = this.Mcolor = this.Lcolor = OColor
          break
        case 1:
          this.Lcolor = LColor
          this.Mcolor = this.Hcolor = OColor
          break
        case 2:
          this.Lcolor = this.Mcolor = MColor
          this.Hcolor = OColor
          break
        default:
          this.Lcolor = this.Mcolor = this.Hcolor = HColor
      }
      document.getElementsByClassName(
        'barList'
      )[0].style.background = this.Lcolor
      document.getElementsByClassName(
        'barList'
      )[1].style.background = this.Mcolor
      document.getElementsByClassName(
        'barList'
      )[2].style.background = this.Hcolor
    }
  }
}
</script>
<style lang="less" scoped>
.passwordWrap {
  width: 300px;
  .passwordBar {
    margin-top: 10px;
    display: flex;
    .barList {
      flex: 1;
      display: inline-block;
      height: 5px;
      margin-right: 10px;
      background: #9595a8;
    }
  }
}
</style>

