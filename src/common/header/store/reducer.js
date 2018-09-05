import {fromJS} from 'immutable'
import {CHANGE_FOCUSED,CHANGE_BLUR,MOVE_IN,MOVE_OUT,INIT_SEACH,CHANGE_PAGE} from './actionType'
const defaultState=fromJS({
  focused:false,
  showInfo:false,
  seachList:[],
  page:1,
  totalPage:1,
  ring:0
})
export default (state=defaultState,action)=>{
  switch (action.type) {
    case CHANGE_FOCUSED:
      return state.merge({
        focused:true
      })
    case CHANGE_BLUR:
      return state.set('focused',false)  
    case MOVE_IN:
      return state.set('showInfo',true)
    case MOVE_OUT:
      return state.set('showInfo',false) 
    case INIT_SEACH:
      return state.merge({
        seachList:action.data,
        totalPage:Math.ceil(action.data.size/10)
      }) 
    case CHANGE_PAGE:
      return state.merge({
        page:action.data,
        ring:state.get('ring')+1
      })     
    default:
      return state;
  }
  
}