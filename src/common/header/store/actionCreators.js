import {CHANGE_FOCUSED,CHANGE_BLUR,MOVE_IN,MOVE_OUT,INIT_SEACH,CHANGE_PAGE} from './actionType'
import {fromJS} from 'immutable'
import axios from 'axios'
const  initSeach=(data)=>({type:INIT_SEACH,data:fromJS(data)})
export const changeFocused=()=>({type:CHANGE_FOCUSED})
export const changeBlur=()=>({type:CHANGE_BLUR})
export const moveIn=()=>({type:MOVE_IN})
export const moveOut=()=>({type:MOVE_OUT})
export const changePage=(data)=>({type:CHANGE_PAGE,data})
export const initSeachList=()=>{
  return (dispatch)=>{
    axios.get('/api/seachinfo.json').then(res=>{
      dispatch(initSeach(res.data))
    })
  }
}