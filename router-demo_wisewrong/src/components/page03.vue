<template>
  <div class="sortData">
    <div v-for="item in allSortDate" :key="item.id">{{item.value}}</div>
  </div>
</template>
<script>
import * as types from '../store/types'
// import { mapGetters } from 'vuex'
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
    this.$store.commit(types.CAN_YOU_NO_DATA, 'aaaa')
  },
  computed: {
    // ...mapGetters(['allSortDate'])
  }
}
</script>

