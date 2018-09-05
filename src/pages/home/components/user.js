import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import UserTiltle from './userTitle'
import {UserList,UserItem,GetMoreUser} from './style'
class User extends Component {
  mapUsers(){
    
    const{ users,userPage} =this.props
    const list =users.filter((item,i)=>{
      return i>=(userPage-1)*5&&i<userPage*5
    })
    return list.map(item=>{
      let likes = item.get('total_likes_count')
      let words = item.get('total_wordage')
      return (
        <UserItem key={item.get('id')}>
          <Link to="/"><img src={item.get('avatar_source')} alt=''/></Link>
          <div className="info">
            <div>
              <Link to="/">{item.get('nickname')}</Link>
              <Link to="/" style={{color:'#42c02e',fontSize:'13px'}}>+关注</Link>
            </div>
            <div>
              写了{words>1000?(words/1000).toFixed(1)+'k':words}字 · {likes>1000?(likes/1000).toFixed(1)+'k':likes}喜欢
            </div>
          </div>
        </UserItem>
      )
    })
  }
  render (){
    return (
      <div>
        <UserTiltle></UserTiltle>
        <UserList>
          {this.mapUsers()}
          <GetMoreUser href="#">查看全部&gt;</GetMoreUser>
        </UserList>
      </div>
    )
  }
}
const mapState=(state)=>({
  users:state.getIn(['home','users']),
  userPage:state.getIn(['home','userPage'])
 })
export default connect(mapState)(User);
