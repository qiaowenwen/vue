<template>
  <div>
    <div class="sortData">
      <div v-for="item in allSortDate" :key="item.id">{{item.value}}</div>
    </div>
    <el-button @click="sortDataFun()">排序</el-button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Util from '../common/commonFun'
import * as types from '../store/types'
export default {
  data () {
    return {
      allSortDate: [
        {
          id: 1,
          value: 1
        },
        {
          id: 6,
          value: 6
        },
        {
          id: 3,
          value: 3
        }
      ]
    }
  },
  mounted () {
    console.log(this)
    console.log()
    this.$store.commit(types.CAN_YOU_NO_DATA, '111')
  },
  computed: {
    ...mapGetters(['sorteDate'])
  },
  methods: {
    sortDataFun () {
      let sortkey = 'value'
      let reverse = -1
      let datas = Util.sortData(this.allSortDate, {
        sortkey,
        reverse
      })
      this.allSortDate = datas
    }
  }
}
</script>

