import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {  Snackbar } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import StepOne from './step-1';

import StepThree from './step-3'

import MuiAlert from '@material-ui/lab/Alert';
import { StepFour } from './step-4';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}







const getNavStyles = (indx, length) => {
    let styles = []
    for (let i = 0; i < length; i++) {
        if (i < indx) {
            styles.push('done')
        } else if (i === indx) {
            styles.push('doing')
        } else {
            styles.push('todo')
        }
    }
    return styles
}


function getSteps() {
    return ['',''];
}

const getButtonsState = (indx, length) => {
    if (indx > 0 && indx < length - 1) {
        return {
            showSecondstep: true,
            showPreviousBtn: true,
            showSubmitBtn: true,
             //showNextBtn: true

        }
    } else if (indx === 0) {
        return {
            showPreviousBtn: false,
             showNextBtn: true,
            showCancelBtn: true,
            showFirststep: true,
            
        }
    } else {
        return {
            showHomeBtn: true,
            // showSubmitBtn: true,
            showThirdstep: true
        }
    }
    // else{
    //     return {
    //         showPreviousBtn: false,
    //         showSubmitBtn: false,
    //         showThirdstep: false
    //     }
       
    // }
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
    ButtonContained: {
        padding: '6px 35px',
        color: '#ffffff',
        fontSize: '0.875rem',
        display: 'inline-flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 4,
        "&:hover": {
            color: '#ffffff',
            backgroundColor: '#5635b2'
        }
    },
    ButtonOutlined: {
        padding: '8px 35px',
        textTransform: 'uppercase',
        fontSize: '0.875rem',
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: 4,
        color: theme.palette.secondary.main,
        "&:hover": {
            color: '#5635b2',
            backgroundColor: 'transparent'
        }
    }
}));

