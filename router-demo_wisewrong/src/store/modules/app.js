// import Vue from 'vue'
import * as types from '../types'
const state = {
  sorteDate: ''

}
const getter = {
  sorteDate: state => state.sorteDate
}
const mutations = {
  [types.CAN_YOU_NO_DATA] (state, data) {
    state.sorteDate = data
    console.log(state.sorteDate)
  }
}
export default {
  state,
  mutations,
  getter
}
