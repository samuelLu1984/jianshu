import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {AppInfo,UserListTitle,ChangeUser} from './style'
import {changPage,changeShowCode} from '../store/reducerCreators'
class UserTiltle extends Component {
  render (){
    const{ring,userPage,totalPage,handleChangeUser,handleChangeCode,showCode} =this.props
    
    return (
      <div>
        <Link to='/'>
          <AppInfo onMouseEnter={()=>{handleChangeCode(true)}} onMouseLeave={()=>{handleChangeCode(false)}} show={showCode}>
            <img alt='code' src='code/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'/>
            <div>
              <p>下载简书手机App&nbsp;&gt;</p>
              <p style={{color:'#969696',fontSize:'13px'}}>随时随地发现和创作内容</p>
            </div>
            <div className='codePage'>
              <img src='code/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt='code'/>
            </div>
          </AppInfo>
        </Link>
        <UserListTitle onClick={()=>{
          handleChangeUser(userPage,totalPage)
        }}>
          <div>推荐作者</div>
          <ChangeUser ring={ring}>
            <div className='iconfont' >&#xe746;</div>
            换一批
          </ChangeUser>
        </UserListTitle>
      </div>
    )
  }
}
const mapState=(state)=>({
  userPage:state.getIn(['home','userPage']),
  totalPage:state.getIn(['home','totalPage']),
  ring:state.getIn(['home','ring']),
  showCode:state.getIn(['home','showCode'])
})
const mapDispatch=(dispatch)=>({
  handleChangeUser(page,total){
    console.log(page,total)
    if(page<total){

      dispatch(changPage(page+1))
    }else{
      dispatch(changPage(1))
    }
  },
  handleChangeCode(bool){
    dispatch(changeShowCode(bool))
  }
})
export default connect(mapState,mapDispatch)(UserTiltle)
