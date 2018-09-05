import React ,{ Component } from "react";
import {connect} from 'react-redux'
import {HomeWrapper,MainWrapper,AsideWrapper} from './style'
import {getInitState} from './store/reducerCreators'
import Swiper from './components/swiper'
import Topic from './components/topic'
import NodeList from './components/nodeList'
import Recommend from './components/recommend'
import User from './components/user'
class Home extends Component {
  render() {
     return (
       <HomeWrapper>
          <MainWrapper>
            <Swiper></Swiper>
            <Topic></Topic>
            <NodeList></NodeList>
          </MainWrapper>
          <AsideWrapper>
            <Recommend></Recommend>
            <User></User>
          </AsideWrapper>
       </HomeWrapper>
     )
  }
  componentDidMount(){
     this.props.getHomeState()
     
  }
}
const mapState=(state)=>({
   swiper:state.getIn(['home','swiper'])
})
const mapDispatch=(dispatch)=>({
   getHomeState(){
     dispatch(getInitState())
   }
})
export default connect(mapState,mapDispatch) (Home);