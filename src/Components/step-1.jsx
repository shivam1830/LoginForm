import { Grid, Paper, Typography, Avatar, Button, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
// import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import MultiStep from './Multi';
import Stepper from './Stepper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

function getSteps() {
    return ['', ''];
}




export const StepOne = (props) => {


    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [errorFieldName, setErrorFieldName] = React.useState(false);
    const [errorFieldEmail, setErrorFieldEmail] = React.useState(false);
    const [errorFieldPhone, setErrorFieldPhone] = React.useState(false);
    const [errorFieldPassword, setErrorFieldPassword] = React.useState(false);
    const [errorFieldConfirmPassword, setErrorFieldConfirmPassword] = React.useState(false);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };



    const paperStyle = { padding: '30px 20px ', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'green' }
    const marginTop = { marginTop: 5 }
    const [formObj, setFormObj] = React.useState({
        formData: {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            phone: '',
            checkedA: false,
            gender: '',

        },
        submitted: false,
        filterOptions: [],
    });
    const { formData } = formObj;

    useEffect(() => {

        // console.log(props.sendData(btn))
        const data = JSON.parse(localStorage.getItem('Data'))
        if (data !== null) {
            setFormObj({ formData: data })
        }

        // setFormObj({formData : data})
        // setFormObj({formData : data})
        // const { formData } = formObj;

        // setFormObj({ formData: formData });

        // localStorage.setItem('Data',JSON.stringify(formData))

    }, []);


    // useEffect(() => {

    // localStorage.setItem('Data', JSON.stringify(formData))
    //         const step1 = JSON.parse(localStorage.getItem('Data'))
    //         if(step1 )
    //         {
    //            localStorage.setItem('Data', JSON.stringify(formData)) 
    //         }
    //         else{

    //         }

    // })

    const [notification, setNotification] = React.useState(false);

    const [success, setSuccess] = React.useState(false);

    const handleSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setNotification(false);
        setSuccess(false)
    }

    const onCheckChange = (e) => {
        // const { formData } = formObj;
        formData[e.target.name] = e.target.checked;
        setFormObj({ formData: formData });
        localStorage.setItem('Data', JSON.stringify(formData))
    }



    // const [btn, setBtn] = React.useState(true);

    const step2 = {}

    const handleChange = (event) => {
        // console.log("event", event.target.value);
        // const { formData } = formObj;
        var btn = true;
        formData[event.target.name] = event.target.value;
        setFormObj({ formData: formData });
        // console.log(formData)

        localStorage.setItem('Data', JSON.stringify(formData))

        // setFormObj({ formData: formData });
        // const data = JSON.parse(localStorage.getItem('Data'))
        // localStorage.setItem('Button',JSON.stringify(btn))

        if (formData.name !== '' && formData.email !== '' && formData.password !== '' && formData.confirmpassword !== '' && formData.phone.length === 10 && formData.phone !== '' && formData.password === formData.confirmpassword) {

            btn = false

            // props.sendData(btn)
            // console.log(btn,1)
        }
        else {
            btn = true
            // props.sendData(btn)
            // console.log(btn,2)
        }

        props.sendData(btn)

        // if(formData.phone.length === 10 && formData.phone !== '' )
        // {
        //     btn = false
        // }
        // else
        // {
        //     btn = true
        // }


        // console.log(btn,3)



        // const step1 = JSON.parse(localStorage.getItem('Data'))


        // if(formData.name === '' && formData.email === '' && formData.phone === '' && formData.password === '' && formData.confirmpassword === '')
        // {
        //     setErrorField(true)
        // }
        // else
        // {
        //     setErrorField(false)
        // }
        // if(formData.name === '')
        // {
        //     setErrorField(true)
        // }
        // else
        // {
        //     setErrorField(false)
        // }
        // if (formData.name !== '' && formData.email !== '' && formData.phone !== '' && formData.password !== '' && formData.confirmpassword !== '') {
        //     setErrorField(false)

        // }
        // else {
        //     setErrorField(true)
        // }
        // if(formData.name !== '')
        // {
        //     setErrorFieldName(false)
        // }
        // else
        // {
        //     setErrorFieldName(true)
        // }
        //  if(formData.email !== '')
        // {
        //     setErrorFieldEmail(false)
        // }
        // else
        // {
        //     setErrorFieldEmail(true)
        // }
        //  if(formData.phone !== '')
        // {
        //     setErrorFieldPhone(false)
        // }
        // else
        // {
        //     setErrorFieldPhone(true)
        // } if(formData.password !== '')
        // {
        //     setErrorFieldPassword(false)
        // }
        // else
        // {
        //     setErrorFieldPassword(true)
        // }
        //  if(formData.confirmpassword !== '')
        // {
        //     setErrorFieldConfirmPassword(false)
        // }
        // else
        // {
        //     setErrorFieldConfirmPassword(true)
        // }

        //  localStorage.setItem('Data', JSON.stringify(formData))



        //   const step1 = JSON.parse(localStorage.getItem('Data'))


        ValidatorForm.addValidationRule('isRequiredName', () => {

            if ((formData.name.length < 1)) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('isRequiredEmail', () => {

            if ((formData.email.length < 1)) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('isRequiredPhone', () => {

            if ((formData.phone.length < 1)) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('isRequiredPassword', () => {

            if ((formData.password.length < 1)) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('isRequiredConfirmPassword', () => {

            if ((formData.confirmpassword.length < 1)) {

                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {

            if (value !== formData.password) {
                return false;
            }
            return true;
        });


    }




    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const history = useHistory();

    const handleSubmit = () => {


        // debugger;
        const newFormObj = { ...formObj, submitted: true };
        setFormObj(newFormObj);
        // , () => {
        //     setTimeout(() => {
        //         this.setFormObj({ submitted: false });
        //         console.log(formData, formObj);
        //     }, 5000);

        // });
        console.log(formObj, newFormObj)

        if ((formData.gender === 'male' || formData.gender === 'female') && (formData.checkedA === true)) {
            setTimeout(() => {
                setOpen(!open)
            }, 1000)

            setTimeout(() => {
                setSuccess(true)
            }, 3000)

            setTimeout(() => {
                history.push("/LoginForm")
            }, 4000)
        }
        else {
            setNotification(true)
        }






        // console.log(newFormObj, open, formData, formObj);
        // debugger;
    }


    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //         '& .MuiTextField-root': {
    //             margin: theme.spacing(1),
    //             width: 200,
    //         },
    //     },
    // }));



    // const handleError = (e) => {
    //     console.log(formObj.formData.name, e);
    //     return false;
    // }


    // const { formData } = formObj;

    const token = localStorage.getItem("token");

    var loggedIn = true;

    if (token == null) {
        loggedIn = false
    }


    if (loggedIn !== false) {
        return <Redirect to="/HomePage" />
    }



    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return;
            case 1:
                return;
            case 2:
                return '';
            default:
                return '';
        }
    }

    const step1 = JSON.parse(localStorage.getItem('Data'))

    // debugger;
    return (
        // <Grid align="center">
        //     <Paper >
        <MDBContainer>
            <MDBRow>
                <MDBCol className="FormWrapper registerStep1">
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle} >Register</h2>
                        <Typography variant='caption' gutterBottom> Please fill this Form! </Typography>
                        <br />
                        <div className={classes.root}>
                            {/* <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper> */}
                        </div>

                    </Grid>

                    <br />
                    <ValidatorForm
                        onSubmit={handleSubmit}
                        noValidate={true}
                    >

                        <TextValidator fullWidth name="name" type="text"
                            // error={errorFieldName}
                            id="name"
                            label="Name"
                            placeholder="Enter Name"
                            onChange={handleChange}
                            value={step1 ? step1.name : formData.name}
                            validators={['required', 'isRequiredName']}
                            errorMessages={['Required', 'Required']}
                            // defaultValue=""
                            helperText="Enter Name"
                            variant="outlined"
                        // inputProps={{
                        //     invaliderrormessage: "Please enter organization website.",
                        //     validatemessage: "Please enter organization website.", maxlength: "100", minlength: "0", mandatory: '0', InputType: "orgWebsite",
                        //     'aria-label': "Please enter organization website."
                        // }}
                        // inputProps={{
                        //     // minLength: 2
                        // }}
                        />

                        <TextValidator fullWidth name="email" type="text"
                            // error={errorFieldEmail}
                            id="email"
                            label="Email"
                            placeholder="Enter Email"
                            onChange={handleChange}
                            value={step1 ? step1.email : formData.email}
                            validators={['required', 'isRequiredEmail', 'isEmail']}
                            errorMessages={['Required', 'Required', 'Enter Valid Email']}
                            helperText="Enter Email"
                            variant="outlined"

                        />

                        <br />
                        <div align='left'>
                            <label style={{ color: 'grey' }}>Gender : </label>
                            <input type='radio' name='gender' value='Male' onChange={handleChange} checked={formData.gender === 'Male'} />
                            <label> Male </label>

                            <input type='radio' name='gender' value='Female' onChange={handleChange} checked={formData.gender === 'Female'} />
                            <label> Female </label>
                        </div>
                        <br />

                        {/* <FormControl value={step1 ? step1.gender : formData.gender} onChange={handleChange}  component="fieldset"  style={marginTop}>
                        <FormLabel   component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender"  checked={formData.gender === step1.gender} name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel  value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl> */}

                        <TextValidator fullWidth name="phone" type="number"
                            // error={errorFieldPhone}
                            id="phone"
                            label="Phone Number"
                            placeholder="Enter Phone Number"
                            onChange={handleChange}
                            value={step1 ? step1.phone : formData.phone}
                            validators={['required', 'isRequiredPhone', 'matchRegexp:^[0-9]{10}$']}
                            errorMessages={['Required', 'Required', 'Enter 10 digit Phone number']}
                            helperText="Enter Phone Number"
                            variant="outlined"

                        />

                        <TextValidator fullWidth name="password" type="password"
                            // error={errorFieldPassword}
                            id="password"
                            label="Password"
                            placeholder="Enter Password"
                            onChange={handleChange}
                            value={step1 ? step1.password : formData.password}
                            validators={['required', 'isRequiredPassword']}
                            errorMessages={['Required', 'Required']}
                            helperText="Enter Password"
                            variant="outlined"

                        />

                        <TextValidator fullWidth name="confirmpassword" type="password"
                            // error={errorFieldConfirmPassword}
                            id="confirmpassword"
                            label="Confirm Password"
                            placeholder="Enter Confirm Password"
                            onChange={handleChange}
                            value={step1 ? step1.confirmpassword : formData.confirmpassword}
                            validators={['required', 'isRequiredConfirmPassword', 'isPasswordMatch',]}
                            errorMessages={['Required', 'Required', 'Password Mismatch',]}
                            helperText="Enter Confirm Password"
                            variant="outlined"

                        />



                        <FormControlLabel
                            name="remember"
                            onChange={onCheckChange}
                            checked={formData.checkedA}
                            control={<Checkbox name="checkedA"
                            />}

                            label="I accept the terms and conditions" />

                        {/* <Button type="Submit" variant="contained" color='primary'
                        onChange={handleChange}
                        disabled={btn}>Sign Up
                    </Button> */}

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                            }}
                            open={notification}
                            autoHideDuration={1000}
                            onClose={handleSnackbar}
                            message='Error'
                            action={
                                <React.Fragment>
                                    <Button onClick={handleSnackbar}>Close</Button>
                                </React.Fragment>
                            } />
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                            }}
                            open={success}
                            autoHideDuration={3000}
                            onClose={handleSnackbar}
                            message='Success'
                            action={
                                <React.Fragment>
                                    <Button onClick={handleSnackbar}>Close</Button>
                                </React.Fragment>
                            } />

                        <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </ValidatorForm>


                    <br />

                    {/* <Stepper data={btn} /> */}


                    <div className={classes.root}>
                        {/* <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper> */}

                    </div>

                    <br />

                    {/* <Link to="/LoginForm" ><span>Already Have a Account?...</span> Log In</Link> */}





                </MDBCol>
            </MDBRow>
        </MDBContainer>
        // </Paper>
        // </Grid>


    );

}

export default (StepOne);




