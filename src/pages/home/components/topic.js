import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import {TopicWraper,TopicItem,MoreInfo} from './style'
import {connect} from 'react-redux'
class Topic extends Component {
  mapTopPic(){
     return this.props.topPic.map(item=>{
      return(
        <Link to="/" key={item.get('id')} href='/'>
          <TopicItem >
          <img src={item.get('imgUrl')} alt={item.get('title')} />
          <div>{item.get('title')}</div>
          </TopicItem>
        </Link>
      )
    })
  }
  render() {
    
    return (
      <TopicWraper>
        {this.mapTopPic()}
        <Link to='/'><MoreInfo>更多热门专题 &nbsp;&gt;</MoreInfo></Link>
      </TopicWraper>
    )
  }
}
const mapState=(state)=>({
   topPic:state.getIn(['home','topPic'])
})
export default connect(mapState) (Topic);