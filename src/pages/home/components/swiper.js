import React, { Component } from 'react'
import {SwiperWraper,SwiperItem} from './style'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {connect} from 'react-redux'

import {} from '../store/reducerCreators'
class SwiperCom extends Component {
  constructor(props){
    super(props)
    this.state={
      auto:true
    }
    this.autoPause=this.autoPause.bind(this)
    this.antoPlay=this.antoPlay.bind(this)
  }
  autoPause(){
    this.slider.slickPause();
    this.setState(()=>({auto:false}))
  }
  antoPlay(){
    this.setState(()=>({auto:true}))
    this.slider.slickPlay();
  }
  mapSwipers(){
     return this.props.swiper.map((item)=>{
      return (
        
          <Link key={item.get('id')} to='/'><SwiperItem  src={item.get('imgUrl') } 
          
        
           >
         </SwiperItem>
         </Link>
            
         
           
          
        
         
      )
    })
  }
  
  
  
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: this.state.auto,
      speed: 1200,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    // console.log(settings)
    return (
      <SwiperWraper  onMouseEnter={this.autoPause} onMouseLeave={this.antoPlay} actived={this.state.auto}>
        
        <Slider {...settings} ref={slider => (this.slider = slider)} >
          {this.mapSwipers()}
        </Slider>
      </SwiperWraper>
    )
       
        
    
  }
  
    
}
const mapState=(state)=>({
  swiper:state.getIn(['home','swiper']),
})
const mapDispatch=(dispatch)=>({

})
export default connect(mapState,mapDispatch) (SwiperCom);