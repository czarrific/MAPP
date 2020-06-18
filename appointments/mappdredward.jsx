import React, { Component} from "react";

import {Inject,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import "./mappdredward.css";
import {useState} from 'react';
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

import {Button, Form, FormGroup, Label, Input}
      from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

    

const MappDrEdwardPage = () => {
      const [startDate, setStartDate] = useState(new Date());

      const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState();

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

      return (
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        
      );
    };

export default MappDrEdwardPage;