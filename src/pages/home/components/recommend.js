import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {RecommendWrap,RecommendItem} from './style'
class Recommend extends Component {
  mapRcomm(){
    return this.props.recommend.map(item=>{
      return(
        <Link to='/' key={item.get('id')}>
          <RecommendItem src={item.get('imgUrl')} alt={item.get('title')}></RecommendItem>
        </Link>
      )
    })
  }
  render() {
      return (
        <RecommendWrap>
          {this.mapRcomm()}
        </RecommendWrap>
      )
  }
}
const mapState=(state)=>({
   recommend:state.getIn(['home','recommend'])
})
export default connect(mapState) (Recommend);