export default function MultiStep(props) {
    const step1 = JSON.parse(localStorage.getItem("Data"));
    const history = useHistory();
    const [stylesState, setStyles] = useState(
        getNavStyles(0, props.steps.length)
    );
    const messageRef = React.useRef(null);
    const [compState, setComp] = useState(0);
    const [loading, setLoading] = useState(false);
    const [currentCustomerNumber, setCurrentCustomerNumber] = useState('');
    const [buttonsState, setButtons] = useState(
        getButtonsState(0, props.steps.length)
    );
    
    
    const [formObj, setFormObj] = React.useState();
    // const [formData , setFormData] = React.useState(step1)
    const [step2 ,setStep2] = useState({});
    const classes = useStyles();

    const [error, setError] = React.useState("")
    

    useEffect(() => {
    
       
      
    // debugger;
    const data = JSON.parse(localStorage.getItem('Data'))
    // if(data && data.name !== '')
    // {
    //     setBtn(false)
    // }
    // if(formObj == undefined || formObj == null)
    // {
    //     const step1 = JSON.parse(localStorage.getItem("Data"));
    //     setFormObj(step1)
    // }
   return () => {
   
    localStorage.removeItem('Data')


    
}


    },[]);

    // useEffect(() => {
    //     // const step1 = JSON.parse(localStorage.getItem("Data"));
    //     const nextButton = JSON.parse(localStorage.getItem('Button'))

   
       
    //     });

  

    

    function setStepState(indx) {
        setStyles(getNavStyles(indx, props.steps.length));
        setComp(indx < props.steps.length ? indx : compState);
        setButtons(getButtonsState(indx, props.steps.length));
    }
    
    const [nextBtn,setNextBtn] = useState(true)
    // const btn = true;
    
    // debugger;
    const sendData = (nextBtn) => {
      
    //   console.log(nextBtn,"multi")
      setNextBtn(nextBtn)
    }
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    
    const handleHome = () => {
        setTimeout(() => {
                history2.push("/LoginForm")
                localStorage.removeItem('Data')
                
            }, 3000)
    }
    const next = () => {
        // debugger;
         const step1 = JSON.parse(localStorage.getItem('Data'))
        //  setFormObj(data);
        //  localStorage.setItem('Data',JSON.stringify(formObj))
        //  console.log(data)
        // const data = Object.values(step1)
        // setStep2(step1);
        // console.log(step2)
        // console.log(data)
        // const data = JSON.parse(localStorage.getItem('Data'))
        // // setFormObj(data)
        // localStorage.setItem('Data',JSON.stringify('Data'))
        // debugger;
        if(step1)
        {
            if((step1.name === "") || (step1.email === "") || (step1.password === "") || (step1.confirmpassword === "") || (step1.phone === "")     )
            {
               setFillFields(true)
               
            }
    
            if ((step1.name !== "") && (step1.email !== "") && (step1.password !== "") && (step1.confirmpassword !== "") && (step1.phone !== "") && (step1.checkedA === true)  ) {
            
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                setStepState(compState +1);
                setComp(compState+1)
            }
            // if ((step1.name === "" ) && (step1.email === "") && (step1.password === "") && (step1.confirmpassword === "") && (step1.phone === "")) {
        
            //     setFillFields(true)  
            
            // }
            // else if ((step1.name === ""))
            // {
            //     setError("Please Enter Name")
            // } 
            // else if ((step1.email === ""))
            // {
            //     setError("Please Enter Email")
            // }
            //   else if ((step1.phone === ""))
            // {
            //     setError("Please Enter Phone")
            // }
            //  else if ((step1.password === ""))
            // {
            //     setError("Please Enter Password")
            // }
            //  else if ((step1.confirmpassword === ""))
            // {
            //     setError("Please Enter Confirm Password")
            // }
            // else if (step1.checkedA === false)
            // {
            //     setError("Please tick the CheckBox")
            // }
            // else
            // {
            //     setError("")
            // }
            
             
            
        }
        else
        {
            setFillFields(true)
        }
       
       
            
    };

    
// debugger;
    const handleChange = (event) => {
       
        // console.log("event", event.target.value);
        // const { formData } = formObj;
       
        // setStep2(step1)
        // console.log(step2)
        // step1[e.target.name] = e.target.value
       

        // step1[e.target.name] = e.target.value;
        // setStep2({ step1: step1 });
        // formObj[event.target.name] = event.target.value;
        // const data = JSON.parse(localStorage.getItem('Data'))
        // setFormObj(data);
        
        
        // console.log("event", event.target.value);
     
        // if (formObj.name !== '' && formObj.email !== '' && formObj.phone !== '' && formObj.password !== '' && formObj.confirmpassword !== '') {
        //     setBtn(false)
        // }
        // else {
        //     setBtn(true)
        // }

        // ValidatorForm.addValidationRule('isPasswordMatch', (value) => {

        //     if (value !== formData.password) {
        //         return false;
        //     }
        //     return true;
        // });


    }


    const previous = () => {
        // const step1 = JSON.parse(localStorage.getItem('Data'))
        // localStorage.setItem('Data', JSON.stringify(step1))
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setStepState((compState > 0) ? compState - 1 : compState)
    }

    const handleKeyDown = (evt) => evt.which === 13 ? next(props.steps.length) : {}

    const handleOnClick = (evt) => {
        if (evt.currentTarget.value === props.steps.length - 1 && compState === props.steps.length - 1) {
            setStepState(props.steps.length)
        } else {
            setStepState(evt.currentTarget.value)
        }
    }

    const renderSteps = () =>
        props.steps.map((s, i) => (
            <li
                className={'progtrckrs-' + stylesState[i]}
                onClick={handleOnClick}
                key={i}
                value={i}
            >
                <em>{i + 1}</em>
                <span>{props.steps[i].name}</span>
            </li>
        ))

    const getValueOrDefault = (val) => {
        if (!val) {
            return "";
        }

        return val + "; \n";
    };

  const history2 = useHistory();

    const reset = () => {
        localStorage.removeItem('Data')
       history2.push("/LoginForm")
    }

    const [notification, setNotification] = React.useState(false);

    const [success, setSuccess] = React.useState(false);
    const [fillFields, setFillFields] = React.useState(false);

    const handleSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotification(false);
        setSuccess(false)
        setFillFields(false)
    }

    // const handleDisabledButton = (e) => {

    // }

    const handleClick = () => {
        
        const step2 = JSON.parse(localStorage.getItem("Data"));

        if ((step1.gender === 'Male' || step1.gender === 'Female') && (step1.checkedA === true)) {
            
            
            // setTimeout(() => {
            //     history2.push("/LoginForm")
            //     localStorage.removeItem('Data')
                
            // }, 3000)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
                setStepState(compState +1);
                setComp(compState+1)

            setTimeout(() => {
                setSuccess(true)
            }, 1000)

            // setComp()
            

        }
        else {
            
            setNotification(true)
            
        }
    
    }

    
    const paperStyle = { padding: '30px 20px ', width: 300, margin: "20px auto" }
    const nextButton = JSON.parse(localStorage.getItem('Button'))
   
    return (
        // <Grid align="center">
        //     <Paper >
                <MDBContainer align="center">
        <MDBRow>
            <MDBCol className="FormWrapper registerStep1">
                
                <div>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    </div>
                    <div>  
                    {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    </div>
                    <br/>
                    
                    
        <div className='stepheading' onKeyDown={handleKeyDown}>
           
        {compState === 0 && <StepOne sendData={sendData}/>}
        {compState === 1 && <StepThree/>}
        {compState === 2 && <StepFour/>}
        {/* {compState === 0  ?   <StepOne sendData={sendData}/> : <StepThree/>} */}
            {/* {props.steps[compState].component} */}
            
            <div className="paybuttons" style={props.showNavigation ? {} : { display: 'none' }}>

                <Button aria-label="click here to back" color="secondary" className={classes.ButtonOutlined}
                    style={buttonsState.showPreviousBtn ? {} : { display: 'none' }}
                    onClick={previous} >
                    Back
        </Button>

                
                <Button to="/" aria-label="click here to Cancel and go to login page" color="secondary" className={classes.ButtonOutlined}
                    style={buttonsState.showCancelBtn ? {} : { display: 'none' }} onClick={reset}>
                    Cancel
                </Button>
        
                <Button id="nextbutton" aria-label="click here to next" color="secondary" variant="contained" className={classes.ButtonContained}
                    style={buttonsState.showNextBtn ? {} : { display: 'none' }} 
                     disabled={nextBtn} 
                    onClick={next} >
                    Next
                </Button>

            
               <Button aria-label="click here to submit" className={classes.ButtonContained} onClick={handleClick}
                    style={buttonsState.showSubmitBtn ? {} : { display: 'none' }}
                
                >
                    Submit
        </Button>
        <Button aria-label="click here to submit" className={classes.ButtonContained} onClick={handleHome}
                    style={buttonsState.showHomeBtn ? {} : { display: 'none' }}
                
                >
                    Home
        </Button>
               

        
        <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    open={notification}
                    autoHideDuration={3000}
                    onClose={handleSnackbar}
                    message='Error'
                    action={
                        <React.Fragment>
                            <Button onClick={handleSnackbar}>Close</Button>
                        </React.Fragment>
                    } >
                        <Alert onClose={handleSnackbar} severity="error">
                        There is some Error in the form
        </Alert>
                        </Snackbar>
           

                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    open={success}
                    autoHideDuration={3000}
                    onClose={handleSnackbar}
                    // message='Success'
                    action={
                        <React.Fragment>
                            <Button onClick={handleSnackbar}>Close</Button>
                        </React.Fragment>
                    } >
                        <Alert onClose={handleSnackbar} severity="success">
                        Successfully Registered
        </Alert>
                        </Snackbar>

                    <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                    open={fillFields}
                    autoHideDuration={3000}
                    onClose={handleSnackbar}
                    // message='Please Fill All Mandatory Fields'
                    action={
                        <React.Fragment>
                            <Button onClick={handleSnackbar}>Close</Button>
                        </React.Fragment>
                    } >
                        <Alert onClose={handleSnackbar} severity="warning">
                        Please Fill All Mandatory Fields
        </Alert>
                        </Snackbar>



            </div>
            <br/>
            
            <div>
            <Link to="/LoginForm" ><span>Already Have a Account?...</span> Log In</Link>
            </div>
            


            
        </div>
                     

</MDBCol>
                                        </MDBRow>
                                    </MDBContainer>
        // {/* </Paper>
        // </Grid> */}
    );
}

MultiStep.defaultProps = {
    showNavigation: true
}