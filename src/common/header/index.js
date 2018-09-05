import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {changeFocused,changeBlur,moveIn,moveOut,initSeachList,changePage} from './store/actionCreators'
import {
  HeaderWapper,NavBar,Action,NavItem,SeachWrapper,InputItem,
  WidthLimit,ActionItem,SeachIcon,SeachInfo,SeachInfoWrapper,
  NavLogo,SeachInfoTips,SeachInfoChange,SpinIcon,SeachInfoContent,
  SeachInfoItem,
} from './style'

class Header extends Component {
  getSeach(){
    const{focused,showInfo,seachList,page}=this.props
    if(focused||showInfo){
      const list=seachList.filter((item,index)=>{
        return index>=(page-1)*10&&index<page*10
      })
      return list.map(item=>{
        return  <Link key={item} to='/' style={{color:'#969696'}}><SeachInfoItem >{item}</SeachInfoItem></Link>
      })
    }
  }
  render() {
    
    const { handleOnFocus,focused,handleOnBlur,showInfo,handleMoveIn,handleMoveOut,seachList,page,totalPage,changePage,ring} = this.props
    return (
      <div>
        <HeaderWapper>
          <WidthLimit>
            <Link to="/"><NavLogo></NavLogo></Link>
            <NavBar>
              <Link to='/'><NavItem className='active iconfont'>首页</NavItem></Link>
              <Link to='/'><NavItem className='hover iconfont'>下载APP</NavItem></Link>
                <SeachWrapper >
                  <InputItem 
                  onFocus={()=>{
                    handleOnFocus(seachList)
                  }} 
                  focused={focused}
                  onBlur={handleOnBlur}
                  ></InputItem>
                  <SeachIcon className="iconfont" focused={focused}>&#xe6a8;</SeachIcon>
                  <SeachInfoWrapper 
                  show={focused||showInfo} 
                  onMouseEnter={handleMoveIn}
                  onMouseLeave={handleMoveOut}
                  >
                    <SeachInfo>
                      <SeachInfoTips>
                        <div>热门搜索</div>
                        <SeachInfoChange  onClick={()=>{
                          changePage(page,totalPage)
                        }}>
                         <SpinIcon className='iconfont' ring={ring} >&#xe746;</SpinIcon>
                          换一批
                          </SeachInfoChange>
                      </SeachInfoTips>
                      <SeachInfoContent>
                        
                      {this.getSeach()}
                        
                      </SeachInfoContent>
                    </SeachInfo>
                  </SeachInfoWrapper>
                </SeachWrapper>
            
            </NavBar>
            <Action> 
               <Link to='/'><ActionItem className="write iconfont">写文章</ActionItem></Link>
               <Link to='/'><ActionItem className="reg">注册</ActionItem></Link>
               <Link to='/'><ActionItem>登录</ActionItem></Link>
               <Link to='/'><ActionItem className="iconfont" style={{fontSize:'22px'}}>&#xe636;</ActionItem></Link>
            </Action>
          </WidthLimit>
        </HeaderWapper>
      </div>
    )
  }
}
const mapStateToProps=(state)=>({
    focused:state.getIn(['header','focused']),
    showInfo:state.getIn(['header','showInfo']),
    seachList:state.getIn(['header','seachList']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    ring:state.getIn(['header','ring']),
})
const mapDispatchToProps=(dispatch)=>({
  handleOnFocus(i){
    (i.size===0)&&dispatch(initSeachList())
    dispatch(changeFocused())
    
  },
  handleOnBlur(){
    dispatch(changeBlur())
  },
  handleMoveIn(){
    dispatch(moveIn())
  },
  handleMoveOut(){
    dispatch(moveOut())
  },
  changePage(page,total){
    
    if(page<total){
      dispatch(changePage(page+1))
    }else{
      dispatch(changePage(1))
    }
  }
})
export default connect(mapStateToProps,mapDispatchToProps) (Header);
