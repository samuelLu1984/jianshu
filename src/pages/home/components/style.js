import styled  from 'styled-components'

export const SwiperWraper=styled.div`
  width:100%;
  overflow:hidden;
  height:270px;
  position:relative;
  border-radius:5px;
  .slick-arrow.slick-prev{
    background:rgba(0,0,0,0.3);
    width:30px;
    height:45px;
    z-index:2;
    left:0;
    opacity:${props=>props.actived?'0':'1'};
  }
  .slick-arrow.slick-next{
    background:rgba(0,0,0,0.3);
    width:30px;
    height:45px;
    z-index:2;
    right:0;
    opacity:${props=>props.actived?'0':'1'};
  }
  .slick-dots{
    bottom:10px;
    li{
      width:40px;
      height:6px;
      border-radius:3px;
      background:rgba(0,0,0,0.5);
      &>button{
        display:none;
      }
    }
    .slick-active{
      background:#fff;
    }
  }
`

export const SwiperItem=styled.img.attrs({
src:`${props=>props.src}`
})`
  width:625px;
  height:270px;
  display:block;
`;
export const TopicWraper=styled.div`
  width:100%;
  min-height:100px;
  border-bottom:1px solid #ccc;
  display:flex;
  flex-wrap:wrap;
  padding:15px 0;
  margin-top:15px;
`
export const TopicItem=styled.div`
  border:1px solid #dcdcdc;
  background:#f7f7f7;
  min-height:32px;
  line-height:32px;
  margin:0 18px 18px 0; 
  border-radius:4px;
  img{
    width:32px;
    height: 32px;
    vertical-align:middle;
  }
  div{
    display: inline-block;
    padding:0 11px 0 6px;
    font-size:14px;
  }
`
export const MoreInfo=styled.div`
  background:#f7f7f7;
  min-height:32px;
  line-height:32px;
  margin:0 18px 18px 0; 
  border-radius:4px;
  color:#787878;
  font-size:14px;
`
export const NodeListWraper=styled.div`
  width: 100%;
  min-height:400px;
  margin-top:15px;
  /* border: 1px solid #ccc; */
`
export const NodeListItem=styled.div`
  width:100%;
  margin-bottom:15px;
  border-bottom:1px solid #ccc;
  padding:15px 2px 30px 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
`
export const ImgItem=styled.img`
  width:125px;
  height:100px;
  border-radius:4px;
  display:${props=>props.src?"block":"none"}
  boder:1px solid #ccc;
`
export const ArticleItem=styled.div`
  width:${props=>props.src?'483px':'100%'};
  height:107px;
  /* background:#ccc; */
  line-height:24px;
  font-size:13px;
  color:#969696;
  a{
    display:block;
    font-size:18px;
    font-weight:700;
    line-height:1.5;
    margin-bottom:7px;
    color:#000;
  }
`
export const ArticleInfo=styled.div`
  display:flex;
  justify-content:flex-start;
  margin-top:5px;
  i{
     margin-right:10px;
  }
  i.money{
    display:${props=>props.active?'block':'none'};
  }
`
export const RecommendWrap=styled.div`
  width: 100%;
  min-height:100px;
  /* border:1px solid #ccc; */
  box-sizing:border-box;
  a{
    width: 100%;
    
  }
`
export const RecommendItem=styled.img`
  width:100%;
  margin-bottom:4px;
`
export const AppInfo=styled.div`
  width:100%;
  padding:10px 22px;
  box-sizing:border-box;
  border:1px solid #f0f0f0;
  display:flex;
  justify-content:center;
  position:relative;
  margin:10px 0;
  img{
    width: 60px;
    height:60px;
  }
  div{
    font-size:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding-left:5px;
    p{
      padding:4px 6px;
    }
  }
  .codePage{
    position:absolute;
    bottom: 120%;
    left:50%;
    display:${props=>props.show?'block':'none'};
    transform:translateX(-50%);
    box-shadow: 0 0 8px 0 #aaa;
    border:1px solid #aaa;
    border-radius:5px;
    padding:10px;
    background:#fff;
    &::before{
      content:'';
      display: block;
      width: 16px;
      height: 16px;
      background:#fff;
      border:1px solid #ccc;
      transform-origin:center;
      transform: translateX(-50%) rotate(45deg);
      position:absolute;
      bottom: -11px;
      left:50%;
    }
    &::after{
      content:'';
      width:0;
      height:0;
      border:12px solid transparent;
      border-bottom-color:#fff;
      position:absolute;
      transform: translateX(-50%);
      bottom: -1px;
      left:50%;
    }
    img{
      width: 160px;
      height:160px;
    }
  }
`


export const UserList=styled.div`
  width: 100%;
  min-height:30px;
  box-sizing:border-box;
`
export const UserItem =styled.div`
  width:100%;
  height:48px;
  display:flex;
  margin-top:10px;
  justify-content: space-between;
  img{
    width: 48px;
    height: 48px;
    border-radius:50%;
  }
  .info{
    width:220px;
    font-size:14px;
    line-height:24px;
    div{
      display:flex;
      justify-content:space-between;
      color:#969696;
      font-size:12px;
    }
  }
`
export const GetMoreUser=styled.a`
  display:block;
  width:100%;
  text-align:center;
  padding:10px 0;
  border:1px solid #ccc;
  box-sizing:border-box;
  border-radius:5px;
  font-size:13px;
  color:#969696;
  margin-top:30px;
`
export const UserListTitle=styled.div`
  width:100%;
  display:flex;
  color: #969696;
  font-size:13px;
  margin:20px 0;
  justify-content:space-between;
`
export const ChangeUser=styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  .iconfont{
    display:flex;
    padding:0;
    justify-content:space-between;
    align-items:center;
    transition:all 0.5s;
    vertical-align:middle;
    transform-origin:center;
    
    transform:${props=>'rotate('+(props.ring*360)+'deg)'};
  }
`