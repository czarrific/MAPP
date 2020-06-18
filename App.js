import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";




//import MainPage from "./pages/index";

import LoginPage from "./02142020/login"
import NotFoundPage from "./pages/error404"
import RegistrationPage from "./02142020/registration"
import CarouselPage from "./02142020/carousel"


import HomePage from "./02242020/homepage"
import MyProfilePage from "./02242020/contacts"
import AboutPage from "./02242020/about"
import OurDoctors from "./02242020/ourdoctors"
import BookMappPage from "./02242020/bookamapp"
import ViewBookingPage from "./02242020/veiwbookings"

import DrEdwardEnejosaPage from "./profiles/dredwardenejosa"
import DrCzarinaCamuaPage from "./profiles/drczarinacamua"
import DrMartinPachecoPage from "./profiles/drmartinpacheco"
import DrIrishFranPage from "./profiles/dririshfran"
import DrKimberlyDunoPage from "./profiles/drkimberlyduno"
import DrDebbielynGatchon from "./profiles/drdebsgatchon"

import MappDrEdwardPage from "./appointments/mappdredward"
//import ModalSample from "./appointments/ModalPage"

import { Layout } from "./components/layout"
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';


          //<Route exact path="/404" component={NotFoundPage} />
          //<Redirect to="/404/"/>


class App extends Component{
  render(){
    return(

      <React.Fragment>

      <Router>
        <Switch>
        <Route exact path="/Login" component={LoginPage} />

        <Route exact path="/Carousel" component={CarouselPage} />

        <Route exact path="/404" component={NotFoundPage} />
        <Route exact path="/Home" component={HomePage} />
        <Route exact path="/About" component={AboutPage} />
        <Route exact path="/MyProfile" component={MyProfilePage} />
        <Route exact path="/OurDoctors" component={OurDoctors} />
        <Route exact path="/BookAppointment" component={BookMappPage} />
        <Route exact path="/ViewBookings" component={ViewBookingPage} />

        <Route exact path="/DrEdwardEnejosa" component={DrEdwardEnejosaPage} />
        <Route exact path="/DrCzarinaCamua" component={DrCzarinaCamuaPage} />
        <Route exact path="/DrMartinPacheco" component={DrMartinPachecoPage} />
        <Route exact path="/DrIrishJoyceFran" component={DrIrishFranPage} />
        <Route exact path="/DrKimberlyDuno" component={DrKimberlyDunoPage} />
        <Route exact path="/DrDebbie-lynGatchon" component={DrDebbielynGatchon} />

        <Route exact path="/MappDrEdward" component={MappDrEdwardPage} />
       

        <Route exact path="/Registration" component={RegistrationPage} />
        <Redirect to="/404"/>
        </Switch>
        </Router>
      
        </React.Fragment>
       
    
    );
  }
}

export default App;
