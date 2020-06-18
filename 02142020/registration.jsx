import React from "react";
import './registration.css';
import bgHrate from '../assets/Hrate.jpeg'

import {Button, Form, FormGroup, Label, Input, option, DropdownButton}
      from 'reactstrap';


import { Link } from "react-router-dom";

const RegistrationPage = () =>{
    return(
        <form className="reg-form">

        <div className = "reg-head">
          
        <h1 className="header-registration-l">Create a M.APP Account.</h1>
        <h5 className="header-registration-r">Already have an account? <Link to ="/login">Login </Link>here.</h5>
        </div>
         <div  className="reg-components">
         <Label>Firstname* </Label><Input type="text" placeholder="firstname"></Input><hr/>
         <Label>Middlename* </Label><Input type="text" placeholder="middlename"></Input><hr/>
         <Label>Lastname* </Label><Input type="text" placeholder="lastname"></Input><hr/>
         <Label>Firstname* </Label><Input type="text" placeholder="firstname"></Input><hr/>
         <Label>Gender* </Label><br/>
         <label className="text-size"><input type="radio" value="option1"/>Male</label> <label className="text-size"><input type="radio" value="option2"/>Female</label><hr/>
        <label>Date of Birth:</label><br/>
        <select>
  <option selected value="month">Month</option>          
  <option value="january">January</option>
  <option value="february">February</option>
  <option value="march">March</option>
  <option value="april">April</option>
  <option value="may">May</option>
  <option value="june">June</option>
  <option value="july">July</option>
  <option value="august">August</option>
  <option value="september">September</option>
  <option value="october">October</option>
  <option value="november">November</option>
  <option value="decemcer">December</option>
</select> <select>
  <option selected value="day">Day</option>          
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  <option value="13">13</option>
  <option value="14">14</option>
  <option value="15">15</option>
  <option value="16">16</option>
  <option value="17">17</option>
  <option value="18">18</option>
  <option value="19">19</option>
  <option value="20">20</option>
  <option value="21">21</option>
  <option value="22">22</option>
  <option value="23">23</option>
  <option value="24">24</option>
  <option value="25">25</option>
  <option value="26">26</option>
  <option value="27">27</option>
  <option value="28">28</option>
  <option value="29">29</option>
  <option value="30">30</option>
  <option value="31">31</option>
</select> <select>
<option selected value="year">Year</option>          
  <option value="1990">1990</option>
  <option value="1991">1991</option>
  <option value="1992">1992</option>
  <option value="1993">1993</option>
  <option value="1994">1994</option>
  <option value="1995">1995</option>
  <option value="1996">1996</option>
  <option value="1997">1997</option>
  <option value="1998">1998</option>
  <option value="1999">1999</option>
  <option value="2000">2000</option>
  <option value="2001">2001</option>
  <option value="2002">2002</option>
  <option value="2003">2003</option>
  <option value="2004">2004</option>
  <option value="2005">2005</option>
  <option value="2006">2006</option>
  <option value="2007">2007</option>
  <option value="2008">2008</option>
  <option value="2009">2019</option>
  <option value="2010">2010</option>
  <option value="2011">2011</option>
  <option value="2012">2012</option>
  <option value="2013">2013</option>
  <option value="2014">2014</option>
  <option value="2015">2015</option>
  <option value="2016">2016</option>
  <option value="2017">2016</option>
  <option value="2018">2018</option>
  <option value="2019">2019</option>
  <option value="2020">2020</option>

</select><hr/>
        <Label>Email* </Label><br/>
        <Input type ="email" placeholder="Email"/><hr/>
        <Label>Password* </Label><br/>
        <Input type ="password" placeholder="Password"/><hr/>
        <Label>Confirm Password* </Label><br/>
        <Input type ="password" placeholder="Password"/><hr/>
        <Button className= "btn-lg btn-gray btn-block">Sign Up</Button>
        

        </div>
        <Link to ="/login"><button className= "btn-lg btn-dark">Go Back</button></Link>
        </form>
        
    );
};

export default RegistrationPage;