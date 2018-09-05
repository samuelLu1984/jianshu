import {fromJS} from 'immutable'
import {INIT_STATE,CHANGE_PAGE,SHOW_CODE} from './constants'
const defaultState =fromJS({
  swiper:[],
  topPic:[],
  nodeList:[],
  recommend:[],
  users:[],
  userPage:1,
  totalPage:1,
  showCode:false,
  ring:1
})
const initState=(s,a)=>s.merge({
  swiper:a.data.get('swiper'),
  topPic:a.data.get('topPic'),
  nodeList:a.data.get('nodeList'),
  recommend:a.data.get('recommend'),
  users:a.data.get('users'),
  totalPage:a.data.get('users').size/5
})
const changPage=(s,a)=>s.merge({
  userPage:a.data,
  ring:s.get('ring')+1
})
export default (state=defaultState,action)=>{
  switch (action.type) {
    case INIT_STATE:
      return initState (state,action)
    case CHANGE_PAGE:
      return changPage(state,action)
    case SHOW_CODE:
      return state.set('showCode',action.data)
    default:
      return state;
  }
}