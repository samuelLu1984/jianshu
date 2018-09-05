import {INIT_STATE,CHANGE_PAGE,SHOW_CODE} from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'
const initState = (data) => ({ type:INIT_STATE, data:fromJS(data)})
export const changPage=(data)=>({
   type:CHANGE_PAGE,
   data
})
export const changeShowCode=(data)=>({type:SHOW_CODE, data})
export const getInitState =()=>{
  return (dispatch) => {
    axios.get('/api/home.json').then(res=>{
      dispatch(initState(res.data))
    })
  }
}
