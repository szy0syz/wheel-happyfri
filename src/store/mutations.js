/**
 * Created by jerry on 2017/5/18.
 */
const GET_DATA = 'GET_DATA'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_USER_INFORM = 'GET_USER_INFORM'

export default {
  [GET_DATA] (state, payload) {
    if (payload.res.httpStatusCode == 200) {
      state.itemDetail = payload.res.topiclist
    }
  },
  [ADD_ITEMNUM] (state, payload) {
    state.user_id = payload.res.users_id // user_id 这个属性state没提前定义
  },
  [REMBER_ANSWER] (state, payload) {
    state.itemNum += payload.num
  },
  [REMBER_TIME] (state) {
    state.timer = setInterval(() => {
      state.alltime++
    }, 1000)
  },
  [INITIALIZE_DATA] (state) {
    state.itemNum = 1
    state.allTime = 0
  }
}
