import React from 'react';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import HorizontalLabelPositionBelowStepper from './Stepper';
// import { Grid,  Avatar, Button, TextField } from '@material-ui/core';
// import { useState } from 'react';
// import StepOne from './step-1'
import {Grid} from '@material-ui/core'


export default function Register() {
  // const [btn,setBtn] = useState(true)
  // // debugger;
  // const sendData = (btn) => {
  //   console.log(btn)
  //   setBtn(btn)
  // }
  const paperStyle = { padding: '30px 20px ', width: 300, margin: "20px auto" }
  return (
    <Grid>
              <Paper elevation={10} style={paperStyle} className="ShortPaper">
                <div className="billingpayarea regisFooterBtn" role="region" aria-label="Registration">
                  <HorizontalLabelPositionBelowStepper />
                </div>
              </Paper>
          </Grid>
       
  );
}