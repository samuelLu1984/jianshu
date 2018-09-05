import styled from 'styled-components'
import LogoPng from '../../static/nav-logo.png'
export const HeaderWapper =styled.div`
  width:100%;
  height:56px;
  display:flex;
  justify-content:center;
  border-bottom:1px solid #ccc;
`;
export const WidthLimit=styled.div`
  width:1440px;
  position:relative;
  font-size:17px;
`;
export const NavLogo =styled.div`
  width:100px;
  height:56px;
  float:left;
  background:url(${LogoPng});
  background-size:contain;
`;
export const NavBar =styled.div`
  width: 960px;
  margin:0 auto;
  height: 56px;
`;

  

export const NavItem =styled.div`
   float:left;
   line-height:56px;
   padding:0 20px;
   &.active{
     color: #ea6f59;
     &::before{
       content:"\\e6ff";
     }
   }
   &.hover{
     &:hover{
       background:#eee;
     }
     &::before{
       content:"\\e601"
     }
   }
`;
export const SeachWrapper=styled.div`
   float:left;
   padding: 9px 20px;
   position: relative;
   z-index:1;
  
`
export  const SeachIcon=styled.div`
  position:absolute;
  transition:all .5s;
  background:${props=>props.focused?'#999999':'#eee'};
  height:32px ;
  width:32px;
  color:${props=>props.focused?'#fff':'#969696'};
  font-size:18px;
  border-radius:50%;
  line-height:32px;
  text-align:center;
  right:23px;
  top:12px;
`
export const InputItem=styled.input.attrs({placeholder:'搜索'})`
  height:38px;
  padding:0 20px;
  border:none;
  outline:none;
  transition:all .5s;
  width: ${props=>props.focused?'240px':'120px'};
  background:#eee;
  border-radius:19px;
  &::placeholder{
    color:#969696;
  }
    
`;
export const SeachInfoWrapper=styled.div`
  display:${props=>props.show?'bloack':'none'};
  position:absolute;
  top:100% ;
  left:20px;
  background:#fff;
  transition:all 0.5s;
  /* z-index:1; */
  box-shadow:0 0 8px rgba(0,0,0,0.2);
  
  &::before{
    position:absolute;
    content:'';
    width: 10px;
    height: 10px;
    /* background:#000; */
    top:-5px;
    left:25px;
    transform:rotate(45deg);
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,0.2);
    z-index:-1;
  }
  &::after{
    position:absolute;
    content:'';
    width: 0;
    height: 0;
    border:12px solid transparent;
    /* background:#000; */
    border-bottom-color:#fff;
    bottom:99%;
    left:20px;
    /* background:#fff; */
    box-sizing:border-box;
    /* z-index:1; */
  }
`;
export const SeachInfo=styled.div`
  width:240px;
  padding:20px 20px 10px;
  box-sizing:border-box;
` ;
export const SeachInfoTips=styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  color:#969696;
  position:relative;
`;
export const SeachInfoChange=styled.div`
  font-size:15px;
  display:flex;
  align-items:center;
  cursor:pointer;
`
export const SpinIcon=styled.div`
  display:flex;
  transition:all .5s;
  padding:0;
  justify-content:center;
  align-items:center;
  transform-origin:center;
  transform:${props=>'rotate('+(props.ring*180)+'deg)'};
`;
export const SeachInfoContent=styled.div`
  display:flex;
  flex-wrap:wrap;
  padding-top:5px;
  color:#969696;
`
export const SeachInfoItem=styled.div`
  padding:2px 5px;
  font-size:13px;
  border:1px solid #969696;
  margin:10px 10px 0 0;
  border-radius:5px;
  cursor:pointer;
`
export const Action =styled.div`
  position:absolute;
  right:0;
  top:0;
  padding:9px 0;
`;
export const ActionItem=styled.div`
  display:block;
  float:right;
  height:38px;
  line-height:38px;
  padding:0 20px;
  border-radius:19px;
  /* border:1px solid #ea6f6a; */
  &.write{
    background:#ea6f6a;
    color:#fff;
    margin:0 15px;
    &::before{
      content:"\\e600"
    }
  }
  &.reg{
    border:1px solid #ea6f6a;
    margin:0 15px;
    padding:0 25px;
  }
`
