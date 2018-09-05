import React ,{Component} from 'react'
import {NodeListItem,NodeListWraper,ImgItem,ArticleItem,ArticleInfo} from './style'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class NodeList extends Component {
  mapNodeList(){
     return this.props.nodeList.map(item=>{
       console.log(item.get('money'))
      return(
        <NodeListItem key={item.get('id')}>
        <ArticleItem src={item.get('imgUrl')}>
         <Link to='/detail'>{item.get('title')}</Link>
         <p>{item.get('abstract')}</p>
         <ArticleInfo active={item.get('money')?true:false}>
           <i>作者：{item.get('nickName')}</i>
           <i>评论：{item.get('comments')}</i>
           <i>喜欢：{item.get('like')}</i>
           <i  className='money'>价格：{item.get('money')}</i>
         </ArticleInfo>
        </ArticleItem>
        <ImgItem src={item.get('imgUrl')}></ImgItem>
        </NodeListItem>
      )
    })
  }
  render() {
    
    return (
      <NodeListWraper>
        {this.mapNodeList()}
        
      </NodeListWraper>
    )
  }
}
const mapState=(state)=>({
   nodeList:state.getIn(['home','nodeList'])
})
export default connect(mapState) (NodeList);