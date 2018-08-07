<template>
  <div class="sortData">
    <div v-for="item in allSortDate" :key="item.id">{{item.value}}</div>
  </div>
</template>
<script>
// import * as types from '../store/types'
import { mapGetters } from 'vuex'
import Util from '../common/commonFun'
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
    let sortkey = 'value'
    let reverse = 2
    console.log(
      Util.sortData(this.allSortDate, {
        sortkey,
        reverse
      })
    )
  },
  computed: {
    ...mapGetters(['sorteDate'])
  }
}
</script>

