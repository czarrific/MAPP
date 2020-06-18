import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import { NavigationBar } from '../components/NavigationBar';
import { Jumbotron } from '../components/Jumbotron';
import DoctorImg from '../assets/mapp_doctors.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";

const photos = [
    {
      name: 'Photo 1',
      url: "https://i.imgur.com/lqriiVb.png"
    },
    {
      name: 'Photo 2',
      url: "https://i.imgur.com/hwWEpBd.png"
    },
    {
      name: 'Photo 3',
      url: "https://i.imgur.com/zTXwduF.png"
    },
    {
      name: 'Photo 4',
      url: "https://i.imgur.com/yhA30bS.png"
    }
  ]

  class CarouselPage extends Component{
    render(){
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className:"slides"
          }
      return(
        <div className="App" style={{padding:50}}>
          <h1>Carousel</h1>
        <Slider {...settings}>
        {photos.map((photo) => {
          return(
            <div className="adPhoto">
              <img width="100%" src={photo.url}/>
            </div>
          )
        }
        )}
      </Slider>
      </div>
      );
    }
  }

export default CarouselPage;