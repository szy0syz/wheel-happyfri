/**
 * Created by jerry on 2017/5/19.
 */
import ajax from '../config/ajax'

export default {
  addNum ({commit, state}, id) {
    commit('REMBER_ANSWER', { id })
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', {
        num: 1
      })
    }
  },
  getDate ({commit, state}) {
    ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4')
      .then(res => {
        commit('GET_DATA', { res })
      })
  },
  initializeData ({commit}) {
    commit('INITIALIZE_DATA')
  }
}
