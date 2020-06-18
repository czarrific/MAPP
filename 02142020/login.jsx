import React, { Component} from "react";
import "./login.css";
import mappImg from '../mapp.jpg'
import DoctorImg from '../assets/mapp_doctors.jpg'
import { CarouselPage } from '../02142020/carousel';
import { Link } from "react-router-dom";
import {Button, form, FormGroup, Label, Input}
      from 'reactstrap';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
import {Col,Row, Image, Jumbotron as Jumbo} from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  
  {
    name: 'Photo 1',
    url: "https://i.imgur.com/hwWEpBd.png"
  },
  {
    name: 'Photo 2',
    url: "https://i.imgur.com/zTXwduF.png"
  },
  {
    name: 'Photo 3',
    url: "https://i.imgur.com/yhA30bS.png"
  }
]

class LoginPage extends Component {
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
  
  return (
    

    
    <form className="mapp-login-form">
    <br/><br/>
    <Row>
    <div className="ads"> 
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
      

      <br/><br/><br/><br/>
      <div className="login_panel"> 
     <h1 className="head2">
     
     <span className="font-weight-bold">M.APP</span>
     </h1>
     <h2 className="head2">Medical APPointment</h2>
     <br></br>

     <FormGroup>
     <Label>Email</Label>
     <Input type ="email" placeholder="Email"/>
     </FormGroup>
     <FormGroup>
     <Label>Password</Label>
     <Input type ="password" placeholder="Password"/>
     </FormGroup>
     <FormGroup>
     <Link to ="/Home">
     <Button className= "btn-lg btn-dark btn-block">
       Log in
       </Button></Link>
     <div className = "text-center pt-3">
       or continue with your social media account
       </div>
       <GoogleLoginButton className="mt-3 mb-3"/>
       <FacebookLoginButton className="mt-3 mb-3"/>
       <div className="text-center">
      <Link to ="/registration">Sign up</Link>
      <span className="p-2"> | </span>
      <a href="/forget-password">Forget Password?</a>
     </div>
     </FormGroup>
     </div></Row>
     <br/><br/><br/><br/><br/>
     
    </form>


    

  );
      }
};

export default LoginPage;